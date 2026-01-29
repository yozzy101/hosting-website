import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"; 

import WelcomeScreen from './components/WelcomeScreen';
import LoadingScreen from './components/LoadingScreen';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import ResearchPage from './pages/ResearchPage';

export default function App() {
  // FIX: Check session storage immediately to see if user has already entered
  const [hasEntered, setHasEntered] = useState(() => {
    return sessionStorage.getItem('hasEntered') === 'true';
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setHasEntered(true);
      // FIX: Save "true" to storage so it remembers you on refresh
      sessionStorage.setItem('hasEntered', 'true');
    }, 3000);
  };

  // Only show Welcome/Loading if the user has NOT entered yet
  if (!hasEntered) {
    return isLoading ? <LoadingScreen /> : <WelcomeScreen onEnter={handleEnter} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
        <div className="scanlines"></div>
        <div className="crt-overlay"></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/research" element={<ResearchPage />} /> 
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}
