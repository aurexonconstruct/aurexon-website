import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { AUREXON_PROCESS_STAGES } from '../../data/companyData.ts';
import { CheckCircle2, ArrowRight, ShieldCheck, Compass, Layers } from 'lucide-react';

export const AboutProcess: React.FC = () => {
  return (
    <section id="about-process" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DELIVERY PROCESS"
          title="The AUREXON Process: 6-Stage Delivery"
          subtitle="A structured execution framework designed to encourage thorough planning, engineering oversight, and sound project outcomes."
        />

        {/* 6 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUREXON_PROCESS_STAGES.map((proc) => (
            <div
              key={proc.step}
              className="bg-[#0E1E38] border border-slate-800 p-6 sm:p-7 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/50 transition-colors"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-xs bg-[#070E1B] border border-[#C5A869]/60 flex items-center justify-center font-mono text-xs font-bold text-[#C5A869]">
                      {proc.step}
                    </span>
                    <span className="font-mono text-xs font-bold text-white tracking-wider">
                      {proc.stage}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] bg-[#070E1B] text-slate-400 px-2 py-0.5 rounded-xs border border-slate-800">
                    STAGE 0{proc.step}
                  </span>
                </div>

                {/* Subtitle */}
                <h4 className="font-display text-sm font-bold text-[#C5A869] mb-2">
                  {proc.subtitle}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {proc.description}
                </p>

                {/* Gate Criteria */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    Quality Gates & Deliverables:
                  </span>
                  {proc.gateCriteria.map((gate, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{gate}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Delivery Gate 0{proc.step}</span>
                <span className="text-[#C5A869]">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee / Philosophy Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A869] block">
              Core Delivery Commitment
            </span>
            <h4 className="font-display text-base sm:text-lg font-bold text-white">
              Disciplined Phasing Across Every Engagement
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Each stage serves as a quality checkpoint. We progress from concept to completion only when
              preceding technical benchmarks are fully satisfied, ensuring that projects remain on schedule,
              within scope, and true to engineering specifications.
            </p>
          </div>
          <div className="shrink-0 font-mono text-xs bg-[#0E1E38] border border-[#C5A869]/40 text-[#C5A869] px-4 py-2.5 rounded-xs text-center">
            PLAN WELL. BUILD ONCE.
          </div>
        </div>
      </div>
    </section>
  );
};
