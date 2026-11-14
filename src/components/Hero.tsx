import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Award, Code2, Cloud, ShieldCheck, Download, FileText, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText !== currentRole) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayedText !== '') {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden tech-grid-bg">
      {/* 3D / Canvas Neural Mesh Interactive Visualization */}
      <NeuralCanvas />

      {/* Atmospheric Radial Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
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

        {/* Summary Description directly from attached resume */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-sans font-light">
          {PERSONAL_INFO.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('projects');
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('experience');
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-cyan-500/40 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-md hover:-translate-y-0.5 transition-all"
          >
            <span>View Experience</span>
          </button>

          {/* Direct Download of Attached Resume */}
          <a
            href="/Bandi_Praneeth_Resume.pdf"
            download="Bandi_Praneeth_Resume.pdf"
            onClick={() => soundManager.playPulse()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/10"
          >
            <Download className="w-4 h-4" />
            <span>Download Official CV (PDF)</span>
          </a>
        </div>

        {/* High-Impact Stats Bar from Attached Resume */}
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
