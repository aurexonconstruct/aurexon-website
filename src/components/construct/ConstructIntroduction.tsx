import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CheckCircle2, Shield, Cog, FileCheck } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

export const ConstructIntroduction: React.FC = () => {
  return (
    <section
      id="construct-introduction"
      className="py-16 sm:py-24 bg-[#0B1528] border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="OPERATIONAL PHILOSOPHY"
          technicalCode="DIV-01 // EXEC-PHILOSOPHY"
          title="FROM PLAN TO EXECUTION."
          subtitle="At AUREXON, construction is treated as a coordinated technical discipline where structured preparation precedes physical assembly on site."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              Construction is more than physical assembly. In real-world project delivery, sound results require far more
              than stacking materials on an open site. AUREXON CONSTRUCT approaches delivery through rigorous upfront planning,
              meticulous trade coordination, technical understanding of drawings, active site management, and controlled execution.
            </p>

            <p>
              Every physical structure represents a complex integration of architectural intent, structural engineering calculations,
              soil conditions, material properties, and skilled labor. By establishing clear logistical sequences and verifying
              technical parameters before works commence, our site teams prevent costly misalignments and maintain methodical control
              from groundbreaking through final handover.
            </p>

            <p>
              Operating as an integral business division of <strong className="text-white">{COMPANY_DETAILS.legalName}</strong> (RC: {COMPANY_DETAILS.rcNumber}),
              AUREXON CONSTRUCT delivers projects under unified corporate governance, institutional accountability, and direct executive oversight.
              This organizational coherence eliminates third-party contractual friction and guarantees that site delivery remains faithfully aligned
              with the approved engineering designs and client specifications.
            </p>

            {/* Factual Operational Callout */}
            <div className="p-5 bg-[#070E1B] border border-slate-800 rounded-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A869] mb-2 uppercase tracking-wider">
                <FileCheck className="w-4 h-4 text-[#C5A869]" />
                <span>Operating Framework & Legal Status</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                AUREXON CONSTRUCT is the dedicated execution division of {COMPANY_DETAILS.legalName}. It is an internal operational unit rather
                than a separate corporate entity, ensuring all contractual warranties, liability coverages, and project guarantees are directly
                backed by the parent company.
              </p>
            </div>
          </div>

          {/* Structured Execution Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-[#0E1E38]/90 border border-slate-800 rounded-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xs bg-[#132B4F] border border-slate-700 flex items-center justify-center shrink-0">
                  <Cog className="w-4 h-4 text-[#C5A869]" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Technical Comprehension
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-11">
                Translating complex structural calculations, rebar bending schedules, and architectural details into clear, unambiguous site tasks.
              </p>
            </div>

            <div className="p-5 bg-[#0E1E38]/90 border border-slate-800 rounded-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xs bg-[#132B4F] border border-slate-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Controlled Site Management
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-11">
                Supervising on-site trades, staging deliveries, managing equipment availability, and systematically monitoring daily output.
              </p>
            </div>

            <div className="p-5 bg-[#0E1E38]/90 border border-slate-800 rounded-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xs bg-[#132B4F] border border-slate-700 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#C5A869]" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Disciplined Sequencing
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-11">
                Preserving structural timelines through disciplined curing periods, orderly trade handoffs, and non-negotiable inspection milestones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
