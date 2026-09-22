import React from 'react';
import { ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface PropertyCTAProps {
  onNavigate?: (href: string) => void;
}

export const PropertyCTA: React.FC<PropertyCTAProps> = ({ onNavigate }) => {
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
    <section id="properties-cta" className="py-20 bg-[#070E1B] border-t border-slate-800 relative overflow-hidden">
      {/* Background Architectural Aesthetic */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#132B4F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C5A869] mb-4 bg-[#0E1E38] px-3 py-1.5 rounded-xs border border-slate-700">
          ENGAGE AUREXON PROPERTIES
        </span>

        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
          HAVE A DEVELOPMENT IDEA?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Whether you are considering a land opportunity, development concept or property project,
          begin with a clear understanding of the opportunity, objectives and requirements.
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
            DISCUSS A DEVELOPMENT
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
              Development briefings & consultations
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
          AUREXON PROPERTIES is an operational business division of {COMPANY_DETAILS.legalName} (RC: {COMPANY_DETAILS.rcNumber}). It is not an independently incorporated legal entity or separate corporate subsidiary.
        </div>
      </div>
    </section>
  );
};
