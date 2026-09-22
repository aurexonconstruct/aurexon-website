import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTY_APPROACH_STEPS } from '../../data/propertiesData.ts';
import { CheckCircle2, Sliders } from 'lucide-react';

export const PropertyApproach: React.FC = () => {
  return (
    <section id="properties-approach" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DEVELOPMENT METHODOLOGY"
          title="UNDERSTAND. PLAN. DEVELOP. DELIVER."
          subtitle="A structured delivery discipline connecting analytical site assessment with practical execution."
        />

        {/* Dynamic Context Notice */}
        <div className="mt-8 p-4 bg-[#0E1E38] border-l-2 border-[#C5A869] border-y border-r border-slate-800 rounded-xs flex items-start gap-3">
          <Sliders className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-mono uppercase">Scope Modularity: </strong>
            While these six stages represent our overarching development methodology, not every engagement
            follows an identical sequence. Project milestones and services are tailored directly to the ownership
            structure, commercial mandate, and specific stage of client engagement.
          </p>
        </div>

        {/* 6 Sequential Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROPERTY_APPROACH_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="font-mono text-xs text-[#C5A869] font-bold tracking-wider">
                    PHASE {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C5A869]/60" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2 tracking-wide uppercase">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-[#C5A869]/90 mb-3 leading-snug">
                  {step.summary}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 border-t border-slate-800/80 pt-3">
                  Core Actions & Milestones:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {step.keyActions.map((action, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
