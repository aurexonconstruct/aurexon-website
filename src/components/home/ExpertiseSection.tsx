import React from 'react';
import { EXPERTISE_LIST } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Layers, ShieldCheck, Ruler, Activity, CheckSquare, Info } from 'lucide-react';

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="TECHNICAL EXPERTISE"
          title="Technical Expertise & Engineering Practice"
          subtitle="Our approach emphasizes disciplined engineering, sound structural principles, and careful coordination tailored to project requirements and applicable Nigerian regulations."
        />

        {/* 2x2 Grid of Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {EXPERTISE_LIST.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#0E1E38] border border-slate-800 rounded-xs hover:border-[#C5A869]/40 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C5A869] tracking-wider uppercase font-semibold">
                  {item.code}
                </span>
                <span className="text-[11px] font-mono text-slate-400 bg-[#070E1B] px-2.5 py-1 rounded-xs border border-slate-800">
                  {item.category}
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3 tracking-wide">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Technical Standards Benchmark Note */}
              <div className="border-t border-slate-800/80 pt-4">
                <div className="flex items-start gap-2 text-xs text-slate-400">
                  <Info className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="font-mono text-[10px] text-[#C5A869] uppercase tracking-wider block mb-0.5">
                      Applicable Standards:
                    </span>
                    Carried out in accordance with {item.applicableStandardsNote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Practice & Principles Bar */}
        <div className="mt-10 p-6 sm:p-8 bg-[#070E1B] border border-slate-800 rounded-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider block">
                Upfront Review
              </span>
              <p className="font-display text-sm font-bold text-white">Pre-Construction Planning</p>
              <p className="text-xs text-slate-400">Detailed scope and site factor review before site mobilization</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider block">
                Site Safety
              </span>
              <p className="font-display text-sm font-bold text-white">HSE Awareness</p>
              <p className="text-xs text-slate-400">Site safety protocols adapted to project operational scope</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider block">
                Regulatory Standards
              </span>
              <p className="font-display text-sm font-bold text-white">Applicable Nigerian Codes</p>
              <p className="text-xs text-slate-400">Engineered with reference to relevant national and local regulations</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider block">
                Execution Slogan
              </span>
              <p className="font-display text-sm font-bold text-white">Plan Well. Build Once.</p>
              <p className="text-xs text-slate-400">Aiming to prevent costly delays and unnecessary on-site rework</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
