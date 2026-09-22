import React from 'react';
import { WHY_AUREXON_PILLARS, COMPANY_DETAILS } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';

export const WhyAurexon: React.FC = () => {
  return (
    <section id="why-aurexon" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="WHY AUREXON"
          title="Why AUREXON: Our Approach"
          subtitle="We emphasize upfront technical discipline, sound engineering practices, and integrated coordination to help clients achieve durable, cost-effective outcomes."
        />

        {/* 4 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_AUREXON_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-7 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-200 group"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-[#C5A869]/80 group-hover:text-[#C5A869] transition-colors block mb-4">
                  {pillar.number}
                </span>

                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-3 tracking-wide">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A869]">
                  Operating Principle
                </span>
                <span className="w-1.5 h-1.5 bg-[#C5A869] rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* The "Planning vs Rework" Explanatory Banner */}
        <div className="mt-12 bg-[#0E1E38] border border-slate-800 rounded-xs p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-[#C5A869] uppercase tracking-widest block mb-1">
                Engineering Perspective
              </span>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                The Practical Value of Upfront Planning
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Our approach emphasizes thorough site evaluation, sound engineering coordination, and
                clear project parameters before physical construction begins. By taking the time to
                plan rigorously upfront, we aim to support smooth execution, efficient material use,
                and enduring structural quality—embodying our guiding philosophy: “Plan Well. Build Once.”
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-4 bg-[#070E1B] border border-[#C5A869]/40 text-center rounded-xs w-full sm:w-auto">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#C5A869] block">
                  PLAN WELL.
                </span>
                <span className="font-display text-2xl sm:text-3xl font-bold text-white block">
                  BUILD ONCE.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
