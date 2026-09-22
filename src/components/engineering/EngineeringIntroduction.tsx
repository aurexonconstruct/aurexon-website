import React from 'react';
import {
  FileText,
  Search,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Wrench,
  BookOpen,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

export const EngineeringIntroduction: React.FC = () => {
  const technicalPillars = [
    {
      title: 'Understanding Project Requirements',
      desc: 'Defining parameters, client intentions, statutory constraints, and site boundaries before technical modeling starts.',
      icon: Search,
    },
    {
      title: 'Engineering Planning',
      desc: 'Formulating structured technical milestones, load assumptions, and cross-disciplinary coordination schedules.',
      icon: Layers,
    },
    {
      title: 'Technical Analysis',
      desc: 'Performing mathematical load evaluations, framing stress checks, and geotechnical information reviews.',
      icon: Cpu,
    },
    {
      title: 'Design Development',
      desc: 'Translating calculations into coordinated engineering drawings, reinforcement schedules, and specifications.',
      icon: FileText,
    },
    {
      title: 'Coordination with Construction',
      desc: 'Harmonizing structural members and civil levels with architectural layouts and physical site execution realities.',
      icon: Activity,
    },
    {
      title: 'Supervision & Monitoring',
      desc: 'Where engaged by scope, performing structured site inspections to verify alignment with approved engineering drawings.',
      icon: CheckCircle2,
    },
    {
      title: 'Technical Problem-Solving',
      desc: 'Addressing unforeseen subsurface or spatial clashes with practical, technically sound engineering adjustments.',
      icon: Wrench,
    },
    {
      title: 'Project Documentation',
      desc: 'Maintaining meticulous calculation sheets, drawing transmittal logs, and engineering records for ongoing reference.',
      icon: BookOpen,
    },
  ];

  return (
    <section
      id="engineering-introduction"
      className="py-20 sm:py-28 bg-[#0B1528] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Technical Foundation & Purpose
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            ENGINEERING WITH PURPOSE.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Engineering provides the technical foundation for informed planning and responsible project delivery.
            At AUREXON ENGINEERING, technical work is rooted in methodical analysis, clear documentation, and
            disciplined coordination, supporting clients and project teams with objective engineering clarity.
          </p>
        </div>

        {/* Narrative Context Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-7 bg-[#070E1B] border border-slate-800 p-6 sm:p-8 rounded-xs space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#C5A869] block">
              Methodical Execution Philosophy
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white uppercase">
              Analytical Precision Over Speculative Assumptions
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every built asset depends on underlying physical laws and soil-structure interactions.
              AUREXON ENGINEERING approaches every engagement—whether standalone consultancy or inter-divisional
              collaboration—by first clarifying technical facts, validating constraints, and formulating buildable
              engineering documentation.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engineering is not treated as an abstract exercise, but as a practical discipline that informs
              procurement, guides physical works, and establishes clarity for site supervisors and contractors.
              Services are structured strictly to the contracted scope of each project without assuming guaranteed
              structural performance beyond specified design parameters.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#0E1E38] border border-slate-800 p-6 sm:p-8 rounded-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#C5A869] block">
                Corporate Governance Framework
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase">
                Unified Institutional Oversight
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AUREXON ENGINEERING operates as an internal operational division of{' '}
                <strong className="text-white font-semibold">{COMPANY_DETAILS.legalName}</strong> (RC:{' '}
                {COMPANY_DETAILS.rcNumber}). It is not an independent entity, ensuring that all technical
                engagements carry direct corporate accountability, centralized quality control, and executive oversight.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Corporate Registration: RC {COMPANY_DETAILS.rcNumber} • Federal Republic of Nigeria
            </div>
          </div>
        </div>

        {/* 8 Technical Pillars Grid */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Factual Technical Commitments Across Engagements:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technicalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#070E1B] border border-slate-800 p-5 rounded-xs hover:border-[#C5A869]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-xs bg-[#0E1E38] border border-slate-700/80 flex items-center justify-center text-[#C5A869]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-white uppercase">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-800/60 font-mono text-[10px] text-slate-500">
                    FOCUS // 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
