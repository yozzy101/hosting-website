import React from 'react';

export default function TerminalFooter() {
  return (
    <div className="neon-border bg-gray-900 p-6 max-w-4xl mx-auto my-16">
      {/* Terminal Header */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 pixel-text text-white">terminal.exe</div>
      </div>
      
      {/* Terminal Content */}
      <div className="font-mono text-emerald-300 space-y-2 text-sm md:text-base">
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">whoami</span>
        </div>
        <div className="text-cyan-300">yosgarth_calderon@portfolio:~$ Informatics Student & Data Analyst</div>
        
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">ls skills/</span>
        </div>
        <div className="text-yellow-300">data_&_informatics/ leadership_&_mentoring/ technical_skills/ academic_excellence/</div>
        
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">cat current_status.txt</span>
        </div>
        <div className="text-purple-300">Seeking new data challenges and opportunities!</div>
        
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </div>
  );
}
