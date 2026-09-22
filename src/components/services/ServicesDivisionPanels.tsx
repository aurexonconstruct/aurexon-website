import React from 'react';
import { ArrowRight, HardHat, Compass, Building2 } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { DIVISION_CONNECTION_PANELS, DivisionOverviewPanel } from '../../data/servicesData.ts';

interface ServicesDivisionPanelsProps {
  onNavigate?: (href: string) => void;
}

export const ServicesDivisionPanels: React.FC<ServicesDivisionPanelsProps> = ({ onNavigate }) => {
  const handlePanelClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  const getDivisionIcon = (id: string) => {
    switch (id) {
      case 'construct':
        return <HardHat className="w-5 h-5 text-[#C5A869]" />;
      case 'engineering':
        return <Compass className="w-5 h-5 text-[#C5A869]" />;
      case 'properties':
        return <Building2 className="w-5 h-5 text-[#C5A869]" />;
      default:
        return null;
    }
  };

  return (
    <section id="services-divisions" className="py-20 sm:py-24 bg-[#0B1528] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C5A869] bg-[#0E1E38] px-3 py-1.5 rounded-xs border border-slate-700">
            DIVISION LEADERSHIP
          </span>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase leading-tight">
            EXPLORE BY OPERATING DIVISION.
          </h2>

          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-12 bg-[#C5A869]" />
            <span className="h-[2px] w-3 bg-[#C5A869]/40" />
          </div>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            For detailed division-level mandates, technical capabilities, operational methodologies and specialized frameworks, explore each dedicated division page.
          </p>
        </div>

        {/* Three Division Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {DIVISION_CONNECTION_PANELS.map((panel: DivisionOverviewPanel) => (
            <div
              key={panel.id}
              className="bg-[#070E1B] border border-slate-800 rounded-xs p-6 sm:p-8 flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-200 group relative shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="font-mono text-[11px] font-bold text-[#C5A869] tracking-wider">
                    {panel.code}
                  </span>
                  <div className="p-1.5 bg-[#0E1E38] border border-slate-800 rounded-xs">
                    {getDivisionIcon(panel.id)}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-wide group-hover:text-[#C5A869] transition-colors mb-3">
                  {panel.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8">
                  {panel.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <Button
                  variant="outline"
                  size="md"
                  href={panel.link}
                  onClick={(e) => handlePanelClick(panel.link, e)}
                  className="w-full justify-center group/btn hover:bg-[#C5A869] hover:text-[#070E1B] transition-colors"
                  icon={<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />}
                >
                  {panel.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
