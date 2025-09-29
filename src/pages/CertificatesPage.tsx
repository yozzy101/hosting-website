import React from 'react';
import Navigation from '../components/Navigation';
import TerminalFooter from '../components/CertificatesFooter'; // 1. Import
import { Calendar } from 'lucide-react';

export default function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: 'Complete Guide to Power BI for Data Analysts',
      issuer: 'Microsoft Press / LinkedIn',
      year: 'Exp. 2025',
      description: 'A comprehensive certification covering all essential aspects of Power BI for professional data analysis and visualization.',
      keywords: ['Power BI', 'Data Analysis', 'Microsoft', 'Data Visualization'],
      link: '#'
    },
    {
      id: 2,
      title: 'Microsoft Security Essentials',
      issuer: 'Microsoft / LinkedIn',
      year: 'Exp. 2025',
      description: 'A professional certificate focusing on the fundamental principles of security, compliance, and identity in Microsoft environments.',
      keywords: ['Cybersecurity', 'Microsoft Security', 'Compliance', 'Identity Management'],
      link: '#'
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold pixel-text text-cyan-300 mb-6 pulse-glow">
              &gt; CERTIFICATES.LOG &lt;
            </h1>
            <p className="text-xl pixel-text text-emerald-300 max-w-2xl mx-auto">
              Professional certificates and credentials in data and security.
            </p>
          </div>

          <div className="space-y-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="neon-border bg-gray-900 p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold pixel-text text-cyan-300 mb-2">{cert.title}</h3>
                <div className="text-purple-300 pixel-text mb-2 flex items-center">
                  <span className="mr-2">Issued by:</span> {cert.issuer}
                </div>
                <div className="text-emerald-300 pixel-text mb-4 flex items-center">
                  <Calendar size={16} className="mr-2" /> {cert.year}
                </div>
                <p className="text-gray-100 pixel-text mb-4 text-sm leading-relaxed">{cert.description}</p>
                <div className="mb-6">
                  <div className="text-sm pixel-text text-emerald-300 mb-2">&gt; KEYWORDS:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert.keywords.map((keyword, keywordIndex) => (
                      <span key={keywordIndex} className="px-2 py-1 text-xs pixel-text bg-black border border-emerald-300 text-emerald-300">{keyword}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Add the TerminalFooter component here */}
          <CertificatesFooter />
        </div>
      </div>
    </div>
  );
}
