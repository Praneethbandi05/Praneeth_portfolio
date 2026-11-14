import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, Tag, ArrowLeft, Eye, CheckCircle2, Share2, Layers, Sparkles } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { PageId } from './Navbar';
import { useToast } from './Toast';

interface BlogProps {
  onNavigate?: (page: PageId) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const { showToast } = useToast();
  const [activeHeatmap, setActiveHeatmap] = useState(true);
  const post = BLOG_POSTS[0];

  const handleShare = () => {
    soundManager.playClick();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!');
    }
  };

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-in fade-in duration-300">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
        {onNavigate && (
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('projects');
            }}
            className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </button>
        )}

        <button
          onClick={handleShare}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition-colors border border-white/10"
        >
          <Share2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Share Article</span>
        </button>
      </div>

      {/* Article Header */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            {post.date}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-slate-500" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
          {post.subtitle}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-white/[0.03] text-slate-400 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Abstract Callout */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-blue-950/20 to-purple-950/30 border border-cyan-500/30 mb-12 space-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block flex items-center gap-2">
          <BookOpen className="w-4 h-4" /> Research Abstract
        </span>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
          {post.abstract}
        </p>
      </div>

      {/* Interactive Visual Saliency Demo */}
      <div className="p-6 rounded-3xl glass-panel border border-white/10 mb-12 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <h3 className="font-display font-bold text-white text-base">
              Interactive Saliency Heatmap Simulator
            </h3>
          </div>
          <button
            onClick={() => {
              soundManager.playClick();
              setActiveHeatmap(!activeHeatmap);
            }}
            className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-colors flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{activeHeatmap ? 'Disable Heatmap' : 'Overlay Grad-CAM Saliency'}</span>
          </button>
        </div>

        <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center p-4">
          <div className="relative w-44 h-44 rounded-full border border-amber-900/60 bg-gradient-to-tr from-amber-950 via-rose-950 to-orange-950 shadow-inner flex items-center justify-center overflow-hidden">
            {/* Blood vessels mock */}
            <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path d="M50 50 Q60 20 80 15 M50 50 Q30 70 15 80 M50 50 Q75 65 90 85 M50 50 Q25 30 10 20" stroke="#f43f5e" strokeWidth="2.5" fill="none" />
                <circle cx="50" cy="50" r="8" fill="#fde047" opacity="0.6" />
              </svg>
            </div>

            {/* Grad-CAM Saliency Overlay */}
            {activeHeatmap && (
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/45 via-purple-500/35 to-amber-500/50 mix-blend-color-dodge animate-pulse" />
            )}

            <span className="relative z-10 text-[10px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded">
              {activeHeatmap ? 'Grad-CAM Heatmap Active' : 'Raw Retinal Image'}
            </span>
          </div>

          <div className="ml-6 space-y-1.5 text-xs text-slate-300 hidden sm:block max-w-xs">
            <div className="font-semibold text-white">Visual Audit Trail:</div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Grad-CAM gradients confirm that predictions are anchored on microvascular tortuosity and caliber ratios without optic disc artifact bias.
            </p>
            <div className="text-[10px] font-mono text-cyan-400 pt-1">
              Target Layer: ResNet-50 layer4.2.conv3
            </div>
          </div>
        </div>
      </div>

      {/* Article Sections */}
      <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
        {post.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              {section.heading}
            </h2>
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.callout && (
              <div className="p-4 rounded-xl bg-cyan-950/20 border-l-4 border-cyan-400 text-xs sm:text-sm text-cyan-200 font-mono my-4">
                {section.callout}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Academic References */}
      <div className="mt-14 pt-8 border-t border-white/10 space-y-3">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
          Scientific References &amp; Further Reading
        </h3>
        <ul className="space-y-2 text-xs font-mono text-slate-400">
          {post.references.map((ref, rIdx) => (
            <li key={rIdx} className="flex items-start gap-2">
              <span className="text-cyan-400">[{rIdx + 1}]</span>
              <span>{ref}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
