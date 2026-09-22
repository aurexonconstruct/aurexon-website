import React from 'react';
import { CAREER_OPPORTUNITIES } from '../../data/careersData';
import { Clock, ShieldAlert, CheckCircle, FileText } from 'lucide-react';

export const CareersOpportunities: React.FC = () => {
  const hasOpportunities = CAREER_OPPORTUNITIES.length > 0;

  return (
    <section className="py-20 sm:py-24 bg-[#070E1B] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Empty-state / Developing notice */}
        {!hasOpportunities ? (
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B1528] border border-[#1E293B] p-8 sm:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#070E1B] border border-[#C5A869]/40 mb-6 text-[#C5A869]">
              <Clock className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono tracking-widest text-[#C5A869] uppercase mb-2">
              STATUS UPDATE
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-4">
              CAREER OPPORTUNITIES DEVELOPING
            </h3>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
              Approved career opportunities and vacancy information will be published here as positions become available and are approved for public presentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left pt-6 border-t border-[#1E293B]">
              <div className="p-3 rounded bg-[#070E1B] border border-[#1E293B]/70">
                <span className="text-[11px] font-mono text-[#C5A869] uppercase block mb-1">
                  Integrity Rule
                </span>
                <p className="text-xs text-slate-300">
                  No unverified vacancies or speculative listings are published.
                </p>
              </div>

              <div className="p-3 rounded bg-[#070E1B] border border-[#1E293B]/70">
                <span className="text-[11px] font-mono text-[#C5A869] uppercase block mb-1">
                  Direct Verification
                </span>
                <p className="text-xs text-slate-300">
                  All opportunities originate from verified corporate planning.
                </p>
              </div>

              <div className="p-3 rounded bg-[#070E1B] border border-[#1E293B]/70">
                <span className="text-[11px] font-mono text-[#C5A869] uppercase block mb-1">
                  Responsible Growth
                </span>
                <p className="text-xs text-slate-300">
                  Disciplined staffing aligned directly with active project requirements.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* If any verified opportunities are added in future phases */}
            <h3 className="text-2xl font-display text-white mb-6">Open Positions</h3>
          </div>
        )}
      </div>
    </section>
  );
};
