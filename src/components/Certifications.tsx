import React from 'react';
import { Award, ShieldCheck, CheckCircle, Code2, Flame, Sparkles, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireHackathonConfetti } from '../utils/confetti';
import { CodeChefIcon } from './Icons';

interface CertificationsProps {
  theme?: 'dark' | 'light';
}

export const Certifications: React.FC<CertificationsProps> = ({ theme = 'light' }) => {
  const isLight = theme === 'light';

  return (
    <section className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-10rem)] animate-in fade-in duration-300">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b transition-colors ${
        isLight ? 'border-slate-300' : 'border-white/10'
      }`}>
        <div>
          <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
            <Award className="w-4 h-4 text-cyan-600" />
            <span>Verified Credentials &amp; Honors</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            Certifications &amp; Achievements
          </h1>
        </div>
        <p className={`max-w-md text-sm leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
          Accreditations from Amazon Web Services, Salesforce, NPTEL, freeCodeCamp, and competitive milestones.
        </p>
      </div>

      {/* Certifications Grid (5 from Resume) */}
      <div className="mb-16">
        <h2 className={`text-xs font-mono uppercase tracking-wider mb-6 flex items-center gap-2 font-bold ${
          isLight ? 'text-cyan-800' : 'text-cyan-400'
        }`}>
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
                  ? 'bg-white border-slate-300 shadow-md hover:border-cyan-500 hover:shadow-xl'
                  : 'border border-white/10'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold border ${
                    isLight ? 'text-cyan-900 bg-cyan-100 border-cyan-200' : 'text-cyan-300 bg-cyan-950/60 border-cyan-800/40'
                  }`}>
                    {cert.category}
                  </span>
                  <span className={`text-xs font-mono flex items-center gap-1 font-bold ${
                    isLight ? 'text-emerald-700' : 'text-emerald-400'
                  }`}>
                    <CheckCircle className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h3 className={`font-display font-bold text-base sm:text-lg group-hover:text-cyan-600 transition-colors ${
                  isLight ? 'text-slate-950' : 'text-white'
                }`}>
                  {cert.title}
                </h3>

                <div className={`text-xs font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                  Issuer: <span className={isLight ? 'text-slate-950 font-bold' : 'text-white font-semibold'}>{cert.issuer}</span>
                </div>

                {cert.skillsLearned && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border font-medium ${
                          isLight
                            ? 'bg-slate-100 border-slate-300 text-slate-800'
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
                isLight ? 'border-slate-300 text-slate-700 font-medium' : 'border-white/5 text-slate-400'
              }`}>
                <span>{cert.issueDate || 'Accredited'}</span>
                <span className={`font-bold ${isLight ? 'text-cyan-700' : 'text-cyan-400'}`}>Official Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Achievements from Resume */}
      <div>
        <h2 className={`text-xs font-mono uppercase tracking-wider mb-6 flex items-center gap-2 font-bold ${
          isLight ? 'text-amber-700' : 'text-amber-500'
        }`}>
          <Sparkles className="w-4 h-4" /> Academic &amp; Competitive Milestones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achieve, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl glass-panel relative overflow-hidden flex flex-col justify-between transition-all ${
                isLight ? 'bg-white border-slate-300 shadow-md' : 'border border-white/10'
              }`}
            >
              <div className="space-y-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  {idx === 0 ? <Flame className="w-5 h-5" /> : idx === 3 ? <Code2 className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                </div>

                <h3 className={`font-display font-bold text-base ${isLight ? 'text-slate-950' : 'text-white'}`}>
                  {achieve.title}
                </h3>

                <p className={`text-xs leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  {achieve.description}
                </p>

                {/* Direct CodeChef Profile Link on Problems Solved Card */}
                {achieve.title.toLowerCase().includes('codechef') || idx === 3 ? (
                  <div className="pt-2">
                    <a
                      href={PERSONAL_INFO.contacts.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors border ${
                        isLight
                          ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300 shadow-sm'
                          : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border-amber-500/20'
                      }`}
                      title="Inspect CodeChef Profile"
                    >
                      <CodeChefIcon className="w-3.5 h-3.5 text-amber-600" />
                      <span>CodeChef Profile</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                ) : null}
              </div>

              <div className={`mt-4 pt-3 border-t text-[11px] font-mono font-bold flex items-center gap-1 ${
                isLight ? 'border-slate-300 text-cyan-800' : 'border-white/5 text-cyan-400'
              }`}>
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
