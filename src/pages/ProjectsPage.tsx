import React from 'react';
import Navigation from '../components/Navigation';
import TerminalFooter from '../components/TerminalFooter'; // 1. Import
import { FileCode, FileText, ImageIcon } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Analysis of Malicious SSH Login Attempts',
      description: 'Conducted a data analysis project using R and RStudio to investigate time-based and geographical patterns of malicious SSH login attempts. Utilized a public Kaggle dataset of honeypot server logs, containing ~14,800 records. The project involved cleaning and transforming JSON data, geolocating IP addresses, and creating visualizations with ggplot2 to identify attack schedules and dominant source countries.',
      tech: ['R', 'RSTUDIO', 'GGPLOT2', 'DPLYR', 'DATA VISUALIZATION'],
      status: 'COMPLETED',
      links: [
        { label: 'View R Code', href: '/ssh-analysis/ssh_logs.R', icon: FileCode },
        { label: 'View PDF Report', href: '/ssh-analysis/Small Scale SSH Server.pdf', icon: FileText },
        { label: 'View Poster', href: '/ssh-analysis/Analyzing_SSH_Attack.png', icon: ImageIcon }
      ]
    },
    {
      id: 2,
      title: 'Company Website & Survey',
      description: 'Developed a customer-facing website and integrated a digital survey to streamline data management and enhance communication for Go Green Tree & Outdoor Services.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'SURVEY DESIGN'],
      status: 'COMPLETED',
      links: []
    },
    {
      id: 3,
      title: 'Power BI Dashboard',
      description: 'A data visualization project utilizing Microsoft Power BI to interpret complex datasets into actionable insights, based on the Microsoft Press curriculum.',
      tech: ['POWER BI', 'DATA VISUALIZATION', 'DAX', 'ETL'],
      status: 'IN PROGRESS',
      links: []
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN PROGRESS': return 'text-yellow-300';
      case 'COMPLETED': return 'text-cyan-300';
      default: return 'text-gray-100';
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="retro-grid absolute inset-0"></div>
      
      <div className="pt-24 pb-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold pixel-text text-cyan-300 mb-6 pulse-glow">
              &gt; PROJECTS DATABASE &lt;
            </h1>
            <p className="text-xl pixel-text text-emerald-300 max-w-2xl mx-auto">
              A collection of academic and professional projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="neon-border bg-gray-900 p-6 flex flex-col fade-in"
              >
                <div className="relative mb-4">
                  <div className={`absolute top-2 right-2 px-2 py-1 text-xs pixel-text ${getStatusColor(project.status)} border border-current z-10`}>
                    {project.status}
                  </div>
                   <div className="aspect-video bg-gray-800 border-2 border-emerald-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-4xl mb-2">💾</div>
                      <div className="pixel-text text-emerald-300">{project.title}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold pixel-text text-cyan-300 mb-2">{project.title}</h3>
                  <p className="text-sm pixel-text text-gray-100 mb-4 h-24 overflow-auto">{project.description}</p>
                  
                  <div className="text-sm pixel-text text-emerald-300 mb-4">&gt; TECH_STACK:</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs pixel-text bg-black border border-emerald-300 text-emerald-300">{tech}</span>
                    ))}
                  </div>
                </div>

                {project.links.length > 0 && (
                  <div className="mt-auto pt-4 border-t border-emerald-500/30 flex flex-wrap gap-4">
                    {project.links.map((link, linkIndex) => (
                       <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-black border-2 border-cyan-300 text-cyan-300 pixel-text hover:bg-cyan-300 hover:text-black transition-colors duration-300"
                      >
                        <link.icon size={16} />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
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
