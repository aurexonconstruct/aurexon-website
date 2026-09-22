import React from 'react';
import { Compass, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import {
  CIVIL_CAPABILITIES_BREAKDOWN,
  STRUCTURAL_CAPABILITIES_BREAKDOWN,
} from '../../data/engineeringData.ts';

export const CivilStructuralSection: React.FC = () => {
  return (
    <section
      id="civil-structural"
      className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Dual Engineering Pillars
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            FROM ENGINEERING PRINCIPLES TO PRACTICAL SOLUTIONS.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Successful built environments require balanced harmony between the ground beneath and the structure
            above. Civil engineering establishes the external site infrastructure and environmental stability,
            while structural engineering provides the skeletal integrity and load resistance of the building.
          </p>
        </div>

        {/* Dual Pillar Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Civil Engineering Column */}
          <div className="bg-[#0B1528] border border-slate-800 rounded-xs p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0E1E38] border border-slate-700 rounded-xs text-[10px] font-mono text-[#C5A869] uppercase tracking-wider mb-2">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Discipline 01 // Site & Ground</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                    {CIVIL_CAPABILITIES_BREAKDOWN.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {CIVIL_CAPABILITIES_BREAKDOWN.subtitle}
                  </span>
                </div>
              </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                {CIVIL_CAPABILITIES_BREAKDOWN.description}
              </p>

              {/* Civil Focus Areas */}
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block">
                  Civil Engineering May Support:
                </span>
                {CIVIL_CAPABILITIES_BREAKDOWN.focusAreas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#070E1B] border border-slate-800/80 rounded-xs hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                      <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SCOPE: SITE INFRASTRUCTURE</span>
              <span className="text-[#C5A869]">PROJECT-DEFINED INPUT</span>
            </div>
          </div>

          {/* Structural Engineering Column */}
          <div className="bg-[#0B1528] border border-slate-800 rounded-xs p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0E1E38] border border-slate-700 rounded-xs text-[10px] font-mono text-[#C5A869] uppercase tracking-wider mb-2">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Discipline 02 // Frame & Core</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                    {STRUCTURAL_CAPABILITIES_BREAKDOWN.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {STRUCTURAL_CAPABILITIES_BREAKDOWN.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {STRUCTURAL_CAPABILITIES_BREAKDOWN.description}
              </p>

              {/* Structural Focus Areas */}
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block">
                  Structural Engineering May Support:
                </span>
                {STRUCTURAL_CAPABILITIES_BREAKDOWN.focusAreas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#070E1B] border border-slate-800/80 rounded-xs hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                      <h4 className="font-display text-xs sm:text-sm font-bold text-white uppercase">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SCOPE: LOAD PATHS & INTEGRITY</span>
              <span className="text-[#C5A869]">PROJECT-DEFINED INPUT</span>
            </div>
          </div>
        </div>

        {/* Integration Synthesis Note */}
        <div className="mt-10 p-5 bg-[#0E1E38]/60 border border-slate-800 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-slate-300">
              Civil and structural disciplines can operate independently or in coordinated synergy depending on whether an assignment is focused on site preparation, building design, or comprehensive technical oversight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
