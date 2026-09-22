import React from 'react';
import { ArrowRight, Mail, MapPin, ShieldCheck, Compass } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface EngineeringCTAProps {
  onNavigate?: (href: string) => void;
}

export const EngineeringCTA: React.FC<EngineeringCTAProps> = ({ onNavigate }) => {
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/get-a-quote');
    } else {
      window.location.href = '/get-a-quote';
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section
      id="engineering-cta"
      className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative overflow-hidden"
    >
      {/* Subtle Blueprint Grid Ambient */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-25" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#132B4F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0E1E38] border border-slate-800 rounded-xs text-xs font-mono text-[#C5A869] uppercase tracking-widest mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>START WITH TECHNICAL CLARITY</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase max-w-3xl mx-auto leading-tight">
          LET’S DISCUSS THE TECHNICAL REQUIREMENTS.
        </h2>

        {/* Architectural Divider */}
        <div className="flex items-center justify-center gap-2 my-6">
          <span className="h-[2px] w-12 bg-[#C5A869]" />
          <span className="h-[2px] w-3 bg-[#C5A869]/40" />
          <span className="h-[2px] w-1 bg-slate-700" />
        </div>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Have a project concept, engineering requirement or development opportunity? Start with a clear
          understanding of the scope, objectives and technical requirements.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Button
            variant="primary"
            size="lg"
            href="/get-a-quote"
            onClick={handleQuoteClick}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            GET A QUOTE
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="/contact"
            onClick={handleContactClick}
          >
            CONTACT AUREXON
          </Button>
        </div>

        {/* Corporate Legal & Credentials Strip */}
        <div className="pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
              Corporate Governance
            </span>
            <div className="flex items-center gap-2 text-xs text-white font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
              <span>{COMPANY_DETAILS.legalName}</span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              RC: {COMPANY_DETAILS.rcNumber} • Business Division
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
              Corporate Correspondence
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
              <a
                href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                className="hover:text-[#C5A869] transition-colors break-all"
              >
                {COMPANY_DETAILS.corporateEmail}
              </a>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Technical inquiries & proposals
            </p>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
              Registered Office
            </span>
            <div className="flex items-start gap-2 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
              <span>{COMPANY_DETAILS.registeredOffice.address}</span>
            </div>
          </div>
        </div>

        {/* Explicit Divisional Disclaimer */}
        <div className="mt-8 p-3 bg-[#0E1E38]/40 border border-slate-800 rounded-xs text-[11px] font-mono text-slate-400 text-center">
          AUREXON ENGINEERING is an operational business division of {COMPANY_DETAILS.legalName} (RC: {COMPANY_DETAILS.rcNumber}). It is not an independently incorporated entity.
        </div>
      </div>
    </section>
  );
};
