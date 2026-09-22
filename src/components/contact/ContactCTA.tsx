import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '../common/Button';

interface ContactCTAProps {
  onNavigate: (path: string) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#070E1B] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#0B1528] border border-[#1E293B] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-3">
              STRUCTURED PROJECT BRIEF
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white tracking-tight mb-4">
              HAVE DETAILED SCOPE INFORMATION?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-sans">
              If you have defined project parameters, dimensions, engineering specifications or stage requirements, use our structured Project Brief interface.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto">
            <Button
              variant="primary"
              onClick={() => onNavigate('/get-a-quote')}
              className="flex items-center justify-center gap-2"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => onNavigate('/services')}
              className="flex items-center justify-center gap-2"
            >
              VIEW SERVICES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
