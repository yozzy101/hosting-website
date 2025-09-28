import React from 'react';
import Navigation from '../components/Navigation';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'UNIVERSITY INFORMATICS PROJECT',
      description: 'A data-driven project developed for university coursework, focusing on data analysis and interpretation using Python and SQL.',
      tech: ['PYTHON', 'SQL', 'DATA ANALYSIS', 'PANDAS'],
      github: '#',
      demo: null,
      status: 'COMPLETED'
    },
    {
      id: 2,
      title: 'COMPANY WEBSITE & SURVEY',
      description: 'Developed a customer-facing website and integrated a digital survey to streamline data management and enhance communication for Go Green Tree & Outdoor Services.',
      tech: ['HTML', 'CSS', 'JAVASCRIPT', 'SURVEY DESIGN'],
      github: '#',
      demo: null,
      status: 'COMPLETED'
    },
    {
      id: 3,
      title: 'POWER BI DASHBOARD',
      description: 'A data visualization project utilizing Microsoft Power BI to interpret complex datasets into actionable insights, based on the Microsoft Press curriculum.',
      tech: ['POWER BI', 'DATA VISUALIZATION', 'DAX', 'ETL'],
      github: '#',
      demo: null,
      status: 'IN PROGRESS'
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="neon-border bg-gray-900 p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6 overflow-hidden">
                  <div className="aspect-video bg-gray-800 border-2 border-emerald-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💾</div>
                      <div className="pixel-text text-emerald-300">{project.title}</div>
                    </div>
                  </div>
                  <div className={`absolute top-2 right-2 px-2 py-1 text-xs pixel-text ${getStatusColor(project.status)} border border-current`}>
                    {project.status}
                  </div>
                </div>
                <h3 className="text-2xl font-bold pixel-text text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-sm pixel-text text-gray-100 mb-4">{project.description}</p>
                <div className="mb-6">
                  <div className="text-sm pixel-text text-emerald-300 mb-2">&gt; TECH_STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs pixel-text bg-black border border-emerald-300 text-emerald-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
