import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="text-center z-10 max-w-md w-full px-8">
        <h2 className="text-4xl font-bold pixel-text text-cyan-300 mb-12 glitch">
          LOADING...
        </h2>
        
        <div className="loading-bar mb-8">
          <div className="loading-progress"></div>
        </div>
        
        <div className="space-y-3 text-emerald-300 pixel-text">
          <div className="flex justify-between">
            <span>&gt; Accessing mainframe...</span>
            <span>[OK]</span>
          </div>
          <div className="flex justify-between">
            <span>&gt; Loading portfolio data...</span>
            <span>[OK]</span>
          </div>
          <div className="flex justify-between">
            <span>&gt; Initializing graphics...</span>
            <span>[OK]</span>
          </div>
          <div className="flex justify-between">
            <span>&gt; Establishing connection...</span>
            <span className="text-yellow-300">[WAIT]</span>
          </div>
        </div>

        <div className="mt-12 text-cyan-300 pixel-text">
          <div className="inline-block animate-pulse">█</div>
          <span className="ml-2">ACCESSING NEURAL NETWORK...</span>
        </div>
      </div>
    </div>
  );
}
