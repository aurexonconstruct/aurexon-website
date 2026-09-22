import React from 'react';
import { ENQUIRY_GUIDANCE_ITEMS } from '../../data/contactData';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const ContactGuidance: React.FC = () => {
  return (
    <div className="rounded-xl bg-[#0B1528] border border-[#1E293B] p-6 sm:p-8 space-y-6">
      <div>
        <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-2">
          RESPONSIBLE COMMUNICATION
        </span>
        <h3 className="text-xl font-display font-medium text-white">
          PROJECT ENQUIRY GUIDANCE
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
          To help AUREXON understand the nature of your enquiry, please consider including the following information in your initial message. Unnecessary confidential details should not be submitted at this initial stage.
        </p>
      </div>

      <div className="space-y-3 pt-2 border-t border-[#1E293B]">
        {ENQUIRY_GUIDANCE_ITEMS.map((item, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-[#070E1B] border border-[#1E293B] flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-white block mb-0.5">{item.title}</span>
              <p className="text-xs text-slate-400 leading-normal">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
