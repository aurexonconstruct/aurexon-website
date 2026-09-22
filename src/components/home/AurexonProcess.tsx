import React from 'react';
import { AUREXON_PROCESS_STAGES } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CheckCircle2 } from 'lucide-react';

export const AurexonProcess: React.FC = () => {
  return (
    <section id="aurexon-process" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DELIVERY PROCESS"
          title="The AUREXON Process: 6-Stage Delivery"
          subtitle="A structured execution framework designed to encourage thorough planning, engineering oversight, and sound project outcomes."
        />

        {/* Linear Stage Diagram:
            PLAN → DESIGN → ENGINEER → EXECUTE → DELIVER → CREATE LONG-TERM VALUE */}
        <div className="mb-12 hidden md:block">
          <div className="flex items-center justify-between bg-[#070E1B] p-4 border border-slate-800 rounded-xs">
            {AUREXON_PROCESS_STAGES.map((item, idx) => (
              <React.Fragment key={item.step}>
                <div className="flex flex-col items-center text-center">
                  <span className="font-mono text-[10px] text-[#C5A869] font-bold">
                    STAGE 0{item.step}
                  </span>
                  <span className="font-display text-xs font-bold text-white tracking-wider mt-0.5">
                    {item.stage}
                  </span>
                </div>
                {idx < AUREXON_PROCESS_STAGES.length - 1 && (
                  <div className="h-[1px] flex-1 bg-slate-800 mx-3 relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 text-xs">
                      ▶
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Phased Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUREXON_PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="p-6 sm:p-7 bg-[#0E1E38] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-200 relative group"
            >
              <div>
                {/* Header: Stage Number & Name */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-[#C5A869] font-bold px-2 py-0.5 bg-[#070E1B] border border-[#C5A869]/40 rounded-xs">
                      0{stage.step}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">
                      {stage.stage}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-mono text-[#E6D3A3] mb-3 tracking-wide">
                  {stage.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Project Review Activities */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Key Stage Considerations:
                </span>
                {stage.gateCriteria.map((criterion, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
