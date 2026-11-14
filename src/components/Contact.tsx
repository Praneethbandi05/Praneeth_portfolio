import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Download, FileText, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireSuccessConfetti } from '../utils/confetti';
import { useToast } from './Toast';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Technical Inquiry',
    message: '',
  });

  const subjects = [
    'Job / Internship Opportunity',
    'Full Stack / Cloud Project',
    'Technical Collaboration',
    'General Technical Inquiry',
  ];

  const handleCopyEmail = () => {
    soundManager.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.contacts.email);
    setCopiedEmail(true);
    showToast(`Email copied: ${PERSONAL_INFO.contacts.email}`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    soundManager.playPulse();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      fireSuccessConfetti();
      showToast('Message sent! Praneeth will respond promptly.');
      setFormData({
        name: '',
        email: '',
        subject: 'General Technical Inquiry',
        message: '',
      });
    }, 1200);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Connect with Bandi Praneeth
          </h1>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Reach out for software opportunities, full-stack &amp; cloud projects, or technical collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Info & Social Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
            <h2 className="font-display font-bold text-xl text-white">
              Direct Contact Details
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Feel free to send a direct message, reach out via email, or download my official resume PDF.
            </p>

            {/* Email Card with 1-Click Copy */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-[11px] font-mono text-slate-400">Email Address</div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.contacts.email}`}
                  className="font-mono text-xs sm:text-sm text-white hover:text-cyan-300 transition-colors truncate"
                >
                  {PERSONAL_INFO.contacts.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone
                </div>
                <div className="font-semibold text-white">
                  {PERSONAL_INFO.contacts.phone}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" /> Location
                </div>
                <div className="font-semibold text-white">
                  {PERSONAL_INFO.contacts.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center gap-2 text-xs font-medium text-white transition-all group"
              >
                <GithubIcon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center gap-2 text-xs font-medium text-white transition-all group"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Resume Direct Download Button */}
            <a
              href="/Bandi_Praneeth_Resume.pdf"
              download="Bandi_Praneeth_Resume.pdf"
              onClick={() => soundManager.playPulse()}
              className="w-full p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-white/10 bg-[#090d16]">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono border border-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-medium">
                    Purpose / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0d1322] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <label>
                      Message Content <span className="text-cyan-400">*</span>
                    </label>
                    <span className="text-slate-500">{formData.message.length} chars</span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, role, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
