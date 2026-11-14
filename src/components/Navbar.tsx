import React, { useState } from 'react';
import { Menu, X, Command, Volume2, VolumeX, Moon, Sun, Download, FileText } from 'lucide-react';
import { soundManager } from '../utils/sound';

export type PageId = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'certifications' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenCommandPalette,
  onOpenResume,
  soundEnabled,
  setSoundEnabled,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    soundManager.playClick();
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.location.hash = `#/${id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const active = soundManager.toggle();
    setSoundEnabled(active);
  };

  const toggleTheme = () => {
    soundManager.playClick();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-3 bg-[#0a0d18]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-1">
          {/* Logo / Name - WITHOUT DOMAIN TITLE */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/30 transition-shadow">
              <div className="w-full h-full bg-[#080b14] rounded-xl flex items-center justify-center font-display font-black text-sm tracking-wider text-white">
                BP
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Bandi Praneeth
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>
          </button>

          {/* Desktop Nav Items (Separate Pages) */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => soundManager.playHover()}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold bg-white/[0.08] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
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

          {/* Action Toolbar */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Command Palette Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                onOpenCommandPalette();
              }}
              title="Command Palette (Ctrl + K)"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 transition-colors"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">⌘K</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute Sound FX' : 'Enable High-Tech Audio FX'}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-400" />
              )}
            </button>

            {/* Resume Button - Direct Download & View */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  soundManager.playPulse();
                  onOpenResume();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium transition-all"
                title="View Resume Document"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View CV</span>
              </button>
              <a
                href="/Bandi_Praneeth_Resume.pdf"
                download="Bandi_Praneeth_Resume.pdf"
                onClick={() => soundManager.playPulse()}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
                title="Download Attached Resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/Bandi_Praneeth_Resume.pdf"
              download="Bandi_Praneeth_Resume.pdf"
              className="p-2 rounded-lg bg-cyan-500 text-slate-950 font-bold"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-[#0b0e1b]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-3 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-left text-xs font-medium transition-colors ${
                    currentPage === link.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs flex items-center gap-1.5"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs"
                >
                  {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="px-3 py-2 rounded-xl bg-white/5 text-slate-300 font-medium text-xs border border-white/10"
                >
                  View CV
                </button>
                <a
                  href="/Bandi_Praneeth_Resume.pdf"
                  download="Bandi_Praneeth_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
