import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireHackathonConfetti } from '../utils/confetti';

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Cloud', 'AI & Python', 'Web & Mobile', 'Data & DB'];

  const filteredCerts =
    filter === 'All'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Award className="w-4 h-4" />
            <span>06 // Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Certifications &amp; Accreditations
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Formally validated engineering competencies from Amazon Web Services, Salesforce, NPTEL, and industry programs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundManager.playClick();
              setFilter(cat);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap border ${
              filter === cat
                ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10'
                : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/5 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            onMouseEnter={() => soundManager.playHover()}
            onClick={() => {
              if (cert.id === 'aws-clf-c02') {
                fireHackathonConfetti();
              }
            }}
            className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden cursor-pointer"
          >
            {/* Top Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/30">
                  {cert.category}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {cert.issueDate}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                {cert.title}
              </h3>

              <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Issuer: {cert.issuer}</span>
              </div>
            </div>

            {/* Skills Acquired */}
            <div className="pt-6 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                Core Competencies Validated
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
    </section>
  );
};
