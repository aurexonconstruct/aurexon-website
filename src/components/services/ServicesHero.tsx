import React from 'react';
import { ChevronRight, ShieldCheck, ArrowRight, Layers, Building2, HardHat, Compass } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface ServicesHeroProps {
  onNavigate?: (href: string) => void;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({ onNavigate }) => {
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
      id="services-hero"
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
          <span className="text-[#C5A869] uppercase tracking-wider font-semibold">
            Our Services
          </span>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow & Legal Operational Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs border bg-[#C5A869]/10 text-[#C5A869] border-[#C5A869]/30 font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>OUR SERVICES</span>
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E1E38] border border-slate-800 rounded-xs text-[11px] font-mono text-slate-300 tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>{COMPANY_DETAILS.legalName} • RC: {COMPANY_DETAILS.rcNumber}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            ENGINEERING, CONSTRUCTION<br />
            <span className="text-[#C5A869]">& PROPERTY SERVICES.</span>
          </h1>

          {/* Architectural Line Divider */}
          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-16 bg-[#C5A869]" />
            <span className="h-[2px] w-4 bg-[#C5A869]/40" />
            <span className="h-[2px] w-2 bg-slate-700" />
          </div>

          {/* Supporting Copy strictly according to prompt */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            AUREXON provides integrated services across building construction, civil and structural engineering, project delivery and property development, with each service delivered according to project requirements, scope and delivery structure.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide border-l-2 border-[#C5A869]/60 pl-3">
            Scope Notice: Service participation is configured according to specific contract specifications, technical demands, and client delivery mandates. Individual projects do not automatically utilize every division or service offering.
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
              DISCUSS YOUR PROJECT
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

          {/* Divisional Connection Quick Strip */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80">
            <div className="p-3 bg-[#0E1E38]/60 border border-slate-800 rounded-xs flex items-center gap-3">
              <HardHat className="w-4 h-4 text-[#C5A869] shrink-0" />
              <div>
                <span className="block text-[10px] font-mono uppercase text-slate-400">Execution</span>
                <span className="text-xs font-semibold text-slate-200">AUREXON CONSTRUCT</span>
              </div>
            </div>
            <div className="p-3 bg-[#0E1E38]/60 border border-slate-800 rounded-xs flex items-center gap-3">
              <Compass className="w-4 h-4 text-[#C5A869] shrink-0" />
              <div>
                <span className="block text-[10px] font-mono uppercase text-slate-400">Design & Supervision</span>
                <span className="text-xs font-semibold text-slate-200">AUREXON ENGINEERING</span>
              </div>
            </div>
            <div className="p-3 bg-[#0E1E38]/60 border border-slate-800 rounded-xs flex items-center gap-3">
              <Building2 className="w-4 h-4 text-[#C5A869] shrink-0" />
              <div>
                <span className="block text-[10px] font-mono uppercase text-slate-400">Development</span>
                <span className="text-xs font-semibold text-slate-200">AUREXON PROPERTIES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
