import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { LIFECYCLE_STAGES } from '../../data/engineeringData.ts';

export const DesignConsultancySupervision: React.FC = () => {
  return (
    <section
      id="design-consultancy-supervision"
      className="py-20 sm:py-28 bg-[#0B1528] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Flexible Engagement Horizons
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            TECHNICAL SUPPORT THROUGH THE PROJECT LIFECYCLE.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Depending on project scope and engagement, AUREXON ENGINEERING may contribute at different stages
            of the project lifecycle—from preliminary feasibility to detailed design documentation and construction-stage
            technical reviews.
          </p>
        </div>

        {/* Mandatory Conditional Language Box */}
        <div className="mb-10 p-4 bg-[#070E1B] border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300 font-mono">
          <AlertCircle className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white uppercase font-semibold">Engagement Notice: </strong>
            Engineering services are engagement-specific. AUREXON ENGINEERING does not automatically supervise
            or manage every construction activity; site supervision, periodic inspections, and field monitoring are
            provided only when specifically commissioned within the contractual scope of work.
          </div>
        </div>

        {/* 4 Lifecycle Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIFECYCLE_STAGES.map((stage, idx) => (
            <div
              key={idx}
              className="bg-[#070E1B] border border-slate-800 rounded-xs p-6 flex flex-col justify-between hover:border-[#C5A869]/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="font-mono text-xs font-bold text-[#C5A869] uppercase">
                    {stage.phase}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {stage.timing}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white uppercase">
                  {stage.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>STAGE INVOLVEMENT</span>
                <span className="text-slate-400">WHEN CONTRACTED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Consultancy vs Supervision Delineation Box */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#0E1E38]/50 border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block mb-2">
              Advisory & Engineering Consultancy
            </span>
            <h4 className="font-display text-sm font-bold text-white uppercase mb-2">
              Independent Technical Perspective
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clients may engage AUREXON ENGINEERING purely for peer reviews, structural adequacy opinions,
              drainage routing studies, or technical documentation evaluations without committing to downstream construction services.
            </p>
          </div>

          <div className="p-6 bg-[#0E1E38]/50 border border-slate-800 rounded-xs">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block mb-2">
              Construction-Stage Technical Support
            </span>
            <h4 className="font-display text-sm font-bold text-white uppercase mb-2">
              Active Site Monitoring
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              When retained for site monitoring, engineering personnel provide drawing interpretation, evaluate site
              conditions against calculation assumptions, and issue factual inspection logs to uphold technical alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
