import React, { useState, useEffect, useRef } from 'react';
import { Search, FolderGit2, Briefcase, Award, Wrench, Mail, Volume2, VolumeX, ArrowRight, X, Home, User, BookOpen } from 'lucide-react';
import { soundManager } from '../utils/sound';
import { useToast } from './Toast';
import { PageId } from './Navbar';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  theme?: 'dark' | 'light';
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  soundEnabled,
  setSoundEnabled,
  theme = 'dark',
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { showToast } = useToast();
  const isLight = theme === 'light';

  const commands = [
    {
      id: 'page-home',
      category: 'Pages',
      label: 'Home Page',
      icon: Home,
      action: () => {
        onClose();
        onNavigate('home');
      },
    },
    {
      id: 'page-about',
      category: 'Pages',
      label: 'About Bandi Praneeth',
      icon: User,
      action: () => {
        onClose();
        onNavigate('about');
      },
    },
    {
      id: 'page-skills',
      category: 'Pages',
      label: 'Technical Skills Matrix',
      icon: Wrench,
      action: () => {
        onClose();
        onNavigate('skills');
      },
    },
    {
      id: 'page-projects',
      category: 'Pages',
      label: 'Projects (Rythu Nestham, Trust Chit, Cardio AI)',
      icon: FolderGit2,
      action: () => {
        onClose();
        onNavigate('projects');
      },
    },
    {
      id: 'page-experience',
      category: 'Pages',
      label: 'Internships (Gloom Dev & APSSDC)',
      icon: Briefcase,
      action: () => {
        onClose();
        onNavigate('experience');
      },
    },
    {
      id: 'page-certifications',
      category: 'Pages',
      label: 'Certifications & Achievements (AWS, NPTEL, etc.)',
      icon: Award,
      action: () => {
        onClose();
        onNavigate('certifications');
      },
    },
    {
      id: 'page-blog',
      category: 'Pages',
      label: 'Research Blog (Cardiovascular Retinal Fundus AI)',
      icon: BookOpen,
      action: () => {
        onClose();
        onNavigate('blog');
      },
    },
    {
      id: 'page-contact',
      category: 'Pages',
      label: 'Contact Bandi Praneeth',
      icon: Mail,
      action: () => {
        onClose();
        onNavigate('contact');
      },
    },
    {
      id: 'act-copy-email',
      category: 'Actions',
      label: `Copy Email (${PERSONAL_INFO.contacts.email})`,
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
        showToast('Email copied to clipboard!');
        onClose();
      },
    },
    {
      id: 'act-toggle-audio',
      category: 'Settings',
      label: soundEnabled ? 'Mute Sound Effects' : 'Enable High-Tech Audio FX',
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        const next = soundManager.toggle();
        setSoundEnabled(next);
        showToast(next ? 'Sound FX activated' : 'Sound muted');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        soundManager.playHover();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        soundManager.playHover();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          soundManager.playClick();
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      <div className={`relative w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col ${
        isLight
          ? 'bg-white border-slate-200 text-slate-800'
          : 'bg-[#0c101d] border-white/10 text-slate-200'
      }`}>
        <div className={`flex items-center gap-3 px-4 py-3.5 border-b ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0e1424] border-white/10'
        }`}>
          <Search className="w-5 h-5 text-cyan-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type to search pages, sections, actions..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className={`w-full bg-transparent text-sm sm:text-base focus:outline-none font-sans ${
              isLight ? 'text-slate-900 placeholder-slate-400' : 'text-white placeholder-slate-500'
            }`}
          />
          <button
            onClick={onClose}
            className={`p-1 rounded-lg transition-colors ${
              isLight
                ? 'text-slate-400 hover:text-slate-900 hover:bg-slate-200'
                : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    soundManager.playClick();
                    cmd.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm transition-all ${
                    isSelected
                      ? isLight
                        ? 'bg-cyan-500/10 text-cyan-900 border border-cyan-500/30'
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-white border border-cyan-500/30'
                      : isLight
                      ? 'text-slate-700 hover:bg-slate-100 border border-transparent'
                      : 'text-slate-300 hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950'
                          : isLight
                          ? 'bg-slate-100 text-slate-600'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium">{cmd.label}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{cmd.category}</div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 text-cyan-500 transition-transform ${
                      isSelected ? 'translate-x-1 opacity-100' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        <div className={`px-4 py-2.5 border-t flex items-center justify-between text-[11px] font-mono ${
          isLight ? 'bg-slate-50 border-slate-200 text-slate-500' : 'bg-[#0a0d18] border-white/5 text-slate-500'
        }`}>
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>Bandi Praneeth Portfolio</span>
        </div>
      </div>
    </div>
  );
};
