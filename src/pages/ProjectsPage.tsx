import React from 'react';
import Navigation from '../components/Navigation';
import ProjectsFooter from '../components/ProjectsFooter';
import { FileCode, FileText, ImageIcon, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Analysis of Malicious SSH Login Attempts',
      description: 'Conducted a data analysis project using R and RStudio to investigate time-based and geographical patterns of malicious SSH login attempts from a public Kaggle dataset. The project involved cleaning JSON data, geolocating IPs, and creating visualizations with ggplot2 to identify attack schedules.',
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
      title: 'Advanced Database Features & Performance Tuning',
      description: 'Executed an in-depth analysis of a Goodreads book dataset by leveraging advanced PostgreSQL features. This project involved creating materialized views for frequently accessed data, using window functions to calculate author ratings, and implementing custom data types to structure complex information. Performed query optimization by creating indexes and analyzing execution plans to significantly improve data retrieval speed.',
      tech: ['SQL', 'POSTGRESQL', 'PERFORMANCE TUNING', 'MATERIALIZED VIEWS', 'WINDOW FUNCTIONS'],
      status: 'COMPLETED',
      links: [
        { label: 'View Dataset', href: 'https://www.kaggle.com/datasets/jealousleopard/goodreadsbooks', icon: ExternalLink },
        { label: 'View PDF Report', href: '/advanced-sql-tuning/Assignment3 - YC', icon: FileText }
      ]
    },
    {
      id: 3,
      title: 'SF Public Library Usage Analysis',
      description: 'As a data analyst librarian, I designed and normalized a database to 3NF from a raw dataset of San Francisco Public Library usage. I developed and executed advanced SQL queries using PostgreSQL to answer key business questions, identifying trends in patron activity, checkout patterns across time, and relationships between patron age and library use to inform strategic planning.',
      tech: ['SQL', 'POSTGRESQL', 'DATABASE DESIGN', '3NF NORMALIZATION', 'ERD'],
      status: 'COMPLETED',
      links: [
        { label: 'View Dataset', href: 'https://data.sfgov.org/Culture-and-Recreation/Library-Usage/qzz6-2jup/about_data', icon: ExternalLink },
        { label: 'View PDF Report', href: '/sql-library-analysis/SqlAssignment1 - YC.pdf', icon: FileText }
      ]
    },
    {
      id: 4,
      title: 'Company Website & Survey',
      description: 'Developed a customer-facing website and integrated a digital survey to streamline data management and enhance communication for Go Green Tree & Outdoor Services.',
      tech: ['HTML', 'CSS', 'GOOGLE SITES', 'SURVEY DESIGN'],
      status: 'COMPLETED',
      links: [
        { label: 'View Website', href: 'https://sites.google.com/view/gogreentreeaoutdoorservices/home?authuser=0', icon: ExternalLink }
      ]
    },
    {
      id: 5,
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

                {project.links && project.links.length > 0 && (
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

          <ProjectsFooter />
        </div>
      </div>
    </div>
  );
}
