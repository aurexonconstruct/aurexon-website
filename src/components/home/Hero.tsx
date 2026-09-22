import React from 'react';
import { ArrowRight, ChevronDown, Compass, Shield, Layers } from 'lucide-react';
import { COMPANY_DETAILS, BUSINESS_DIVISIONS } from '../../data/companyData.ts';
import { Button } from '../common/Button.tsx';

interface HeroProps {
  onNavigate?: (href: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
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
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 pb-16 flex flex-col justify-between bg-[#0B1528] border-b border-slate-800 overflow-hidden"
    >
      {/* Blueprint Grid & Technical Vector Backdrop */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-60" />

      {/* Architectural Geometric Beam & Elevation Accent Graphic (SVG) */}
      <div className="absolute top-0 right-0 w-full md:w-3/5 h-full pointer-events-none opacity-25 overflow-hidden">
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full text-[#C5A869]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Structural Framing Grid */}
          <g strokeDasharray="4 4" stroke="rgba(197, 168, 105, 0.3)">
            <line x1="100" y1="0" x2="100" y2="800" />
            <line x1="300" y1="0" x2="300" y2="800" />
            <line x1="500" y1="0" x2="500" y2="800" />
            <line x1="700" y1="0" x2="700" y2="800" />
            <line x1="0" y1="200" x2="800" y2="200" />
            <line x1="0" y1="400" x2="800" y2="400" />
            <line x1="0" y1="600" x2="800" y2="600" />
          </g>

          {/* Isometric Structural Truss / Elevation Frame */}
          <g stroke="rgba(197, 168, 105, 0.7)" strokeWidth="1.5">
            <polygon points="200,650 400,250 600,650" fill="rgba(19, 43, 79, 0.2)" />
            <line x1="200" y1="650" x2="600" y2="650" />
            <line x1="400" y1="250" x2="400" y2="650" strokeDasharray="3 3" />
            <line x1="300" y1="450" x2="500" y2="450" />
            <line x1="250" y1="550" x2="400" y2="450" />
            <line x1="550" y1="550" x2="400" y2="450" />
            <circle cx="400" cy="250" r="6" fill="#C5A869" />
            <circle cx="200" cy="650" r="4" fill="#C5A869" />
            <circle cx="600" cy="650" r="4" fill="#C5A869" />
          </g>
        </svg>
      </div>

      {/* Main Hero Body */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-10 sm:py-16">
        <div className="max-w-3xl">
          {/* Institution Category Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E1E38] border border-[#C5A869]/40 rounded-xs mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C5A869] animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs text-[#E6D3A3] uppercase tracking-[0.2em]">
              {COMPANY_DETAILS.legalName}
            </span>
          </div>

          {/* Public Brand Name */}
          <div className="mb-3">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[1.05]">
              {COMPANY_DETAILS.brandName}
            </h1>
          </div>

          {/* Primary Slogan */}
          <div className="mb-4">
            <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#C5A869] tracking-tight">
              “{COMPANY_DETAILS.primarySlogan}”
            </p>
          </div>

          {/* Supporting Positioning */}
          <div className="mb-8">
            <p className="font-mono text-sm sm:text-base md:text-lg text-slate-300 uppercase tracking-widest border-l-2 border-[#C5A869] pl-3 py-1">
              {COMPANY_DETAILS.supportingPositioning}
            </p>
          </div>

          {/* Core Descriptive Text */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            An independent private Nigerian company operating across building construction, civil
            engineering, and property development. Our approach emphasizes disciplined planning,
            sound engineering practices, and creating long-term value.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleNavClick('#business-divisions')}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Business Divisions
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleNavClick('#aurexon-process')}
              icon={<Layers className="w-4 h-4 text-[#C5A869]" />}
              iconPosition="left"
            >
              The AUREXON Process
            </Button>

            <Button
              variant="gold-outline"
              size="lg"
              onClick={() => handleNavClick('#final-cta')}
            >
              Request Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Architectural Division Strip */}
      <div className="relative z-10 border-t border-slate-800 bg-[#070E1B]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {BUSINESS_DIVISIONS.map((division) => (
              <button
                key={division.id}
                type="button"
                onClick={() => handleNavClick('#business-divisions')}
                className="py-3 px-4 text-left group hover:bg-[#0E1E38]/50 transition-colors flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#C5A869] font-bold">
                      {division.number}
                    </span>
                    <span className="font-display text-xs sm:text-sm font-bold text-white tracking-wider group-hover:text-[#C5A869] transition-colors">
                      {division.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {division.brandTitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#C5A869] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
