import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTIES } from '../../data/propertiesData.ts';
import { PropertyCard } from './PropertyCard.tsx';
import { Building2, ShieldCheck, FileCheck, Layers, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface PropertiesPortfolioProps {
  onNavigate?: (href: string) => void;
}

export const PropertiesPortfolio: React.FC<PropertiesPortfolioProps> = ({ onNavigate }) => {
  const hasProperties = PROPERTIES.length > 0;

  return (
    <section id="opportunities" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="OPPORTUNITIES DIRECTORY"
          title="PROPERTY OPPORTUNITIES"
          subtitle="A structured framework for future verified property opportunities and development engagements."
        />

        {hasProperties ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTIES.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        ) : (
          /* Deliberate, Premium Corporate Empty State */
          <div className="mt-12 bg-[#070E1B] border border-slate-800 rounded-xs p-8 sm:p-12 relative overflow-hidden">
            {/* Subtle Blueprint Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #C5A869 1px, transparent 1px), linear-gradient(to bottom, #C5A869 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Architectural Icon Node */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-xs bg-[#0E1E38] border border-slate-700 flex items-center justify-center text-[#C5A869]">
                <Building2 className="w-8 h-8" />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132B4F] border border-[#C5A869]/30 rounded-xs text-[#C5A869] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C5A869] animate-pulse" />
                <span>GOVERNANCE STATUS: ACTIVE DIRECTORY</span>
              </div>

              {/* Required Heading */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase mb-3">
                PROPERTY OPPORTUNITIES DEVELOPING
              </h3>

              {/* Required Supporting Text */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                Verified property opportunities will be presented here as AUREXON property information is approved for public publication.
              </p>

              {/* 3 Corporate Governance Verification Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-left mb-8">
                <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>01. Verified Info</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Zero speculative listings or placeholder prices. Only legally authorized records are presented.
                  </p>
                </div>

                <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase mb-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>02. Clear Status</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Transparent distinction between proposed, ongoing, or completed property opportunities.
                  </p>
                </div>

                <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>03. Disciplined Scope</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Direct alignment between land feasibility, engineering coordination, and built delivery.
                  </p>
                </div>
              </div>

              {/* Direct Engagement Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="gold"
                  onClick={() => onNavigate?.('/get-a-quote')}
                >
                  <span>DISCUSS A PROPERTY REQUIREMENT</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline-white"
                  onClick={() => onNavigate?.('/contact')}
                >
                  <span>CONTACT AUREXON PROPERTIES</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
