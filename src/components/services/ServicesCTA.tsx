import React from 'react';
import { ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

interface ServicesCTAProps {
  onNavigate?: (href: string) => void;
}

export const ServicesCTA: React.FC<ServicesCTAProps> = ({ onNavigate }) => {
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
    <section id="services-cta" className="py-20 sm:py-24 bg-[#070E1B] border-t border-slate-800 relative overflow-hidden">
      {/* Background Architectural Aesthetic */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#132B4F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C5A869] mb-4 bg-[#0E1E38] px-3 py-1.5 rounded-xs border border-slate-700">
          INITIATE ENGAGEMENT
        </span>

        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight mb-4">
          LET'S DISCUSS YOUR PROJECT.
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          Whether you require construction, engineering, project support or property development services, AUREXON can discuss the requirements and identify the appropriate scope and delivery structure.
        </p>

        {/* Action Buttons */}
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

        {/* Verified Corporate Contact Info */}
        <div className="pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 bg-[#0E1E38]/60 border border-slate-800 rounded-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A869] block mb-1">
              Entity Information
            </span>
            <div className="text-xs text-white font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
              <span>{COMPANY_DETAILS.legalName}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono block mt-1">
              RC: {COMPANY_DETAILS.rcNumber} • {COMPANY_DETAILS.corporateStatus}
            </span>
          </div>

          <div className="p-4 bg-[#0E1E38]/60 border border-slate-800 rounded-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A869] block mb-1">
              Official Email
            </span>
            <div className="text-xs text-white font-semibold flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
              <a
                href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                className="hover:text-[#C5A869] transition-colors truncate"
              >
                {COMPANY_DETAILS.corporateEmail}
              </a>
            </div>
            <span className="text-[11px] text-slate-400 font-mono block mt-1">
              Direct Corporate Communications
            </span>
          </div>

          <div className="p-4 bg-[#0E1E38]/60 border border-slate-800 rounded-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A869] block mb-1">
              Registered Office
            </span>
            <div className="text-xs text-white font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
              <span className="truncate">{COMPANY_DETAILS.registeredOffice.address}</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono block mt-1">
              Potiskum, Yobe State, Nigeria • Post Code: {COMPANY_DETAILS.registeredOffice.postCode}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
