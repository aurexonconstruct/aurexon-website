import React from 'react';
import { HardHat, Compass, Building2, Layers, GitMerge } from 'lucide-react';

export const ServicesIntro: React.FC = () => {
  return (
    <section id="services-intro" className="py-20 sm:py-24 bg-[#0B1528] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#C5A869] bg-[#0E1E38] px-3 py-1.5 rounded-xs border border-slate-700">
              OPERATIONAL STRUCTURE
            </span>

            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight uppercase leading-tight">
              BUILT AROUND WHAT WE DO.
            </h2>

            <div className="flex items-center gap-2 pt-1 pb-1">
              <span className="h-[2px] w-12 bg-[#C5A869]" />
              <span className="h-[2px] w-3 bg-[#C5A869]/40" />
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              AUREXON's services are organized around its three principal divisions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#070E1B] border border-slate-800 rounded-xs">
                <div className="flex items-center gap-2 mb-2 text-[#C5A869]">
                  <HardHat className="w-4 h-4" />
                  <span className="font-mono text-[11px] font-bold">DIV-01</span>
                </div>
                <h3 className="text-sm font-semibold text-white uppercase font-display">
                  AUREXON CONSTRUCT
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Building construction, civil works, infrastructure and site execution.
                </p>
              </div>

              <div className="p-4 bg-[#070E1B] border border-slate-800 rounded-xs">
                <div className="flex items-center gap-2 mb-2 text-[#C5A869]">
                  <Compass className="w-4 h-4" />
                  <span className="font-mono text-[11px] font-bold">DIV-02</span>
                </div>
                <h3 className="text-sm font-semibold text-white uppercase font-display">
                  AUREXON ENGINEERING
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Civil & structural design, consultancy, planning and supervision.
                </p>
              </div>

              <div className="p-4 bg-[#070E1B] border border-slate-800 rounded-xs">
                <div className="flex items-center gap-2 mb-2 text-[#C5A869]">
                  <Building2 className="w-4 h-4" />
                  <span className="font-mono text-[11px] font-bold">DIV-03</span>
                </div>
                <h3 className="text-sm font-semibold text-white uppercase font-display">
                  AUREXON PROPERTIES
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Property development, land-to-property planning and real estate management.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
              Depending on the nature, scope and delivery requirements of a particular engagement, individual divisions may lead the contract, provide specialized technical support, or collaborate in an integrated delivery framework. Services are company-wide capabilities assigned to the appropriate operating division to ensure accountability, professional discipline and clear project execution.
            </p>
          </div>

          {/* Right Column: Visual Hierarchy Panel */}
          <div className="lg:col-span-5 bg-[#070E1B] border border-slate-800 p-6 sm:p-8 rounded-xs space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="font-mono text-[11px] text-[#C5A869] uppercase tracking-wider font-semibold flex items-center gap-2">
                <GitMerge className="w-4 h-4" />
                Organizational Hierarchy
              </span>
              <span className="text-[10px] font-mono text-slate-400">STRUCTURE</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-[#0E1E38]/80 border border-[#C5A869]/30 rounded-xs">
                <span className="text-[10px] text-[#C5A869] uppercase block font-semibold">Level 1: Corporate Entity</span>
                <span className="text-white font-bold text-sm tracking-wide">AUREXON CONSTRUCTS NIGERIA LIMITED</span>
              </div>

              <div className="flex justify-center text-slate-600">
                <span className="text-sm">↓</span>
              </div>

              <div className="p-3 bg-[#0E1E38]/50 border border-slate-800 rounded-xs">
                <span className="text-[10px] text-slate-400 uppercase block">Level 2: Operating Business Units</span>
                <span className="text-slate-200 font-semibold">BUSINESS DIVISIONS</span>
              </div>

              <div className="flex justify-center text-slate-600">
                <span className="text-sm">↓</span>
              </div>

              <div className="p-3 bg-[#0E1E38]/50 border border-slate-800 rounded-xs">
                <span className="text-[10px] text-slate-400 uppercase block">Level 3: Primary Divisions</span>
                <div className="text-slate-300 text-[11px] grid grid-cols-1 gap-1 mt-1">
                  <span>• AUREXON CONSTRUCT (Works & Execution)</span>
                  <span>• AUREXON ENGINEERING (Technical & Design)</span>
                  <span>• AUREXON PROPERTIES (Development & Assets)</span>
                </div>
              </div>

              <div className="flex justify-center text-slate-600">
                <span className="text-sm">↓</span>
              </div>

              <div className="p-3 bg-[#070E1B] border border-[#C5A869]/40 rounded-xs">
                <span className="text-[10px] text-[#C5A869] uppercase block font-semibold">Level 4: Delivered Services</span>
                <span className="text-white font-semibold text-xs">
                  9 Approved Services Delivered According to Defined Scope
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 font-mono leading-relaxed border-t border-slate-800 pt-3">
              Each service is anchored to a primary division while maintaining seamless cross-disciplinary communication when broader delivery requirements apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
