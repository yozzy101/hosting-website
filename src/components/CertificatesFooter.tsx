import React from 'react';

export default function CertificatesFooter() {
  return (
    <div className="mt-16 neon-border bg-gray-900 p-6 max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 pixel-text text-white">credentials.log</div>
      </div>
      
      {/* Terminal Content */}
      <div className="font-mono text-emerald-300 space-y-2 text-sm md:text-base">
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">ls -l certificates/</span>
        </div>
        <div className="text-cyan-300">2 credentials verified</div>

        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">cat status.txt</span>
        </div>
        <div className="text-yellow-300">Actively pursuing new skills and certifications.</div>
        
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="text-white">echo "Continuously learning..."</span>
        </div>
        <div className="text-purple-300">Continuously learning...</div>
        
        <div>
          <span className="text-emerald-300">&gt; </span>
          <span className="animate-pulse">█</span>
        </div>
      </div>
    </div>
  );
}
