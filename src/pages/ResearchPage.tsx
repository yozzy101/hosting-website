import React from 'react';
import Navigation from '../components/Navigation';

export default function ResearchPage() {
  const researchInterests = [
    'Data Analytics & Visualization',
    'Human-Computer Interaction (HCI)',
    'Cybersecurity & Threat Analysis',
    'Machine Learning Applications',
    'Information Systems & Management',
    'Digital Archives & Library Science'
  ];

  const publications = [
    {
      title: 'Placeholder Research Project Title',
      description: 'A brief description of the research project, its goals, and the methodologies used. This could be a university project, a case study, or a personal investigation into a topic.',
      status: 'In Progress',
      keywords: ['Data Analysis', 'Python', 'Case Study']
    },
    {
      title: 'Another Sample Research Topic',
      description: 'Describe another project here. You can detail the problem you were trying to solve and the outcomes of your work, including any data you analyzed or systems you designed.',
      status: 'Completed',
      keywords: ['Informatics', 'System Design', 'User Research']
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

          {/* Research Interests Section */}
          <div className="mb-16 neon-border bg-gray-900 p-6 fade-in">
            <h2 className="text-2xl font-bold pixel-text text-cyan-300 mb-6">
              &gt; AREAS_OF_INTEREST
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {researchInterests.map((interest, index) => (
                <div key={index} className="border border-emerald-300 p-4 pixel-text text-emerald-300">
                  &gt; {interest}
                </div>
              ))}
            </div>
          </div>

          {/* Publications Section */}
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
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, keywordIndex) => (
                    <span key={keywordIndex} className="px-2 py-1 text-xs pixel-text bg-black border border-emerald-300 text-emerald-300">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
