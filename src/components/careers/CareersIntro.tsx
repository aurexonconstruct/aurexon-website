import React from 'react';
import { Users, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';

export const CareersIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#0B1528] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-3">
              ORGANIZATIONAL FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white tracking-tight leading-snug">
              PEOPLE ARE PART OF THE BUILD.
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A869] mt-6" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            <p>
              Successful project delivery depends on capable professionals, disciplined teamwork, technical knowledge, communication and continuous development. Every engineering milestone, structural framework, and construction handover is realised through rigorous collaboration between multidisciplinary specialists.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              AUREXON maintains high standards of professional responsibility, site safety, and execution clarity across all disciplines. As operational activities expand, professional standards remain grounded in technical integrity and accountable teamwork.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#070E1B] border border-[#1E293B] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Disciplined Teamwork</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Coordinated execution aligning engineering consultants, project managers, and site supervisors.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#070E1B] border border-[#1E293B] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Technical Integrity</h4>
                  <p className="text-xs text-slate-400 leading-normal">
                    Commitment to engineering codes, statutory compliance, and rigorous quality verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
