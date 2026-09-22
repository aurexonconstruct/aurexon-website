import React from 'react';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { TECHNICAL_DISCIPLINE_PRINCIPLES } from '../../data/engineeringData.ts';

export const EngineeringQualityPractice: React.FC = () => {
  return (
    <section
      id="engineering-discipline"
      className="py-20 sm:py-28 bg-[#0B1528] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Professional Rigor & Quality Control
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            TECHNICAL DISCIPLINE.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Responsible engineering is founded on sound mechanics, verifiable calculations, and consistent documentation.
            AUREXON ENGINEERING emphasizes systematic technical reviews, clear coordination across disciplines, and adherence
            to recognized engineering principles appropriate to defined project requirements.
          </p>
        </div>

        {/* 8 Technical Discipline Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TECHNICAL_DISCIPLINE_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="bg-[#070E1B] border border-slate-800 rounded-xs p-5 flex flex-col justify-between hover:border-[#C5A869]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="font-mono text-[10px] text-[#C5A869] font-semibold tracking-wider">
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#C5A869]/70" />
                </div>

                <h3 className="font-display text-sm font-bold text-white uppercase leading-snug">
                  {principle.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800/60 font-mono text-[10px] text-slate-500">
                VERIFICATION // QA-CORE
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Engineering Practice Framework Notice */}
        <div className="p-6 bg-[#070E1B] border border-slate-800 rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xs bg-[#0E1E38] border border-slate-700 flex items-center justify-center text-[#C5A869] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display text-sm font-bold text-white uppercase">
                Factual Quality Commitments
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
                We ground our practice in verified engineering computations, standardized technical drawing protocols, and active constructability checks. We do not make unverified promotional claims of third-party certifications, institutional endorsements, or blanket performance guarantees beyond contracted engineering criteria.
              </p>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
              OPERATING STANDARD
            </span>
            <span className="font-mono text-xs text-slate-300">
              RC: 9729028 GOVERNANCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
