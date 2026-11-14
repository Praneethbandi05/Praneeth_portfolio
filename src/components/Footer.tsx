import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from './Icons';
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
    <footer className={`border-t py-10 font-sans transition-colors duration-500 ${
      isLight ? 'bg-slate-50 border-slate-300 text-slate-800' : 'border-white/10 bg-[#05070c] text-slate-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isLight ? 'border-slate-300' : 'border-white/5'
        }`}>
          {/* Quick Page Links */}
          {onNavigate && (
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 text-xs font-mono">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    soundManager.playClick();
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-colors ${
                    isLight ? 'text-slate-700 hover:text-cyan-700 font-bold' : 'hover:text-cyan-400 text-slate-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}

          {/* External Social & Coding Profiles */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-800 hover:text-slate-950 shadow-sm'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
              }`}
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-800 hover:text-cyan-600 shadow-sm'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400'
              }`}
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.contacts.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-800 hover:text-amber-600 shadow-sm'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-amber-400'
              }`}
              title="CodeChef Profile (600+ Problems Solved)"
            >
              <CodeChefIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.contacts.email}`}
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-white border-slate-300 text-slate-800 hover:text-cyan-600 shadow-sm'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-cyan-400'
              }`}
              title="Email Bandi Praneeth"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className={isLight ? 'text-slate-700 font-medium' : 'text-slate-500'}>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 transition-colors ${
              isLight ? 'text-slate-700 hover:text-cyan-700 font-bold' : 'text-slate-400 hover:text-white'
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
