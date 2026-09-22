import React from 'react';
import { ArrowDown, Check, Info } from 'lucide-react';
import { ENGINEERING_APPROACH_STEPS } from '../../data/engineeringData.ts';

export const EngineeringApproach: React.FC = () => {
  return (
    <section
      id="engineering-approach"
      className="py-20 sm:py-28 bg-[#0B1528] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Engineering Methodology
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            UNDERSTAND. ANALYSE. DESIGN. COORDINATE. DELIVER.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Technical rigor relies on progressive, disciplined stages. From establishing project boundaries to
            final documentation handover, AUREXON ENGINEERING applies a structured process designed to eliminate
            ambiguity and support constructability.
          </p>
        </div>

        {/* Scope Flexibility Disclaimer */}
        <div className="mb-12 p-4 bg-[#070E1B] border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-400 font-mono">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-200 uppercase font-semibold">Workflow Customization: </span>
            The actual sequence, deliverables, and service boundaries depend on the specific scope of each engagement.
            Some projects require only analytical design, while others include planning, inter-disciplinary coordination,
            and construction-stage supervision.
          </div>
        </div>

        {/* 6 Sequential Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#070E1B] border border-slate-800 rounded-xs p-6 flex flex-col justify-between hover:border-[#C5A869]/40 transition-colors"
            >
              <div>
                {/* Step Index & Title */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="font-mono text-xs font-bold text-[#C5A869] bg-[#0E1E38] px-2.5 py-1 rounded-xs border border-slate-700">
                    STAGE {step.step}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">
                    METHODOLOGY // STEP {idx + 1} OF 6
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-[#C5A869] mb-3 leading-snug">
                  {step.summary}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Key Deliverables/Actions */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                    Key Technical Focus:
                  </span>
                  {step.keyActions.map((action, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>PHASE VERIFICATION</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C5A869]/60 rotate-[-90deg]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
