import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PUBLISHING_GOVERNANCE_CRITERIA } from '../../data/insightsData.ts';
import { ShieldCheck, CheckSquare2, FileCheck2, Info } from 'lucide-react';

export const PublishingPurpose: React.FC = () => {
  return (
    <section id="publishing-governance" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="EDITORIAL GOVERNANCE"
          title="PUBLISHING WITH PURPOSE"
          subtitle="A disciplined quality gate applied prior to the external release of any professional insight, case study, or corporate perspective."
        />

        {/* Narrative Context */}
        <div className="mt-8 max-w-4xl text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            At AUREXON, public publishing is treated as an exercise in institutional accountability. Before any perspective, article, or technical document is released, it undergoes deliberate review across nine essential governance checkpoints to safeguard client confidentiality, engineering accuracy, and intellectual property.
          </p>
        </div>

        {/* 9 Governance Checkpoints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PUBLISHING_GOVERNANCE_CRITERIA.map((criterion, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                  <div className="flex items-center gap-2">
                    <CheckSquare2 className="w-4 h-4 text-[#C5A869]" />
                    <span className="font-mono text-xs font-bold text-white uppercase">
                      GATE 0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">VERIFICATION</span>
                </div>

                <h3 className="font-display text-base font-bold text-[#C5A869] mb-1.5 uppercase">
                  {criterion.label}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {criterion.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>PRE-PUBLICATION</span>
                <span className="text-white font-medium">MANDATORY CHECK</span>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Notice */}
        <div className="mt-8 p-4 bg-[#0E1E38] border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-mono uppercase">Framework Note: </strong>
            This criteria set functions as an editorial standard for AUREXON's public website and publishing initiatives. It establishes clear quality expectations without introducing unwarranted administrative overhead or simulated software backends.
          </p>
        </div>
      </div>
    </section>
  );
};
