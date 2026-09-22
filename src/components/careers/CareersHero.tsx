import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface CareersHeroProps {
  onNavigate: (path: string) => void;
}

export const CareersHero: React.FC<CareersHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#070E1B] border-b border-[#1E293B]">
      {/* Structural background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C5A869_1px,transparent_1px),linear-gradient(to_bottom,#C5A869_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1528] border border-[#1E293B] text-[11px] font-mono tracking-widest text-[#C5A869] uppercase">
              <Briefcase className="w-3.5 h-3.5 text-[#C5A869]" />
              AUREXON CAREERS
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#0B1528] border border-[#C5A869]/30 text-[10px] font-mono tracking-widest text-[#C5A869] uppercase">
              CAREERS DEVELOPING
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] mb-6">
            BUILD YOUR CAREER. <br className="hidden sm:inline" />
            <span className="text-[#C5A869]">BUILD THE FUTURE.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-10 max-w-2xl">
            AUREXON brings together construction, engineering, project delivery and property development. As the organization grows, this space will provide information about approved professional opportunities and career pathways.
          </p>

          {/* Primary Action */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              onClick={() => onNavigate('/contact')}
              className="flex items-center gap-2"
            >
              CONTACT AUREXON
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const el = document.getElementById('career-areas');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              EXPLORE CAREER AREAS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
