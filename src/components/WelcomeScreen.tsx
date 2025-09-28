import React from 'react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="scanlines"></div>
      <div className="crt-overlay"></div>
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="text-center z-10 fade-in">
        <h1 className="text-6xl md:text-8xl font-bold pixel-text text-cyan-300 mb-8 glitch pulse-glow">
          PORTFOLIO.EXE
        </h1>
        
        <div className="mb-12">
          <div className="text-2xl text-emerald-300 pixel-text mb-4">
            &gt; INITIALIZING SYSTEM...
          </div>
          <div className="text-lg text-yellow-300 pixel-text mb-2">
            &gt; LOADING NEURAL INTERFACE...
          </div>
          <div className="text-lg text-purple-300 pixel-text">
            &gt; READY TO CONNECT
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-xl text-gray-100 pixel-text mb-8">
            WELCOME TO THE DIGITAL REALM
          </p>
          
          <button
            onClick={onEnter}
            className="retro-button text-2xl"
          >
            &gt; ENTER &lt;
          </button>
          
          <div className="text-sm text-gray-300 pixel-text mt-8">
            Press ENTER to access the mainframe
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2 text-emerald-300">
            <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
            <span className="text-sm pixel-text">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
