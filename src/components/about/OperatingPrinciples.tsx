import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { OPERATING_PRINCIPLES } from '../../data/companyData.ts';
import { CheckCircle2, Shield, Compass, Layers, Check, Award } from 'lucide-react';

export const OperatingPrinciples: React.FC = () => {
  return (
    <section id="operating-principles" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="OPERATING PRINCIPLES"
          title="Core Standards & Operating Principles"
          subtitle="The bedrock standards governing our engineering practice, site operations, and commercial conduct."
        />

        {/* Principles Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATING_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#0E1E38] border border-slate-800 p-6 sm:p-7 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/50 transition-colors"
            >
              <div>
                {/* Header Number */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="font-mono text-sm font-bold text-[#C5A869]">
                    PRINCIPLE {principle.number}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    AUREXON STANDARD
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-white tracking-wide mb-3">
                  {principle.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {principle.summary}
                </p>

                {/* Key Points */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    Implementation:
                  </span>
                  {principle.keyPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                Governance: Technical & Executive Compliance
              </div>
            </div>
          ))}
        </div>

        {/* Operating Philosophy Anchor Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B1528] border border-slate-800 rounded-xs text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A869] block mb-2">
            The Fundamental Doctrine
          </span>
          <h4 className="font-display text-lg sm:text-2xl font-bold text-white uppercase tracking-wider">
            “Plan Well. Build Once.”
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mt-2 leading-relaxed">
            By investing the necessary rigor into soil parameters, structural sizing, material specifications,
            and logistics planning before execution commences, we protect capital, prevent structural defects,
            and ensure enduring performance.
          </p>
        </div>
      </div>
    </section>
  );
};
