import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '../common/Button';

interface CareersCTAProps {
  onNavigate: (path: string) => void;
}

export const CareersCTA: React.FC<CareersCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#0B1528]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#070E1B] border border-[#1E293B] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-3">
              PROFESSIONAL ENQUIRY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white tracking-tight mb-4">
              INTERESTED IN BUILDING WITH AUREXON?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-sans">
              For general professional enquiries, technical alignment, or prospective collaboration within the built environment, reach out directly to the corporate team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto">
            <Button
              variant="primary"
              onClick={() => onNavigate('/contact')}
              className="flex items-center justify-center gap-2"
            >
              CONTACT AUREXON
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => onNavigate('/get-a-quote')}
              className="flex items-center justify-center gap-2"
            >
              PROJECT BRIEF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
