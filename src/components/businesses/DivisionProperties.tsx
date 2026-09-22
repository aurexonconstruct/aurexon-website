import React from 'react';
import { Building2, ArrowRight, Check, ShieldCheck, TrendingUp, Key, FileCheck, Layers } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface DivisionPropertiesProps {
  onNavigate?: (href: string) => void;
}

export const DivisionProperties: React.FC<DivisionPropertiesProps> = ({ onNavigate }) => {
  const focusAreas = [
    {
      title: 'Property Development',
      detail: 'End-to-end development programs aligning architectural vision, engineering feasibility, and statutory planning permissions.',
    },
    {
      title: 'Real Estate Investment',
      detail: 'Analytical investment appraisal, site acquisition due diligence, yield modeling, and commercial risk assessment.',
    },
    {
      title: 'Property Sales',
      detail: 'Structured marketing, transparent contractual terms, verified documentation, and ethical client transaction management.',
    },
    {
      title: 'Leasing',
      detail: 'Commercial and residential tenancy structuring, lease agreement management, and structured occupancy coordination.',
    },
    {
      title: 'Development Management',
      detail: 'Executive representation, program scheduling, cost monitoring, and integrated multi-consultant synchronization.',
    },
    {
      title: 'Land-to-Property Development',
      detail: 'The full transformative lifecycle: converting raw land through site planning, engineering, and construction into enduring value.',
    },
  ];

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/businesses/properties');
    } else {
      window.location.href = '/businesses/properties';
    }
  };

  return (
    <section
      id="properties"
      className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Division Monogram */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#C5A869] tracking-widest uppercase bg-[#C5A869]/10 border border-[#C5A869]/30 px-2.5 py-1 rounded-xs">
                DIVISION 03 // PROPERTY & REAL ESTATE
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                [AUREXON PROPERTIES]
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              AUREXON PROPERTIES
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-1">
              Our property division focuses on property development and real estate opportunities, connecting land,
              planning, design, engineering and construction with long-term property value.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              variant="primary"
              size="md"
              href="/businesses/properties"
              onClick={handleCtaClick}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              EXPLORE PROPERTIES
            </Button>
          </div>
        </div>

        {/* 6 Focus Areas Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xs font-bold text-slate-300 uppercase tracking-[0.2em] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C5A869]" />
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
                  <span>Scope Track: Property Lifecycle</span>
                  <Check className="w-3.5 h-3.5 text-[#C5A869]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Stewardship Strip */}
        <div className="mt-10 p-5 bg-[#0E1E38] border border-slate-800 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C5A869] shrink-0" />
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider font-display">
                Land-to-Property Value Protection
              </span>
              <p className="text-[11px] text-slate-300">
                Rigorous title verification, realistic density planning, and durable construction backing long-term asset yields.
              </p>
            </div>
          </div>

          <a
            href="/businesses/properties"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C5A869] hover:text-[#E8D49E] transition-colors uppercase tracking-wider shrink-0"
          >
            <span>Learn More About Properties</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
