import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { BUSINESS_DIVISIONS } from '../../data/companyData.ts';
import { HardHat, Compass, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface BusinessStructureProps {
  onNavigate?: (href: string) => void;
}

export const BusinessStructure: React.FC<BusinessStructureProps> = ({ onNavigate }) => {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'construct':
        return <HardHat className="w-6 h-6 text-[#C5A869]" />;
      case 'engineering':
        return <Compass className="w-6 h-6 text-[#C5A869]" />;
      case 'properties':
        return <Building2 className="w-6 h-6 text-[#C5A869]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#C5A869]" />;
    }
  };

  return (
    <section id="business-structure" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="BUSINESS STRUCTURE"
          title="Three Core Operating Divisions"
          subtitle="Structured to provide cohesive, accountable project delivery across building construction, engineering consultancy, and property development."
        />

        {/* 3 Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_DIVISIONS.map((division) => (
            <div
              key={division.id}
              className="bg-[#0E1E38] border border-slate-800 rounded-xs p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A869]/50 transition-colors duration-200"
            >
              <div>
                {/* Card Top Indicator */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="font-mono text-xs text-[#C5A869] tracking-widest font-semibold">
                    DIVISION {division.number}
                  </span>
                  <span className="font-mono text-[10px] bg-[#070E1B] text-slate-400 px-2.5 py-1 rounded-xs border border-slate-800">
                    {division.accentBadge}
                  </span>
                </div>

                {/* Division Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#070E1B] border border-slate-700/80 rounded-xs flex items-center justify-center shrink-0">
                    {getDivisionIcon(division.id)}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">
                      {division.name}
                    </h3>
                    <p className="text-xs text-[#C5A869] font-medium mt-0.5">
                      {division.brandTitle}
                    </p>
                  </div>
                </div>

                {/* Approved Scope Summary */}
                <div className="p-3.5 bg-[#070E1B] border border-slate-800/80 rounded-xs text-xs text-slate-300 leading-relaxed mb-6">
                  {division.scopeSummary}
                </div>

                {/* Capabilities List */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    Scope of Activities:
                  </span>
                  {division.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Synergy Tag */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Integrated Corporate Delivery</span>
                <span className="text-[#C5A869]">Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Coordinated Triad Interlock Box */}
        <div className="mt-12 p-6 sm:p-8 bg-[#070E1B] border border-slate-800 rounded-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider block">
                Integrated Operational Synergy
              </span>
              <h4 className="font-display text-base sm:text-lg font-bold text-white">
                How Our Three Divisions Work Together
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                By bridging engineering consultancy with building execution and development planning,
                AUREXON eliminates the traditional communication breakdown between designers and contractors.
                Our multidisciplinary structure ensures that design intent translates accurately into site
                reality, preventing avoidable delays, material wastage, and on-site alterations.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-4 bg-[#0E1E38] border border-slate-700/80 rounded-xs text-center w-full sm:w-auto">
                <span className="text-xs font-mono text-slate-400 block">Operating Model</span>
                <span className="font-display text-sm font-bold text-[#C5A869] block mt-1 uppercase">
                  Single-Point Accountability
                </span>
                <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                  Concept → Engineering → Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
