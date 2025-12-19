
export interface AppProject {
  id: string;
  name: string;
  description: string;
  code: string;
  readme: string;
  history: AppVersion[];
  suggestions: Suggestion[];
}

export interface AppVersion {
  timestamp: number;
  code: string;
  prompt: string;
}

export interface Suggestion {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

export interface GenerationResult {
  code: string;
  name: string;
  readme: string;
  suggestions: Suggestion[];
}
