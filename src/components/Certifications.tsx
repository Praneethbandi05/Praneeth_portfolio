import React from 'react';
import { Award, ShieldCheck, CheckCircle, Code2, Flame, Sparkles } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireHackathonConfetti } from '../utils/confetti';

export const Certifications: React.FC = () => {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Award className="w-4 h-4" />
            <span>Verified Credentials &amp; Honors</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Certifications &amp; Achievements
          </h1>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Accreditations from Amazon Web Services, Salesforce, NPTEL, freeCodeCamp, and competitive milestones.
        </p>
      </div>

      {/* Certifications Grid (5 from Resume) */}
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-6 flex items-center gap-2 font-semibold">
          <ShieldCheck className="w-4 h-4" /> Official Industry Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onMouseEnter={() => soundManager.playHover()}
              onClick={() => {
                if (cert.id === 'aws-clf-c02') {
                  fireHackathonConfetti();
                }
              }}
              className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden border border-white/10 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/30">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs text-slate-300 font-medium">
                  Issuer: <span className="text-white font-semibold">{cert.issuer}</span>
                </div>
              </div>

              <div className="pt-6 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Skills Validated
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsLearned.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section (From Resume) */}
      <div>
        <h2 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-6 flex items-center gap-2 font-semibold">
          <Award className="w-4 h-4" /> Academic &amp; Competitive Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/30 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950/70 px-2.5 py-0.5 rounded-full border border-purple-800/40">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-cyan-400">
                {item.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
