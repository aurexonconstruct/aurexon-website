import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICE_DELIVERY_STEPS, ServiceDeliveryStep } from '../../data/servicesData.ts';

export const ServicesDeliveryApproach: React.FC = () => {
  return (
    <section id="services-approach" className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C5A869] bg-[#0E1E38] px-3 py-1.5 rounded-xs border border-slate-700">
            EXECUTION METHODOLOGY
          </span>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            FROM REQUIREMENTS TO DELIVERY.
          </h2>

          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-12 bg-[#C5A869]" />
            <span className="h-[2px] w-3 bg-[#C5A869]/40" />
          </div>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            A structured execution framework guiding project initiation through successful completion.
          </p>
        </div>

        {/* Sequential Process Flow Header Badge */}
        <div className="mb-8 p-4 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#C5A869]">
          <span className="font-semibold uppercase tracking-wider">
            Sequential Delivery Track:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-slate-300">
            <span>UNDERSTAND</span>
            <span className="text-slate-600">→</span>
            <span>PLAN</span>
            <span className="text-slate-600">→</span>
            <span>DESIGN</span>
            <span className="text-slate-600">→</span>
            <span>ENGINEER</span>
            <span className="text-slate-600">→</span>
            <span>EXECUTE</span>
            <span className="text-slate-600">→</span>
            <span>MONITOR</span>
            <span className="text-slate-600">→</span>
            <span className="text-[#C5A869] font-bold">DELIVER</span>
          </div>
        </div>

        {/* 7 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICE_DELIVERY_STEPS.map((phase: ServiceDeliveryStep, idx: number) => (
            <div
              key={phase.step}
              className={`bg-[#0B1528] border border-slate-800 rounded-xs p-6 relative flex flex-col justify-between hover:border-slate-700 transition-colors ${
                idx === 6 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
                  <span className="font-mono text-xs font-bold text-[#C5A869]">
                    PHASE // {phase.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Stage {idx + 1} of 7
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-2">
                  {phase.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {phase.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                <Check className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Adaptive Text strictly as requested */}
        <div className="mt-8 p-5 bg-[#0B1528] border-l-2 border-[#C5A869] rounded-r-xs">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
            <strong>Methodology Adaptation Note:</strong> This delivery sequence represents AUREXON's comprehensive project framework. The actual process is tailored to the specific nature, scale, commercial structure and delivery scope of each project. Individual service contracts or advisory engagements adapt these stages to align precisely with client requirements and project constraints, rather than applying a rigid identical sequence to every scope.
          </p>
        </div>
      </div>
    </section>
  );
};
