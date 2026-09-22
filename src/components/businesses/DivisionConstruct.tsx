import React from 'react';
import { HardHat, ArrowRight, Check, ShieldCheck, Hammer, Truck, Ruler, Layers } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface DivisionConstructProps {
  onNavigate?: (href: string) => void;
}

export const DivisionConstruct: React.FC<DivisionConstructProps> = ({ onNavigate }) => {
  const focusAreas = [
    {
      title: 'Building Construction',
      detail: 'Structural framing, reinforced concrete, masonry, and full vertical enclosure delivery for commercial, residential, and institutional facilities.',
    },
    {
      title: 'Civil Works & Infrastructure',
      detail: 'Site roads, stormwater management systems, reinforced drainage culverts, and municipal utility connections engineered for durability.',
    },
    {
      title: 'General Construction',
      detail: 'Comprehensive site preparation, foundation laying, and general contracting execution adhering to approved structural drawings.',
    },
    {
      title: 'Site Development',
      detail: 'Earthworks, site clearance, terrain grading, soil compaction, and level stabilization executed with proper geotechnical considerations.',
    },
    {
      title: 'Construction Management',
      detail: 'Daily on-site coordination, supply chain tracking, labor management, and safety enforcement under structured project milestones.',
    },
    {
      title: 'Project Execution',
      detail: 'Hands-on site operations and scheduled delivery tracking supporting our core principle to "Plan Well. Build Once."',
    },
  ];

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/businesses/construct');
    } else {
      window.location.href = '/businesses/construct';
    }
  };

  return (
    <section
      id="construct"
      className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative overflow-hidden"
    >
      {/* Background blueprint subtle accent */}
      <div className="absolute inset-0 bg-grid-blueprint-dense pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Division Monogram */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#C5A869] tracking-widest uppercase bg-[#C5A869]/10 border border-[#C5A869]/30 px-2.5 py-1 rounded-xs">
                DIVISION 01 // CONSTRUCTION & WORKS
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                [AUREXON CONSTRUCT]
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              AUREXON CONSTRUCT
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
              Our construction division focuses on the execution and delivery of building, civil and infrastructure works,
              from site development through coordinated construction activities.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="primary"
              size="md"
              href="/businesses/construct"
              onClick={handleCtaClick}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              EXPLORE CONSTRUCT
            </Button>
          </div>
        </div>

        {/* 6 Focus Areas Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xs font-bold text-slate-300 uppercase tracking-[0.2em] flex items-center gap-2">
              <HardHat className="w-4 h-4 text-[#C5A869]" />
              <span>Core Focus Areas</span>
            </h3>
            <span className="font-mono text-[11px] text-slate-500">
              6 Specialized Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {focusAreas.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/50 rounded-xs transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#C5A869]">
                      0{idx + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C5A869]/60 group-hover:bg-[#C5A869] transition-colors" />
                  </div>
                  <h4 className="font-display text-base font-bold text-white group-hover:text-[#C5A869] transition-colors uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Scope Track: Active Site</span>
                  <Check className="w-3.5 h-3.5 text-[#C5A869]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Division Standards Strip */}
        <div className="mt-10 p-5 bg-[#0E1E38] border border-slate-800 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A869] shrink-0" />
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                Execution Quality Controls
              </span>
              <p className="text-[11px] text-slate-300">
                Material batch tests, rebar placement verification, and site safety protocols applied consistently.
              </p>
            </div>
          </div>

          <a
            href="/businesses/construct"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C5A869] hover:text-[#E8D49E] transition-colors uppercase tracking-wider shrink-0"
          >
            <span>Learn More About Construct</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
