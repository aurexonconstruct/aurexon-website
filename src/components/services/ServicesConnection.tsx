import React from 'react';
import { ArrowDown, Network, CheckCircle2 } from 'lucide-react';

export const ServicesConnection: React.FC = () => {
  return (
    <section id="services-connection" className="py-20 sm:py-24 bg-[#0B1528] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C5A869] bg-[#0E1E38] px-3 py-1.5 rounded-xs border border-slate-700">
            INTEGRATION MODEL
          </span>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase leading-tight">
            ONE COMPANY. CONNECTED CAPABILITIES.
          </h2>

          <div className="flex items-center gap-2 pt-1 pb-1">
            <span className="h-[2px] w-12 bg-[#C5A869]" />
            <span className="h-[2px] w-3 bg-[#C5A869]/40" />
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            AUREXON structures its capabilities around three principal divisions while allowing services to work together where project requirements call for integrated delivery. The specific combination of services depends on project scope, client requirements, technical needs and delivery structure.
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="bg-[#070E1B] border border-slate-800 rounded-xs p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-blueprint-dense pointer-events-none opacity-20" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Step 1: AUREXON */}
            <div className="text-center">
              <div className="inline-block px-6 py-3 bg-[#0E1E38] border-2 border-[#C5A869]/50 rounded-xs text-white font-display font-bold text-base sm:text-lg tracking-widest uppercase shadow-md">
                AUREXON
                <span className="block text-[10px] font-mono text-slate-400 font-normal tracking-wider mt-0.5">
                  Parent Corporate Enterprise
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-3 text-[#C5A869]">
              <ArrowDown className="w-5 h-5 animate-bounce-subtle" />
            </div>

            {/* Step 2: BUSINESSES */}
            <div className="text-center">
              <div className="inline-block px-5 py-2.5 bg-[#0B1528] border border-slate-700 rounded-xs text-slate-200 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">
                BUSINESSES
                <span className="block text-[9px] text-slate-400 font-normal tracking-normal mt-0.5">
                  Strategic Corporate Portfolio
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-3 text-[#C5A869]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Step 3: CONSTRUCT | ENGINEERING | PROPERTIES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="p-4 bg-[#0E1E38]/80 border border-slate-800 rounded-xs text-center">
                <span className="text-[10px] font-mono text-[#C5A869] uppercase block font-semibold">DIV-01</span>
                <span className="font-display font-bold text-sm text-white uppercase block mt-1">CONSTRUCT</span>
                <span className="text-[11px] text-slate-400 mt-1 block">Execution & Works</span>
              </div>

              <div className="p-4 bg-[#0E1E38]/80 border border-slate-800 rounded-xs text-center">
                <span className="text-[10px] font-mono text-[#C5A869] uppercase block font-semibold">DIV-02</span>
                <span className="font-display font-bold text-sm text-white uppercase block mt-1">ENGINEERING</span>
                <span className="text-[11px] text-slate-400 mt-1 block">Technical & Supervision</span>
              </div>

              <div className="p-4 bg-[#0E1E38]/80 border border-slate-800 rounded-xs text-center">
                <span className="text-[10px] font-mono text-[#C5A869] uppercase block font-semibold">DIV-03</span>
                <span className="font-display font-bold text-sm text-white uppercase block mt-1">PROPERTIES</span>
                <span className="text-[11px] text-slate-400 mt-1 block">Assets & Real Estate</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-3 text-[#C5A869]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Step 4: SERVICES */}
            <div className="text-center">
              <div className="inline-block px-5 py-2.5 bg-[#0B1528] border border-[#C5A869]/40 rounded-xs text-[#E8D49E] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">
                SERVICES
                <span className="block text-[9px] text-slate-400 font-normal tracking-normal mt-0.5">
                  9 Tailored Technical & Construction Disciplines
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-3 text-[#C5A869]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Step 5: PROJECT REQUIREMENTS */}
            <div className="text-center">
              <div className="inline-block px-5 py-2.5 bg-[#0B1528] border border-slate-700 rounded-xs text-slate-200 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">
                PROJECT REQUIREMENTS
                <span className="block text-[9px] text-slate-400 font-normal tracking-normal mt-0.5">
                  Site Conditions • Contract Scope • Structural Specifications • Timelines
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-3 text-[#C5A869]">
              <ArrowDown className="w-5 h-5" />
            </div>

            {/* Step 6: DELIVERY */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#132B4F] border-2 border-[#C5A869] rounded-xs text-[#C5A869] font-display font-extrabold text-sm sm:text-base tracking-widest uppercase shadow-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span>DELIVERY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
