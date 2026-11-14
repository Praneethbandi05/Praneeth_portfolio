import React, { useState, useEffect } from 'react';
import { ToastProvider } from './components/Toast';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ResearchLab } from './components/ResearchLab';
import { Certifications } from './components/Certifications';
import { CodingActivity } from './components/CodingActivity';
import { AskPortfolioAI } from './components/AskPortfolioAI';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';
import { soundManager } from './utils/sound';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundManager.enabled);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Global keydown for Command Palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ToastProvider>
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-[#07090e] text-[#f1f5f9]' : 'bg-[#0f1422] text-[#f8fafc]'} selection:bg-cyan-500/20 selection:text-cyan-300 font-sans antialiased overflow-x-hidden transition-colors duration-300`}>
        {/* Desktop Custom Follower Cursor */}
        <CustomCursor />

        {/* Floating Navigation */}
        <Navbar
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <ResearchLab />
          <Certifications />
          <CodingActivity />
          <AskPortfolioAI />
          <Contact onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Command Palette */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />

        {/* Global Resume Viewer / Download Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ToastProvider>
  );
}
