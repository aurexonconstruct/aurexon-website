import React from 'react';
import { ArrowRight, ChevronRight, Workflow } from 'lucide-react';

export const EngineeringIntegratedModel: React.FC = () => {
  const modelStages = [
    {
      step: '01',
      name: 'PLAN',
      subtitle: 'Strategic Intent & Scope',
      desc: 'Defining parameters, feasibility, site viability, and client objectives.',
      isEngineeringFocus: false,
    },
    {
      step: '02',
      name: 'DESIGN',
      subtitle: 'Spatial & Concept Form',
      desc: 'Developing architectural intent, layout planning, and aesthetic criteria.',
      isEngineeringFocus: false,
    },
    {
      step: '03',
      name: 'ENGINEER',
      subtitle: 'Technical Foundation',
      desc: 'Formulating structural calculations, load paths, civil infrastructure, and detailing.',
      isEngineeringFocus: true,
    },
    {
      step: '04',
      name: 'EXECUTE',
      subtitle: 'Coordinated Construction',
      desc: 'Physical site assembly, trade coordination, procurement, and structural execution.',
      isEngineeringFocus: false,
    },
    {
      step: '05',
      name: 'DELIVER',
      subtitle: 'Rigorous Handover',
      desc: 'Systematic testing, as-built documentation verification, and commissioning.',
      isEngineeringFocus: false,
    },
    {
      step: '06',
      name: 'CREATE LONG-TERM VALUE',
      subtitle: 'Durable Built Assets',
      desc: 'Ensuring structural resilience, operational longevity, and enduring performance.',
      isEngineeringFocus: false,
    },
  ];

  return (
    <section
      id="engineering-integrated-model"
      className="py-20 sm:py-28 bg-[#0B1528] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              The Aurexon Operating Model
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            ENGINEERING AS PART OF THE BIGGER PICTURE.
          </h2>

          {/* Exact Required Supporting Text */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            AUREXON ENGINEERING contributes technical capability within the wider AUREXON operating model.
            Its involvement depends on the requirements, scope and delivery structure of each engagement.
          </p>
        </div>

        {/* 6 Stage Sequential Integrated Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {modelStages.map((stage, idx) => (
            <div
              key={stage.step}
              className={`p-5 rounded-xs border flex flex-col justify-between transition-all ${
                stage.isEngineeringFocus
                  ? 'bg-[#0E1E38] border-[#C5A869] shadow-lg shadow-[#C5A869]/5 ring-1 ring-[#C5A869]/40'
                  : 'bg-[#070E1B] border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-xs ${
                      stage.isEngineeringFocus
                        ? 'bg-[#C5A869] text-[#070E1B]'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    STEP {stage.step}
                  </span>
                  {idx < modelStages.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden xl:block" />
                  )}
                </div>

                {stage.isEngineeringFocus && (
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#C5A869] block mb-1 font-semibold">
                    ★ DIVISION FOCUS
                  </span>
                )}

                <h3 className="font-display text-sm font-bold text-white uppercase tracking-tight mb-1">
                  {stage.name}
                </h3>

                <span className="text-[11px] font-mono text-[#C5A869] block mb-2">
                  {stage.subtitle}
                </span>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800/80 text-[9px] font-mono text-slate-500">
                LIFECYCLE POSITION
              </div>
            </div>
          ))}
        </div>

        {/* Contextual Clarification Footer */}
        <div className="mt-10 p-5 bg-[#070E1B] border border-slate-800 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <Workflow className="w-4 h-4 text-[#C5A869] shrink-0" />
            <span>
              The AUREXON operating model connects strategic planning, design, engineering calculation, and physical construction into an unbroken chain of accountability.
            </span>
          </div>
          <span className="text-slate-500 shrink-0">INTEGRATED // FLEXIBLE</span>
        </div>
      </div>
    </section>
  );
};
