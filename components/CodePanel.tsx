
import React from 'react';

interface CodePanelProps {
  code: string;
}

const CodePanel: React.FC<CodePanelProps> = ({ code }) => {
  return (
    <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col overflow-hidden">
      <div className="bg-slate-800/80 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-4 text-xs font-medium text-slate-400 uppercase tracking-widest">Source Code</span>
        </div>
        <button 
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Copy Code
        </button>
      </div>
      <div className="flex-1 p-4 overflow-auto code-font">
        {code ? (
          <pre className="text-sm text-slate-300 whitespace-pre-wrap">
            {code}
          </pre>
        ) : (
          <div className="h-full flex items-center justify-center text-slate-600 italic">
            Waiting for AI to generate code...
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePanel;
