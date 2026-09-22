import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Mail } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface InsightsCTAProps {
  onNavigate?: (href: string) => void;
}

export const InsightsCTA: React.FC<InsightsCTAProps> = ({ onNavigate }) => {
  return (
    <section id="insights-cta" className="py-20 bg-[#0E1E38] border-b border-slate-800 relative overflow-hidden">
      {/* Background Architectural Accent Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C5A869 1px, transparent 1px), linear-gradient(to bottom, #C5A869 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132B4F] border border-[#C5A869]/30 rounded-xs text-[#C5A869] text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PROFESSIONAL DIALOGUE & EDITORIAL CONTACT</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-6 leading-tight">
            HAVE A PERSPECTIVE <br className="hidden sm:inline" />
            <span className="text-[#C5A869]">TO SHARE?</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            AUREXON welcomes appropriate professional perspectives, technical knowledge and built-environment contributions that align with its areas of activity and publishing standards.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button
              variant="gold"
              onClick={() => onNavigate?.('/contact')}
              className="group text-sm sm:text-base px-8 py-3.5"
            >
              <span>CONTACT AUREXON</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline-white"
              onClick={() => onNavigate?.('/get-a-quote')}
              className="text-sm sm:text-base px-8 py-3.5"
            >
              <span>GET A QUOTE</span>
            </Button>
          </div>

          {/* Corporate Verification Footer */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
              <span>AUREXON CONSTRUCTS NIGERIA LIMITED</span>
            </div>
            <span>•</span>
            <div>RC: 9729028</div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C5A869]" />
              <a
                href="mailto:aurexonconstructnig.ltd@gmail.com"
                className="hover:text-white transition-colors"
              >
                aurexonconstructnig.ltd@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
