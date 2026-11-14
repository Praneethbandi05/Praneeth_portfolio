import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireSuccessConfetti } from '../utils/confetti';
import { useToast } from './Toast';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  theme?: 'dark' | 'light';
}

export const Contact: React.FC<ContactProps> = ({ theme = 'light' }) => {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const isLight = theme === 'light';

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
    }, 1000);
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-in fade-in duration-300">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b transition-colors ${
        isLight ? 'border-slate-200' : 'border-white/10'
      }`}>
        <div>
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <Mail className="w-4 h-4" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Get in Touch
          </h1>
        </div>
        <p className={`max-w-md text-sm leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
          Reach out for engineering opportunities, technical discussions, or collaborative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl glass-panel space-y-6 transition-all ${
            isLight ? 'bg-white/95 border-slate-200 shadow-md' : 'border border-white/10'
          }`}>
            <div>
              <h2 className={`text-xl sm:text-2xl font-display font-bold mb-2 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Direct Contact Information
              </h2>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                Feel free to email, call, or reach out on professional platforms.
              </p>
            </div>

            {/* Email Contact Item */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className={`text-[10px] font-mono block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.contacts.email}`}
                    className={`text-xs sm:text-sm font-semibold truncate block transition-colors ${
                      isLight ? 'text-slate-900 hover:text-cyan-600' : 'text-white hover:text-cyan-300'
                    }`}
                  >
                    {PERSONAL_INFO.contacts.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`p-2 rounded-lg border transition-colors shrink-0 ${
                  isLight
                    ? 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Contact Item */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Phone Number
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.contacts.phone}`}
                  className={`text-xs sm:text-sm font-semibold block transition-colors ${
                    isLight ? 'text-slate-900 hover:text-emerald-600' : 'text-white hover:text-emerald-300'
                  }`}
                >
                  {PERSONAL_INFO.contacts.phone}
                </a>
              </div>
            </div>

            {/* Location Item */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono block ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Geographic Location
                </span>
                <span className={`text-xs sm:text-sm font-semibold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  {PERSONAL_INFO.contacts.location}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs font-medium transition-all ${
                  isLight
                    ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-white'
                }`}
              >
                <GithubIcon className="w-4 h-4 text-slate-500" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs font-medium transition-all ${
                  isLight
                    ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-white'
                }`}
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-10 rounded-3xl glass-panel border transition-all ${
            isLight
              ? 'bg-white/95 border-slate-200 shadow-xl'
              : 'border-white/10 bg-[#090d16]'
          }`}>
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-display font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Message Sent!
                </h3>
                <p className={`text-sm max-w-md mx-auto ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-mono border transition-colors ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                      : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  }`}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Your Name <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-500'
                          : 'bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                      Email Address <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-500'
                          : 'bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-mono font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-cyan-500'
                        : 'bg-[#0f1424] border-white/10 text-white focus:border-cyan-400'
                    }`}
                  >
                    {subjects.map((sub) => (
                      <option key={sub} value={sub} className={isLight ? 'bg-white text-slate-900' : 'bg-[#0a0d18] text-white'}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-mono font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your inquiry or project opportunity..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-500'
                        : 'bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-cyan-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
