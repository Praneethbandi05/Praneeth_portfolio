import React from 'react';
import { Award, ShieldCheck, CheckCircle, Code2, Flame, Sparkles } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireHackathonConfetti } from '../utils/confetti';

interface CertificationsProps {
  theme?: 'dark' | 'light';
}

export const Certifications: React.FC<CertificationsProps> = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b transition-colors ${
        isLight ? 'border-slate-200' : 'border-white/10'
      }`}>
        <div>
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <Award className="w-4 h-4" />
            <span>Verified Credentials &amp; Honors</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Certifications &amp; Achievements
          </h1>
        </div>
        <p className={`max-w-md text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Accreditations from Amazon Web Services, Salesforce, NPTEL, freeCodeCamp, and competitive milestones.
        </p>
      </div>

      {/* Certifications Grid (5 from Resume) */}
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-600 mb-6 flex items-center gap-2 font-semibold">
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
              className={`p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden cursor-pointer transition-all ${
                isLight
                  ? 'bg-white/95 border-slate-200 shadow-md hover:border-cyan-400'
                  : 'border border-white/10'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-700 bg-cyan-100 px-2.5 py-0.5 rounded-full font-semibold">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h3 className={`font-display font-bold text-base sm:text-lg group-hover:text-cyan-600 transition-colors ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  {cert.title}
                </h3>

                <div className={`text-xs font-medium ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Issuer: <span className={isLight ? 'text-slate-900 font-semibold' : 'text-white font-semibold'}>{cert.issuer}</span>
                </div>

                {cert.skillsLearned && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isLight
                            ? 'bg-slate-100 border-slate-200 text-slate-700'
                            : 'bg-white/5 border-white/5 text-slate-300'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                isLight ? 'border-slate-200 text-slate-500' : 'border-white/5 text-slate-400'
              }`}>
                <span>{cert.issueDate || 'Accredited'}</span>
                <span className="text-cyan-600 font-medium">Official Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Achievements from Resume */}
      <div>
        <h2 className="text-xs font-mono uppercase tracking-wider text-amber-500 mb-6 flex items-center gap-2 font-semibold">
          <Sparkles className="w-4 h-4" /> Academic &amp; Competitive Milestones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achieve, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between transition-all ${
                isLight ? 'bg-white/95 border-slate-200 shadow-md' : 'border border-white/10'
              }`}
            >
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  {idx === 0 ? <Flame className="w-5 h-5" /> : idx === 3 ? <Code2 className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                </div>

                <h3 className={`font-display font-bold text-base ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {achieve.title}
                </h3>

                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  {achieve.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-mono text-cyan-600 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Resume Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
