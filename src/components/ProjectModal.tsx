import React, { useEffect } from 'react';
import { X, Cpu, Layers, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Project } from '../types/portfolio';
import { soundManager } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c101d] border border-white/10 shadow-2xl p-6 sm:p-8 text-slate-200 space-y-6">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="space-y-6">
          {/* Subtitle / Objective */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            {project.subtitle}
          </p>

          {/* Problem Statement */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/5 border border-amber-500/15 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 font-semibold">
              <AlertCircle className="w-4 h-4" /> The Engineering Problem
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="p-4 sm:p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/15 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-semibold">
              <Layers className="w-4 h-4" /> Technical Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Architecture Highlights */}
          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Architectural Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architectureHighlights.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                  >
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Capabilities / Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-semibold">
              <Cpu className="w-4 h-4" /> Key Capabilities
            </h3>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Technology Stack Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-cyan-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          {project.liveUrl && (
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>Live Interactive Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
