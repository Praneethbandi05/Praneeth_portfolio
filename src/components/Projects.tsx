import React, { useState } from 'react';
import { FolderGit2, ArrowUpRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';

interface ProjectsProps {
  onNavigate?: (page: PageId) => void;
  theme?: 'dark' | 'light';
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate, theme = 'light' }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isLight = theme === 'light';

  const featuredProject = PROJECTS[0]; // Rythu Nestham
  const otherProjects = PROJECTS.slice(1); // Trust Chit, Cardiovascular AI

  return (
    <section className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-10rem)] animate-in fade-in duration-300">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b transition-colors ${
        isLight ? 'border-slate-300' : 'border-white/10'
      }`}>
        <div>
          <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
            <FolderGit2 className="w-4 h-4 text-cyan-600" />
            <span>Project Showcase</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            Key Engineering Projects
          </h1>
        </div>
        <p className={`max-w-md text-sm leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
          Smart mobile applications, cloud-deployed management systems, and deep learning medical vision.
        </p>
      </div>

      {/* Featured Project Showcase: Rythu Nestham */}
      <div className={`mb-12 rounded-3xl glass-panel relative overflow-hidden group transition-all ${
        isLight
          ? 'bg-white border-slate-300 shadow-xl'
          : 'border border-cyan-500/30'
      }`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500 text-slate-950">
                Featured Resume Project
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                isLight ? 'text-cyan-900 bg-cyan-100 border border-cyan-300' : 'text-cyan-300 bg-cyan-950/60 border border-cyan-800/40'
              }`}>
                Flutter Mobile App
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tight ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              {featuredProject.title}
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-slate-800 font-normal' : 'text-slate-300 font-light'
            }`}>
              {featuredProject.subtitle}
            </p>

            {/* Solution Overview */}
            <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
              isLight ? 'bg-slate-50 border-slate-300 text-slate-800 font-medium' : 'bg-white/[0.02] border-white/5 text-slate-300'
            }`}>
              <strong className="text-cyan-700 font-mono block text-xs mb-1 font-bold">
                PRACTICAL SOLUTION:
              </strong>
              {featuredProject.solution}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-1">
              {featuredProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${
                    isLight
                      ? 'bg-slate-100 text-slate-900 border-slate-300'
                      : 'bg-white/[0.04] text-slate-300 border-white/5'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setSelectedProject(featuredProject);
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
              >
                <span>Project Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {featuredProject.githubUrl && (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors border flex items-center gap-2 ${
                    isLight
                      ? 'bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm'
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  }`}
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-600" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Visual / Highlights (5 cols) */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isLight ? 'bg-slate-50 border-slate-300 shadow-md' : 'bg-[#0b0e1b]/80 border-white/10'
            }`}>
              <div className="flex items-center gap-2 font-display font-bold text-sm text-cyan-700">
                <Layers className="w-4 h-4" />
                <span>Engineered Capabilities</span>
              </div>
              <ul className="space-y-3">
                {featuredProject.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className={isLight ? 'text-slate-800' : 'text-slate-300'}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Other 2 Verified Projects Grid: Trust Chit & Cardiovascular Risk */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className={`rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden transition-all ${
              isLight
                ? 'bg-white border-slate-300 shadow-lg'
                : 'border border-white/10'
            }`}
          >
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-cyan-900 bg-cyan-100 px-2.5 py-0.5 rounded-full font-bold border border-cyan-200">
                  {project.category}
                </span>
                <span className={`text-[11px] font-mono font-semibold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  {project.metrics || 'Verified Project'}
                </span>
              </div>

              <h3 className={`text-xl sm:text-2xl font-display font-black group-hover:text-cyan-600 transition-colors ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}>
                {project.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                {project.subtitle}
              </p>

              {/* Solution Preview */}
              <div className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                isLight ? 'bg-slate-50 border-slate-300 text-slate-800 font-medium' : 'bg-white/[0.02] border-white/5 text-slate-300'
              }`}>
                <span className="font-mono text-cyan-700 block text-[11px] font-bold mb-0.5">
                  SYSTEM ARCHITECTURE:
                </span>
                {project.solution}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border ${
                      isLight
                        ? 'bg-slate-100 text-slate-900 border-slate-300'
                        : 'bg-white/[0.04] text-slate-300 border-white/5'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className={`px-6 sm:px-8 py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
              isLight ? 'border-slate-300 bg-slate-50/70' : 'border-white/5 bg-white/[0.01]'
            }`}>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setSelectedProject(project);
                }}
                className={`text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isLight ? 'text-cyan-700 hover:text-cyan-900' : 'text-cyan-400 hover:text-cyan-300'
                }`}
              >
                <span>View Full Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {/* Special Research Paper Blog Link for Cardiovascular AI */}
                {project.id === 'cardio-fundus' && onNavigate && (
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      onNavigate('blog');
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-700 border border-purple-500/30 text-xs font-mono font-bold hover:bg-purple-500/20 transition-all"
                    title="Read deep research blog on Fundus AI"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Read Paper Blog</span>
                  </button>
                )}

                {/* Project GitHub Link */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                      isLight
                        ? 'bg-white text-slate-900 hover:text-cyan-700 border-slate-300 hover:bg-slate-100 shadow-sm'
                        : 'bg-white/5 text-slate-300 hover:text-white border-white/10 hover:bg-white/10'
                    }`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-600" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
