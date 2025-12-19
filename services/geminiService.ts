
import { GoogleGenAI, Type } from "@google/genai";
import { GenerationResult } from "../types";

const API_KEY = process.env.API_KEY || "";

export const generateAppCode = async (
  prompt: string,
  currentCode: string | null = null,
  history: string[] = []
): Promise<GenerationResult> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    You are an expert Android & Web Developer. Your task is to generate a professional, GitHub-ready application.
    The output should be a single-file React component using Tailwind CSS, optimized for both mobile-view and web deployment.
    
    CRITICAL RULES:
    1. Output MUST be valid JSX/TSX.
    2. Use Tailwind classes for all styling.
    3. The code should be self-contained.
    4. If 'currentCode' is provided, perform an incremental improvement or feature addition.
    5. Generate a professional README.md content in Markdown format to accompany the project.
    6. Return a JSON object with: code, name, readme, and 3 improvement suggestions.
    
    JSON Schema:
    {
      "code": "string (the react component code)",
      "name": "string (app name)",
      "readme": "string (markdown content for GitHub README)",
      "suggestions": [
        { "id": "uuid", "title": "feature name", "description": "why it's good", "prompt": "prompt to trigger it" }
      ]
    }
  `;

  const userPrompt = currentCode 
    ? `Current App Code:\n${currentCode}\n\nUpdate Request: ${prompt}\n\nImprove the architecture and ensure it is ready for GitHub deployment.`
    : `Create a new mobile-first web application for GitHub deployment based on this idea: ${prompt}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            code: { type: Type.STRING },
            name: { type: Type.STRING },
            readme: { type: Type.STRING },
            suggestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  prompt: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return result as GenerationResult;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};
