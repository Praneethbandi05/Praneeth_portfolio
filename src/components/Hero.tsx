import React from 'react';
import { ArrowRight, Code2, Cloud, Award, ShieldCheck, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid-bg">
      {/* 3D / Canvas Neural Mesh Interactive Visualization (autonomous, mouse tracking removed) */}
      <NeuralCanvas />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Photo beside Name in Two Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-7">
          {/* Photo with glowing round outline */}
          <div className="relative group shrink-0">
            {/* Outer gradient outline glow */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-blue-500 opacity-80 blur-[6px] group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Round Photo Frame */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/50 shadow-2xl p-1 bg-[#090d18]">
              <img
                src="/profile.jpg"
                alt="Bandi Praneeth"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Active status indicator badge */}
            <div className="absolute bottom-2 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0a0d18] border-2 border-cyan-400 flex items-center justify-center shadow-lg">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Name in Two Steps beside the photo */}
          <div className="text-center sm:text-left">
            <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400/90 mb-1 flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Hello, I am</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[0.95] select-none">
              {/* Step 1: BANDI in pure white */}
              <span className="block text-white drop-shadow-[0_8px_25px_rgba(255,255,255,0.18)]">
                {PERSONAL_INFO.firstName}
              </span>
              {/* Step 2: PRANEETH in matching cyan/sky gradient */}
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(56,189,248,0.35)] mt-1">
                {PERSONAL_INFO.lastName}
              </span>
            </h1>
          </div>
        </div>

        {/* Summary Description */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-9 font-sans font-light">
          {PERSONAL_INFO.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('projects');
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('experience');
            }}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-cyan-500/40 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-0.5 transition-all"
          >
            <span>View Experience</span>
          </button>

          {/* Direct Save Resume PDF */}
          <a
            href="/Bandi_Praneeth_Resume.pdf"
            download="Bandi_Praneeth_Resume.pdf"
            onClick={() => soundManager.playPulse()}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/10"
          >
            <Download className="w-4 h-4" />
            <span>Save Resume (PDF)</span>
          </a>
        </div>

        {/* High-Impact Stats Bar from Resume */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div
            onClick={() => {
              soundManager.playClick();
              onNavigate('experience');
            }}
            className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mb-2">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">600+</div>
            <div className="text-xs text-slate-400 font-medium">Problems Solved</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">CodeChef Solved</div>
          </div>

          <div
            onClick={() => {
              soundManager.playClick();
              onNavigate('certifications');
            }}
            className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 mb-2">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-300">AWS</div>
            <div className="text-xs text-slate-400 font-medium">Certified Cloud</div>
            <div className="text-[10px] text-cyan-400/80 font-mono mt-0.5">CLF-C02 Accredited</div>
          </div>

          <div
            onClick={() => {
              soundManager.playClick();
              onNavigate('certifications');
            }}
            className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-purple-300">1st Place</div>
            <div className="text-xs text-slate-400 font-medium">ACM Hackathon</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Chapter Winner</div>
          </div>

          <div
            onClick={() => {
              soundManager.playClick();
              onNavigate('experience');
            }}
            className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center cursor-pointer"
          >
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-300">2 Roles</div>
            <div className="text-xs text-slate-400 font-medium">Internship Experience</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Gloom Dev • APSSDC</div>
          </div>
        </div>
      </div>
    </section>
  );
};
