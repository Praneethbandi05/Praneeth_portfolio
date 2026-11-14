import React from 'react';
import { GraduationCap, Award, CheckCircle2, ArrowRight, User } from 'lucide-react';
import { PERSONAL_INFO, ACHIEVEMENTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';

interface AboutProps {
  onNavigate?: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Page Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <User className="w-4 h-4" />
            <span>Profile &amp; Background</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            About {PERSONAL_INFO.name}
          </h1>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Academic foundation, practical engineering mindset, and leadership achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Summary & Objective (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Professional Summary */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              Professional Summary
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light">
              "{PERSONAL_INFO.summary}"
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-mono text-cyan-400 block font-semibold mb-1">
                  Core Approach
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Focusing on hands-on practical implementation, continuous learning, and adapting to modern software and cloud technologies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-mono text-purple-400 block font-semibold mb-1">
                  Cloud &amp; Development
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Experience in AWS cloud services, responsive React interfaces, and DevOps practices with Linux and automation.
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements from Resume */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden space-y-4">
            <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Recognitions &amp; Milestones</span>
            </h3>

            <div className="space-y-3">
              {ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education (WITHOUT percentages) & Fast Navigation (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Breakdown (Percentages Removed) */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Education</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/40">
                Academic Record
              </span>
            </div>

            {/* B.Tech */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
              <h4 className="font-semibold text-white text-sm">
                {PERSONAL_INFO.education.degree}
              </h4>
              <div className="text-xs text-slate-300">
                {PERSONAL_INFO.education.institution}
              </div>
              <div className="text-[11px] font-mono text-slate-400 pt-1">
                {PERSONAL_INFO.education.period} | {PERSONAL_INFO.education.location}
              </div>
            </div>

            {/* Intermediate */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <h4 className="font-semibold text-white text-xs">
                Intermediate
              </h4>
              <div className="text-xs text-slate-400">
                {PERSONAL_INFO.intermediate.institution}
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                {PERSONAL_INFO.intermediate.period}
              </div>
            </div>

            {/* SSC */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <h4 className="font-semibold text-white text-xs">
                Secondary School (SSC)
              </h4>
              <div className="text-xs text-slate-400">
                {PERSONAL_INFO.secondary.institution}
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                {PERSONAL_INFO.secondary.period}
              </div>
            </div>
          </div>

          {/* Quick Action Card */}
          {onNavigate && (
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-blue-950/20 to-transparent border border-cyan-500/30 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="font-display font-bold text-white text-base">
                  Explore Verified Projects
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  View Rythu Nestham, Trust Chit, and Cardiovascular Risk Classification projects.
                </p>
              </div>

              <button
                onClick={() => {
                  soundManager.playClick();
                  onNavigate('projects');
                }}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>Navigate to Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
