import React from 'react';
import Navigation from '../components/Navigation';
import TerminalFooter from '../components/TerminalFooter'; // 1. Import
import { Mail, Linkedin } from 'lucide-react';

export default function AboutPage() {
    const contacts = [
        { label: 'Personal', email: 'cyosgarth@gmail.com', link: 'mailto:cyosgarth@gmail.com' },
        { label: 'School', email: 'ycalderon@my.dom.edu', link: 'mailto:ycalderon@my.dom.edu' },
        { label: 'LinkedIn', email: 'Yosgarth Calderon', link: 'https://www.linkedin.com/in/yosgarth-calderon-038492242/' }
    ];

    const experience = [
        { title: 'ORIENTATION LEADER', company: 'Dominican University', period: 'SUMMER 2023-25', description: 'Led groups of incoming students to foster college readiness, community, and leadership.', achievements: ['Mentored and guided incoming students for successful university transition.', 'Organized and facilitated engaging workshops and social events.'] },
        { title: 'PEER LED TEAM LEARNING TUTOR', company: 'Dominican University', period: 'AUG - DEC 2023', description: 'Acted as an embedded tutor within lectures, leading workshops to increase student understanding.', achievements: ['Increased student comprehension in core subjects through targeted workshops.', 'Improved classroom dynamics by fostering student-faculty communication.'] },
        { title: 'DATA MANAGEMENT', company: 'Go Green Tree & Outdoor Services', period: 'SUMMER 2022', description: 'Managed company data and developed a new website and customer survey for outdoor services.', achievements: ['Streamlined data collection with a new digital survey.', 'Enhanced customer communication channels through a new company website.'] }
    ];

    return (
        <div className="min-h-screen relative">
            <Navigation />
            <div className="retro-grid absolute inset-0"></div>
            <div className="pt-24 pb-12 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold pixel-text text-cyan-300 mb-6 pulse-glow">&gt; ABOUT.EXE &lt;</h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="neon-border bg-gray-900 p-6 fade-in">
                                <h2 className="text-2xl font-bold pixel-text text-cyan-300 mb-4">&gt; PROFILE</h2>
                                <div className="space-y-4 text-gray-100 pixel-text">
                                    <p>Aspiring Informatics professional passionate about consuming and interpreting data into usable information, from library settings to businesses.</p>
                                </div>
                            </div>
                            <div className="neon-border bg-gray-900 p-6 fade-in">
                                <h2 className="text-2xl font-bold pixel-text text-cyan-300 mb-6">&gt; WORK_HISTORY</h2>
                                <div className="space-y-6">
                                    {experience.map((exp, index) => (
                                        <div key={index} className="border-l-2 border-emerald-300 pl-4">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                                <h3 className="text-lg font-bold pixel-text text-purple-300">{exp.title}</h3>
                                                <span className="text-sm pixel-text text-yellow-300">{exp.period}</span>
                                            </div>
                                            <div className="text-cyan-300 pixel-text mb-2">{exp.company}</div>
                                            <p className="text-gray-100 text-sm mb-3">{exp.description}</p>
                                            <div className="space-y-1">
                                                {exp.achievements.map((achievement, achieveIndex) => (
                                                    <div key={achieveIndex} className="text-sm text-emerald-300 pixel-text">&gt; {achievement}</div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="neon-border bg-gray-900 p-6 fade-in">
                                <h2 className="text-xl font-bold pixel-text text-cyan-300 mb-4">&gt; CONTACT</h2>
                                <div className="space-y-4">
                                    {contacts.map(({ label, email, link }, index) => (
                                        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col text-emerald-300 hover:text-cyan-300 transition-colors pixel-text">
                                            <span className="text-xs text-gray-400">{label}</span>
                                            <span className="flex items-center">
                                                {label === 'LinkedIn' ? <Linkedin size={16} className="inline mr-2" /> : <Mail size={16} className="inline mr-2" />}
                                                {email}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="neon-border bg-gray-900 p-6 fade-in">
                                <h2 className="text-xl font-bold pixel-text text-cyan-300 mb-4">&gt; STATS</h2>
                                <div className="space-y-3 text-sm pixel-text">
                                    <div className="flex justify-between">
                                        <span className="text-gray-100">DEGREE:</span>
                                        <span className="text-emerald-300">BS INFORMATICS</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-100">GPA:</span>
                                        <span className="text-emerald-300">3.6/4.0</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-100">GRADUATION:</span>
                                        <span className="text-emerald-300">MAY 2026</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Add the TerminalFooter component here */}
                    <TerminalFooter />
                </div>
            </div>
        </div>
    );
}
