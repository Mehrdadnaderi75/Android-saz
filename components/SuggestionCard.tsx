
import React from 'react';
import { Suggestion } from '../types';

interface SuggestionCardProps {
  suggestion: Suggestion;
  onApply: (prompt: string) => void;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion, onApply }) => {
  return (
    <div className="p-4 bg-slate-800/40 border border-slate-700 rounded-xl hover:border-indigo-500/50 transition-all cursor-pointer group"
         onClick={() => onApply(suggestion.prompt)}>
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-sm font-semibold text-indigo-300 group-hover:text-indigo-200">{suggestion.title}</h4>
        <span className="bg-indigo-500/10 text-indigo-400 text-[10px] px-2 py-0.5 rounded-full border border-indigo-500/20">Project Suggestion</span>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed">{suggestion.description}</p>
      <div className="mt-3 flex items-center text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors">
        <span>Click to apply this improvement</span>
        <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </div>
    </div>
  );
};

export default SuggestionCard;
