import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Briefcase className="w-4 h-4" />
            <span>04 // Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Work Experience &amp; Internships
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Practical industry contributions in cloud architecture, production microservices, and collaborative research initiatives.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-12">
        {/* Continuous Vertical Glowing Line */}
        <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 opacity-30" />

        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.id}
            onMouseEnter={() => soundManager.playHover()}
            className="relative group"
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-6 h-6 rounded-full bg-[#07090e] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-300 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-cyan-200 transition-colors" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 group-hover:border-cyan-500/30 transition-all">
              {/* Header: Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                      {exp.role}
                    </h3>
                    {exp.verified && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                        <ShieldCheck className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-cyan-400 mt-0.5">
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

              {/* Bullet Descriptions */}
              <ul className="space-y-2.5 my-4">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/5 group-hover:border-cyan-500/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
