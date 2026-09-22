import React from 'react';
import { ShieldCheck, CheckCircle2, Building, UserCheck, Calendar, Clock } from 'lucide-react';
import { COMPANY_DETAILS, COMPANY_HISTORY } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';

export const CorporateIntro: React.FC = () => {
  return (
    <section id="corporate-intro" className="py-20 sm:py-28 bg-[#0B1528] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          badge="CORPORATE OVERVIEW"
          title="Disciplined Planning. Sound Engineering."
          subtitle="Committed to upfront technical planning, sound engineering judgment, and coordinated project delivery across Nigeria."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Corporate Statement & Operating Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-white text-base sm:text-lg">
                Guided by our core philosophy of{' '}
                <span className="text-[#C5A869]">“Plan Well. Build Once.”</span>, {COMPANY_DETAILS.legalName}{' '}
                operates across building construction, civil engineering, and property development.
              </p>
              <p>
                AUREXON brings together construction execution, engineering consultancy, and property
                development through a shared commitment to disciplined planning, sound engineering
                judgment, and coordinated project delivery. Our approach emphasizes thorough upfront
                planning and careful site coordination to deliver durable structures and assets of lasting value.
              </p>
              <p>
                Operating through three dedicated business divisions—AUREXON CONSTRUCT, AUREXON
                ENGINEERING, and AUREXON PROPERTIES—we provide clear, accountable delivery aligned
                with client objectives, applicable Nigerian regulations, and recognized engineering practices.
              </p>
            </div>

            {/* Core Operating Principles Matrix */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Disciplined Planning',
                  desc: 'Comprehensive site review, scope alignment, and geotechnical awareness before mobilizing resources.',
                },
                {
                  title: 'Engineering Judgment',
                  desc: 'Designs benchmarked against applicable Nigerian regulations and recognized engineering standards appropriate to project requirements.',
                },
                {
                  title: 'Coordinated Delivery',
                  desc: 'Structured project oversight connecting technical consultancy with disciplined on-site construction execution.',
                },
                {
                  title: 'Long-Term Value',
                  desc: 'Creating durable structures and properties that provide lasting utility and value for clients, owners, and occupants.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs hover:border-[#C5A869]/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Corporate Evolution & Timeline (Constraint 9) */}
            <div className="pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#C5A869]" />
                <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                  Corporate Milestones & Evolution
                </h4>
              </div>

              <div className="space-y-3">
                {COMPANY_HISTORY.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#070E1B] border border-slate-800 rounded-xs flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4"
                  >
                    <div className="sm:w-36 shrink-0">
                      <span className="font-mono text-xs font-bold text-[#C5A869] block">
                        {item.period}
                      </span>
                      <span className="text-xs font-display font-semibold text-white">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Corporate Leadership & Verification Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Leadership Box - Strictly Umar Alhaji Danladi with verified role */}
            <div className="p-6 bg-[#0E1E38] border border-slate-800 relative rounded-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C5A869]">
                  Corporate Leadership
                </span>
                <span className="text-[10px] font-mono text-slate-400">EXECUTIVE</span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#132B4F] border border-[#C5A869]/50 rounded-xs flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6 text-[#C5A869]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide">
                    {COMPANY_DETAILS.founder.name}
                  </h3>
                  <p className="text-xs text-[#C5A869] font-mono uppercase tracking-wider mt-0.5">
                    {COMPANY_DETAILS.founder.role}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">
                    {COMPANY_DETAILS.founder.company}
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-[#070E1B] border border-slate-800/80 rounded-xs text-xs text-slate-300 leading-relaxed">
                Guiding AUREXON’s corporate strategy, engineering discipline, and property
                development philosophy under the guiding mandate: “Plan Well. Build Once.”
              </div>
            </div>

            {/* Corporate Profile Card */}
            <div className="p-6 bg-[#070E1B] border border-slate-800 rounded-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-auto max-w-[90px] bg-[#0E1E38] border border-[#C5A869]/40 flex items-center justify-center rounded-xs p-1 shrink-0 overflow-hidden shadow-sm">
                    <img
                      src={COMPANY_DETAILS.logoUrl}
                      alt={`${COMPANY_DETAILS.brandName} Logo`}
                      className="h-full w-auto object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('/images/aurexon-logo.png')) {
                          target.src = COMPANY_DETAILS.logoFallbackUrl;
                        }
                      }}
                    />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-300">Corporate Profile</span>
                </div>
                <span className="font-mono text-[10px] text-[#C5A869] border border-[#C5A869]/30 bg-[#132B4F]/50 px-2 py-0.5 rounded-xs">
                  RC: {COMPANY_DETAILS.rcNumber}
                </span>
              </div>

              <div className="space-y-3 text-xs divide-y divide-slate-800/80">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Legal Entity:</span>
                  <span className="text-white font-mono text-right font-medium text-[11px] sm:text-xs">
                    {COMPANY_DETAILS.legalName}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Public Brand:</span>
                  <span className="text-[#C5A869] font-mono font-bold">
                    {COMPANY_DETAILS.brandName}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">RC Number:</span>
                  <span className="text-white font-mono font-semibold">
                    {COMPANY_DETAILS.rcNumber}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Corporate Status:</span>
                  <span className="text-emerald-400 font-mono font-semibold">
                    {COMPANY_DETAILS.corporateStatus}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Company Type:</span>
                  <span className="text-slate-300 font-mono text-right text-[11px]">
                    {COMPANY_DETAILS.companyType}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Date of Incorporation:</span>
                  <span className="text-slate-200 font-mono">{COMPANY_DETAILS.dateOfIncorporation}</span>
                </div>
                <div className="flex justify-between items-start pt-2">
                  <span className="text-slate-400 shrink-0">Registered Office:</span>
                  <span className="text-slate-300 font-mono text-right text-[11px] leading-snug pl-3">
                    {COMPANY_DETAILS.registeredOffice.address}
                    <span className="block text-slate-400">Post Code: {COMPANY_DETAILS.registeredOffice.postCode}</span>
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Corporate Email:</span>
                  <a
                    href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                    className="text-[#C5A869] hover:underline font-mono text-[11px] break-all text-right"
                  >
                    {COMPANY_DETAILS.corporateEmail}
                  </a>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-400">Jurisdiction:</span>
                  <span className="text-slate-300 font-mono">Federal Republic of Nigeria</span>
                </div>
              </div>

              {/* Strict Institutional Independence Statement */}
              <div className="p-3 bg-amber-950/20 border border-amber-900/30 text-[11px] text-amber-200/90 rounded-xs leading-relaxed">
                <span className="font-semibold block mb-0.5 text-amber-200">
                  Legal & Institutional Scope Notice:
                </span>
                {COMPANY_DETAILS.legalNotice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
