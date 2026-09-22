import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import {
  MapPin,
  ClipboardList,
  Calculator,
  Compass,
  Cpu,
  Hammer,
  KeyRound,
  FileText,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

export const PropertyIntroduction: React.FC = () => {
  const lifecycleElements = [
    {
      icon: <MapPin className="w-4 h-4 text-[#C5A869]" />,
      title: 'Land Consideration',
      desc: 'Evaluating site boundaries, topography, drainage corridors, access infrastructure, and statutory title validity.',
    },
    {
      icon: <ClipboardList className="w-4 h-4 text-[#C5A869]" />,
      title: 'Planning & Zoning',
      desc: 'Analyzing municipal planning frameworks, permissible land-use zoning, building setbacks, and development density limits.',
    },
    {
      icon: <Calculator className="w-4 h-4 text-[#C5A869]" />,
      title: 'Feasibility Considerations',
      desc: 'Assessing realistic development costs, phasing options, infrastructure requirements, and commercial viability parameters.',
    },
    {
      icon: <Compass className="w-4 h-4 text-[#C5A869]" />,
      title: 'Design Response',
      desc: 'Developing architectural schemes that prioritize functional spatial flow, natural ventilation, and daylight for end occupants.',
    },
    {
      icon: <Cpu className="w-4 h-4 text-[#C5A869]" />,
      title: 'Engineering Coordination',
      desc: 'Integrating civil and structural engineering so foundations, utilities, and framing conform strictly to site physical reality.',
    },
    {
      icon: <Hammer className="w-4 h-4 text-[#C5A869]" />,
      title: 'Construction Execution',
      desc: 'Coordinating physical works with verified materials, site safety discipline, and systematic quality oversight.',
    },
    {
      icon: <KeyRound className="w-4 h-4 text-[#C5A869]" />,
      title: 'Property Delivery',
      desc: 'Conducting structured snag inspections, finalizing documentation, and executing smooth handover to owners or operators.',
    },
    {
      icon: <FileText className="w-4 h-4 text-[#C5A869]" />,
      title: 'Sale or Lease (Where Applicable)',
      desc: 'Structuring clear, transparent legal agreements for ownership allocation or commercial tenancy according to project intent.',
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-[#C5A869]" />,
      title: 'Long-Term Value',
      desc: 'Ensuring structural resilience, maintainable building systems, and enduring functional relevance over the asset lifecycle.',
    },
  ];

  return (
    <section id="properties-introduction" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DEVELOPMENT FRAMEWORK"
          title="DEVELOPMENT WITH A CLEAR PLAN."
          subtitle="Property development begins with understanding the land, opportunity, intended use and development requirements before capital is committed."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          {/* Left: Narrative Overview */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-4 bg-[#0E1E38] border-l-2 border-[#C5A869] border-y border-r border-slate-800 rounded-xs">
              <p className="font-mono text-xs text-[#C5A869] uppercase tracking-wider mb-1">
                Core Philosophy: Plan Well. Build Once.
              </p>
              <p className="text-slate-200 text-sm">
                AUREXON PROPERTIES approaches real-estate not through speculative promises or rapid turnover,
                but through disciplined spatial planning, technical engineering coordination, and practical stewardship.
              </p>
            </div>

            <p>
              Responsible property development is a methodical process. It demands an unhurried, objective
              understanding of the physical parcel, surrounding urban dynamics, environmental conditions, and
              the precise functional objectives of the project.
            </p>

            <p>
              By aligning statutory planning, architectural concept, and engineering requirements at the conceptual
              phase, we ensure that every design responds to genuine site constraints and can be delivered within
              realistic construction parameters.
            </p>

            <div className="p-4 bg-[#070E1B] border border-slate-800 rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
                <span>Governance & Realistic Expectations</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                As a business division of {COMPANY_DETAILS.legalName} (RC: {COMPANY_DETAILS.rcNumber}),
                AUREXON PROPERTIES maintains strict corporate transparency. We evaluate development viability
                based purely on technical facts, documented site parameters, and defined commercial parameters—never
                on speculative investment returns or guaranteed property appreciation.
              </p>
            </div>
          </div>

          {/* Right: Key Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lifecycleElements.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#0E1E38]/60 border border-slate-800/80 rounded-xs hover:border-[#C5A869]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 bg-[#070E1B] border border-slate-800 rounded-xs">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
