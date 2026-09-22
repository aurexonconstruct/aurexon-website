import React from 'react';
import { ChevronRight, ShieldCheck, ArrowRight, Building, Grid, Map } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface PropertyHeroProps {
  onNavigate?: (href: string) => void;
}

export const PropertyHero: React.FC<PropertyHeroProps> = ({ onNavigate }) => {
  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/get-a-quote');
    } else {
      window.location.href = '/get-a-quote';
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/businesses');
    } else {
      window.location.href = '/businesses';
    }
  };

  return (
    <section
      id="properties-hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#070E1B] border-b border-slate-800 overflow-hidden"
    >
      {/* Subtle Architectural Grid & Background Geometry */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-25" />
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#132B4F]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
          <button
            type="button"
            onClick={() => (onNavigate ? onNavigate('/') : (window.location.href = '/'))}
            className="hover:text-[#C5A869] transition-colors uppercase tracking-wider"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button
            type="button"
            onClick={() => (onNavigate ? onNavigate('/businesses') : (window.location.href = '/businesses'))}
            className="hover:text-[#C5A869] transition-colors uppercase tracking-wider"
          >
            Our Businesses
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#C5A869] uppercase tracking-wider font-semibold">
            Aurexon Properties
          </span>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow & Legal Operational Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs border bg-[#C5A869]/10 text-[#C5A869] border-[#C5A869]/30 font-mono">
              <Building className="w-3.5 h-3.5" />
              <span>AUREXON PROPERTIES</span>
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E1E38] border border-slate-800 rounded-xs text-[11px] font-mono text-slate-300 tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>DIVISION OF {COMPANY_DETAILS.legalName} • RC: {COMPANY_DETAILS.rcNumber}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            FROM LAND TO<br />
            <span className="text-[#C5A869]">LONG-TERM VALUE.</span>
          </h1>

          {/* Architectural Line Divider */}
          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-16 bg-[#C5A869]" />
            <span className="h-[2px] w-4 bg-[#C5A869]/40" />
            <span className="h-[2px] w-2 bg-slate-700" />
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            AUREXON PROPERTIES focuses on property development and real-estate opportunities,
            connecting land, planning, design, engineering and construction with long-term property value.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide border-l-2 border-[#C5A869]/60 pl-3">
            Operating Focus: Disciplined property development and real-estate management anchored in
            factual site due diligence, engineering coordination, and lifecycle asset utility.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/get-a-quote"
              onClick={handlePrimaryClick}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              DISCUSS A DEVELOPMENT
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="/businesses"
              onClick={handleSecondaryClick}
            >
              OUR BUSINESSES
            </Button>
          </div>

          {/* Value Highlights Bar */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80">
            <div className="p-3 bg-[#0E1E38]/60 border border-slate-800 rounded-xs flex items-center gap-3">
              <Map className="w-4 h-4 text-[#C5A869] shrink-0" />
              <div>
                <span className="block text-[10px] font-mono uppercase text-slate-400">Pillar 01</span>
                <span className="text-xs font-semibold text-slate-200">Land & Site Due Diligence</span>
              </div>
            </div>
            <div className="p-3 bg-[#0E1E38]/60 border border-slate-800 rounded-xs flex items-center gap-3">
              <Grid className="w-4 h-4 text-[#C5A869] shrink-0" />
              <div>
                <span className="block text-[10px] font-mono uppercase text-slate-400">Pillar 02</span>
                <span className="text-xs font-semibold text-slate-200">Integrated Technical Planning</span>
              </div>
            </div>
            <div className="p-3 bg-[#0E1E38]/60 border border-slate-800 rounded-xs flex items-center gap-3">
              <Building className="w-4 h-4 text-[#C5A869] shrink-0" />
              <div>
                <span className="block text-[10px] font-mono uppercase text-slate-400">Pillar 03</span>
                <span className="text-xs font-semibold text-slate-200">Enduring Built Utility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
