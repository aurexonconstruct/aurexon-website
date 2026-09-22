import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTY_MODEL_STAGES } from '../../data/propertiesData.ts';
import { ArrowDown } from 'lucide-react';

export const PropertyModel: React.FC = () => {
  return (
    <section id="properties-model" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="OPERATING FRAMEWORK"
          title="THE AUREXON PROPERTY MODEL"
          subtitle="An integrated, sequential methodology linking land identification with sustainable lifecycle performance."
        />

        {/* Required Horizontal Model Sequence */}
        <div className="mt-8 p-4 sm:p-5 bg-[#070E1B] border border-slate-800 rounded-xs">
          <div className="text-[11px] font-mono text-[#C5A869] font-bold uppercase tracking-widest mb-2.5">
            MODEL FLOW:
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-xs sm:text-sm font-bold text-white">
            {['LAND', 'PLANNING', 'DESIGN', 'ENGINEERING', 'CONSTRUCTION', 'PROPERTY DELIVERY', 'SALE / LEASE', 'LONG-TERM VALUE'].map((phase, pIdx, arr) => (
              <React.Fragment key={phase}>
                <span className="px-2.5 py-1 bg-[#132B4F] border border-slate-700/80 rounded-xs text-[#E8D49E]">
                  {phase}
                </span>
                {pIdx < arr.length - 1 && (
                  <span className="text-[#C5A869] font-black">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-300 mt-3 leading-relaxed">
            The model illustrates the potential relationship between development stages. Actual project structures may vary according to the property, commercial arrangement, regulatory requirements and intended outcome.
          </p>
        </div>

        {/* Connected Vertical / Grid Chain */}
        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {PROPERTY_MODEL_STAGES.map((stage, idx) => (
            <React.Fragment key={stage.step}>
              <div className="p-4 bg-[#070E1B] border border-slate-800 hover:border-[#C5A869]/50 transition-colors rounded-xs flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[#C5A869] font-bold bg-[#0E1E38] px-2.5 py-1 rounded-xs border border-slate-700">
                    STAGE {stage.step}
                  </span>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base tracking-wider uppercase">
                    {stage.name}
                  </h4>
                </div>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                  {stage.label}
                </span>
              </div>

              {idx < PROPERTY_MODEL_STAGES.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="w-4 h-4 text-[#C5A869]/70" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
