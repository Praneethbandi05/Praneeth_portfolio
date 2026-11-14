import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Award, CheckCircle, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireSuccessConfetti } from '../utils/confetti';
import { useToast } from './Toast';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();

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

  const handlePrint = () => {
    soundManager.playClick();
    window.print();
  };

  const handleDownload = () => {
    soundManager.playPulse();
    fireSuccessConfetti();
    showToast('Resume ready! Initiating print-to-PDF / download.');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl flex flex-col text-slate-200 custom-scrollbar">
        {/* Header Toolbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d1322]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-display font-semibold text-white tracking-wide text-sm sm:text-base">
              Bandi Praneeth — Official Resume / CV
            </h3>
            <span className="hidden sm:inline-block px-2 py-0.5 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Verified ATS Compliant
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-medium text-slate-300 transition-colors border border-white/10"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs sm:text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
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

        {/* Resume Sheet Body */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#090d16] font-sans selection:bg-cyan-500/30">
          {/* Candidate Bio Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-cyan-400 font-mono text-sm sm:text-base mt-1 font-medium">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-2 leading-relaxed">
                Motivated AI & Machine Learning undergraduate with hands-on internship experience in Cloud Architecture (AWS Certified), Full-Stack Microservices, and Autonomous AI Agent development.
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
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.contacts.location}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={PERSONAL_INFO.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  github.com/{PERSONAL_INFO.contacts.githubUsername} <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <span className="font-semibold text-white">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {PERSONAL_INFO.education.period} | Aggregate: {PERSONAL_INFO.education.grade}
                </span>
              </div>
              <div className="text-xs text-slate-400">
                {PERSONAL_INFO.education.institution}, {PERSONAL_INFO.education.location}
              </div>
              <div className="text-xs text-slate-400 pt-1 flex flex-wrap gap-1.5">
                <span className="text-slate-500 font-mono">Prior Academics:</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Intermediate (MPC) - 90.40% (Sasi Jr College)</span>
                <span className="px-2 py-0.5 rounded bg-white/5">SSC (Class X) - 90.30% (ZPH School)</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
              <Briefcase className="w-4 h-4" /> Work Experience & Internships
            </h2>
            <div className="space-y-3">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-semibold text-white text-sm">{exp.role}</span>
                      <span className="text-cyan-400 text-xs ml-2 font-mono">@ {exp.company}</span>
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
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
              <Award className="w-4 h-4" /> Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {PROJECTS.slice(0, 4).map((proj) => (
                <div key={proj.id} className="rounded-xl p-4 bg-white/[0.02] border border-white/5 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-semibold text-white text-sm">{proj.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {proj.solution}
                    </p>
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

          {/* Technical Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
              <CheckCircle className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="rounded-xl p-4 bg-white/[0.02] border border-white/5 space-y-2.5 text-xs">
              <div>
                <span className="font-medium text-slate-200">Programming Languages: </span>
                <span className="text-slate-400">Python (Advanced), Java, C, SQL, Dart, JavaScript/TypeScript</span>
              </div>
              <div>
                <span className="font-medium text-slate-200">AI & Machine Learning: </span>
                <span className="text-slate-400">PyTorch, TensorFlow, CNNs, Explainable AI (Grad-CAM), NLP, Generative AI, Prompt Engineering</span>
              </div>
              <div>
                <span className="font-medium text-slate-200">Cloud & DevOps: </span>
                <span className="text-slate-400">AWS (EC2, S3, IAM, VPC, Lambda, CloudWatch, Route 53, Auto Scaling), Docker, Terraform, Git, Linux</span>
              </div>
              <div>
                <span className="font-medium text-slate-200">Full Stack & Databases: </span>
                <span className="text-slate-400">React.js, FastAPI, Node.js, Flutter, MongoDB, MySQL, SQLite, Neo4j</span>
              </div>
            </div>
          </div>

          {/* Certifications & Key Achievements */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase tracking-wider font-mono text-cyan-400 flex items-center gap-2 font-semibold">
              <Award className="w-4 h-4" /> Certifications & Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">AWS Certified Cloud Practitioner (CLF-C02)</div>
                  <div className="text-slate-400 text-[11px]">Amazon Web Services • 2026</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Salesforce Certified Agentforce Specialist</div>
                  <div className="text-slate-400 text-[11px]">Salesforce • 2026</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">600+ Algorithmic Problems Solved</div>
                  <div className="text-slate-400 text-[11px]">CodeChef, HackerRank & LeetCode</div>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">1st Place — ACM Student Chapter Hackathon</div>
                  <div className="text-slate-400 text-[11px]">Vasireddy Venkatadri Institute of Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-3 bg-[#0d1322]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Official CV Document of Bandi Praneeth</span>
          <button
            onClick={handleDownload}
            className="text-cyan-400 hover:text-cyan-300 font-mono font-medium flex items-center gap-1"
          >
            <Download className="w-3 h-3" /> Save to PDF
          </button>
        </div>
      </div>
    </div>
  );
};
