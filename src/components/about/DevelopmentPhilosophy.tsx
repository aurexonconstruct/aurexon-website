import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTY_PHILOSOPHY_STAGES } from '../../data/companyData.ts';
import { ArrowRight, CheckCircle2, Building, Layers } from 'lucide-react';

export const DevelopmentPhilosophy: React.FC = () => {
  return (
    <section id="development-philosophy" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DEVELOPMENT PHILOSOPHY"
          title="The 8-Stage Development Value Chain"
          subtitle="Our development philosophy emphasizes integrating engineering insight and disciplined planning across each phase of property development."
        />

        {/* Philosophy Progression Strip */}
        <div className="mb-12 bg-[#0E1E38] border border-slate-800 p-4 sm:p-5 rounded-xs overflow-x-auto">
          <div className="flex items-center min-w-max gap-2 text-xs font-mono">
            {[
              'LAND',
              'PLANNING',
              'DESIGN',
              'ENGINEERING',
              'CONSTRUCTION',
              'PROPERTY DELIVERY',
              'SALE / LEASE',
              'LONG-TERM VALUE',
            ].map((phase, idx, arr) => (
              <React.Fragment key={phase}>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#070E1B] border border-slate-800 rounded-xs">
                  <span className="text-[#C5A869] font-bold">0{idx + 1}</span>
                  <span className="text-white font-semibold tracking-wider uppercase">{phase}</span>
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0 mx-0.5" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 8-Stage Detailed Grid (4 columns on lg, 2 on md, 1 on sm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROPERTY_PHILOSOPHY_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-[#0E1E38] border border-slate-800 p-5 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/50 transition-colors"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 mb-3">
                  <span className="font-mono text-xs font-bold text-[#C5A869]">
                    STAGE 0{stage.step}
                  </span>
                  <span className="font-mono text-[10px] bg-[#070E1B] text-slate-400 px-2 py-0.5 rounded-xs border border-slate-800 uppercase">
                    {stage.phase}
                  </span>
                </div>

                {/* Stage Title */}
                <h4 className="font-display text-sm font-bold text-white mb-2">
                  {stage.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Key Milestones */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                    Key Activities:
                  </span>
                  {stage.keyMilestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="mt-4 pt-2.5 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                AUREXON PROPERTIES Framework
              </div>
            </div>
          ))}
        </div>

        {/* Development Philosophy Context Note */}
        <div className="mt-12 p-6 bg-[#070E1B] border border-slate-800 rounded-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#0E1E38] border border-slate-700/80 rounded-xs flex items-center justify-center shrink-0">
              <Building className="w-5 h-5 text-[#C5A869]" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm">
              <h5 className="font-display font-bold text-white">
                The Purpose of Our 8-Stage Value Chain
              </h5>
              <p className="text-slate-300 leading-relaxed">
                AUREXON PROPERTIES treats real estate development as an integrated discipline where
                geotechnical and structural engineering guide commercial decisions from inception.
                By connecting land due diligence directly with structural design, quality construction,
                and ongoing asset upkeep, we ensure that developments achieve their projected lifespan
                and deliver enduring value to property owners and investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
