import React from 'react';
import { HardHat, Compass, Building2, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_DIVISIONS } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';

interface BusinessDivisionsProps {
  onSelectDivision?: (divisionId: string) => void;
  onNavigate?: (href: string) => void;
}

export const BusinessDivisions: React.FC<BusinessDivisionsProps> = ({
  onSelectDivision,
  onNavigate,
}) => {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'construct':
        return <HardHat className="w-6 h-6 text-[#C5A869]" />;
      case 'engineering':
        return <Compass className="w-6 h-6 text-[#C5A869]" />;
      case 'properties':
        return <Building2 className="w-6 h-6 text-[#C5A869]" />;
      default:
        return <HardHat className="w-6 h-6 text-[#C5A869]" />;
    }
  };

  return (
    <section
      id="business-divisions"
      className="py-20 sm:py-28 bg-[#070E1B] border-t border-b border-slate-800 relative overflow-hidden"
    >
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-blueprint-dense pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          badge="OPERATING DIVISIONS"
          title="Three Core Business Divisions"
          subtitle="AUREXON operates across three core divisions, providing coordinated services in building construction, civil engineering design, and property development."
        />

        {/* Divisions 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BUSINESS_DIVISIONS.map((division) => (
            <div
              key={division.id}
              id={division.id}
              className="bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/60 transition-all duration-300 group shadow-lg relative overflow-hidden"
            >
              {/* Subtle top gold accent line */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C5A869]/60 to-transparent group-hover:via-[#C5A869] transition-all" />

              <div className="p-6 sm:p-8 flex-1">
                {/* Header: Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-[#C5A869]/80 group-hover:text-[#C5A869] transition-colors">
                    {division.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-[#132B4F]/60 text-slate-300 border border-slate-700/60 rounded-xs uppercase">
                    {division.accentBadge}
                  </span>
                </div>

                {/* Division Icon & Name */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 bg-[#0E1E38] border border-slate-800 group-hover:border-[#C5A869]/50 rounded-xs flex items-center justify-center transition-colors">
                    {getDivisionIcon(division.id)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-[#C5A869] transition-colors">
                      {division.name}
                    </h3>
                  </div>
                </div>

                {/* Subtitle / Positioning */}
                <p className="text-xs font-mono text-[#E6D3A3] mb-4 tracking-wide">
                  {division.brandTitle}
                </p>

                {/* Scope Summary - Verified exact wording from user prompt */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {division.scopeSummary}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2.5 border-t border-slate-800/80 pt-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    Scope of Activities
                  </span>
                  {division.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action trigger without invented executive titles */}
              <div className="p-6 bg-[#070E1B] border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Public Brand:
                  </span>
                  <span className="text-xs font-mono text-[#C5A869] font-medium">
                    AUREXON
                  </span>
                </div>
                <a
                  href="#final-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('#final-cta');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A869] hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
