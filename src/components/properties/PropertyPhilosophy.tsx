import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import {
  MapPin,
  ClipboardList,
  PenTool,
  Cpu,
  Hammer,
  KeyRound,
  ShieldCheck,
  ChevronRight,
  Info,
} from 'lucide-react';

export const PropertyPhilosophy: React.FC = () => {
  const stages = [
    {
      step: '01',
      phase: 'LAND',
      summary: 'Identify and understand the development opportunity.',
      desc: 'Evaluating parcel topography, boundary coordinates, access logistics, legal tenure status, and soil context.',
      icon: <MapPin className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      step: '02',
      phase: 'PLANNING',
      summary: 'Consider development objectives, planning requirements and project constraints.',
      desc: 'Evaluating zoning compliance, density parameters, statutory town planning approvals, and preliminary budgeting.',
      icon: <ClipboardList className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      step: '03',
      phase: 'DESIGN',
      summary: 'Develop an appropriate design response to the intended development.',
      desc: 'Formulating architectural spaces optimized for natural lighting, cross-ventilation, functional utility, and local climate.',
      icon: <PenTool className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      step: '04',
      phase: 'ENGINEERING',
      summary: 'Coordinate the relevant civil and structural engineering requirements.',
      desc: 'Calculating structural loads, sizing foundation elements, and coordinating civil drainage and road networks.',
      icon: <Cpu className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      step: '05',
      phase: 'CONSTRUCTION',
      summary: 'Execute the defined development works through appropriate construction processes.',
      desc: 'Mobilizing qualified site processes, enforcing strict material compliance, and supervising structural execution.',
      icon: <Hammer className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      step: '06',
      phase: 'PROPERTY DELIVERY',
      summary: 'Bring the completed development toward its intended use, sale, lease or other defined outcome.',
      desc: 'Completing systematic snagging, commissioning systems, and executing structured handover or commercial onboarding.',
      icon: <KeyRound className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      step: '07',
      phase: 'LONG-TERM VALUE',
      summary: "Focus on the property's intended usefulness, quality and long-term contribution.",
      desc: 'Sustaining asset durability through practical maintenance planning, robust materials, and ongoing operational integrity.',
      icon: <ShieldCheck className="w-4 h-4 text-[#C5A869]" />,
    },
  ];

  return (
    <section id="properties-philosophy" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="PROPERTY DEVELOPMENT PHILOSOPHY"
          title="FROM LAND TO PROPERTY."
          subtitle="AUREXON approaches property development as a coordinated process in which land considerations, planning, design, engineering and construction are aligned toward an intended property outcome."
        />

        {/* Approved Sequence Ribbon */}
        <div className="mt-8 p-4 sm:p-5 bg-[#0E1E38] border border-slate-800 rounded-xs">
          <div className="text-[11px] font-mono text-[#C5A869] font-bold uppercase tracking-widest mb-2.5">
            APPROVED DEVELOPMENT SEQUENCE:
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-xs sm:text-sm font-bold text-white">
            {['LAND', 'PLANNING', 'DESIGN', 'ENGINEERING', 'CONSTRUCTION', 'PROPERTY DELIVERY', 'LONG-TERM VALUE'].map((phase, pIdx, arr) => (
              <React.Fragment key={phase}>
                <span className="px-2.5 py-1 bg-[#132B4F] border border-slate-700/80 rounded-xs text-[#E8D49E]">
                  {phase}
                </span>
                {pIdx < arr.length - 1 && (
                  <span className="text-[#C5A869] font-black">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
            Note: The sequence illustrates the structured relationship between development phases. Actual project arrangements, stages, and division involvement adapt to the specific development structure, commercial terms, and statutory requirements.
          </p>
        </div>

        {/* Informational Callout */}
        <div className="mt-6 p-4 bg-[#0E1E38]/80 border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-mono uppercase">Operational Clarity: </strong>
            This property lifecycle represents AUREXON’s structural development methodology. AUREXON PROPERTIES
            participates in project development, consultancy, and development management engagements; it does not claim
            unverified landholdings or unapproved property inventory.
          </p>
        </div>

        {/* Step-by-Step Chain */}
        <div className="mt-12 space-y-4">
          {stages.map((st, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/50 transition-colors rounded-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xs bg-[#0E1E38] border border-slate-700 flex items-center justify-center shrink-0">
                  {st.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-[#C5A869] font-bold">
                      STAGE {st.step}
                    </span>
                    <span className="text-slate-600 font-mono text-xs">•</span>
                    <h3 className="font-display font-bold text-white text-base sm:text-lg tracking-wide uppercase">
                      {st.phase}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    {st.summary}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>

              <div className="hidden lg:flex items-center text-slate-600 text-xs font-mono uppercase shrink-0">
                {idx < stages.length - 1 ? (
                  <span className="flex items-center gap-1 text-slate-500">
                    Next Stage <ChevronRight className="w-3.5 h-3.5 text-[#C5A869]" />
                  </span>
                ) : (
                  <span className="text-[#C5A869] font-semibold">Enduring Value</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
