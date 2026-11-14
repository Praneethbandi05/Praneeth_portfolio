import React from 'react';
import { Compass, GraduationCap, Cpu, Layers, Sparkles, Target, Award, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Compass className="w-4 h-4" />
            <span>01 // Editorial Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            About Me &amp; Philosophy
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Bridging the gap between mathematical machine learning research and enterprise cloud resilience.
        </p>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Personal Story & Philosophy (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Story Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              The AI &amp; Cloud Intersection
            </h3>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                I am a 3rd-year B.Tech undergraduate specializing in <strong className="text-white font-medium">Artificial Intelligence &amp; Machine Learning</strong> at Vasireddy Venkatadri Institute of Technology. My engineering drive originates from a simple principle: <span className="text-cyan-300 italic">an AI model is only as valuable as its reliability when placed in production</span>.
              </p>
              <p>
                My background combines deep algorithmic experimentation—from convolutional neural networks with <strong className="text-white font-medium">Explainable AI (Grad-CAM)</strong> for medical image classification to multi-agent LLM tool routing—with battle-tested cloud infrastructure on <strong className="text-white font-medium">AWS</strong>.
              </p>
              <p>
                Having earned the <strong className="text-amber-300 font-medium">AWS Certified Cloud Practitioner</strong> accreditation and completed three internships across full-stack development (Gloom Dev), cloud infrastructure (APSSDC), and AI agents (Swecha / IIIT Hyderabad), I love building systems that are not just theoretically sound, but blazingly fast, serverless, and intuitive for everyday end users.
              </p>
            </div>
          </div>

          {/* Core Values / Philosophy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-white text-base mb-1.5">
                First-Principles Engineering
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rather than treating models as black boxes, I delve into gradient dynamics, layer activations, and data distributions to understand why systems behave the way they do.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-white text-base mb-1.5">
                Production-First Mindset
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designing every service with least-privilege IAM policies, automated monitoring via CloudWatch, modular REST architectures, and containerized scalability.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Academic Milestones & Currently Exploring (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Academic Background Card */}
          <div className="p-6 rounded-3xl glass-panel relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5 text-white font-display font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Academic Record</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/40">
                2023 – 2027
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-semibold text-white text-sm">
                      {PERSONAL_INFO.education.degree}
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {PERSONAL_INFO.education.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">
                    {PERSONAL_INFO.education.grade}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 font-mono">
                  {PERSONAL_INFO.education.location}
                </p>
              </div>

              {/* Previous High Grades */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[11px] text-slate-400">Intermediate (MPC)</div>
                  <div className="font-semibold text-white mt-0.5">90.40%</div>
                  <div className="text-[10px] text-slate-500 truncate mt-1">Sasi Jr Kalasala</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[11px] text-slate-400">Secondary (SSC)</div>
                  <div className="font-semibold text-white mt-0.5">90.30%</div>
                  <div className="text-[10px] text-slate-500 truncate mt-1">ZPH Boys High School</div>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Exploring Radar Card */}
          <div className="p-6 rounded-3xl glass-panel relative overflow-hidden">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Current Technical Frontier</span>
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-4">
              Currently Exploring &amp; Prototyping
            </h3>

            <div className="space-y-2.5">
              {PERSONAL_INFO.currentlyExploring.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundManager.playHover()}
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/30 transition-all flex items-start justify-between group"
                >
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 pl-3">
                      {item.desc}
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
