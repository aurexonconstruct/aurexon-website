import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { BUILT_ENVIRONMENT_AREAS } from '../../data/insightsData.ts';
import {
  Compass,
  Cpu,
  HardHat,
  Building,
  Briefcase,
  Layers,
  MapPin,
  Info,
} from 'lucide-react';

export const BuiltEnvironmentKnowledge: React.FC = () => {
  const getAreaIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#C5A869]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-[#C5A869]" />;
      case 2:
        return <HardHat className="w-5 h-5 text-[#C5A869]" />;
      case 3:
        return <MapPin className="w-5 h-5 text-[#C5A869]" />;
      case 4:
        return <Layers className="w-5 h-5 text-[#C5A869]" />;
      case 5:
        return <Briefcase className="w-5 h-5 text-[#C5A869]" />;
      case 6:
        return <Building className="w-5 h-5 text-[#C5A869]" />;
      default:
        return <Compass className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section id="built-environment-knowledge" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="TECHNICAL SPECIALIZATION"
          title="BUILT-ENVIRONMENT KNOWLEDGE"
          subtitle="Core operational disciplines where AUREXON's initial insights and practical engineering perspectives are centered."
        />

        {/* Clear Disclosure Notice (Mandated by Prompt) */}
        <div className="mt-8 p-4 bg-[#0E1E38] border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-mono uppercase">Scope & Editorial Notice: </strong>
            AUREXON's strongest initial insight areas are expected to relate to its core built-environment activities. Listing these operational disciplines illustrates our technical domain focus and does <span className="text-white font-semibold">NOT</span> claim that all these topics currently have published articles.
          </p>
        </div>

        {/* Built-Environment Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-12">
          {BUILT_ENVIRONMENT_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/40 transition-colors rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700/60">
                    {getAreaIcon(idx)}
                  </div>
                  <span className="font-mono text-[10px] text-[#C5A869] uppercase tracking-wider">
                    {area.category}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-2">
                  {area.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>OPERATIONAL SCOPE</span>
                <span className="text-[#C5A869]">PLANNED THEME</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
