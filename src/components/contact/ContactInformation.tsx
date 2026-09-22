import React from 'react';
import { Building2, Mail, MapPin, Hash, ShieldCheck } from 'lucide-react';
import { CORPORATE_CONTACT_DETAILS } from '../../data/contactData';

export const ContactInformation: React.FC = () => {
  return (
    <div className="rounded-xl bg-[#0B1528] border border-[#1E293B] p-6 sm:p-8 space-y-6">
      <div>
        <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-2">
          VERIFIED CORPORATE CREDENTIALS
        </span>
        <h3 className="text-xl font-display font-medium text-white">
          AUREXON CORPORATE OFFICE
        </h3>
      </div>

      <div className="space-y-4 pt-2 border-t border-[#1E293B]">
        {/* Legal Entity */}
        <div className="flex items-start gap-3">
          <Building2 className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Legal Entity
            </span>
            <span className="text-sm font-medium text-white">
              {CORPORATE_CONTACT_DETAILS.legalEntity}
            </span>
          </div>
        </div>

        {/* RC Number */}
        <div className="flex items-start gap-3">
          <Hash className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Corporate Registration (CAC)
            </span>
            <span className="text-sm font-mono text-slate-200">
              RC {CORPORATE_CONTACT_DETAILS.rcNumber}
            </span>
          </div>
        </div>

        {/* Registered Office */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Registered Office
            </span>
            <p className="text-sm text-slate-300 leading-snug">
              {CORPORATE_CONTACT_DETAILS.registeredOffice}
            </p>
            <span className="text-xs font-mono text-slate-400 mt-1 block">
              Post Code: {CORPORATE_CONTACT_DETAILS.postCode}
            </span>
          </div>
        </div>

        {/* Corporate Email */}
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
              Official Corporate Email
            </span>
            <a
              href={`mailto:${CORPORATE_CONTACT_DETAILS.corporateEmail}`}
              className="text-sm font-mono text-[#C5A869] hover:underline break-all"
            >
              {CORPORATE_CONTACT_DETAILS.corporateEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Verified Notice Box */}
      <div className="p-4 rounded-lg bg-[#070E1B] border border-[#1E293B] flex items-start gap-3 text-xs text-slate-400 leading-relaxed font-sans">
        <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
        <p>
          Corporate enquiries are processed through official corporate channels. Submissions are treated with professional confidence.
        </p>
      </div>
    </div>
  );
};
