import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { INTEGRATED_MODEL_STEPS } from '../../data/companyData.ts';
import { ArrowDown, CheckCircle2, ShieldCheck, Layers, ArrowRight } from 'lucide-react';

export const IntegratedModel: React.FC = () => {
  return (
    <section
      id="integrated-model"
      className="py-20 sm:py-28 bg-[#0B1528] border-b border-slate-800 relative overflow-hidden"
    >
      {/* Blueprint grid subtle effect */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          badge="INTEGRATED OPERATING MODEL"
          title="CONNECTED BY A COMMON APPROACH."
          subtitle="Showing the relationship between our divisions without corporate fragmentation. A disciplined, end-to-end framework translating vision into enduring structural reality."
        />

        {/* Mandatory Supporting Text Block */}
        <div className="mb-14 p-6 bg-[#0E1E38] border border-slate-800 rounded-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869] font-semibold">
                Single Corporate Entity // Synchronized Delivery
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                The divisions provide complementary capabilities within the broader AUREXON model.
                Their involvement in a project depends on the project's requirements, scope and delivery structure.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-slate-400 bg-[#070E1B] px-3 py-2 border border-slate-800 rounded-xs">
              <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
              <span>Unified Standard: Plan Well. Build Once.</span>
            </div>
          </div>
        </div>

        {/* Structured Sequence Flow: 6 Sequential Stages */}
        {/* Sequence: PLAN ↓ DESIGN ↓ ENGINEER ↓ EXECUTE ↓ DELIVER ↓ CREATE LONG-TERM VALUE */}
        <div className="relative">
          {/* Desktop/Tablet Connecting Backbone Line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#C5A869]/80 via-slate-700 to-[#C5A869]/80 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-8 lg:space-y-12">
            {INTEGRATED_MODEL_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div key={step.stage} className="relative">
                  {/* Sequence Node Indicator (Center on LG, Left on Mobile) */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 z-20 items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#0E1E38] border-2 border-[#C5A869] flex items-center justify-center text-xs font-mono font-bold text-[#C5A869] shadow-lg">
                      0{step.step}
                    </div>
                  </div>

                  {/* Stage Card */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Primary Content (6 cols on Desktop) */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? 'lg:col-start-7 lg:pl-10' : 'lg:col-start-1 lg:pr-10'
                      }`}
                    >
                      <div className="p-6 sm:p-8 bg-[#070E1B] border border-slate-800 hover:border-[#C5A869]/50 rounded-xs transition-all duration-200 group shadow-md">
                        {/* Stage Name & Step Indicator */}
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                          <div className="flex items-center gap-2.5">
                            <span className="lg:hidden font-mono text-xs font-bold text-[#C5A869] bg-[#132B4F]/60 px-2 py-0.5 rounded-xs border border-slate-700">
                              STEP 0{step.step}
                            </span>
                            <h3 className="font-display text-lg sm:text-xl font-extrabold text-white tracking-wider uppercase group-hover:text-[#C5A869] transition-colors">
                              {step.stage}
                            </h3>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                            Stage {step.step} of 6
                          </span>
                        </div>

                        <p className="text-xs font-mono text-[#C5A869] uppercase tracking-wider mb-2">
                          {step.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {step.description}
                        </p>

                        {/* Key Outputs */}
                        <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                            Core Deliverables & Alignment:
                          </span>
                          <div className="space-y-1.5">
                            {step.keyOutputs.map((output) => (
                              <div
                                key={output}
                                className="flex items-start gap-2 text-xs text-slate-300"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                                <span>{output}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Transition Indicator for Mobile & Tablet */}
                    {idx < INTEGRATED_MODEL_STEPS.length - 1 && (
                      <div className="lg:hidden flex justify-center py-1">
                        <div className="flex items-center gap-2 px-3 py-1 bg-[#0E1E38] border border-slate-800 rounded-full text-slate-400 font-mono text-xs">
                          <ArrowDown className="w-3.5 h-3.5 text-[#C5A869]" />
                          <span className="text-[10px] uppercase tracking-wider">Next Phase</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Division Collaboration Summary Footer */}
        <div className="mt-16 p-6 sm:p-8 bg-[#070E1B] border border-slate-800 rounded-xs text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A869]">
            <Layers className="w-4 h-4" />
            <span>Harmonized Project Execution</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            By coordinating AUREXON CONSTRUCT, AUREXON ENGINEERING, and AUREXON PROPERTIES under a single management doctrine,
            we ensure that technical design informs site reality, and commercial asset strategy remains anchored in sound civil engineering.
          </p>
        </div>
      </div>
    </section>
  );
};
