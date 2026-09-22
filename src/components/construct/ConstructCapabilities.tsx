import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CONSTRUCT_CAPABILITIES } from '../../data/constructData.ts';
import { Building2, Landmark, Hammer, Mountain, ClipboardList, CheckSquare } from 'lucide-react';

export const ConstructCapabilities: React.FC = () => {
  const getIconForIndex = (letter: string) => {
    switch (letter) {
      case 'A':
        return <Building2 className="w-5 h-5 text-[#C5A869]" />;
      case 'B':
        return <Landmark className="w-5 h-5 text-[#C5A869]" />;
      case 'C':
        return <Hammer className="w-5 h-5 text-[#C5A869]" />;
      case 'D':
        return <Mountain className="w-5 h-5 text-[#C5A869]" />;
      case 'E':
        return <ClipboardList className="w-5 h-5 text-[#C5A869]" />;
      case 'F':
        return <CheckSquare className="w-5 h-5 text-[#C5A869]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section
      id="construct-capabilities"
      className="py-16 sm:py-24 bg-[#070E1B] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="CORE CAPABILITIES"
          technicalCode="DIV-01 // CAPABILITIES"
          title="APPROVED OPERATIONAL CAPABILITIES."
          subtitle="Our six designated construction focus areas provide defined execution scope, structured coordination, and disciplined delivery across project lifecycles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSTRUCT_CAPABILITIES.map((cap) => (
            <div
              key={cap.letter}
              className="p-6 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-slate-700 transition-colors group"
            >
              <div>
                {/* Header with Letter Badge & Technical Code */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xs bg-[#132B4F] border border-slate-700 text-xs font-mono font-bold text-[#C5A869] flex items-center justify-center">
                      {cap.letter}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                      {cap.technicalCode}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xs bg-[#0E1E38] border border-slate-800 flex items-center justify-center group-hover:border-[#C5A869]/40 transition-colors">
                    {getIconForIndex(cap.letter)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#C5A869] transition-colors">
                  {cap.title}
                </h3>

                {/* Official Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {cap.description}
                </p>
              </div>

              {/* Scope Highlights */}
              <div className="pt-4 border-t border-slate-800/60 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
                  Scope Parameters
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {cap.scopeHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] mt-1 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Factual Scope Boundary Note */}
        <div className="mt-10 p-4 bg-[#0B1528] border border-slate-800 rounded-xs flex items-center gap-3">
          <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider font-semibold shrink-0">
            [NOTE]
          </span>
          <p className="text-xs text-slate-400 leading-relaxed">
            All capability commitments are strictly tailored to project-specific client contracts, approved architectural drawings, and applicable statutory standards.
          </p>
        </div>
      </div>
    </section>
  );
};
