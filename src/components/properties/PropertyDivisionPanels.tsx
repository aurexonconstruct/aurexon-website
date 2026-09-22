import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Button } from '../common/Button.tsx';
import { Cpu, HardHat, Compass, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface PropertyDivisionPanelsProps {
  onNavigate?: (href: string) => void;
}

export const PropertyDivisionPanels: React.FC<PropertyDivisionPanelsProps> = ({ onNavigate }) => {
  return (
    <section id="division-integration" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="INTEGRATED OPERATING FRAMEWORK"
          title="CONNECTED TO THE AUREXON MODEL."
          subtitle="AUREXON operates three specialized operating divisions under unified corporate governance, deploying cross-functional capabilities aligned to project scope."
        />

        {/* Corporate Identity & Governance Note */}
        <div className="mt-8 p-4 bg-[#0E1E38] border border-slate-800 rounded-xs flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-mono uppercase">Single Corporate Entity: </strong>
            All operating divisions function under <span className="text-white font-semibold">AUREXON CONSTRUCTS NIGERIA LIMITED (RC: 9729028)</span>. Divisions are specialized operating branches, not independent legal entities. Division involvement depends strictly on project scope, contractual parameters, and client delivery requirements.
          </p>
        </div>

        {/* 3 Connected Divisions Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Panel 1: AUREXON ENGINEERING */}
          <div className="p-7 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/50 transition-all rounded-xs flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="w-10 h-10 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700 text-[#C5A869]">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#C5A869] font-bold">DIV-ENG-02</span>
              </div>

              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#C5A869] transition-colors mb-3">
                AUREXON ENGINEERING
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Supports civil and structural engineering, design, consultancy, planning and supervision where required.
              </p>

              <div className="space-y-2 mb-8">
                <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800/80">
                  Engineering Scope Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Structural load analysis and foundation engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Civil drainage, earthworks, and site servicing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Technical feasibility and statutory compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Button
                variant="outline-white"
                size="sm"
                onClick={() => onNavigate?.('/businesses/engineering')}
                className="w-full justify-center group"
              >
                <span>EXPLORE ENGINEERING</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Panel 2: AUREXON CONSTRUCT */}
          <div className="p-7 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/50 transition-all rounded-xs flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="w-10 h-10 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700 text-[#C5A869]">
                  <HardHat className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#C5A869] font-bold">DIV-CON-01</span>
              </div>

              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#C5A869] transition-colors mb-3">
                AUREXON CONSTRUCT
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Supports construction, civil works, site development and project execution where required.
              </p>

              <div className="space-y-2 mb-8">
                <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800/80">
                  Construction Scope Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Building construction and structural delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Civil works, access roads, and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Quality-controlled site management and safety</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Button
                variant="outline-white"
                size="sm"
                onClick={() => onNavigate?.('/businesses/construct')}
                className="w-full justify-center group"
              >
                <span>EXPLORE CONSTRUCT</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Panel 3: AUREXON PROPERTIES */}
          <div className="p-7 bg-[#0E1E38] border-2 border-[#C5A869]/40 hover:border-[#C5A869] transition-all rounded-xs flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="w-10 h-10 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700 text-[#C5A869]">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-[#C5A869] font-bold">DIV-PROP-03</span>
              </div>

              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#C5A869] transition-colors mb-3">
                AUREXON PROPERTIES
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Leads the property-development and real-estate side of the AUREXON model where applicable.
              </p>

              <div className="space-y-2 mb-8">
                <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-wider pb-1 border-b border-slate-800/80">
                  Property Focus Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Land-to-property development coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>Real estate investment and commercial structuring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>End-to-end development management and handover</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Button
                variant="gold"
                size="sm"
                onClick={() => {
                  const element = document.getElementById('properties-intro');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full justify-center"
              >
                <span>VIEW DEVELOPMENT MODEL</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
