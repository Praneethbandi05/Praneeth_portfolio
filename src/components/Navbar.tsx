import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { soundManager } from '../utils/sound';

export type PageId = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'certifications' | 'blog' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  theme?: 'dark' | 'light';
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  theme = 'dark',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = theme === 'light';

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

  const handleNavClick = (id: PageId) => {
    soundManager.playClick();
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-3.5 backdrop-blur-xl transition-all duration-500 ${
        isLight
          ? 'bg-white/90 border-b border-slate-200/90 shadow-sm text-slate-800'
          : 'bg-[#0a0d18]/90 border-b border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-1">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/30 transition-shadow">
              <div
                className={`w-full h-full rounded-xl flex items-center justify-center font-display font-black text-sm tracking-wider ${
                  isLight ? 'bg-slate-900 text-white' : 'bg-[#080b14] text-white'
                }`}
              >
                BP
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`font-display font-bold text-base tracking-tight transition-colors ${
                  isLight ? 'text-slate-900 group-hover:text-cyan-600' : 'text-white group-hover:text-cyan-300'
                }`}
              >
                Bandi Praneeth
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div
            className={`hidden lg:flex items-center gap-1 rounded-full px-3 py-1 transition-colors ${
              isLight
                ? 'bg-slate-100/90 border border-slate-200'
                : 'bg-white/[0.03] border border-white/5'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all relative ${
                    isActive
                      ? isLight
                        ? 'text-cyan-600 font-semibold bg-white shadow-sm'
                        : 'text-cyan-300 font-semibold bg-white/[0.08] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Toolbar: Exclusive "View Resume" button (⌘K and Audio toggle removed per request) */}
          <div className="hidden sm:flex items-center">
            <a
              href="/Bandi_Praneeth_Resume.pdf"
              download="Bandi_Praneeth_Resume.pdf"
              onClick={() => soundManager.playPulse()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition-all"
              title="View & Download Official Uploaded Resume"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>View Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button - Shown exclusively on mobile */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`p-2 rounded-lg border transition-colors ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div
            className={`sm:hidden mt-2 p-4 rounded-2xl backdrop-blur-2xl border shadow-2xl space-y-3 animate-in slide-in-from-top-4 duration-200 ${
              isLight
                ? 'bg-white/95 border-slate-200 text-slate-900'
                : 'bg-[#0b0e1b]/95 border-white/10 text-white'
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-left text-xs font-medium transition-colors ${
                    currentPage === link.id
                      ? isLight
                        ? 'bg-cyan-500/15 text-cyan-700 border border-cyan-500/30'
                        : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : isLight
                      ? 'text-slate-700 hover:bg-slate-100'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className={`pt-2 border-t flex items-center justify-end ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              <a
                href="/Bandi_Praneeth_Resume.pdf"
                download="Bandi_Praneeth_Resume.pdf"
                onClick={() => soundManager.playPulse()}
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
