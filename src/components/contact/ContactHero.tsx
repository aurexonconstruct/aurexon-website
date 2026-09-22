import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface ContactHeroProps {
  onNavigate?: (path: string) => void;
}

export const ContactHero: React.FC<ContactHeroProps> = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#070E1B] border-b border-[#1E293B]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C5A869_1px,transparent_1px),linear-gradient(to_bottom,#C5A869_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1528] border border-[#1E293B] text-[11px] font-mono tracking-widest text-[#C5A869] uppercase">
              <Mail className="w-3.5 h-3.5 text-[#C5A869]" />
              CONTACT AUREXON
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] mb-6">
            LET&apos;S DISCUSS <br className="hidden sm:inline" />
            <span className="text-[#C5A869]">YOUR PROJECT.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-8 max-w-2xl">
            Whether you are planning a construction project, require engineering support, are exploring property development opportunities or want to discuss professional collaboration, contact AUREXON to begin the conversation.
          </p>
        </div>
      </div>
    </section>
  );
};
