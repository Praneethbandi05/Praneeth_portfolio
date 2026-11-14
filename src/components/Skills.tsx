import React, { useState } from 'react';
import { Cpu, Search, Sparkles, Brain, Cloud, Code2, Globe, Database, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].category);
  const [searchQuery, setSearchQuery] = useState('');

  const icons: Record<string, React.ElementType> = {
    Brain,
    Cloud,
    Code2,
    Globe,
    Database,
  };

  const currentCategoryData = SKILL_CATEGORIES.find((c) => c.category === activeCategory) || SKILL_CATEGORIES[0];

  // If user is searching, filter across all categories; otherwise show current category
  const filteredSkills = searchQuery.trim()
    ? SKILL_CATEGORIES.flatMap((c) =>
        c.skills
          .filter(
            (s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map((s) => ({ ...s, parentCategory: c.category }))
      )
    : currentCategoryData.skills.map((s) => ({ ...s, parentCategory: currentCategoryData.category }));

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Cpu className="w-4 h-4" />
            <span>02 // Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Technical Skill Ecosystem
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Interactive matrix of verified programming languages, neural architectures, cloud services, and developer tooling.
        </p>
      </div>

      {/* Controls: Category Selector & Instant Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = icons[cat.iconName] || Brain;
            const isActive = !searchQuery.trim() && activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  soundManager.playClick();
                  setSearchQuery('');
                  setActiveCategory(cat.category);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{cat.category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills (e.g. AWS, PyTorch)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.length === 0 ? (
          <div className="col-span-full py-16 text-center text-slate-500 text-sm">
            No technical skills matching "{searchQuery}".
          </div>
        ) : (
          filteredSkills.map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              onMouseEnter={() => soundManager.playHover()}
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Row: Name & Level */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-white text-base group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                          {skill.highlight}
                        </span>
                      )}
                    </h3>
                    <div className="text-xs text-slate-400 font-mono mt-0.5 flex items-center gap-2">
                      <span>{skill.experience}</span>
                      {searchQuery && 'parentCategory' in skill && (
                        <>
                          <span className="text-slate-600">•</span>
                          <span className="text-cyan-400/80">{skill.parentCategory}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Circular / Meter Gauge Value */}
                  <div className="text-right shrink-0">
                    <span className="font-mono font-extrabold text-sm text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Micro Animated Progress Line */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden my-3">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-700 ease-out group-hover:shadow-[0_0_8px_rgba(56,189,248,0.7)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Tags / Sub-competencies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/5 group-hover:border-cyan-500/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Skill Ecosystem Callout */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-indigo-950/20 to-purple-950/30 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Continuous Upskilling &amp; Industry Alignment
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Every skill listed above has been deployed across actual production codebases, college hackathons, or verified certification proctoring.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-800/40">
            AWS Certified CLF-C02
          </span>
          <span className="text-xs font-mono text-purple-300 bg-purple-950/80 px-3 py-1.5 rounded-lg border border-purple-800/40">
            600+ Solved
          </span>
        </div>
      </div>
    </section>
  );
};
