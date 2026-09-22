import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROJECT_DELIVERY_STEPS } from '../../data/projectsData.ts';
import { ArrowRight, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const ProjectDeliveryModel: React.FC = () => {
  return (
    <section id="project-delivery-model" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="EXECUTION METHODOLOGY"
          title="FROM REQUIREMENTS TO DELIVERY."
          subtitle="A disciplined seven-phase lifecycle engineered to ensure technical integrity, budget alignment, and structural excellence."
          technicalCode="PRJ-DLV-07"
        />

        {/* Supporting Copy strictly according to prompt */}
        <div className="max-w-4xl mb-12 p-5 bg-[#0B1528] border-l-2 border-[#C5A869] rounded-r-xs">
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            AUREXON approaches project delivery through structured planning, technical coordination, disciplined execution and ongoing monitoring, with the approach adapted to the nature and scope of each project.
          </p>
          <p className="text-xs text-slate-400 font-mono mt-2">
            * Note: Sequence adaptability applies. While the seven phases outline our comprehensive lifecycle, individual commissions are customized based on technical scope, contractual framework, and client requirements.
          </p>
        </div>

        {/* Visual Linear Sequence Indicator (High-Level Overview) */}
        <div className="mb-10 p-4 bg-[#0B1528] border border-slate-800 rounded-xs overflow-x-auto">
          <div className="flex items-center min-w-[700px] justify-between text-xs font-mono">
            {PROJECT_DELIVERY_STEPS.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-xs bg-[#0E1E38] border border-[#C5A869]/40 text-[#C5A869] flex items-center justify-center text-[10px] font-bold">
                    {step.step}
                  </span>
                  <span className="font-semibold text-white tracking-wider">
                    {step.title}
                  </span>
                </div>
                {idx < PROJECT_DELIVERY_STEPS.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-[#C5A869]/60 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Detailed 7 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROJECT_DELIVERY_STEPS.map((step, idx) => {
            const isLast = idx === PROJECT_DELIVERY_STEPS.length - 1;
            return (
              <div
                key={step.step}
                className={`p-5 rounded-xs border transition-all duration-200 flex flex-col justify-between ${
                  isLast
                    ? 'bg-[#0E1E38] border-[#C5A869]/50 shadow-lg md:col-span-2 lg:col-span-3 xl:col-span-1'
                    : 'bg-[#0B1528] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#C5A869] bg-[#070E1B] px-2 py-0.5 rounded-xs border border-slate-800">
                      PHASE {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      STEP {step.step}/07
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-1">
                    {step.title}
                  </h3>

                  <div className="text-xs font-mono text-[#C5A869] mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#C5A869]" />
                    <span className="truncate">{step.focus}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
