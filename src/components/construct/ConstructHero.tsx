import React from 'react';
import { ChevronRight, ShieldCheck, ArrowRight, Layers, Compass, HardHat } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface ConstructHeroProps {
  onNavigate?: (href: string) => void;
}

export const ConstructHero: React.FC<ConstructHeroProps> = ({ onNavigate }) => {
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
      id="construct-hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#070E1B] border-b border-slate-800 overflow-hidden"
    >
      {/* Blueprint Grid Structural Lines */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-30" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#132B4F]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 flex-wrap">
          <button
            type="button"
            onClick={() => onNavigate ? onNavigate('/') : (window.location.href = '/')}
            className="hover:text-[#C5A869] transition-colors uppercase tracking-wider"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button
            type="button"
            onClick={() => onNavigate ? onNavigate('/businesses') : (window.location.href = '/businesses')}
            className="hover:text-[#C5A869] transition-colors uppercase tracking-wider"
          >
            Our Businesses
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#C5A869] uppercase tracking-wider font-semibold">
            Aurexon Construct
          </span>
        </div>

        {/* Main Hero Header Block */}
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow & Legal Operational Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs border bg-[#C5A869]/10 text-[#C5A869] border-[#C5A869]/30 font-mono">
              <HardHat className="w-3.5 h-3.5" />
              <span>AUREXON CONSTRUCT</span>
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E1E38] border border-slate-800 rounded-xs text-[11px] font-mono text-slate-300 tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>Division of {COMPANY_DETAILS.legalName} • RC: {COMPANY_DETAILS.rcNumber}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            BUILDING WITH DISCIPLINE.<br />
            <span className="text-[#C5A869]">DELIVERING WITH PURPOSE.</span>
          </h1>

          {/* Architectural Line Divider */}
          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-16 bg-[#C5A869]" />
            <span className="h-[2px] w-4 bg-[#C5A869]/40" />
            <span className="h-[2px] w-2 bg-slate-700" />
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            AUREXON CONSTRUCT focuses on the execution and delivery of building, civil and infrastructure works through
            disciplined planning, coordinated construction activities and responsible project execution.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide border-l-2 border-[#C5A869]/60 pl-3">
            Operational Scope: Execution-focused construction division operating under unified corporate governance and engineering oversight.
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
              GET A QUOTE
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
        </div>

        {/* Division Quick Summary Spec Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block">
              Core Mandate
            </span>
            <span className="font-display text-sm font-bold text-white uppercase mt-1 block">
              Execution & Site Delivery
            </span>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Transforming approved drawings into durable physical structures.
            </p>
          </div>

          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block">
              Operating Doctrine
            </span>
            <span className="font-display text-sm font-bold text-[#C5A869] uppercase mt-1 block">
              Plan Well. Build Once.
            </span>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Controlled planning to minimize site errors and unnecessary rework.
            </p>
          </div>

          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block">
              Corporate Governance
            </span>
            <span className="font-display text-sm font-bold text-white uppercase mt-1 block">
              AUREXON CONSTRUCTS NIG. LTD.
            </span>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Integral division of RC: 9729028, ensuring unified legal accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
