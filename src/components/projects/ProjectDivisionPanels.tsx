import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROJECT_DIVISION_PANELS } from '../../data/projectsData.ts';
import { Button } from '../common/Button.tsx';
import { ArrowRight, HardHat, Compass, Building, ShieldCheck } from 'lucide-react';

interface ProjectDivisionPanelsProps {
  onNavigate?: (href: string) => void;
}

export const ProjectDivisionPanels: React.FC<ProjectDivisionPanelsProps> = ({ onNavigate }) => {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'construct':
        return <HardHat className="w-6 h-6 text-[#C5A869]" />;
      case 'engineering':
        return <Compass className="w-6 h-6 text-[#C5A869]" />;
      case 'properties':
        return <Building className="w-6 h-6 text-[#C5A869]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#C5A869]" />;
    }
  };

  const handlePanelClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <section id="project-divisions" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="INTEGRATED OPERATIONS"
          title="THREE DIVISIONS. CONNECTED PROJECT CAPABILITIES."
          subtitle="AUREXON unifies specialized engineering, physical construction, and property development into a synchronized execution matrix."
          technicalCode="PRJ-DIV-03"
        />

        {/* 3 Distinct Division Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECT_DIVISION_PANELS.map((panel) => (
            <div
              key={panel.id}
              className="p-8 bg-[#070E1B] border border-slate-800 hover:border-[#C5A869]/50 transition-all duration-300 rounded-xs flex flex-col justify-between group relative overflow-hidden shadow-lg"
            >
              {/* Architectural accent strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0E1E38] group-hover:bg-[#C5A869] transition-colors duration-300" />

              <div className="space-y-6">
                {/* Header: Division Number & Icon */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-[#C5A869] bg-[#0E1E38] px-2.5 py-1 rounded-xs border border-[#C5A869]/30">
                    DIVISION {panel.number}
                  </span>
                  <div className="p-2.5 bg-[#0E1E38] border border-slate-800 rounded-xs">
                    {getDivisionIcon(panel.id)}
                  </div>
                </div>

                {/* Division Title & Tagline */}
                <div className="space-y-1.5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide group-hover:text-[#C5A869] transition-colors">
                    {panel.name}
                  </h3>
                  <p className="font-mono text-xs text-[#C5A869]/90 tracking-wide">
                    {panel.tagline}
                  </p>
                </div>

                {/* Scope Description strictly according to prompt */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {panel.description}
                </p>
              </div>

              {/* Action Button strictly according to prompt */}
              <div className="pt-8 mt-6 border-t border-slate-800/80">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => handlePanelClick(panel.buttonLink)}
                  className="w-full justify-between"
                  icon={<ArrowRight className="w-4 h-4 text-[#C5A869]" />}
                >
                  {panel.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Note: Single Corporate Entity */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * Operational Note: Operating divisions function under the unified corporate structure and governance of AUREXON CONSTRUCTS NIGERIA LIMITED (RC: 9729028).
          </p>
        </div>
      </div>
    </section>
  );
};
