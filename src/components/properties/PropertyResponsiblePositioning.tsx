import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { RESPONSIBLE_POSITIONING_FACTORS } from '../../data/propertiesData.ts';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

export const PropertyResponsiblePositioning: React.FC = () => {
  return (
    <section id="properties-responsible-positioning" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="OBJECTIVE RIGOR"
          title="DEVELOPMENT WITH CLARITY."
          subtitle="Every property opportunity must be assessed objectively against seven definitive technical and statutory criteria."
        />

        {/* Advisory Warning */}
        <div className="mt-8 p-4 bg-[#0E1E38] border-l-2 border-[#C5A869] border-y border-r border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300 max-w-4xl mx-auto">
          <AlertCircle className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-mono uppercase">Non-Advisory Notice: </strong>
            AUREXON PROPERTIES provides technical, development, and project management capabilities.
            We do not provide investment advice, financial advisory services, or speculative return forecasts.
            All property proposals must undergo rigorous individual legal, physical, and commercial scrutiny.
          </p>
        </div>

        {/* 7 Assessment Factors */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESPONSIBLE_POSITIONING_FACTORS.map((factor, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0B1528] border border-slate-800 rounded-xs hover:border-[#C5A869]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-[#C5A869] font-bold">
                  0{idx + 1}.
                </span>
                <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                  {factor.label}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {factor.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Legal Reiteration */}
        <div className="mt-12 p-6 bg-[#0E1E38]/50 border border-slate-800 rounded-xs max-w-3xl mx-auto text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#C5A869] uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Corporate Status & Identity</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            AUREXON PROPERTIES operates as a business division of {COMPANY_DETAILS.legalName} (RC: {COMPANY_DETAILS.rcNumber}),
            incorporated under the Companies and Allied Matters Act of the Federal Republic of Nigeria.
            It is not an independently incorporated legal entity or separate corporate subsidiary.
          </p>
        </div>
      </div>
    </section>
  );
};
