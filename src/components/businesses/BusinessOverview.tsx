import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';
import { HardHat, Compass, Building2, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';

export const BusinessOverview: React.FC = () => {
  return (
    <section
      id="business-overview"
      className="py-20 sm:py-28 bg-[#0B1528] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="BUSINESS OVERVIEW"
          title="BUILT AROUND WHAT WE DO BEST."
          subtitle="Operating through three principal business divisions, AUREXON provides focused expertise while maintaining synchronized coordination across the entire project lifecycle."
        />

        {/* Narrative & Structural Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              AUREXON operates through three principal business divisions—
              <span className="text-white font-semibold"> AUREXON CONSTRUCT</span>,
              <span className="text-white font-semibold"> AUREXON ENGINEERING</span>, and
              <span className="text-white font-semibold"> AUREXON PROPERTIES</span>.
              Each division has a clearly defined technical role, specialized methodologies, and disciplined accountability,
              while remaining seamlessly connected within the broader AUREXON operating model.
            </p>

            <p>
              Rather than maintaining isolated silos or legally fragmented entities, all three divisions operate as integral
              operational units of <span className="text-white font-semibold">{COMPANY_DETAILS.legalName}</span> (RC: {COMPANY_DETAILS.rcNumber}).
              This corporate unity eliminates the classic friction between architects, structural consultants, contractors,
              and property managers, ensuring cohesive technical discipline from the first geotechnical survey to long-term facility operation.
            </p>

            <div className="p-5 bg-[#0E1E38] border border-slate-800 rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C5A869]">
                <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
                <span>Operating Framework & Scope Alignment</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our divisions provide complementary capabilities within the broader AUREXON model. Their involvement
                in any given project depends on the specific project requirements, technical scope, and client delivery structure.
                A project may require standalone engineering calculations, dedicated building execution, or an integrated land-to-property program.
              </p>
            </div>
          </div>

          {/* Quick Overview Bento Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#070E1B] border border-slate-800 rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#C5A869]">01 // EXECUTION</span>
                <HardHat className="w-4 h-4 text-[#C5A869]" />
              </div>
              <h3 className="font-display text-base font-bold text-white uppercase">
                AUREXON CONSTRUCT
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Execution of building construction, civil engineering works, infrastructure, site development, and disciplined construction management.
              </p>
            </div>

            <div className="p-6 bg-[#070E1B] border border-slate-800 rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#C5A869]">02 // DESIGN & ADVISORY</span>
                <Compass className="w-4 h-4 text-[#C5A869]" />
              </div>
              <h3 className="font-display text-base font-bold text-white uppercase">
                AUREXON ENGINEERING
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Civil and structural engineering calculations, design modeling, technical consultancy, site supervision, and milestone planning.
              </p>
            </div>

            <div className="p-6 bg-[#070E1B] border border-slate-800 rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#C5A869]">03 // ASSET VALUE</span>
                <Building2 className="w-4 h-4 text-[#C5A869]" />
              </div>
              <h3 className="font-display text-base font-bold text-white uppercase">
                AUREXON PROPERTIES
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Property development, real estate investment evaluation, sales, leasing, and complete land-to-property lifecycle management.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Operating Commitments Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800/80">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xs bg-[#132B4F]/60 border border-[#C5A869]/30 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Defined Operational Roles
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Clear scope boundaries and focused technical responsibility across each division.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xs bg-[#132B4F]/60 border border-[#C5A869]/30 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Unified Corporate Governance
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                One legal corporate entity ensuring consistent standards, accountability, and quality.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xs bg-[#132B4F]/60 border border-[#C5A869]/30 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />
            </div>
            <div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                Flexible Scope Engagement
              </h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Deployable as standalone specialized services or as a fully coordinated delivery program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
