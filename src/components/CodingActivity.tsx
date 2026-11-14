import React from 'react';
import { GitBranch, Code2, Flame, Award, ExternalLink, Star, GitFork } from 'lucide-react';
import { GithubIcon } from './Icons';
import { CODING_STATS, PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireHackathonConfetti } from '../utils/confetti';

export const CodingActivity: React.FC = () => {
  // Generate realistic GitHub activity heatmap grid (12 months x 7 days)
  const weeks = 40;
  const daysPerWeek = 7;

  // Pseudo-random deterministic activity levels based on index
  const getActivityLevel = (week: number, day: number) => {
    const val = (week * 7 + day * 13 + 5) % 17;
    if (val > 13) return 4; // High (emerald-400)
    if (val > 9) return 3;  // Med-high (emerald-500)
    if (val > 5) return 2;  // Med (emerald-700)
    if (val > 2) return 1;  // Low (emerald-900)
    return 0;               // None
  };

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return 'bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)]';
      case 3:
        return 'bg-emerald-500';
      case 2:
        return 'bg-emerald-700';
      case 1:
        return 'bg-emerald-900/80';
      default:
        return 'bg-white/[0.04]';
    }
  };

  return (
    <section id="activity" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <GitBranch className="w-4 h-4" />
            <span>07 // Algorithmic Velocity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Coding Activity &amp; Open Source
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Daily problem solving rigor, algorithmic mastery, and collaborative open-source git commits.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: GitHub Heatmap & Metrics (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Heatmap Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                    <span>github.com/{PERSONAL_INFO.contacts.githubUsername}</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {CODING_STATS.contributions.totalCommits} contributions across {CODING_STATS.contributions.year}
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-cyan-300 border border-white/10 transition-colors w-fit"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Heatmap Graph */}
            <div className="p-4 rounded-2xl bg-[#090d16] border border-white/5 overflow-x-auto custom-scrollbar">
              <div className="flex gap-1.5 min-w-[620px]">
                {Array.from({ length: weeks }).map((_, w) => (
                  <div key={w} className="flex flex-col gap-1.5">
                    {Array.from({ length: daysPerWeek }).map((_, d) => {
                      const level = getActivityLevel(w, d);
                      return (
                        <div
                          key={d}
                          title={`Day ${w * 7 + d}: Level ${level} activity`}
                          className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${getCellColor(
                            level
                          )}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mt-4 pt-2 border-t border-white/5">
                <span>Learn more about how we count contributions</span>
                <div className="flex items-center gap-1.5">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.04]" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900/80" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Language Breakdown Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Most Used Languages</span>
                <span className="text-cyan-400">Python 42% • JS/TS 24% • Dart 16%</span>
              </div>
              <div className="h-2 w-full rounded-full overflow-hidden flex bg-white/5">
                {CODING_STATS.languagesRatio.map((lang) => (
                  <div
                    key={lang.name}
                    className={`h-full ${lang.color}`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name} (${lang.percentage}%)`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-1 text-[11px] font-mono text-slate-400">
                {CODING_STATS.languagesRatio.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${lang.color}`} />
                    <span>{lang.name} ({lang.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Algorithmic Platforms & Hackathon Victory (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* 600+ Problems Hero Pill */}
          <div
            onClick={() => {
              soundManager.playPulse();
              fireHackathonConfetti();
            }}
            className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/30 cursor-pointer hover:border-amber-400/50 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-800/40">
                Click to Celebrate
              </span>
            </div>

            <div className="font-display font-black text-4xl sm:text-5xl text-white mt-3">
              {CODING_STATS.totalSolved}
            </div>
            <h4 className="font-display font-bold text-white text-base mt-1">
              Algorithmic Problems Solved
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
              Trained extensively in competitive programming, dynamic programming, tree traversals, and asymptotic optimization.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Coding Profiles
            </h4>
            {CODING_STATS.platforms.map((p) => (
              <div
                key={p.name}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-white text-sm">{p.name}</div>
                  <div className={`text-xs font-mono ${p.color}`}>{p.count}</div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded">
                  {p.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
