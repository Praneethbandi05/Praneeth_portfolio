import React from 'react';
import { GraduationCap, Award, CheckCircle2, ArrowRight, User } from 'lucide-react';
import { PERSONAL_INFO, ACHIEVEMENTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';

interface AboutProps {
  onNavigate?: (page: PageId) => void;
  theme?: 'dark' | 'light';
}

export const About: React.FC<AboutProps> = ({ onNavigate, theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Page Title */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b transition-colors ${
        isLight ? 'border-slate-200' : 'border-white/10'
      }`}>
        <div>
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <User className="w-4 h-4" />
            <span>Profile &amp; Background</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight transition-colors ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            About {PERSONAL_INFO.name}
          </h1>
        </div>
        <p className={`max-w-md text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Academic foundation, practical engineering mindset, and leadership achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Summary & Objective (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Professional Summary */}
          <div className={`p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden transition-colors ${
            isLight ? 'bg-white/95 border-slate-200/90 shadow-md' : ''
          }`}>
            <h2 className={`text-xl sm:text-2xl font-display font-bold mb-4 flex items-center gap-3 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              Professional Summary
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed font-light ${
              isLight ? 'text-slate-700' : 'text-slate-200'
            }`}>
              "{PERSONAL_INFO.summary}"
            </p>

            <div className={`mt-6 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}>
              <div className={`p-4 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200/80' : 'bg-white/[0.02] border-white/5'
              }`}>
                <span className="text-xs font-mono text-cyan-600 block font-semibold mb-1">
                  Core Approach
                </span>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Focusing on hands-on practical implementation, continuous learning, and adapting to modern software and cloud technologies.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-200/80' : 'bg-white/[0.02] border-white/5'
              }`}>
                <span className="text-xs font-mono text-purple-600 block font-semibold mb-1">
                  Cloud &amp; Development
                </span>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Experience in AWS cloud services, responsive React interfaces, and DevOps practices with Linux and automation.
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements from Resume */}
          <div className={`p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden space-y-4 transition-colors ${
            isLight ? 'bg-white/95 border-slate-200/90 shadow-md' : ''
          }`}>
            <h3 className={`text-lg font-display font-bold flex items-center gap-2 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              <Award className="w-5 h-5 text-amber-500" />
              <span>Recognitions &amp; Milestones</span>
            </h3>

            <div className="space-y-3">
              {ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border flex items-start gap-3 transition-colors ${
                    isLight
                      ? 'bg-slate-50 border-slate-200 hover:border-cyan-400 hover:bg-white'
                      : 'bg-white/[0.02] border-white/5 hover:border-cyan-500/30'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <div className={`text-xs font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                      {item.title}
                    </div>
                    <div className={`text-xs mt-0.5 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
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
          <div className={`p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden space-y-5 transition-colors ${
            isLight ? 'bg-white/95 border-slate-200/90 shadow-md' : ''
          }`}>
            <div className={`flex items-center justify-between pb-3 border-b ${
              isLight ? 'border-slate-200' : 'border-white/10'
            }`}>
              <div className={`flex items-center gap-2 font-display font-bold text-lg ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                <GraduationCap className="w-5 h-5 text-cyan-500" />
                <span>Education</span>
              </div>
              <span className={`text-[11px] font-mono font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Verified History
              </span>
            </div>

            {/* Entry 1: B.Tech */}
            <div className={`p-4 rounded-2xl border space-y-2 ${
              isLight ? 'bg-cyan-50/50 border-cyan-200' : 'bg-cyan-950/20 border-cyan-800/30'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-cyan-600 bg-cyan-100/80 px-2 py-0.5 rounded-full">
                  Undergraduate (Current)
                </span>
                <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
              <h4 className={`font-display font-bold text-sm sm:text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {PERSONAL_INFO.education.degree}
              </h4>
              <p className="text-xs text-cyan-600 font-medium">
                {PERSONAL_INFO.education.institution}
              </p>
              <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {PERSONAL_INFO.education.location}
              </p>
            </div>

            {/* Entry 2: Intermediate */}
            <div className={`p-4 rounded-2xl border space-y-1.5 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Higher Secondary Education
                </span>
                <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {PERSONAL_INFO.intermediate.period}
                </span>
              </div>
              <h5 className={`font-display font-medium text-xs sm:text-sm ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                {PERSONAL_INFO.intermediate.institution}
              </h5>
              <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {PERSONAL_INFO.intermediate.location}
              </p>
            </div>

            {/* Entry 3: Secondary School */}
            <div className={`p-4 rounded-2xl border space-y-1.5 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-semibold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Secondary School Certificate
                </span>
                <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  {PERSONAL_INFO.secondary.period}
                </span>
              </div>
              <h5 className={`font-display font-medium text-xs sm:text-sm ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                {PERSONAL_INFO.secondary.institution}
              </h5>
              <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {PERSONAL_INFO.secondary.location}
              </p>
            </div>
          </div>

          {/* Quick Page Jump Callout */}
          {onNavigate && (
            <div className={`p-6 rounded-3xl border flex items-center justify-between gap-4 ${
              isLight ? 'bg-white border-slate-200 shadow-md' : 'glass-panel border-white/10'
            }`}>
              <div>
                <div className={`font-display font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Ready to see project case studies?
                </div>
                <div className={`text-xs mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Explore verified applications and architecture.
                </div>
              </div>
              <button
                onClick={() => {
                  soundManager.playClick();
                  onNavigate('projects');
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 shrink-0"
              >
                <span>Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
