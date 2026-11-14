import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowUpRight, Sparkles, Filter, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { soundManager } from '../utils/sound';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['All', 'AI & Deep Learning', 'Cloud & Full Stack', 'Mobile & Systems'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const featuredProject = PROJECTS.find((p) => p.id === 'rythu-nestham') || PROJECTS[0];
  const otherProjects = filteredProjects.filter((p) =>
    activeFilter === 'All' ? p.id !== featuredProject.id : true
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>03 // Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Cinematic Projects Showcase
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Production systems, deep learning architectures, and scalable cloud solutions built with measurable impact.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => {
                soundManager.playClick();
                setActiveFilter(filter);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap border ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                  : 'bg-white/[0.02] hover:bg-white/[0.05] text-slate-400 hover:text-white border-white/5'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Featured Project Showcase (Only on 'All' view) */}
      {activeFilter === 'All' && (
        <div className="mb-12 rounded-3xl glass-panel relative overflow-hidden border border-cyan-500/30 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500 text-slate-950">
                  Featured Case Study
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/40">
                  {featuredProject.category}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Project Expo Honoree
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight">
                {featuredProject.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {featuredProject.subtitle}
              </p>

              {/* Solution Overview */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-cyan-400 font-mono block text-xs mb-1">
                  CORE INNOVATION:
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
                  <span>Deep Dive Case Study</span>
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
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Visual / Architecture Highlights (5 cols) */}
            <div className="lg:col-span-5 bg-[#090d16] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" /> Key Metrics &amp; Features
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
      )}

      {/* Grid of Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => soundManager.playHover()}
            className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/30">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="text-[10px] font-mono text-slate-400">
                    {project.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed font-light line-clamp-3">
                {project.solution}
              </p>
            </div>

            {/* Bottom Tech & CTA */}
            <div className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.02] text-slate-500">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setSelectedProject(project);
                  }}
                  className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

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
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
