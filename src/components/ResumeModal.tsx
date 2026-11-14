import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
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

  const handleSave = () => {
    soundManager.playPulse();
    fireSuccessConfetti();
    showToast('Saving official resume PDF...');
    const link = document.createElement('a');
    link.href = '/Bandi_Praneeth_Resume.pdf';
    link.download = 'Bandi_Praneeth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[94vh] rounded-2xl bg-[#0c101d] border border-white/10 shadow-2xl flex flex-col text-slate-200 overflow-hidden">
        {/* Header Toolbar: Save PDF & Fullscreen View */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e1424] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white tracking-wide text-sm sm:text-base">
                Bandi Praneeth — Official Resume
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Official PDF Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Bandi_Praneeth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 transition-colors border border-white/10"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open in New Tab</span>
            </a>

            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save PDF</span>
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

        {/* Entire PDF Document View */}
        <div className="flex-1 w-full bg-[#080b13] p-2 sm:p-4 flex flex-col items-center justify-center">
          <iframe
            src="/Bandi_Praneeth_Resume.pdf#toolbar=0"
            title="Bandi Praneeth Resume PDF"
            className="w-full h-[76vh] rounded-xl border border-white/10 bg-white"
          />
        </div>

        {/* Minimal Footer */}
        <div className="px-6 py-2.5 bg-[#0a0d18] border-t border-white/10 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="font-mono text-[11px] text-slate-500">
            {PERSONAL_INFO.contacts.email} • {PERSONAL_INFO.contacts.phone}
          </span>
          <button
            onClick={handleSave}
            className="text-cyan-400 hover:text-cyan-300 font-mono text-xs flex items-center gap-1 font-medium"
          >
            <Download className="w-3.5 h-3.5" /> Save Official PDF
          </button>
        </div>
      </div>
    </div>
  );
};
