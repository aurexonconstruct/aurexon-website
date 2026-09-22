import React from 'react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';
import { Mail, MapPin, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface BusinessesCTAProps {
  onNavigate?: (href: string) => void;
}

export const BusinessesCTA: React.FC<BusinessesCTAProps> = ({ onNavigate }) => {
  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/get-a-quote');
    } else {
      window.location.href = '/get-a-quote';
    }
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/contact');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <section
      id="businesses-cta"
      className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative overflow-hidden"
    >
      {/* Blueprint background grid */}
      <div className="absolute inset-0 bg-grid-blueprint-dense pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-[#132B4F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] px-3 py-1 bg-[#C5A869]/10 border border-[#C5A869]/30 text-[#C5A869] rounded-xs mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>PROJECT CONSULTATION & ADVISORY</span>
        </div>

        {/* Mandatory Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
          LET'S DISCUSS YOUR PROJECT.
        </h2>

        {/* Architectural divider */}
        <div className="flex items-center justify-center gap-2 my-6">
          <span className="h-[2px] w-12 bg-[#C5A869]" />
          <span className="h-[2px] w-3 bg-[#C5A869]/40" />
          <span className="h-[2px] w-1.5 bg-slate-700" />
        </div>

        {/* Mandatory Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal mb-10">
          Whether the need is construction, engineering or property development, AUREXON can begin with a clear
          understanding of the project requirements and objectives.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            href="/get-a-quote"
            onClick={handlePrimaryClick}
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto justify-center"
          >
            GET A QUOTE
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="/contact"
            onClick={handleSecondaryClick}
            className="w-full sm:w-auto justify-center"
          >
            CONTACT AUREXON
          </Button>
        </div>

        {/* Institutional Contact Bar */}
        <div className="pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#132B4F]/60 border border-slate-700 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 text-[#C5A869]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                Corporate Registration
              </span>
              <span className="text-xs font-bold text-white font-mono">
                RC: {COMPANY_DETAILS.rcNumber}
              </span>
            </div>
          </div>

          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#132B4F]/60 border border-slate-700 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#C5A869]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                Corporate Email
              </span>
              <a
                href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                className="text-xs font-bold text-white font-mono hover:text-[#C5A869] transition-colors break-all"
              >
                {COMPANY_DETAILS.corporateEmail}
              </a>
            </div>
          </div>

          <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs flex items-center gap-3">
            <div className="w-9 h-9 rounded-xs bg-[#132B4F]/60 border border-slate-700 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#C5A869]" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                Registered Office
              </span>
              <span className="text-xs font-medium text-slate-200 line-clamp-2">
                {COMPANY_DETAILS.registeredOffice.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

