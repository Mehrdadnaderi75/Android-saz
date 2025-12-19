
import React from 'react';

interface MobilePreviewProps {
  code: string;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ code }) => {
  // In a real implementation, we would use a sandbox like 'react-frame-component' 
  // or dynamic evaluation. For this demo, we simulate the rendering of the code 
  // as a styled preview of what the AI generated.
  
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-900 flex flex-col items-center justify-center p-4 text-center">
        {code ? (
          <div className="w-full h-full animate-in fade-in duration-500">
             {/* Dynamic preview simulation */}
             <div className="flex flex-col h-full w-full bg-white rounded-lg p-4 shadow-inner overflow-y-auto text-slate-900">
               <div className="mb-4 pb-2 border-b border-gray-100 flex justify-between items-center">
                 <span className="font-bold text-xs uppercase tracking-widest text-indigo-600">Live Preview</span>
                 <div className="flex space-x-1">
                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 </div>
               </div>
               <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                 <div className="p-3 bg-indigo-50 rounded-full">
                    <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                 </div>
                 <h3 className="text-lg font-bold text-slate-800">Interface Loaded</h3>
                 <p className="text-xs text-slate-500 px-4">The AI has generated the underlying logic. In this workspace, the logic is represented in the code panel.</p>
                 
                 <div className="w-full bg-slate-50 p-3 rounded-lg border border-slate-100 mt-4">
                    <p className="text-[10px] text-left font-mono text-slate-400 mb-2">// UI Structure Detected</p>
                    <div className="space-y-2">
                        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                        <div className="h-4 bg-slate-200 rounded w-full"></div>
                        <div className="h-10 bg-indigo-500 rounded w-full mt-4 flex items-center justify-center text-white font-medium text-xs">
                           Interactive Component Active
                        </div>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        ) : (
          <div className="text-slate-500">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <p className="text-sm">Describe your app below to start building...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobilePreview;
