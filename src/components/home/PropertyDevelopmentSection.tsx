import React, { useState } from 'react';
import { PROPERTY_PHILOSOPHY_STAGES } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { ArrowRight, Check, Landmark, ShieldCheck } from 'lucide-react';

export const PropertyDevelopmentSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(1);
  const currentStage =
    PROPERTY_PHILOSOPHY_STAGES.find((s) => s.step === selectedStage) ||
    PROPERTY_PHILOSOPHY_STAGES[0];

  return (
    <section id="property-development" className="py-20 sm:py-28 bg-[#0B1528] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          badge="DEVELOPMENT PHILOSOPHY"
          title="The 8-Stage Development Value Chain"
          subtitle="Our development philosophy emphasizes integrating engineering insight and disciplined planning across each phase of property development."
        />

        {/* Philosophy Progression Strip (Exact sequence from prompt) */}
        {/* LAND → PLANNING → DESIGN → ENGINEERING → CONSTRUCTION → PROPERTY DELIVERY → SALE / LEASE → LONG-TERM VALUE */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center min-w-[760px] lg:min-w-0 justify-between bg-[#070E1B] p-2 sm:p-3 border border-slate-800 rounded-xs">
            {PROPERTY_PHILOSOPHY_STAGES.map((stage, idx) => {
              const isSelected = stage.step === selectedStage;
              return (
                <React.Fragment key={stage.step}>
                  <button
                    type="button"
                    onClick={() => setSelectedStage(stage.step)}
                    className={`flex flex-col items-center justify-center py-2 px-2.5 rounded-xs transition-all flex-1 text-center group cursor-pointer ${
                      isSelected
                        ? 'bg-[#132B4F] text-white border border-[#C5A869]/60 shadow-md'
                        : 'hover:bg-[#0E1E38] text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] font-bold ${
                        isSelected ? 'text-[#C5A869]' : 'text-slate-400 group-hover:text-slate-300'
                      }`}
                    >
                      0{stage.step}
                    </span>
                    <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-0.5 whitespace-nowrap">
                      {stage.phase}
                    </span>
                  </button>

                  {idx < PROPERTY_PHILOSOPHY_STAGES.length - 1 && (
                    <span className="text-slate-500 text-xs px-1 select-none">→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Deep Dive into Selected Phase */}
        <div className="bg-[#0E1E38] border border-slate-800 rounded-xs p-6 sm:10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#C5A869]/5 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Stage Information (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-[#C5A869] font-bold px-2 py-0.5 bg-[#070E1B] border border-[#C5A869]/40 rounded-xs">
                  STAGE 0{currentStage.step} OF 08
                </span>
                <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                  {currentStage.phase} PHILOSOPHY
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
                {currentStage.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStage.description}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A869] block">
                  Key Planning & Delivery Considerations:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {currentStage.keyMilestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#070E1B] border border-slate-800/80 rounded-xs flex items-center gap-2 text-xs text-slate-200"
                    >
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architectural Differentiator Box (5 cols) */}
            <div className="lg:col-span-5 p-6 bg-[#070E1B] border border-slate-800 rounded-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A869] uppercase tracking-wider">
                <Landmark className="w-4 h-4" />
                <span>Development Philosophy</span>
              </div>

              <h4 className="font-display text-base font-bold text-white">
                Engineering-Led Development
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                AUREXON PROPERTIES approaches development by integrating civil and structural
                engineering considerations from early planning. We aim to ensure that projects are
                technically feasible, structurally durable, and commercially viable for long-term
                use.
              </p>

              <div className="pt-3 text-[11px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-800/80">
                <span>Guiding Standard</span>
                <span className="text-[#C5A869]">“Plan Well. Build Once.”</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
