import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CONSTRUCT_APPROACH_STEPS } from '../../data/constructData.ts';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const ConstructApproach: React.FC = () => {
  return (
    <section
      id="construct-approach"
      className="py-16 sm:py-24 bg-[#0B1528] border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DELIVERY METHODOLOGY"
          technicalCode="DIV-01 // APPROACH-STAGE"
          title="PLAN. COORDINATE. EXECUTE. DELIVER."
          subtitle="Our five-stage delivery sequence provides structural clarity at every milestone, aligning site trades, technical standards, and supervisory monitoring."
        />

        {/* 5-Step Process Visual Flow */}
        <div className="space-y-4 sm:space-y-6">
          {CONSTRUCT_APPROACH_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 bg-[#0E1E38]/90 border border-slate-800 rounded-xs hover:border-slate-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Step Number & Title */}
                <div className="lg:col-span-4 flex items-start gap-4">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#C5A869] w-12 h-12 rounded-xs bg-[#132B4F]/60 border border-slate-700 flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                      Phase {idx + 1}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wide mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#C5A869] font-medium mt-1">
                      {step.summary}
                    </p>
                  </div>
                </div>

                {/* Detailed Description */}
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    Operational Scope
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Actions */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    Key Activities
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {step.keyActions.map((action, actionIdx) => (
                      <li key={actionIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A869] mt-0.5 shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Integrity Clarification */}
        <div className="mt-8 p-4 bg-[#070E1B] border border-slate-800 rounded-xs flex items-center gap-3">
          <span className="font-mono text-[10px] text-[#C5A869] uppercase tracking-wider font-semibold shrink-0">
            [DELIVERY FRAMEWORK]
          </span>
          <p className="text-xs text-slate-400 leading-relaxed">
            Project outcomes depend on clear site scopes, reliable procurement timelines, client approvals, and statutory conditions. AUREXON CONSTRUCT applies disciplined supervision and adherence to project requirements without asserting speculative or guaranteed delivery timelines.
          </p>
        </div>
      </div>
    </section>
  );
};
