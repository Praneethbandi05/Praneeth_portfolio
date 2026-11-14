import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { fireSuccessConfetti } from '../utils/confetti';
import { useToast } from './Toast';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from './Icons';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    soundManager.playPulse();
    setIsSubmitting(true);

    const formspreeEndpoint = (PERSONAL_INFO.contacts as { formspreeEndpoint?: string }).formspreeEndpoint;
    const isConfigured = formspreeEndpoint && !formspreeEndpoint.includes('YOUR_FORM_ID');

    if (isConfigured) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setIsSubmitting(false);
          setSubmitted(true);
          fireSuccessConfetti();
          showToast(`Message delivered to ${PERSONAL_INFO.contacts.email}!`);
          setFormData({
            name: '',
            email: '',
            subject: 'General Technical Inquiry',
            message: '',
          });
          return;
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        console.warn('Form submission endpoint error, using mailto fallback:', err);
      }
    }

    // Direct mailto fallback so the message is composed and delivered straight to Praneeth's Gmail
    setIsSubmitting(false);
    const mailtoUrl = `mailto:${PERSONAL_INFO.contacts.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hello Praneeth,\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}\nTopic: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    fireSuccessConfetti();
    showToast(`Launching email client to send to ${PERSONAL_INFO.contacts.email}`);
  };

  return (
    <section className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-10rem)] animate-in fade-in duration-300">
      {/* Header */}
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b transition-colors ${
        isLight ? 'border-slate-300' : 'border-white/10'
      }`}>
        <div>
          <div className="flex items-center gap-2 text-cyan-600 font-mono text-xs uppercase tracking-widest mb-2 font-bold">
            <Mail className="w-4 h-4 text-cyan-600" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}>
            Get in Touch
          </h1>
        </div>
        <p className={`max-w-md text-sm leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
          Reach out for engineering opportunities, technical discussions, or collaborative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards & Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className={`p-6 sm:p-8 rounded-3xl glass-panel space-y-6 transition-all ${
            isLight ? 'bg-white border-slate-300 shadow-xl' : 'border border-white/10'
          }`}>
            <div>
              <h2 className={`text-xl sm:text-2xl font-display font-black mb-2 ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}>
                Direct Contact Information
              </h2>
              <p className={`text-xs leading-relaxed font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                Feel free to email, call, or explore my developer profiles.
              </p>
            </div>

            {/* Email Contact Item */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
              isLight ? 'bg-slate-50 border-slate-300' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className={`text-[10px] font-mono block font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.contacts.email}`}
                    className={`text-xs sm:text-sm font-bold truncate block transition-colors ${
                      isLight ? 'text-slate-950 hover:text-cyan-700' : 'text-white hover:text-cyan-300'
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
                    ? 'bg-white border-slate-300 text-slate-800 hover:text-slate-950 shadow-sm'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Contact Item */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              isLight ? 'bg-slate-50 border-slate-300' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono block font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  Phone Number
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.contacts.phone}`}
                  className={`text-xs sm:text-sm font-bold block transition-colors ${
                    isLight ? 'text-slate-950 hover:text-emerald-700' : 'text-white hover:text-emerald-300'
                  }`}
                >
                  {PERSONAL_INFO.contacts.phone}
                </a>
              </div>
            </div>

            {/* Location Item */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
              isLight ? 'bg-slate-50 border-slate-300' : 'bg-white/[0.02] border-white/5'
            }`}>
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono block font-bold ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  Geographic Location
                </span>
                <span className={`text-xs sm:text-sm font-bold ${isLight ? 'text-slate-950' : 'text-white'}`}>
                  {PERSONAL_INFO.contacts.location}
                </span>
              </div>
            </div>

            {/* Social & Coding Platform Links (GitHub, LinkedIn, CodeChef) */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all group ${
                  isLight
                    ? 'bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-white'
                }`}
                title="View GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-600 group-hover:text-cyan-600 transition-colors" />
                <span className="font-bold text-[11px]">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all group ${
                  isLight
                    ? 'bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-white'
                }`}
                title="View LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[11px]">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.contacts.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 text-xs font-bold transition-all group ${
                  isLight
                    ? 'bg-slate-50 hover:bg-slate-100 border-slate-300 text-slate-900 shadow-sm'
                    : 'bg-white/[0.03] hover:bg-white/[0.08] border-white/10 text-white'
                }`}
                title="View CodeChef Profile (600+ Solved)"
              >
                <CodeChefIcon className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[11px]">CodeChef</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-10 rounded-3xl glass-panel border transition-all ${
            isLight
              ? 'bg-white border-slate-300 shadow-xl'
              : 'border-white/10 bg-[#090d16]'
          }`}>
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-display font-black ${isLight ? 'text-slate-950' : 'text-white'}`}>
                  Message Dispatched!
                </h3>
                <p className={`text-sm max-w-md mx-auto font-medium ${isLight ? 'text-slate-700' : 'text-slate-400'}`}>
                  Thank you for reaching out! Inquiries are delivered directly to <span className="font-bold text-cyan-600">{PERSONAL_INFO.contacts.email}</span>. Praneeth will reply promptly.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.contacts.email}?subject=${encodeURIComponent('[Follow-up] Portfolio Inquiry')}`}
                    className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
                  >
                    Open Mail Client
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`px-5 py-2 rounded-xl text-xs font-mono font-bold border transition-colors ${
                      isLight
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300 shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                    }`}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                      Your Name <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-950 placeholder-slate-500 focus:bg-white focus:border-cyan-600'
                          : 'bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                      Email Address <span className="text-cyan-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                        isLight
                          ? 'bg-slate-50 border-slate-300 text-slate-950 placeholder-slate-500 focus:bg-white focus:border-cyan-600'
                          : 'bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-cyan-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-mono font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                      isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-950 focus:bg-white focus:border-cyan-600'
                        : 'bg-[#0f1424] border-white/10 text-white focus:border-cyan-400'
                    }`}
                  >
                    {subjects.map((sub) => (
                      <option key={sub} value={sub} className={isLight ? 'bg-white text-slate-900 font-medium' : 'bg-[#0a0d18] text-white'}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-mono font-bold ${isLight ? 'text-slate-800' : 'text-slate-300'}`}>
                    Message <span className="text-cyan-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your inquiry or project opportunity..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30 ${
                      isLight
                        ? 'bg-slate-50 border-slate-300 text-slate-950 placeholder-slate-500 focus:bg-white focus:border-cyan-600'
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

                <div className="pt-2 text-center">
                  <span className={`text-[11px] font-mono ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                    Prefer direct email?{' '}
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.contacts.email}?subject=${encodeURIComponent('[Portfolio Inquiry] Project / Opportunity')}`}
                    className={`text-[11px] font-mono font-bold underline transition-colors ${
                      isLight ? 'text-cyan-700 hover:text-cyan-900' : 'text-cyan-400 hover:text-cyan-300'
                    }`}
                  >
                    Open Gmail / Mail Client directly &rarr;
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
