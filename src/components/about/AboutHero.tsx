import React from 'react';
import { ShieldCheck, ChevronDown, Compass, Award, Calendar, Layers } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface AboutHeroProps {
  onNavigate?: (href: string) => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ onNavigate }) => {
  const handleScrollTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="about-hero"
      className="relative min-h-[60vh] lg:min-h-[70vh] bg-[#070E1B] text-white pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden flex flex-col justify-center border-b border-slate-800"
    >
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-blueprint" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C5A869" strokeWidth="0.5" strokeOpacity="0.3" />
              <circle cx="0" cy="0" r="1.5" fill="#C5A869" fillOpacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-blueprint)" />
        </svg>
      </div>

      {/* Subtle Radial Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-radial from-[#132B4F]/30 via-transparent to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Breadcrumb / Section Identifier */}
        <div className="flex items-center gap-2 mb-6 text-[11px] font-mono tracking-wider uppercase">
          <button
            type="button"
            onClick={() => handleScrollTo('/')}
            className="text-slate-400 hover:text-[#C5A869] transition-colors"
          >
            HOME
          </button>
          <span className="text-slate-600">/</span>
          <span className="text-[#C5A869] font-semibold">ABOUT AUREXON</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 hidden sm:inline">CORPORATE PROFILE</span>
        </div>

        {/* Main Header Block */}
        <div className="max-w-4xl space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-10 w-auto max-w-[130px] bg-[#0E1E38] border border-[#C5A869]/50 flex items-center justify-center rounded-xs p-1 shrink-0 shadow-sm">
              <img
                src={COMPANY_DETAILS.logoUrl}
                alt={`${COMPANY_DETAILS.brandName} Logo`}
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.includes('/images/aurexon-logo.png')) {
                    target.src = COMPANY_DETAILS.logoFallbackUrl;
                  }
                }}
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E1E38] border border-slate-700/80 rounded-xs text-[11px] font-mono text-[#C5A869] tracking-widest uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>RC: {COMPANY_DETAILS.rcNumber} • {COMPANY_DETAILS.companyType}</span>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight uppercase">
            ABOUT <span className="text-[#C5A869]">AUREXON</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-1 pb-2">
            <p className="font-display text-base sm:text-xl font-semibold tracking-wider text-[#C5A869] uppercase">
              “{COMPANY_DETAILS.primarySlogan}”
            </p>
            <span className="hidden sm:inline text-slate-600 font-mono">|</span>
            <p className="text-xs sm:text-sm text-slate-300 tracking-wide uppercase font-mono">
              {COMPANY_DETAILS.supportingPositioning}
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl pt-2">
            {COMPANY_DETAILS.legalName} is an independent private Nigerian corporation operating
            across building construction, civil engineering consultancy, and property development.
            Founded on the conviction that durable structures begin with sound engineering calculations
            and rigorous pre-construction planning, we deliver coordinated projects engineered for lasting utility.
          </p>
        </div>

        {/* Quick Fact Grid */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
              Legal Identity
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
              {COMPANY_DETAILS.brandName}
            </span>
            <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
              Private Co. Ltd by Shares
            </span>
          </div>

          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
              Corporate Registration
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#C5A869] mt-1 block font-mono">
              RC: {COMPANY_DETAILS.rcNumber}
            </span>
            <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
              Registered in Nigeria
            </span>
          </div>

          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
              Incorporation Date
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white mt-1 block font-mono">
              {COMPANY_DETAILS.dateOfIncorporation}
            </span>
            <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
              Status: ACTIVE
            </span>
          </div>

          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
              Operating Scope
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
              3 Core Divisions
            </span>
            <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
              Construct • Engineer • Properties
            </span>
          </div>
        </div>

        {/* Section Jump Quick Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pt-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mr-2">
            Page Index:
          </span>
          {[
            { label: 'Who We Are', href: '#who-we-are' },
            { label: 'Founder & Leadership', href: '#founder-leadership' },
            { label: 'Business Structure', href: '#business-structure' },
            { label: 'Operating Principles', href: '#operating-principles' },
            { label: 'Property Philosophy', href: '#development-philosophy' },
            { label: 'The AUREXON Process', href: '#about-process' },
            { label: 'Contact', href: '#about-cta' },
          ].map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleScrollTo(item.href)}
              className="text-[11px] font-mono px-3 py-1 bg-[#0E1E38] hover:bg-[#132B4F] text-slate-300 hover:text-[#C5A869] border border-slate-800 hover:border-[#C5A869]/40 rounded-xs transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
