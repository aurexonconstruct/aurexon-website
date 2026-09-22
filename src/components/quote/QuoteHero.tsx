import React from 'react';
import { FileSpreadsheet } from 'lucide-react';

export const QuoteHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#070E1B] border-b border-[#1E293B]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#C5A869_1px,transparent_1px),linear-gradient(to_bottom,#C5A869_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0B1528] border border-[#1E293B] text-[11px] font-mono tracking-widest text-[#C5A869] uppercase">
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#C5A869]" />
              GET A QUOTE
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight leading-[1.1] mb-6">
            START WITH A <br className="hidden sm:inline" />
            <span className="text-[#C5A869]">CLEAR PROJECT BRIEF.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans mb-4 max-w-2xl">
            Provide the key information about your project and requirements so AUREXON can better understand the scope of the enquiry.
          </p>
        </div>
      </div>
    </section>
  );
};
