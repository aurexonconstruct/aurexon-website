import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CONSTRUCT_QUALITY_PILLARS } from '../../data/constructData.ts';
import {
  FileText,
  Workflow,
  CheckCircle2,
  HardHat,
  LineChart,
  FileCheck2,
  Scale,
  ShieldCheck,
} from 'lucide-react';

export const ConstructQualitySafety: React.FC = () => {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <FileText className="w-4 h-4 text-[#C5A869]" />;
      case 1:
        return <Workflow className="w-4 h-4 text-[#C5A869]" />;
      case 2:
        return <CheckCircle2 className="w-4 h-4 text-[#C5A869]" />;
      case 3:
        return <HardHat className="w-4 h-4 text-[#C5A869]" />;
      case 4:
        return <LineChart className="w-4 h-4 text-[#C5A869]" />;
      case 5:
        return <FileCheck2 className="w-4 h-4 text-[#C5A869]" />;
      case 6:
        return <Scale className="w-4 h-4 text-[#C5A869]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#C5A869]" />;
    }
  };

  return (
    <section
      id="construct-quality-safety"
      className="py-16 sm:py-24 bg-[#0B1528] border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="RESPONSIBLE EXECUTION"
          technicalCode="DIV-01 // GOVERNANCE"
          title="CONTROLLED DELIVERY."
          subtitle="Our site practices prioritize rigorous adherence to project requirements, proactive safety precautions, disciplined supervision, and transparent communication throughout construction."
        />

        {/* 7 Operational Quality & Safety Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSTRUCT_QUALITY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-6 bg-[#0E1E38]/90 border border-slate-800 rounded-xs hover:border-slate-700 transition-colors flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                  <div className="w-8 h-8 rounded-xs bg-[#132B4F] border border-slate-700 flex items-center justify-center shrink-0">
                    {getPillarIcon(idx)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                      Pillar 0{idx + 1}
                    </span>
                    <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-[10px] font-mono text-[#C5A869]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                <span className="uppercase tracking-wider">Operational Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Language Verification & Compliance Note */}
        <div className="mt-10 p-5 bg-[#070E1B] border border-slate-800 rounded-xs">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold block">
                Factual Compliance & Regulatory Adherence Statement
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                AUREXON CONSTRUCT approaches quality through structured on-site oversight, documented inspection stages,
                and strict conformity with applicable Nigerian building standards, town planning regulations, and client-approved
                project specifications. Execution procedures are designed to maintain orderly, controlled progress while fostering
                a culture of active safety consciousness across every active job site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
