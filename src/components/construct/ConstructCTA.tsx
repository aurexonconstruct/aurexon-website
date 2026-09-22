import React from 'react';
import { Button } from '../common/Button.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';
import { Mail, MapPin, ArrowRight, ShieldCheck, FileText, HardHat } from 'lucide-react';

interface ConstructCTAProps {
  onNavigate?: (href: string) => void;
}

export const ConstructCTA: React.FC<ConstructCTAProps> = ({ onNavigate }) => {
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
      id="construct-cta"
      className="py-16 sm:py-24 bg-[#070E1B] border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background blueprint decorative elements */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#132B4F]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-xs border bg-[#C5A869]/10 text-[#C5A869] border-[#C5A869]/30 mb-6 font-mono">
          <HardHat className="w-3.5 h-3.5" />
          <span>START YOUR CONSTRUCTION ENGAGEMENT</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight max-w-3xl mx-auto leading-tight">
          LET&apos;S BUILD WITH A CLEAR PLAN.
        </h2>

        {/* Divider accent */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          <span className="h-[2px] w-12 bg-[#C5A869]" />
          <span className="h-[2px] w-2 bg-[#C5A869]/50" />
          <span className="h-[2px] w-1 bg-[#C5A869]/30" />
        </div>

        {/* Supporting text */}
        <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Have a construction requirement, project concept or development opportunity? Start with a clear understanding
          of the scope, objectives and delivery requirements.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="/get-a-quote"
            onClick={handlePrimaryClick}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            GET A QUOTE
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="/contact"
            onClick={handleSecondaryClick}
          >
            CONTACT AUREXON
          </Button>
        </div>

        {/* Corporate Legal Status Notice */}
        <p className="mt-8 text-xs text-slate-400 font-mono tracking-wide max-w-2xl mx-auto">
          AUREXON CONSTRUCT is a business division of {COMPANY_DETAILS.legalName} (RC: {COMPANY_DETAILS.rcNumber}).
          All construction contracts and project engagements are executed under unified corporate oversight.
        </p>

        {/* Official Identity & Contact Bar */}
        <div className="mt-12 pt-10 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
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
