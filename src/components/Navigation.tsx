import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'HOME', icon: '🏠' },
    { path: '/projects', label: 'PROJECTS', icon: '💾' },
    { path: '/certificates', label: 'CERTIFICATES', icon: '🏆' },
    { path: '/about', label: 'ABOUT', icon: '👤' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 border-b-2 border-emerald-300">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold pixel-text text-cyan-300 glitch">
            Y.CALDERON
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path} to={path}
                className={`pixel-text font-bold transition-all duration-300 ${ location.pathname === path ? 'text-purple-300 text-glow' : 'text-emerald-300 hover:text-cyan-300' }`}
              >
                <span className="mr-2">{icon}</span> {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
