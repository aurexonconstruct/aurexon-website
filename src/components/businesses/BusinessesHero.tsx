import React from 'react';
import { ShieldCheck, ArrowDown, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface BusinessesHeroProps {
  onNavigate?: (href: string) => void;
}

export const BusinessesHero: React.FC<BusinessesHeroProps> = ({ onNavigate }) => {
  const handleNavClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="businesses-hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#070E1B] border-b border-slate-800 overflow-hidden"
    >
      {/* Blueprint Structural Grid Lines */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#132B4F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb Bar */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <button
            type="button"
            onClick={() => handleNavClick('/')}
            className="hover:text-[#C5A869] transition-colors uppercase tracking-wider"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#C5A869] uppercase tracking-wider font-semibold">
            Our Businesses
          </span>
        </div>

        {/* Main Header Block */}
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow & Corporate Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs border bg-[#C5A869]/10 text-[#C5A869] border-[#C5A869]/30 font-mono">
              OUR BUSINESSES
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E1E38] border border-slate-800 rounded-xs text-[11px] font-mono text-slate-300 tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>RC: {COMPANY_DETAILS.rcNumber} • {COMPANY_DETAILS.legalName}</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase">
            THREE DIVISIONS.<br />
            <span className="text-[#C5A869]">ONE INTEGRATED APPROACH.</span>
          </h1>

          {/* Architectural Accent Line */}
          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-16 bg-[#C5A869]" />
            <span className="h-[2px] w-4 bg-[#C5A869]/40" />
            <span className="h-[2px] w-2 bg-slate-700" />
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            AUREXON brings construction, engineering and property development together through a coordinated
            operating model focused on disciplined planning, technical excellence and responsible project delivery.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono tracking-wide border-l-2 border-[#C5A869]/60 pl-3">
            Note: Division involvement is tailored directly to project scope—not every engagement requires all three divisions.
          </p>
        </div>

        {/* Division Quick Jump Navigation Cards */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 'construct',
              num: '01',
              title: 'AUREXON CONSTRUCT',
              tag: 'Building & Civil Works',
              href: '#construct',
            },
            {
              id: 'engineering',
              num: '02',
              title: 'AUREXON ENGINEERING',
              tag: 'Civil & Structural Design',
              href: '#engineering',
            },
            {
              id: 'properties',
              num: '03',
              title: 'AUREXON PROPERTIES',
              tag: 'Real Estate & Value Lifecycle',
              href: '#properties',
            },
            {
              id: 'integrated-model',
              num: '04',
              title: 'INTEGRATED MODEL',
              tag: 'Coordinated Delivery Flow',
              href: '#integrated-model',
            },
          ].map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="p-4 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/60 rounded-xs transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#C5A869]">
                  {item.num}
                </span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#C5A869] group-hover:translate-y-0.5 transition-all" />
              </div>
              <div>
                <p className="font-display text-xs font-bold text-white group-hover:text-[#C5A869] transition-colors">
                  {item.title}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                  {item.tag}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
