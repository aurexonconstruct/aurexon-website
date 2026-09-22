import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { HardHat, CheckCircle2, ArrowUpRight, Building2 } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface PropertyConstructIntegrationProps {
  onNavigate?: (href: string) => void;
}

export const PropertyConstructIntegration: React.FC<PropertyConstructIntegrationProps> = ({
  onNavigate,
}) => {
  const handleConstructClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/businesses/construct');
    } else {
      window.location.href = '/businesses/construct';
    }
  };

  const constructCapabilities = [
    {
      title: 'Site Preparation & Earthworks',
      desc: 'Executing site clearing, grading, access leveling, and structural cut-and-fill operations.',
    },
    {
      title: 'Superstructure Execution',
      desc: 'Reinforced concrete framing, masonry walling, structural slabs, and roof construction.',
    },
    {
      title: 'Active Quality & Safety Oversight',
      desc: 'On-site workmanship verification, material testing compliance, and safety protocol enforcement.',
    },
    {
      title: 'Disciplined Handover Management',
      desc: 'Systematic snagging resolution, architectural finishing checks, and delivery documentation.',
    },
  ];

  return (
    <section id="properties-construct-integration" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="EXECUTION SYNERGY"
          title="FROM DEVELOPMENT PLAN TO PHYSICAL DELIVERY."
          subtitle="Connecting conceptual property schemes with disciplined building construction and site management."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Right/Left swapped for layout rhythm: Left is Construction Box */}
          <div className="lg:col-span-6 bg-[#0B1528] border border-slate-800 p-6 rounded-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#C5A869]" />
                <span>Construction Contributions When Engaged</span>
              </div>
              <span className="text-[10px] font-mono text-[#C5A869] bg-[#132B4F] px-2 py-0.5 rounded-xs border border-slate-700">
                FLEXIBLE ENGAGEMENT
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {constructCapabilities.map((c, i) => (
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

          {/* Right: Key Narrative & Mandatory Conditional Principle */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-[#0E1E38] border-l-2 border-[#C5A869] border-y border-r border-slate-800 rounded-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A869] uppercase tracking-wider mb-2">
                <HardHat className="w-4 h-4" />
                <span>Execution Principle</span>
              </div>
              <p className="text-sm text-slate-200 font-medium leading-relaxed">
                “Where appropriate, AUREXON CONSTRUCT may contribute construction capability to
                property-development projects according to project scope and delivery requirements.”
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Moving from property planning into physical reality requires proven site coordination. When engaged,
              AUREXON CONSTRUCT brings established on-site craft, qualified supervisor leadership, and adherence
              to the corporate mandate to “Plan Well. Build Once.”
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              However, not every property project developed or managed by AUREXON PROPERTIES must be constructed
              by AUREXON CONSTRUCT. Project structures, joint-venture partner selections, and commercial contract
              agreements determine whether internal execution or appointed main contractors deliver the physical works.
            </p>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href="/businesses/construct"
                onClick={handleConstructClick}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                EXPLORE AUREXON CONSTRUCT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
