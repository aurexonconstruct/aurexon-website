import React from 'react';
import { Tag, Compass, Check } from 'lucide-react';
import { ENGINEERING_PROJECT_CATEGORIES } from '../../data/engineeringData.ts';

export const EngineeringProjectCategories: React.FC = () => {
  return (
    <section
      id="engineering-project-categories"
      className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Application Domains & Project Contexts
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            WHERE ENGINEERING CAN CONTRIBUTE
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            AUREXON ENGINEERING contributes specialized civil and structural expertise across a wide spectrum of
            built asset environments. Below are broad project classifications where our analytical and design capabilities
            can be integrated.
          </p>
        </div>

        {/* Explicit Capability Disclaimer */}
        <div className="mb-10 p-4 bg-[#0B1528] border border-slate-800 rounded-xs flex items-center justify-between flex-wrap gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#C5A869]" />
            <span>
              <strong className="text-white uppercase">Notice: </strong>
              The categories shown below indicate functional areas of engineering competence, not a roster of historical past projects.
            </span>
          </div>
          <span className="text-[#C5A869] text-[11px] uppercase tracking-wider font-semibold">
            STATUS: APPROVED CAPABILITY DOMAINS
          </span>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGINEERING_PROJECT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-[#0B1528] border border-slate-800 rounded-xs p-6 flex flex-col justify-between hover:border-[#C5A869]/40 transition-colors group"
            >
              <div className="space-y-4">
                {/* Header Tag Stamped with Mandatory Label */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                  <span className="font-mono text-[10px] text-slate-500">
                    {cat.code}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#070E1B] border border-[#C5A869]/30 text-[#C5A869] rounded-xs font-semibold">
                    ENGINEERING CAPABILITY
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white uppercase group-hover:text-[#C5A869] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cat.description}
                </p>

                {/* Scope Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 block mb-1">
                    Typical Technical Scope:
                  </span>
                  {cat.scopeOverview.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-400">
                      <Check className="w-3 h-3 text-[#C5A869] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>SECTOR APPLICABILITY</span>
                <Compass className="w-3 h-3 text-slate-500 group-hover:text-[#C5A869] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
