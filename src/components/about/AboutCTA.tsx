import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { COMPANY_DETAILS } from '../../data/companyData.ts';
import { Mail, MapPin, ShieldCheck, ArrowRight, Building2, AlertCircle } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface AboutCTAProps {
  onNavigate?: (href: string) => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({ onNavigate }) => {
  const handleConsultation = () => {
    if (onNavigate) {
      onNavigate('#final-cta');
    } else {
      window.location.href = `mailto:${COMPANY_DETAILS.corporateEmail}?subject=Project%20Consultation%20Inquiry%20-%20AUREXON`;
    }
  };

  return (
    <section id="about-cta" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="CONTACT & CONSULTATION"
          title="Initiate Project Discussion"
          subtitle="Engage with our team regarding building construction, civil engineering consultancy, or property development initiatives across Nigeria."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Action Callout (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E1E38] border border-slate-800 rounded-xs p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="font-mono text-xs text-[#C5A869] tracking-wider uppercase font-semibold">
                  Direct Executive Consultation
                </span>
                <span className="font-mono text-[10px] bg-[#070E1B] text-slate-400 px-2.5 py-1 rounded-xs border border-slate-800">
                  RC: {COMPANY_DETAILS.rcNumber}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                Start With Upfront Technical Discipline
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you are evaluating a new parcel of land, requiring structural engineering calculations
                for a proposed facility, or seeking end-to-end building construction management, AUREXON provides
                disciplined planning and coordinated execution from day one.
              </p>

              <div className="p-4 bg-[#070E1B] border border-slate-800/80 rounded-xs text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-[#C5A869] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Approach to Inquiries:</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Every technical inquiry is reviewed with respect to site context, project scale, and regulatory requirements. We do not provide generic estimates without understanding geotechnical realities and spatial parameters.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="primary"
                onClick={handleConsultation}
                className="w-full sm:w-auto"
              >
                <span>Initiate Project Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <a
                href={`mailto:${COMPANY_DETAILS.corporateEmail}?subject=Corporate%20Inquiry%20-%20AUREXON`}
                className="w-full sm:w-auto text-center px-6 py-3 border border-slate-700 hover:border-[#C5A869] text-xs font-semibold text-slate-200 hover:text-white rounded-xs transition-colors font-mono uppercase tracking-wider"
              >
                Email Corporate Office
              </a>
            </div>
          </div>

          {/* Corporate Office & Institutional Verification (5 cols) */}
          <div className="lg:col-span-5 bg-[#070E1B] border border-slate-800 rounded-xs p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
                Official Corporate Office
              </span>

              <h4 className="font-display text-base font-bold text-white">
                {COMPANY_DETAILS.legalName}
              </h4>

              <div className="space-y-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Registered Office:</span>
                    <span className="text-slate-400 leading-relaxed block">
                      {COMPANY_DETAILS.registeredOffice.fullFormatted}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">
                      Postal Code: {COMPANY_DETAILS.registeredOffice.postCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Mail className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Official Email:</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                      className="font-mono text-[#C5A869] hover:underline text-xs"
                    >
                      {COMPANY_DETAILS.corporateEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory APN Disclaimer Card */}
            <div className="p-4 bg-[#0B1528] border border-amber-900/40 rounded-xs space-y-2 text-xs">
              <div className="flex items-center gap-2 text-[#C5A869] font-mono text-[10px] uppercase tracking-wider font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Statutory Independence</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {COMPANY_DETAILS.legalNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
