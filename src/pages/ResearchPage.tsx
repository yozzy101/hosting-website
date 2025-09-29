import React from 'react';
import Navigation from '../components/Navigation';
import TerminalFooter from '../components/TerminalFooter'; // 1. Import
import { FileText } from 'lucide-react';

export default function ResearchPage() {
  const publications = [
    {
      title: 'CI Case Study for EV Cars',
      description: 'A competitive intelligence case study analyzing the US Electric Vehicle market, focusing on the market share and consumer complaints for top brands like Tesla, Hyundai, Ford, and GM during early 2025.',
      status: 'Academic Paper',
      keywords: ['EV Cars', 'Market Analysis', 'Competitive Intelligence', 'Consumer Complaints'],
      pdfLink: '/papers/CI Case Study for EV Cars.pdf'
    },
    {
      title: 'Cyberattack on Microsoft Exchange Server',
      description: 'An analysis of the 2021 cyberattack on Microsoft Exchange Server, detailing the causes, impact, and the ethical dilemmas surrounding corporate responsibility, user accountability, and cybersecurity equity.',
      status: 'Academic Paper',
      keywords: ['Cybersecurity', 'Microsoft Exchange', 'Ethical Hacking', 'Data Breach'],
      pdfLink: '/papers/Cyberattack on Microsoft Echange Server - Causes, Implications, and Ethical Challenges.pdf'
    },
    {
        title: 'Protecting Small Businesses from Ransomware',
        description: 'A cybersecurity plan detailing foundational pillars like risk management, security governance, and incident response to protect small businesses from ransomware and phishing attacks.',
        status: 'Academic Paper',
        keywords: ['Ransomware', 'Phishing', 'Incident Response', 'Security Governance'],
        pdfLink: '/papers/Protecting Small Businesses from Ransomware and Phishing Attacks.pdf'
    },
    {
        title: 'Hypothetical Virtualization and Security Report',
        description: 'A report detailing the setup of a local virtual environment using Docker and Kali Linux, covering security configurations with iptables, user management, and the translation of these concepts to cloud platforms like AWS and Azure.',
        status: 'Academic Paper',
        keywords: ['Virtualization', 'Docker', 'Kali Linux', 'iptables', 'Cloud Security'],
        pdfLink: '/papers/Hypothetical Virtualization and Security Report.pdf'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold pixel-text text-cyan-300 mb-6 pulse-glow">
              &gt; RESEARCH.LOG &lt;
            </h1>
            <p className="text-xl pixel-text text-emerald-300 max-w-2xl mx-auto">
              A log of academic interests, projects, and publications in the field of Informatics.
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="neon-border bg-gray-900 p-6 fade-in">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold pixel-text text-purple-300">
                    {pub.title}
                  </h3>
                  <span className="text-sm pixel-text text-yellow-300 border border-current px-2 py-1">
                    {pub.status}
                  </span>
                </div>
                <p className="text-gray-100 pixel-text mb-4 text-sm leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  {pub.keywords.map((keyword, keywordIndex) => (
                    <span key={keywordIndex} className="px-2 py-1 text-xs pixel-text bg-black border border-emerald-300 text-emerald-300">{keyword}</span>
                  ))}
                  {pub.pdfLink && (
                    <a
                      href={pub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-cyan-300 text-cyan-300 pixel-text hover:bg-cyan-300 hover:text-black transition-colors duration-300 ml-auto"
                    >
                      <FileText size={16} />
                      <span>View PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 2. Add the TerminalFooter component here */}
          <TerminalFooter />
        </div>
      </div>
    </div>
  );
}
