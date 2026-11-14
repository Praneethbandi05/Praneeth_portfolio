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
    <section className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-10rem)] animate-in fade-in duration-300">
      {/* Page Title */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b transition-colors ${
        isLight ? 'border-slate-300' : 'border-white/10'
      }`}>
        <div>
          <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
            <User className="w-4 h-4 text-cyan-600" />
            <span>Profile &amp; Background</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight transition-colors ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            About {PERSONAL_INFO.name}
          </h1>
        </div>
        <p className={`max-w-md text-sm leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
          Academic foundation, practical engineering mindset, and leadership achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Summary & Objective (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Professional Summary */}
          <div className={`p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden transition-colors ${
            isLight ? 'bg-white border-slate-300 shadow-lg' : ''
          }`}>
            <h2 className={`text-xl sm:text-2xl font-display font-bold mb-4 flex items-center gap-3 ${
              isLight ? 'text-slate-950' : 'text-white'
            }`}>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              Professional Summary
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed font-normal ${
              isLight ? 'text-slate-800' : 'text-slate-200'
            }`}>
              "{PERSONAL_INFO.summary}"
            </p>

            <div className={`mt-6 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-4 ${
              isLight ? 'border-slate-300' : 'border-white/10'
            }`}>
              <div className={`p-4 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-300' : 'bg-white/[0.02] border-white/5'
              }`}>
                <span className="text-xs font-mono text-cyan-700 block font-bold mb-1">
                  Core Approach
                </span>
                <p className={`text-xs leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Focusing on hands-on practical implementation, continuous learning, and adapting to modern software and cloud technologies.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${
                isLight ? 'bg-slate-50 border-slate-300' : 'bg-white/[0.02] border-white/5'
              }`}>
                <span className="text-xs font-mono text-purple-700 block font-bold mb-1">
                  Cloud &amp; Development
                </span>
                <p className={`text-xs leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Experience in AWS cloud services, responsive React interfaces, and DevOps practices with Linux and automation.
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements from Resume */}
          <div className={`p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden space-y-4 transition-colors ${
            isLight ? 'bg-white border-slate-300 shadow-lg' : ''
          }`}>
            <h3 className={`text-lg font-display font-bold flex items-center gap-2 ${
              isLight ? 'text-slate-950' : 'text-white'
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
                      ? 'bg-slate-50 border-slate-300 hover:border-cyan-500 hover:bg-cyan-50/20'
                      : 'bg-white/[0.02] border-white/5 hover:border-cyan-500/30'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <div className={`text-xs font-bold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                      {item.title}
                    </div>
                    <div className={`text-xs mt-0.5 leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
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
            isLight ? 'bg-white border-slate-300 shadow-lg' : ''
          }`}>
            <div className={`flex items-center justify-between pb-3 border-b ${
              isLight ? 'border-slate-300' : 'border-white/10'
            }`}>
              <div className={`flex items-center gap-2 font-display font-bold text-lg ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}>
                <GraduationCap className="w-5 h-5 text-cyan-600" />
                <span>Education</span>
              </div>
              <span className={`text-[11px] font-mono font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                Verified History
              </span>
            </div>

            {/* Entry 1: B.Tech */}
            <div className={`p-4 rounded-2xl border space-y-2 ${
              isLight ? 'bg-cyan-50/70 border-cyan-300' : 'bg-cyan-950/20 border-cyan-800/30'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-900 bg-cyan-200/80 px-2.5 py-0.5 rounded-full border border-cyan-300">
                  Undergraduate (Current)
                </span>
                <span className={`text-xs font-mono font-semibold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
              <h4 className={`font-display font-bold text-sm sm:text-base ${isLight ? 'text-slate-950' : 'text-white'}`}>
                {PERSONAL_INFO.education.degree}
              </h4>
              <p className="text-xs text-cyan-800 font-bold">
                {PERSONAL_INFO.education.institution}
              </p>
              <p className={`text-[11px] font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                {PERSONAL_INFO.education.location}
              </p>
            </div>

            {/* Entry 2: Intermediate */}
            <div className={`p-4 rounded-2xl border space-y-1.5 ${
              isLight ? 'bg-slate-50 border-slate-300' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  Higher Secondary Education
                </span>
                <span className={`text-xs font-mono font-semibold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  {PERSONAL_INFO.intermediate.period}
                </span>
              </div>
              <h5 className={`font-display font-bold text-xs sm:text-sm ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                {PERSONAL_INFO.intermediate.institution}
              </h5>
              <p className={`text-[11px] font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                {PERSONAL_INFO.intermediate.location}
              </p>
            </div>

            {/* Entry 3: Secondary School */}
            <div className={`p-4 rounded-2xl border space-y-1.5 ${
              isLight ? 'bg-slate-50 border-slate-300' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                  Secondary School Certificate
                </span>
                <span className={`text-xs font-mono font-semibold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  {PERSONAL_INFO.secondary.period}
                </span>
              </div>
              <h5 className={`font-display font-bold text-xs sm:text-sm ${isLight ? 'text-slate-900' : 'text-slate-200'}`}>
                {PERSONAL_INFO.secondary.institution}
              </h5>
              <p className={`text-[11px] font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                {PERSONAL_INFO.secondary.location}
              </p>
            </div>
          </div>

          {/* Quick Page Jump Callout */}
          {onNavigate && (
            <div className={`p-6 rounded-3xl border flex items-center justify-between gap-4 ${
              isLight ? 'bg-white border-slate-300 shadow-lg' : 'glass-panel border-white/10'
            }`}>
              <div>
                <div className={`font-display font-bold text-sm ${isLight ? 'text-slate-950' : 'text-white'}`}>
                  Ready to see project case studies?
                </div>
                <div className={`text-xs mt-0.5 font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
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
