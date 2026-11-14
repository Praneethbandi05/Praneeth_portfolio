import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Terminal, ArrowRight, ShieldCheck, Award, Code2, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';
import { soundManager } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText !== currentRole) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText !== '') {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const scrollTo = (id: string) => {
    soundManager.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid-bg"
    >
      {/* 3D / Canvas Neural Mesh Interactive Visualization */}
      <NeuralCanvas />

      {/* Atmospheric Radial Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Live Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 shadow-inner animate-in fade-in slide-in-from-top-4 duration-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm font-mono text-slate-300">
            {PERSONAL_INFO.contacts.availability}
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3 h-3" /> GenAI & Cloud
          </span>
        </div>

        {/* Identity & Sub-header */}
        <div className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400/90 mb-3 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>Hello, World. I am</span>
          <span className="text-white font-bold tracking-normal uppercase bg-white/10 px-2 py-0.5 rounded">
            {PERSONAL_INFO.name}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white leading-[1.08] mb-6">
          Building Intelligence.
          <br />
          <span className="text-gradient-cyan">
            Creating Possibilities.
          </span>
        </h1>

        {/* Dynamic Cycling Role Box */}
        <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl md:text-3xl font-mono text-slate-300 font-medium mb-6 h-10">
          <span className="text-slate-500">&gt;</span>
          <span className="text-white border-b-2 border-cyan-400 pb-0.5">
            {displayedText}
          </span>
          <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse" />
        </div>

        {/* Supporting Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-sans font-light">
          {PERSONAL_INFO.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all group"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-cyan-500/40 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-0.5 transition-all"
          >
            <span>Let's Connect</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPulse();
              onOpenResume();
            }}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 border border-white/5 hover:border-white/20 text-xs sm:text-sm font-mono flex items-center justify-center gap-2 transition-all"
          >
            <span>View CV</span>
          </button>
        </div>

        {/* High-Impact Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 mb-2">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">600+</div>
            <div className="text-xs text-slate-400 font-medium">Problems Solved</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">CodeChef & LeetCode</div>
          </div>

          <div className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 mb-2">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-cyan-300">AWS</div>
            <div className="text-xs text-slate-400 font-medium">Certified Cloud</div>
            <div className="text-[10px] text-cyan-400/80 font-mono mt-0.5">CLF-C02 Accredited</div>
          </div>

          <div className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-purple-300">1st Place</div>
            <div className="text-xs text-slate-400 font-medium">ACM Hackathon</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Student Chapter Champion</div>
          </div>

          <div className="p-4 rounded-2xl glass-panel glass-panel-hover flex flex-col items-center text-center">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-300">3 Roles</div>
            <div className="text-xs text-slate-400 font-medium">Internship Experience</div>
            <div className="text-[10px] text-slate-500 font-mono mt-0.5">Gloom Dev • APSSDC • Swecha</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo('about')}
          className="mt-14 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group focus:outline-none"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <div className="w-5 h-9 rounded-full border border-slate-700 flex items-start justify-center p-1.5 group-hover:border-cyan-400 transition-colors">
            <div className="w-1.5 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
