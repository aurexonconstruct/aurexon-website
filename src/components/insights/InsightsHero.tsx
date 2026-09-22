import React from 'react';
import { BookOpen, ShieldCheck, ArrowRight, Layers, FileText } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface InsightsHeroProps {
  onNavigate?: (href: string) => void;
}

export const InsightsHero: React.FC<InsightsHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#070E1B] border-b border-slate-800 overflow-hidden">
      {/* Background Architectural Accent Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C5A869 1px, transparent 1px), linear-gradient(to bottom, #C5A869 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow and Corporate Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132B4F] border border-[#C5A869]/30 rounded-xs text-[#C5A869] text-xs font-mono font-bold tracking-widest uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              <span>AUREXON INSIGHTS</span>
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/80 border border-slate-700/80 rounded-xs text-slate-300 text-[11px] font-mono">
              <ShieldCheck className="w-3 h-3 text-[#C5A869]" />
              <span>AUREXON CONSTRUCTS NIGERIA LIMITED • RC: 9729028</span>
            </div>
          </div>

          {/* Main Display Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-6">
            IDEAS. KNOWLEDGE. <br className="hidden sm:inline" />
            <span className="text-[#C5A869]">PERSPECTIVE.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mb-8">
            AUREXON Insights provides a space for technical perspectives, professional knowledge and practical observations across construction, engineering, project delivery and property development.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button
              variant="gold"
              onClick={() => onNavigate?.('/contact')}
              className="group"
            >
              <span>CONTACT AUREXON</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline-white"
              onClick={() => onNavigate?.('/get-a-quote')}
            >
              <span>GET A QUOTE</span>
            </Button>
            <a
              href="#insights-library"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#C5A869] transition-colors py-2 px-3"
            >
              <Layers className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>EXPLORE LIBRARY</span>
            </a>
          </div>

          {/* Discreet Publishing Status Label (No Fabricated Article Count) */}
          <div className="p-4 sm:p-5 bg-[#0E1E38] border border-slate-800 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#C5A869] animate-pulse mt-1.5 shrink-0" />
              <div>
                <div className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  INSIGHTS DEVELOPING
                </div>
                <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                  Approved insight articles and professional perspectives will be published as AUREXON's knowledge library develops.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 font-mono text-[11px] text-[#C5A869] bg-[#132B4F]/60 px-3 py-1.5 rounded-xs border border-slate-700/60">
              <FileText className="w-3.5 h-3.5" />
              <span>PROFESSIONAL KNOWLEDGE REPOSITORY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
