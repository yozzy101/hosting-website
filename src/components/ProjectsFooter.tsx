import React from 'react';

export default function ProjectsFooter() {
  return (
    <div className="mt-16 neon-border bg-gray-900 p-6 max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 pixel-text text-white">projects.sh</div>
      </div>
      
      {/* Terminal Content */}
      <div className="font-mono text-emerald-300 space-y-2 text-sm md:text-base">
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">git log --oneline</span>
        </div>
        <div className="text-cyan-300">a1b2c3d feat: Added R analysis project</div>
        <div className="text-cyan-300">d4e5f6g feat: Created Power BI dashboard</div>
        <div className="text-cyan-300">g7h8i9j feat: Developed company website and survey</div>
        
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">echo "Data-driven solutions in development..."</span>
        </div>
        <div className="text-yellow-300">Data-driven solutions in development...</div>
        
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </div>
  );
}
