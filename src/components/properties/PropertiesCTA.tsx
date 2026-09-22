import React from 'react';
import { ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface PropertiesCTAProps {
  onNavigate?: (href: string) => void;
}

export const PropertiesCTA: React.FC<PropertiesCTAProps> = ({ onNavigate }) => {
  return (
    <section id="properties-cta" className="py-20 bg-[#070E1B] relative overflow-hidden">
      {/* Background Accent Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C5A869 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-[#0B1528] border-2 border-[#C5A869]/30 rounded-xs p-8 sm:p-12 lg:p-16 relative">
          {/* Top Decorative Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A869] to-transparent opacity-80" />

          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132B4F] border border-[#C5A869]/30 rounded-xs text-[#C5A869] text-xs font-mono font-bold tracking-widest uppercase mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENGAGE AUREXON PROPERTIES</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase mb-6 leading-tight">
              DISCUSS A PROPERTY <br className="hidden sm:inline" />
              <span className="text-[#C5A869]">OPPORTUNITY.</span>
            </h2>

            {/* Supporting Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10">
              Whether you are considering a development opportunity, construction requirement, engineering scope or property-related project, AUREXON can discuss the appropriate approach based on the requirements presented.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button
                variant="gold"
                size="lg"
                onClick={() => onNavigate?.('/get-a-quote')}
                className="group"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline-white"
                size="lg"
                onClick={() => onNavigate?.('/contact')}
              >
                <span>CONTACT AUREXON</span>
              </Button>
            </div>

            {/* Corporate Registration & Contact Coordinates */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-bold">AUREXON CORPORATE OFFICE</span>
                  <span className="text-slate-400">{COMPANY_DETAILS.registeredOffice.fullFormatted}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-bold">DIRECT ENQUIRIES</span>
                  <span className="text-slate-400">{COMPANY_DETAILS.corporateEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
