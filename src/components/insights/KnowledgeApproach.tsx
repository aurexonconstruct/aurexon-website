import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { KNOWLEDGE_APPROACH_STEPS } from '../../data/insightsData.ts';
import { CheckCircle2, Sliders, AlertTriangle } from 'lucide-react';

export const KnowledgeApproach: React.FC = () => {
  const sequence = ['OBSERVE', 'ANALYSE', 'LEARN', 'SHARE', 'APPLY'];

  const distinctions = [
    {
      label: 'Practical Experience',
      desc: 'First-hand lessons learned directly on active job sites and physical engineering works.',
    },
    {
      label: 'Professional Perspective',
      desc: 'Disciplined viewpoints shaped by engineering management, project governance, and industry ethics.',
    },
    {
      label: 'Technical Explanation',
      desc: 'Objective engineering breakdowns of structural loads, soil mechanics, and statutory building codes.',
    },
    {
      label: 'Educational Material',
      desc: 'General foundational principles to assist clients and stakeholders in understanding delivery workflows.',
    },
    {
      label: 'Project-Specific Information',
      desc: 'Parameters strictly delimited to particular client contracts, site boundaries, and unique design constraints.',
    },
  ];

  return (
    <section id="knowledge-approach" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="KNOWLEDGE METHODOLOGY"
          title="FROM EXPERIENCE TO INSIGHT."
          subtitle="A structured framework connecting on-site practical execution with systematic professional learning and useful perspectives."
        />

        {/* 5-Phase Horizontal Sequence Flow */}
        <div className="mt-8 p-4 sm:p-5 bg-[#0E1E38] border border-slate-800 rounded-xs">
          <div className="text-[11px] font-mono text-[#C5A869] font-bold uppercase tracking-widest mb-2.5">
            KNOWLEDGE METHODOLOGY SEQUENCE:
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs sm:text-sm font-bold text-white">
            {sequence.map((stepName, sIdx) => (
              <React.Fragment key={stepName}>
                <span className="px-3 py-1.5 bg-[#132B4F] border border-slate-700/80 rounded-xs text-[#E8D49E]">
                  {stepName}
                </span>
                {sIdx < sequence.length - 1 && (
                  <span className="text-[#C5A869] font-black">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-xs text-slate-300 mt-3 leading-relaxed">
            AUREXON's insight framework is intended to connect practical experience with structured professional learning and useful perspectives.
          </p>
        </div>

        {/* Clear Content Distinction Box */}
        <div className="mt-6 p-5 bg-[#0B1528] border-l-2 border-[#C5A869] border-y border-r border-slate-800 rounded-xs">
          <div className="flex items-start gap-3">
            <Sliders className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Clear Distinctions in Published Content
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                To maintain intellectual rigor and credibility, AUREXON ensures all published material clearly distinguishes between distinct forms of content. Opinions are never presented as verified facts, and general insights are never conflated with binding engineering advice.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-3 border-t border-slate-800/80">
            {distinctions.map((item, dIdx) => (
              <div key={dIdx} className="p-3 bg-[#070E1B] border border-slate-800/80 rounded-xs">
                <span className="font-mono text-[11px] font-bold text-[#C5A869] block mb-1">
                  0{dIdx + 1}. {item.label}
                </span>
                <span className="text-[11px] text-slate-400 leading-relaxed block">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Sequential Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-12">
          {KNOWLEDGE_APPROACH_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-5 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3.5">
                  <span className="font-mono text-xs text-[#C5A869] font-bold tracking-wider">
                    PHASE {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#C5A869]/60" />
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 tracking-wide uppercase">
                  {step.title}
                </h3>

                <p className="text-xs font-mono text-[#C5A869]/90 mb-3 leading-snug">
                  {step.summary}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                <CheckCircle2 className="w-3 h-3 text-[#C5A869]" />
                <span>DISCIPLINED PROCESS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
