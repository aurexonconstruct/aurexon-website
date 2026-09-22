import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTY_PRINCIPLES } from '../../data/propertiesData.ts';

export const PropertyPrinciples: React.FC = () => {
  return (
    <section id="properties-principles" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DISCIPLINED PRACTICE"
          title="DEVELOPMENT PRINCIPLES"
          subtitle="Core principles governing disciplined property development, engineering coordination, and long-term asset usefulness."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROPERTY_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="p-6 bg-[#0E1E38] border border-slate-800 hover:border-[#C5A869]/40 transition-colors rounded-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#C5A869] font-bold block mb-2">
                  PRINCIPLE {principle.number}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  {principle.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>GOVERNANCE CRITERION</span>
                <span className="text-[#C5A869]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
