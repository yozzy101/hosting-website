import React from 'react';
import Navigation from '../components/Navigation';

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <Navigation /> <div className="retro-grid absolute inset-0"></div>
      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="mb-8">
              <div className="neon-border bg-gray-900 p-8 mb-8 max-w-4xl mx-auto">
                <div className="text-5xl md:text-6xl pixel-text text-cyan-300 mb-4 pulse-glow">&lt;DEVELOPER/&gt;</div>
                <div className="text-xl md:text-2xl pixel-text text-purple-300">INFORMATICS • DATA • COMPUTER SCIENCE</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold pixel-text text-gray-100 mb-6 glitch">YOSGARTH CALDERON</h1>
            <p className="text-lg md:text-xl pixel-text text-emerald-300 mb-8 max-w-2xl mx-auto">
              &gt; 4th year Informatics student passionate about interpreting data into usable information <br />
              &gt; Transforming complex data into actionable intelligence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
