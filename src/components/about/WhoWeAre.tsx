import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { COMPANY_DETAILS, ORIGIN_TIMELINE } from '../../data/companyData.ts';
import { ShieldCheck, Calendar, Compass, AlertCircle, Building2, Layers, CheckCircle2 } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section id="who-we-are" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="WHO WE ARE"
          title="Corporate Identity & Origin"
          subtitle="An independent Nigerian corporation founded on upfront technical discipline, sound engineering judgment, and coordinated project execution."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-white text-base sm:text-lg">
                Guided by our core philosophy of{' '}
                <span className="text-[#C5A869]">“Plan Well. Build Once.”</span>, {COMPANY_DETAILS.legalName}{' '}
                is dedicated to delivering enduring structural works and well-planned property developments.
              </p>

              <p>
                AUREXON brings together construction execution, engineering consultancy, and property
                development through a shared commitment to disciplined planning, sound engineering
                judgment, and coordinated project delivery. In an industry where rushed site starts frequently
                result in costly rework and compromised durability, our approach prioritizes thorough upfront
                planning, technical review, and careful coordination before ground is broken.
              </p>

              <p>
                Operating through three dedicated business divisions—AUREXON CONSTRUCT, AUREXON
                ENGINEERING, and AUREXON PROPERTIES—we provide clear, accountable delivery aligned
                with client objectives, applicable Nigerian regulations, and recognized engineering practices.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs">
                <div className="flex items-center gap-2 mb-2 text-[#C5A869]">
                  <Compass className="w-4 h-4" />
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                    Upfront Planning
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Comprehensive site evaluation, geotechnical awareness, and spatial review before mobilizing resources.
                </p>
              </div>

              <div className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs">
                <div className="flex items-center gap-2 mb-2 text-[#C5A869]">
                  <Building2 className="w-4 h-4" />
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                    Engineering Judgment
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Structural and civil designs benchmarked against applicable Nigerian regulations and recognized engineering standards.
                </p>
              </div>
            </div>

            {/* Statutory Institutional Independence Notice */}
            <div className="p-5 bg-[#070E1B] border border-amber-900/40 rounded-xs relative">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <span className="font-mono uppercase tracking-widest text-[#C5A869] font-bold block">
                    Institutional Independence Notice
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {COMPANY_DETAILS.legalNotice}
                  </p>
                  <p className="text-slate-400 text-[11px] pt-1 font-mono">
                    AUREXON operates strictly as a commercial construction, civil engineering, and real estate development corporation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Origin Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 bg-[#0E1E38] border border-slate-800 rounded-xs relative">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A869] block">
                    Origin & Evolution
                  </span>
                  <h3 className="font-display text-base font-bold text-white tracking-wide">
                    Company Timeline
                  </h3>
                </div>
                <Calendar className="w-4 h-4 text-[#C5A869]" />
              </div>

              {/* Timeline Items */}
              <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[17px] before:w-[2px] before:bg-slate-800">
                {ORIGIN_TIMELINE.map((item, idx) => (
                  <div key={item.year} className="relative flex items-start gap-4">
                    {/* Timeline Node */}
                    <div className="w-9 h-9 rounded-xs bg-[#070E1B] border border-[#C5A869]/60 flex items-center justify-center shrink-0 z-10">
                      <span className="font-mono text-[10px] text-[#C5A869] font-bold">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 bg-[#0B1528] border border-slate-800/80 p-4 rounded-xs">
                      <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                        <span className="font-mono text-xs font-bold text-[#C5A869]">
                          {item.year}
                        </span>
                        <span className="font-mono text-[10px] bg-[#132B4F] text-slate-300 px-2 py-0.5 rounded-xs border border-slate-700">
                          {item.stage}
                        </span>
                      </div>
                      <h4 className="font-display text-sm font-semibold text-white mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clarification Note on Legal Incorporation */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 leading-relaxed">
                <span className="text-[#C5A869] font-semibold">Note: </span>
                Official corporate incorporation under the Companies and Allied Matters Act of Nigeria took place on 30 July 2026 (RC: 9729028). Prior activities reflect the founding initiative and early project execution.
              </div>
            </div>

            {/* Registered Office Verification */}
            <div className="p-5 bg-[#070E1B] border border-slate-800 rounded-xs space-y-2 text-xs">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
                Registered Office
              </span>
              <p className="text-white font-medium">
                {COMPANY_DETAILS.registeredOffice.fullFormatted}
              </p>
              <p className="text-slate-400 font-mono text-[11px]">
                Postal Code: {COMPANY_DETAILS.registeredOffice.postCode} • Federal Republic of Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
