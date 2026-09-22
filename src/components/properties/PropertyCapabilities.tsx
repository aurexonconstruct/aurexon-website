import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTY_CORE_CAPABILITIES } from '../../data/propertiesData.ts';
import { Check, ShieldAlert } from 'lucide-react';

export const PropertyCapabilities: React.FC = () => {
  return (
    <section id="properties-capabilities" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="OPERATIONAL SCOPE"
          title="PROPERTY CAPABILITIES"
          subtitle="Defined development, management, and commercial capabilities structured according to project-specific requirements."
        />

        {/* Responsible Investment Disclaimer Box */}
        <div className="mt-8 p-4 bg-[#070E1B] border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300">
          <ShieldAlert className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-mono uppercase">Commercial Note: </strong>
            Participation in development or investment opportunities is governed strictly by technical feasibility,
            clear commercial contracts, and verified legal frameworks. AUREXON PROPERTIES does not guarantee capital returns,
            speculative appreciation, or passive yields, and does not maintain an open public retail inventory of speculative units.
          </p>
        </div>

        {/* 6 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROPERTY_CORE_CAPABILITIES.map((cap) => (
            <div
              key={cap.letter}
              className="p-6 bg-[#0E1E38] border border-slate-800 hover:border-[#C5A869]/50 transition-all rounded-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <span className="w-8 h-8 rounded-xs bg-[#132B4F] text-[#C5A869] font-mono text-sm font-bold flex items-center justify-center border border-slate-700">
                    {cap.letter}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                    {cap.categoryCode}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#C5A869] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 pb-1 border-b border-slate-800/60">
                  Key Scope Elements:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {cap.scopeHighlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
