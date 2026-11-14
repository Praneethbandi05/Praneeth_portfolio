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
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = PROJECTS[0]; // Rythu Nestham
  const otherProjects = PROJECTS.slice(1); // Trust Chit, Cardiovascular AI

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>Project Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Key Engineering Projects
          </h1>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Smart mobile applications, cloud-deployed management systems, and deep learning medical vision.
        </p>
      </div>

      {/* Featured Project Showcase: Rythu Nestham */}
      <div className="mb-12 rounded-3xl glass-panel relative overflow-hidden border border-cyan-500/30 group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500 text-slate-950">
                Featured Resume Project
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/40">
                Flutter Mobile App
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight">
              {featuredProject.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {featuredProject.subtitle}
            </p>

            {/* Solution Overview */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-cyan-400 font-mono block text-xs mb-1">
                PRACTICAL SOLUTION:
              </strong>
              {featuredProject.solution}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-1">
              {featuredProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/5"
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
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-colors border border-white/10 flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Visual / Highlights (5 cols) */}
          <div className="lg:col-span-5 bg-[#090d16] p-6 rounded-2xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" /> Key Features
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-3">
              {featuredProject.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 p-3 rounded-xl border border-cyan-800/30">
              {featuredProject.metrics}
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Remaining 2 Projects (Trust Chit & Cardiovascular AI) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherProjects.map((project) => {
          const isCardio = project.id === 'fundus-cardio-risk';
          return (
            <div
              key={project.id}
              onMouseEnter={() => soundManager.playHover()}
              className="p-7 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden border border-white/10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/30">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-xs font-mono text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-800/30">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {project.solution}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Key Capabilities:
                  </div>
                  {project.keyFeatures.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        soundManager.playClick();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Detailed Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    {isCardio && onNavigate && (
                      <button
                        onClick={() => {
                          soundManager.playClick();
                          onNavigate('blog');
                        }}
                        className="text-xs font-mono text-purple-300 hover:text-purple-200 bg-purple-950/60 px-2.5 py-1 rounded-lg border border-purple-800/40 flex items-center gap-1 transition-colors"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>Read Research Blog</span>
                      </button>
                    )}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white p-1 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
