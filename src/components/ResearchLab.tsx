import React, { useState } from 'react';
import { Sparkles, Terminal, Activity, FileCode, CheckCircle2, ChevronRight, Layers, Eye, RefreshCw } from 'lucide-react';
import { RESEARCH_EXPERIMENTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const ResearchLab: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string>(RESEARCH_EXPERIMENTS[0].id);
  const [camOverlayActive, setCamOverlayActive] = useState<boolean>(true);

  const currentExp = RESEARCH_EXPERIMENTS.find((e) => e.id === selectedExpId) || RESEARCH_EXPERIMENTS[0];

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            <span>05 // Experimental Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Research &amp; AI Lab Notebook
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Digital lab records, empirical machine learning benchmarks, and explainable AI explorations.
        </p>
      </div>

      {/* Main Research Lab Interactive Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Experiment Index (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-1 flex items-center justify-between">
            <span>Experiment Logbook Index</span>
            <span className="text-cyan-400">{RESEARCH_EXPERIMENTS.length} Entries</span>
          </div>

          {RESEARCH_EXPERIMENTS.map((exp) => {
            const isSelected = exp.id === selectedExpId;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  soundManager.playClick();
                  setSelectedExpId(exp.id);
                }}
                className={`w-full text-left p-4 rounded-2xl transition-all border ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-950/60 to-indigo-950/40 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    {exp.code}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      exp.status === 'Completed'
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40'
                        : exp.status === 'Published'
                        ? 'bg-purple-950/80 text-purple-400 border border-purple-800/40'
                        : 'bg-amber-950/80 text-amber-400 border border-amber-800/40'
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-white text-sm line-clamp-2 leading-snug">
                  {exp.title}
                </h4>
                <div className="text-[11px] text-slate-400 font-mono mt-2">
                  {exp.focusArea}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Experiment Record (8 cols) */}
        <div className="lg:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 space-y-6 border border-white/10 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/40">
                {currentExp.code}
              </span>
              <span className="text-xs font-mono text-slate-400 ml-2">
                Focus: {currentExp.focusArea}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300">Reproducible Notebook</span>
            </div>
          </div>

          {/* Title & Abstract */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
              {currentExp.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-light">
              {currentExp.abstract}
            </p>
          </div>

          {/* Model Architecture & Dataset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block font-semibold">
                Architecture Pipeline
              </span>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {currentExp.architecture}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 block font-semibold">
                Benchmark Dataset
              </span>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {currentExp.dataset}
              </p>
            </div>
          </div>

          {/* Quantitative Metrics Bar */}
          <div className="p-4 rounded-2xl bg-[#090d16] border border-white/5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
              Quantitative Evaluation Metrics
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {currentExp.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <div className="text-[11px] text-slate-400 font-mono">{m.label}</div>
                  <div className="text-lg font-display font-black text-cyan-300 mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Grad-CAM Visualizer Simulator (For EXP_VISION_01) */}
          {currentExp.code === 'EXP_VISION_01' && (
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-cyan-300 font-semibold flex items-center gap-1.5">
                  <Eye className="w-4 h-4" /> Grad-CAM Heatmap Simulator
                </span>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setCamOverlayActive(!camOverlayActive);
                  }}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-colors"
                >
                  {camOverlayActive ? 'Hide Saliency Heatmap' : 'Overlay Grad-CAM Heatmap'}
                </button>
              </div>

              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center p-4">
                {/* Simulated Retinal Canvas */}
                <div className="relative w-40 h-40 rounded-full border border-amber-900/60 bg-gradient-to-tr from-amber-950 via-rose-950 to-orange-950 shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Blood vessels mock */}
                  <div className="absolute inset-0 opacity-40">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path d="M50 50 Q60 20 80 15 M50 50 Q30 70 15 80 M50 50 Q75 65 90 85 M50 50 Q25 30 10 20" stroke="#f43f5e" strokeWidth="2.5" fill="none" />
                      <circle cx="50" cy="50" r="8" fill="#fde047" opacity="0.6" />
                    </svg>
                  </div>

                  {/* Grad-CAM Saliency Overlay */}
                  {camOverlayActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-purple-500/30 to-amber-500/50 mix-blend-color-dodge animate-pulse" />
                  )}

                  <span className="relative z-10 text-[10px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded">
                    {camOverlayActive ? 'Grad-CAM Saliency Focus' : 'Raw Retinal Fundus'}
                  </span>
                </div>

                <div className="ml-6 space-y-1 text-xs text-slate-300">
                  <div className="font-semibold text-white">Interpretability Insight:</div>
                  <div className="text-[11px] text-slate-400">
                    Saliency gradients localize arteriolar caliber variances without biasing against the optic disk.
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400 pt-1">
                    Target Layer: layer4.2.conv3 (ResNet-50)
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Empirical Findings */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Empirical Findings &amp; Conclusions
            </span>
            <ul className="space-y-2">
              {currentExp.keyFindings.map((finding, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
