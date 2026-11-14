import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid-bg">
      {/* 3D / Canvas Neural Mesh Visualization (autonomous ambient pulses) */}
      <NeuralCanvas />

      {/* Increased Ambient Light Glows on Home Page Only */}
      {/* Primary Center Massive Luminous Light Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] bg-gradient-to-tr from-cyan-500/25 via-sky-400/20 to-indigo-600/25 rounded-full blur-[170px] pointer-events-none" />
      {/* Upper Radiant Cyan Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-cyan-400/20 rounded-full blur-[140px] pointer-events-none" />
      {/* Atmospheric Soft Violet Light */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Photo beside Name in Two Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-7 sm:gap-12 mb-9">
          {/* Photo with glowing round outline */}
          <div className="relative group shrink-0">
            {/* Outer gradient outline glow */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-blue-500 opacity-85 blur-[8px] group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Round Photo Frame */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/60 shadow-2xl p-1 bg-[#090d18]">
              <img
                src="/profile.jpg"
                alt="Bandi Praneeth"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Active status indicator node */}
            <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-[#0a0d18] border-2 border-cyan-400 flex items-center justify-center shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Name in Two Steps beside the photo */}
          <div className="text-center sm:text-left">
            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400/90 mb-1 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Hello, I am</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[0.95] select-none">
              {/* Step 1: BANDI in pure white */}
              <span className="block text-white drop-shadow-[0_8px_25px_rgba(255,255,255,0.22)]">
                {PERSONAL_INFO.firstName}
              </span>
              {/* Step 2: PRANEETH in matching cyan/sky gradient */}
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(56,189,248,0.4)] mt-1.5">
                {PERSONAL_INFO.lastName}
              </span>
            </h1>
          </div>
        </div>

        {/* Summary Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-sans font-light">
          {PERSONAL_INFO.summary}
        </p>

        {/* CTA Buttons (Resume removed per request: top taskbar exclusively handles resume) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('projects');
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('experience');
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 hover:border-cyan-500/40 font-semibold text-sm flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-0.5 transition-all"
          >
            <span>View Experience</span>
          </button>
        </div>

        {/* Metric box cards removed per user request and reference screenshot */}
      </div>
    </section>
  );
};
