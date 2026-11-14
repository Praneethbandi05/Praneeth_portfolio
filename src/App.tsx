import React, { useState, useEffect } from 'react';
import { ToastProvider } from './components/Toast';
import { Navbar, PageId } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { MouseBlurLight } from './components/MouseBlurLight';
import { soundManager } from './utils/sound';
import { ArrowRight, User, Wrench, FolderGit2, Briefcase, Award, BookOpen } from 'lucide-react';

// Alternating Dark / Light page theme mapping for dynamic UI transitions
export const PAGE_THEMES: Record<PageId, 'dark' | 'light'> = {
  home: 'dark',
  about: 'light',
  skills: 'dark',
  projects: 'light',
  experience: 'dark',
  certifications: 'light',
  blog: 'dark',
  contact: 'light',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(soundManager.enabled);

  const currentTheme = PAGE_THEMES[currentPage] || 'dark';
  const isLight = currentTheme === 'light';

  // Hash-based page routing support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'blog', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    soundManager.playClick();
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K
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
      <div
        className={`min-h-screen transition-colors duration-500 font-sans antialiased overflow-x-hidden flex flex-col justify-between ${
          isLight ? 'light-mode bg-[#f8fafc] text-[#0f172a]' : 'dark bg-[#07090e] text-[#f1f5f9]'
        }`}
      >
        {/* Soft Ambient Light Blur tracking mouse cursor */}
        <MouseBlurLight theme={currentTheme} />

        {/* Clean Top Navbar with exclusive "View Resume" button */}
        <Navbar
          currentPage={currentPage}
          setCurrentPage={navigateTo}
          theme={currentTheme}
        />

        {/* Main Content Area - Render strictly the Selected Page */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <div className="space-y-16">
              <Hero onNavigate={navigateTo} />

              {/* Quick Navigation Cards on Home Page */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-center max-w-xl mx-auto mb-10">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    Explore Dedicated Sections
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2">
                    Click to navigate to individual pages for in-depth credentials, case studies, and research.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div
                    onClick={() => navigateTo('about')}
                    className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit">
                        <User className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                        About &amp; Education
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Academic background at Vasireddy Venkatadri Institute of Technology and personal engineering objective.
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                      <span>View Profile</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div
                    onClick={() => navigateTo('skills')}
                    className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                        Skills Matrix
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Python, Java, C, AWS, Linux, Docker, Terraform, MySQL, Neo4j, n8n, React.
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                      <span>Inspect Skills</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div
                    onClick={() => navigateTo('projects')}
                    className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 w-fit">
                        <FolderGit2 className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                        Verified Projects
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Rythu Nestham (Flutter), Trust Chit (React/AWS), and Cardiovascular Risk Classification.
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                      <span>Explore Projects</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div
                    onClick={() => navigateTo('experience')}
                    className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                        Internship Experience
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Cloud &amp; Full Stack at Gloom Dev and DevOps at APSSDC with AWS and Linux.
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                      <span>Review Internships</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div
                    onClick={() => navigateTo('certifications')}
                    className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit">
                        <Award className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                        Certifications &amp; Awards
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        AWS CLF-C02, Salesforce Agentforce, NPTEL Python, HCI, and 600+ CodeChef solutions.
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                      <span>View Certifications</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div
                    onClick={() => navigateTo('blog')}
                    className="p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                        Research Blog
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Deep dive on Retinal Fundus AI, microvascular biomarkers, and Grad-CAM explainability.
                      </p>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                      <span>Read Research Blog</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {currentPage === 'about' && <About onNavigate={navigateTo} theme={currentTheme} />}
          {currentPage === 'skills' && <Skills />}
          {currentPage === 'projects' && <Projects onNavigate={navigateTo} theme={currentTheme} />}
          {currentPage === 'experience' && <Experience onNavigate={navigateTo} />}
          {currentPage === 'certifications' && <Certifications theme={currentTheme} />}
          {currentPage === 'blog' && <Blog onNavigate={navigateTo} />}
          {currentPage === 'contact' && <Contact theme={currentTheme} />}
        </main>

        {/* Global Footer on All Pages */}
        <Footer onNavigate={navigateTo} theme={currentTheme} />

        {/* Global Command Palette (activated via Ctrl+K / Cmd+K) */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onNavigate={navigateTo}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          theme={currentTheme}
        />
      </div>
    </ToastProvider>
  );
}
