import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { INSIGHT_QUALITY_PRINCIPLES } from '../../data/insightsData.ts';
import {
  CheckCircle,
  FileCheck,
  Compass,
  Lock,
  UserCheck,
  AlertCircle,
} from 'lucide-react';

export const InsightQualityPrinciples: React.FC = () => {
  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckCircle className="w-5 h-5 text-[#C5A869]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#C5A869]" />;
      case 2:
        return <FileCheck className="w-5 h-5 text-[#C5A869]" />;
      case 3:
        return <Lock className="w-5 h-5 text-[#C5A869]" />;
      case 4:
        return <UserCheck className="w-5 h-5 text-[#C5A869]" />;
      case 5:
        return <AlertCircle className="w-5 h-5 text-[#C5A869]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section id="quality-principles" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="EDITORIAL ETHICS"
          title="RESPONSIBLE KNOWLEDGE SHARING"
          subtitle="Six foundational standards governing public information integrity, technical disclosures, and editorial responsibility."
        />

        {/* Narrative Statement */}
        <div className="mt-8 max-w-4xl text-slate-300 text-sm leading-relaxed">
          <p>
            AUREXON maintains high institutional integrity across all external communications. We reject sensationalist marketing, speculative engineering claims, and unvetted technical commentary in favor of factual, contextualized, and responsible knowledge dissemination.
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {INSIGHT_QUALITY_PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.number}
              className="p-6 bg-[#0E1E38] border border-slate-800 hover:border-[#C5A869]/50 transition-all rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="w-9 h-9 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700">
                    {getPrincipleIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-[#C5A869] font-bold">
                    STANDARD {principle.number}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide mb-2.5">
                  {principle.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {principle.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>EDITORIAL POLICY</span>
                <span className="text-[#C5A869] font-bold">MANDATORY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
