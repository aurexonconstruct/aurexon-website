import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { RESPONSIBLE_PRESENTATION_PRINCIPLES } from '../../data/projectsData.ts';
import { ShieldCheck, FileCheck, Eye, Lock, Camera, Scale } from 'lucide-react';

export const ProjectInformationPrinciples: React.FC = () => {
  const getPrincipleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileCheck className="w-5 h-5 text-[#C5A869]" />;
      case 1:
        return <Eye className="w-5 h-5 text-[#C5A869]" />;
      case 2:
        return <Lock className="w-5 h-5 text-[#C5A869]" />;
      case 3:
        return <Camera className="w-5 h-5 text-[#C5A869]" />;
      case 4:
        return <Scale className="w-5 h-5 text-[#C5A869]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section id="project-principles" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="PORTFOLIO GOVERNANCE"
          title="RESPONSIBLE PROJECT PRESENTATION."
          subtitle="AUREXON upholds strict standards of factual accuracy, client privacy, and technical integrity across all public corporate disclosures."
          technicalCode="PRJ-GOV-05"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESPONSIBLE_PRESENTATION_PRINCIPLES.map((principle, idx) => (
            <div
              key={principle.number}
              className={`p-6 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-slate-700 transition-colors ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C5A869] bg-[#0E1E38] px-2.5 py-0.5 rounded-xs border border-[#C5A869]/30">
                    PRINCIPLE {principle.number}
                  </span>
                  <div className="p-2 bg-[#0E1E38] border border-slate-800 rounded-xs">
                    {getPrincipleIcon(idx)}
                  </div>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#C5A869]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>MANDATORY GOVERNANCE STANDARD</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
