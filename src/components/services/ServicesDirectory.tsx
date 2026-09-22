import React from 'react';
import { ArrowRight, HardHat, Compass, Building2 } from 'lucide-react';
import { APPROVED_SERVICES, ServiceItem } from '../../data/servicesData.ts';

interface ServicesDirectoryProps {
  onNavigate?: (href: string) => void;
}

export const ServicesDirectory: React.FC<ServicesDirectoryProps> = ({ onNavigate }) => {
  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.href = href;
    }
  };

  const getDivisionIcon = (divisionShort: string) => {
    switch (divisionShort) {
      case 'CONSTRUCT':
        return <HardHat className="w-3.5 h-3.5 text-[#C5A869]" />;
      case 'ENGINEERING':
        return <Compass className="w-3.5 h-3.5 text-[#C5A869]" />;
      case 'PROPERTIES':
        return <Building2 className="w-3.5 h-3.5 text-[#C5A869]" />;
      default:
        return null;
    }
  };

  return (
    <section id="services-directory" className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C5A869] bg-[#0E1E38] px-3 py-1.5 rounded-xs border border-slate-700">
            SERVICE DIRECTORY
          </span>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
            CORE COMPANY SERVICES.
          </h2>

          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-12 bg-[#C5A869]" />
            <span className="h-[2px] w-3 bg-[#C5A869]/40" />
          </div>

          <p className="text-base text-slate-300 leading-relaxed font-normal">
            A comprehensive catalog of AUREXON's nine service offerings across building construction, civil and structural engineering, project delivery, and property development.
          </p>
        </div>

        {/* 9 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {APPROVED_SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-[#0B1528] border border-slate-800/90 rounded-xs p-6 sm:p-7 flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-200 group relative shadow-md"
            >
              {/* Card Header: Number & Primary Division Badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
                  <span className="font-mono text-xs font-bold text-[#C5A869] tracking-wider">
                    SERVICE // {service.number}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#070E1B] border border-slate-800 rounded-xs text-[10px] font-mono text-slate-300">
                    {getDivisionIcon(service.divisionShort)}
                    <span>{service.primaryDivision}</span>
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide group-hover:text-[#C5A869] transition-colors mb-3">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Link to Relevant Division Page */}
              <div className="pt-4 border-t border-slate-800/80 mt-auto">
                <a
                  href={service.link}
                  onClick={(e) => handleLinkClick(service.link, e)}
                  className="inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-[#C5A869] transition-colors py-1 group/link"
                >
                  <span>Explore {service.primaryDivision}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A869] transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
