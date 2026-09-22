import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Compass, CheckCircle2, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface PropertyEngineeringIntegrationProps {
  onNavigate?: (href: string) => void;
}

export const PropertyEngineeringIntegration: React.FC<PropertyEngineeringIntegrationProps> = ({
  onNavigate,
}) => {
  const handleDivisionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/businesses/engineering');
    } else {
      window.location.href = '/businesses/engineering';
    }
  };

  const engineeringContributions = [
    {
      title: 'Geotechnical & Foundation Alignment',
      desc: 'Ensuring structural foundations are accurately proportioned to localized soil conditions, load-bearing capacities, and water table levels.',
    },
    {
      title: 'Structural Frame Engineering',
      desc: 'Formulating reinforced concrete and structural steel frame calculations in strict accordance with recognized engineering codes.',
    },
    {
      title: 'Civil Infrastructure & Stormwater Drainage',
      desc: 'Designing sustainable stormwater discharge networks, internal estate roads, site retaining systems, and utility corridors.',
    },
    {
      title: 'Periodic Technical Supervision',
      desc: 'Where engaged by contract scope, conducting on-site engineering reviews during critical structural pours and foundation execution.',
    },
  ];

  return (
    <section id="properties-engineering-integration" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DIVISIONAL COLLABORATION"
          title="DEVELOPMENT SUPPORTED BY ENGINEERING."
          subtitle="Connecting property planning with methodical civil and structural engineering expertise."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Key Narrative & Mandatory Conditional Principle */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-[#0E1E38] border-l-2 border-[#C5A869] border-y border-r border-slate-800 rounded-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A869] uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4" />
                <span>Technical Synergy Principle</span>
              </div>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                “Where appropriate, AUREXON ENGINEERING may contribute technical capabilities to
                property-development projects according to project scope and delivery requirements.”
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Property developments frequently face technical challenges related to topography, soil stability,
              stormwater control, and multistory framing. By drawing on the analytical strength of AUREXON
              ENGINEERING, property concepts benefit from verified structural analysis before groundbreaking.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              This collaboration remains flexible: engagements are structured on project necessity. A project may
              involve complete internal engineering oversight or interface with independent third-party consultants
              designated by clients or joint-venture partners.
            </p>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href="/businesses/engineering"
                onClick={handleDivisionClick}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                EXPLORE AUREXON ENGINEERING
              </Button>
            </div>
          </div>

          {/* Right: Technical Capabilities Box */}
          <div className="lg:col-span-6 bg-[#070E1B] border border-slate-800 p-6 rounded-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
                <span>Engineering Contributions When Engaged</span>
              </div>
              <span className="text-[10px] font-mono text-[#C5A869] bg-[#132B4F] px-2 py-0.5 rounded-xs border border-slate-700">
                CONDITIONAL SCOPE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {engineeringContributions.map((c, i) => (
                <div key={i} className="p-4 bg-[#0E1E38]/60 border border-slate-800/80 rounded-xs">
                  <div className="flex items-start gap-2 mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <h4 className="text-xs font-bold text-white uppercase font-mono">
                      {c.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
