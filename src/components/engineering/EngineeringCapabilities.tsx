import React from 'react';
import { Check, ShieldAlert } from 'lucide-react';
import { ENGINEERING_CAPABILITIES } from '../../data/engineeringData.ts';

export const EngineeringCapabilities: React.FC = () => {
  return (
    <section
      id="engineering-capabilities"
      className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Scope of Technical Practice
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            ENGINEERING CAPABILITIES
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            AUREXON ENGINEERING concentrates on core civil and structural disciplines. Each engagement is
            tailored to defined project mandates, ensuring focused technical attention where it adds genuine value.
          </p>
        </div>

        {/* Scope Qualification Notice */}
        <div className="mb-10 p-4 bg-[#0E1E38]/80 border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300 leading-relaxed font-mono">
          <ShieldAlert className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <strong className="text-white uppercase font-bold">Scope Qualification: </strong>
            Individual engagements are defined by specific contracts and scopes of work. The capabilities listed
            below represent approved areas of operational competence; no single engagement is assumed to include all
            services unless explicitly agreed in writing.
          </div>
        </div>

        {/* 6 Approved Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_CAPABILITIES.map((cap) => (
            <div
              key={cap.letter}
              className="bg-[#0B1528] border border-slate-800 rounded-xs p-6 sm:p-7 flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-300 group"
            >
              <div>
                {/* Header with Letter & Code */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xs bg-[#070E1B] border border-slate-700/80 flex items-center justify-center font-mono font-bold text-sm text-[#C5A869] group-hover:border-[#C5A869] transition-colors">
                      {cap.letter}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                      {cap.technicalCode}
                    </span>
                  </div>
                </div>

                {/* Title & Official Approved Description */}
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {cap.description}
                </p>

                {/* Scope Highlights */}
                <div className="space-y-2 pt-4 border-t border-slate-800/60">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
                    Scope Focus Points:
                  </span>
                  {cap.scopeHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>DIVISION // AUREXON ENG</span>
                <span className="text-slate-400">APPROVED CAPABILITY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
