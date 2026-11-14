import React, { useEffect, useState } from 'react';
import { X, Download, Printer, ExternalLink, Award, CheckCircle, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS, ACHIEVEMENTS, SKILL_CATEGORIES } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireSuccessConfetti } from '../utils/confetti';
import { useToast } from './Toast';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();
  const [viewMode, setViewMode] = useState<'interactive' | 'pdf'>('interactive');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    soundManager.playPulse();
    fireSuccessConfetti();
    showToast('Downloading official resume PDF...');
    const link = document.createElement('a');
    link.href = '/Bandi_Praneeth_Resume.pdf';
    link.download = 'Bandi_Praneeth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl flex flex-col text-slate-200 custom-scrollbar">
        {/* Header Toolbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d1322]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-display font-semibold text-white tracking-wide text-sm sm:text-base">
              Bandi Praneeth — Official Resume / CV
            </h3>
            <span className="hidden sm:inline-block px-2 py-0.5 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-white/5 p-0.5 rounded-lg border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'interactive' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Text View
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === 'pdf' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-medium text-slate-300 transition-colors border border-white/10"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Direct Download of Attached Resume */}
            <a
              href="/Bandi_Praneeth_Resume.pdf"
              download="Bandi_Praneeth_Resume.pdf"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Body: PDF Embedded View or Interactive View */}
        {viewMode === 'pdf' ? (
          <div className="w-full h-[75vh] bg-[#090d16] p-4 flex flex-col items-center justify-center">
            <iframe
              src="/Bandi_Praneeth_Resume.pdf"
              title="Bandi Praneeth Resume PDF"
              className="w-full h-full rounded-xl border border-white/10"
            />
          </div>
        ) : (
          <div className="p-6 sm:p-10 space-y-8 bg-[#090d16] font-sans selection:bg-cyan-500/30">
            {/* Candidate Header */}
            <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl mt-2 leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 shrink-0 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <a href={`mailto:${PERSONAL_INFO.contacts.email}`} className="hover:text-cyan-300 transition-colors">
                    {PERSONAL_INFO.contacts.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.contacts.phone}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={PERSONAL_INFO.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    GitHub Profile <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-600">|</span>
                  <a
                    href={PERSONAL_INFO.contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Education (Percentages Removed) */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-semibold text-white">
                    {PERSONAL_INFO.education.degree}, {PERSONAL_INFO.education.institution}
                  </span>
                  <span className="text-xs font-mono text-cyan-300 font-bold">
                    {PERSONAL_INFO.education.period}
                  </span>
                </div>
                <div className="text-xs text-slate-400 flex flex-wrap gap-4 pt-1">
                  <span>Intermediate, {PERSONAL_INFO.intermediate.institution} ({PERSONAL_INFO.intermediate.period})</span>
                  <span>SSC, {PERSONAL_INFO.secondary.institution} ({PERSONAL_INFO.secondary.period})</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
                <CheckCircle className="w-4 h-4" /> Technical Skills
              </h2>
              <div className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2 text-xs">
                <div>
                  <strong className="text-white">Programming Languages: </strong>
                  <span className="text-slate-300">Python, Java, C</span>
                </div>
                <div>
                  <strong className="text-white">Cloud &amp; DevOps: </strong>
                  <span className="text-slate-300">AWS, Linux, Docker, Terraform</span>
                </div>
                <div>
                  <strong className="text-white">Databases: </strong>
                  <span className="text-slate-300">MySQL, Neo4j</span>
                </div>
                <div>
                  <strong className="text-white">Tools &amp; Platforms: </strong>
                  <span className="text-slate-300">Git, GitHub, n8n</span>
                </div>
                <div>
                  <strong className="text-white">Web Technologies: </strong>
                  <span className="text-slate-300">Html, Css, React</span>
                </div>
              </div>
            </div>

            {/* Internships */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
                <Briefcase className="w-4 h-4" /> Internships
              </h2>
              <div className="space-y-3">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <span className="font-semibold text-white text-sm">{exp.role}, </span>
                        <span className="text-cyan-400 text-xs font-mono">{exp.company}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                      {exp.description.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
                <Award className="w-4 h-4" /> Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="rounded-xl p-4 bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white text-sm">{proj.title}</h3>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-1.5 py-0.5 rounded">
                          {proj.techStack[0]}
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 mt-2 leading-relaxed">
                        {proj.keyFeatures.slice(0, 3).map((feat, i) => (
                          <li key={i}>{feat}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
                  <Award className="w-4 h-4" /> Certifications
                </h2>
                <div className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2 text-xs text-slate-300">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.id} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{c.title} — {c.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xs uppercase tracking-wider font-mono text-purple-400 flex items-center gap-2 font-semibold">
                  <Award className="w-4 h-4" /> Achievements
                </h2>
                <div className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2 text-xs text-slate-300">
                  {ACHIEVEMENTS.map((a, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white">{a.title}: </strong>
                        <span>{a.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-3 bg-[#0d1322]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Bandi Praneeth — Official Resume</span>
          <a
            href="/Bandi_Praneeth_Resume.pdf"
            download="Bandi_Praneeth_Resume.pdf"
            onClick={handleDownload}
            className="text-cyan-400 hover:text-cyan-300 font-mono font-medium flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" /> Download Attached PDF
          </a>
        </div>
      </div>
    </div>
  );
};
