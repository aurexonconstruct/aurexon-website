import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import {
  MapPin,
  FileCheck,
  Calculator,
  PenTool,
  Cpu,
  Hammer,
  KeyRound,
  FileText,
  ShieldCheck,
  Info,
} from 'lucide-react';

export const PropertiesIntro: React.FC = () => {
  const developmentAspects = [
    {
      title: 'Land Consideration',
      desc: 'Topographical assessment, location evaluation, access routes, boundary conditions, and suitability for the intended development.',
      icon: <MapPin className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Planning',
      desc: 'Evaluation of zoning parameters, statutory approvals, density requirements, and neighborhood integration frameworks.',
      icon: <FileCheck className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Feasibility',
      desc: 'Technical scope validation, constructability assessment, cost modeling, and commercial structuring parameters.',
      icon: <Calculator className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Design',
      desc: 'Architectural space planning, functional layouts, natural light, ventilation, and durable materials suited to site conditions.',
      icon: <PenTool className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Engineering',
      desc: 'Civil works, structural load calculations, foundations, stormwater drainage, and technical utility integration.',
      icon: <Cpu className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Construction',
      desc: 'Site execution, quality-controlled workmanship, material testing, safety compliance, and progress supervision.',
      icon: <Hammer className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Property Delivery',
      desc: 'Systematic snagging, final statutory reviews, operational commissioning, and formal handover to client or stakeholders.',
      icon: <KeyRound className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Sale or Lease (Where Applicable)',
      desc: 'Clear commercial agreements, transparent documentation, buyer/tenant onboarding, and legal transfer procedures where relevant.',
      icon: <FileText className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Long-Term Usefulness & Value',
      desc: 'Focusing on asset durability, practical maintenance, functional longevity, and sustained spatial utility over time.',
      icon: <ShieldCheck className="w-4 h-4 text-[#C5A869]" />,
    },
  ];

  return (
    <section id="properties-intro" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DISCIPLINED DEVELOPMENT"
          title="DEVELOPMENT WITH A CLEAR PLAN."
          subtitle="Property development requires disciplined alignment between site realities, technical design, engineering coordination, and practical utility."
        />

        {/* Narrative Context */}
        <div className="mt-8 max-w-4xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            AUREXON PROPERTIES approaches property development as a structured, deliberate undertaking. Successful property outcomes are not driven by speculative hype, but by methodical coordination across each technical, regulatory, and physical milestone.
          </p>
          <p className="text-slate-400 text-sm">
            Depending on the mandate, property development may involve land assessment, planning compliance, feasibility studies, design coordination, civil and structural engineering, physical construction, handover, commercial leasing or sales where applicable, and long-term asset usefulness.
          </p>
        </div>

        {/* Operational Clarification Note (Explicitly No Return Guarantees) */}
        <div className="mt-8 p-5 bg-[#0E1E38] border border-slate-800 rounded-xs flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Project Structure & Commercial Clarity
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Actual involvement depends on the specific development structure, project requirements, and applicable contractual arrangements. AUREXON does not promise or guarantee speculative capital appreciation, investment returns, or passive yields; our focus is on structural execution, regulatory diligence, and enduring functional quality.
            </p>
          </div>
        </div>

        {/* 9 Core Development Scope Elements */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentAspects.map((aspect, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0B1528] border border-slate-800 rounded-xs hover:border-[#C5A869]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700/60">
                    {aspect.icon}
                  </div>
                  <span className="font-mono text-[11px] text-[#C5A869]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-2">
                  {aspect.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {aspect.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
