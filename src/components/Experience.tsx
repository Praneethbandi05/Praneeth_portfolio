import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { EXPERIENCES, ACHIEVEMENTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';

interface ExperienceProps {
  onNavigate?: (page: PageId) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onNavigate }) => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Briefcase className="w-4 h-4" />
            <span>Work Experience &amp; Internships</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Industry Internships
          </h1>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Practical development activities at Gloom Dev and cloud infrastructure experience at APSSDC.
        </p>
      </div>

      {/* Internships List */}
      <div className="space-y-8 mb-16">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            onMouseEnter={() => soundManager.playHover()}
            className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 hover:border-cyan-500/30 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                    {exp.role}
                  </h2>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                    <ShieldCheck className="w-3 h-3" /> Verified Resume Entry
                  </span>
                </div>
                <div className="text-sm font-semibold text-cyan-400 mt-1">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md">
                  <MapPin className="w-3 h-3 text-purple-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            <ul className="space-y-3 my-4">
              {exp.description.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-light">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Student Leadership & Community Impact */}
      <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg">
                Student Leadership &amp; Institutional Roles
              </h3>
              <p className="text-xs text-slate-400">
                Extracurricular responsibility and technical event coordination at VVIT
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="text-sm font-semibold text-white">Student Activity Council (SAC)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Led the Student Activity Council, coordinating student activities and contributing to effective team and event management.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
            <h4 className="text-sm font-semibold text-white">IUCEE R&amp;D Department</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Selected as a Member of the Indo-Universal Collaboration for Engineering Education (IUCEE) R&amp;D Department.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
