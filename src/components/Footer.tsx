import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  theme?: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, theme = 'dark' }) => {
  const isLight = theme === 'light';

  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className={`border-t pt-16 pb-12 font-sans transition-colors duration-500 ${
      isLight ? 'bg-slate-100/90 border-slate-200 text-slate-600' : 'border-white/10 bg-[#05070c] text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b ${
          isLight ? 'border-slate-200' : 'border-white/5'
        }`}>
          {/* Logo & Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px]">
                <div className={`w-full h-full rounded-lg flex items-center justify-center font-display font-black text-xs ${
                  isLight ? 'bg-slate-900 text-white' : 'bg-[#07090e] text-white'
                }`}>
                  BP
                </div>
              </div>
              <span className={`font-display font-bold text-base tracking-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className={`text-xs max-w-sm leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Motivated to apply academic knowledge and practical experience to solve real-world challenges.
            </p>
          </div>

          {/* Quick Page Links */}
          {onNavigate && (
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    soundManager.playClick();
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-colors ${
                    isLight ? 'text-slate-600 hover:text-cyan-600' : 'hover:text-cyan-400 text-slate-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          {/* External Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
              }`}
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-white border-slate-200 text-slate-600 hover:text-cyan-600'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400'
              }`}
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contacts.email}`}
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-white border-slate-200 text-slate-600 hover:text-cyan-600'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400'
              }`}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className={isLight ? 'text-slate-500' : 'text-slate-500'}>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 transition-colors ${
              isLight ? 'text-slate-500 hover:text-cyan-600' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
