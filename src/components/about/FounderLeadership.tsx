import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';
import { UserCheck, ShieldCheck, Compass, CheckCircle2, Quote, Award, Building } from 'lucide-react';

export const FounderLeadership: React.FC = () => {
  return (
    <section id="founder-leadership" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="LEADERSHIP"
          title="Founder & Managing Director"
          subtitle="Guided by engineering discipline, technical integrity, and accountable executive stewardship."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Founder Profile Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-[#0E1E38] border border-slate-800 rounded-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-radial from-[#C5A869]/10 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A869]">
                  EXECUTIVE PROFILE
                </span>
                <span className="font-mono text-[10px] bg-[#132B4F] text-slate-300 px-2.5 py-1 rounded-xs border border-slate-700">
                  CORPORATE LEADERSHIP
                </span>
              </div>

              {/* Founder Header */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#132B4F] border border-[#C5A869]/60 rounded-xs flex items-center justify-center shrink-0 shadow-inner">
                  <UserCheck className="w-8 h-8 text-[#C5A869]" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {COMPANY_DETAILS.founder.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C5A869] font-mono uppercase tracking-wider mt-1">
                    {COMPANY_DETAILS.founder.role}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    {COMPANY_DETAILS.founder.company}
                  </p>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="mt-6 p-4 bg-[#070E1B] border border-slate-800 rounded-xs text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                <p>
                  Leading AUREXON’s corporate strategy, technical direction, and multi-division operations
                  with a dedicated focus on engineering rigor and structural longevity.
                </p>
                <p className="text-slate-400 text-xs">
                  Championing the foundational doctrine: <span className="text-[#C5A869] font-semibold">“Plan Well. Build Once.”</span>
                </p>
              </div>

              {/* Key Milestones in Journey */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                  Leadership Trajectory
                </span>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[11px] text-[#C5A869] font-semibold shrink-0 mt-0.5">
                      2024:
                    </span>
                    <span>Conceived the foundational vision and operational concept of AUREXON.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[11px] text-[#C5A869] font-semibold shrink-0 mt-0.5">
                      2025:
                    </span>
                    <span>Directed early technical operations in Bills of Quantities (BOQ), structural design, and engineering consultancy on selected smaller projects.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[11px] text-[#C5A869] font-semibold shrink-0 mt-0.5">
                      2026:
                    </span>
                    <span>Led the official corporate incorporation of AUREXON CONSTRUCTS NIGERIA LIMITED (RC 9729028) on 30 July 2026.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Philosophy & Responsibilities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Leadership Statement Card */}
            <div className="p-6 sm:p-8 bg-[#0B1528] border border-slate-800 rounded-xs relative">
              <Quote className="w-8 h-8 text-[#C5A869]/30 mb-4" />
              <blockquote className="font-display text-base sm:text-lg text-white leading-relaxed italic">
                “Our commitment is straightforward: before ground is broken, the engineering must be
                sound, the materials properly specified, and the execution plan clear. In an environment
                where hasty execution leads to recurring repairs, thorough planning protects investments
                and creates lasting value.”
              </blockquote>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#C5A869]">
                  {COMPANY_DETAILS.founder.name}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  {COMPANY_DETAILS.founder.role}
                </span>
              </div>
            </div>

            {/* Strategic Pillars of Governance */}
            <div className="space-y-3">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-[#C5A869]">
                Executive Focus & Responsibilities
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs">
                  <span className="font-mono text-xs text-[#C5A869] font-semibold block mb-1">
                    Technical Governance
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ensuring all structural calculations, drawings, and Bills of Quantities align with applicable Nigerian regulations and recognized engineering standards.
                  </p>
                </div>

                <div className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs">
                  <span className="font-mono text-xs text-[#C5A869] font-semibold block mb-1">
                    Execution Coordination
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Bridging design consultancy with on-site building execution to eliminate discrepancies between technical drawings and site reality.
                  </p>
                </div>

                <div className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs">
                  <span className="font-mono text-xs text-[#C5A869] font-semibold block mb-1">
                    Development Strategy
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Guiding property development initiatives through the 8-stage value chain, ensuring financial viability and long-term asset performance.
                  </p>
                </div>

                <div className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs">
                  <span className="font-mono text-xs text-[#C5A869] font-semibold block mb-1">
                    Corporate Accountability
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Upholding transparent client relations, reliable milestone delivery, and disciplined financial stewardship across all active engagements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
