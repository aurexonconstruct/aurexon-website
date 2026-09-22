import React from 'react';
import { Hammer, Building2, Link as LinkIcon, ArrowRight, ShieldAlert } from 'lucide-react';

interface EngineeringIntegrationsProps {
  onNavigate?: (href: string) => void;
}

export const EngineeringIntegrations: React.FC<EngineeringIntegrationsProps> = ({
  onNavigate,
}) => {
  return (
    <section
      id="engineering-integrations"
      className="py-20 sm:py-28 bg-[#070E1B] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
              Divisional Synergies & Operating Relations
            </span>
            <span className="h-[1px] w-12 bg-[#C5A869]/40" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            COORDINATED WITHIN THE CORPORATE FRAMEWORK.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            While each business division operates with specific technical focus, AUREXON offers seamless inter-divisional
            coordination under the parent umbrella of AUREXON CONSTRUCTS NIGERIA LIMITED whenever a client’s project scope
            benefits from integrated delivery.
          </p>
        </div>

        {/* Two Integration Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section 7: Integration with AUREXON CONSTRUCT */}
          <div className="bg-[#0B1528] border border-slate-800 rounded-xs p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#0E1E38] border border-slate-700 flex items-center justify-center text-[#C5A869]">
                    <Hammer className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
                      Divisional Collaboration
                    </span>
                    <span className="font-display text-xs font-bold text-white uppercase">
                      AUREXON CONSTRUCT
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-slate-500 bg-[#070E1B] px-2 py-1 rounded-xs border border-slate-800">
                  ENG // CON
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                ENGINEERING CONNECTED TO EXECUTION.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                AUREXON ENGINEERING may work alongside AUREXON CONSTRUCT where project requirements call for
                engineering and construction capabilities to operate in close coordination.
              </p>

              {/* Exact Mandated Principle */}
              <div className="p-4 bg-[#070E1B] border-l-2 border-[#C5A869] rounded-r-xs">
                <p className="text-xs sm:text-sm text-slate-200 italic font-mono leading-relaxed">
                  "Where appropriate, engineering input may support construction planning, technical coordination
                  and site delivery, depending on project scope and delivery requirements."
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400 block">
                  How Collaboration Occurs on Site:
                </span>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] shrink-0 mt-1.5" />
                    <span>Direct engineering review of site construction methods and structural sequencing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] shrink-0 mt-1.5" />
                    <span>Rapid resolution of unexpected ground conditions or reinforcement detailing queries.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] shrink-0 mt-1.5" />
                    <span>Independent, modular engagement—neither division is forced upon third-party contractors.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('/businesses/construct') : (window.location.href = '/businesses/construct')}
                className="text-xs font-mono text-[#C5A869] hover:underline flex items-center gap-1.5"
              >
                <span>View AUREXON CONSTRUCT Division</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[10px] text-slate-500">MODULAR DEPLOYMENT</span>
            </div>
          </div>

          {/* Section 8: Relationship with AUREXON PROPERTIES */}
          <div className="bg-[#0B1528] border border-slate-800 rounded-xs p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#0E1E38] border border-slate-700 flex items-center justify-center text-[#C5A869]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A869] block">
                      Development Support
                    </span>
                    <span className="font-display text-xs font-bold text-white uppercase">
                      AUREXON PROPERTIES
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-slate-500 bg-[#070E1B] px-2 py-1 rounded-xs border border-slate-800">
                  ENG // PROP
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase">
                ENGINEERING SUPPORTING DEVELOPMENT.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Engineering capabilities may contribute to property-development projects where technical planning,
                design, consultancy, supervision or project-management input is required.
              </p>

              <div className="p-4 bg-[#070E1B] border-l-2 border-[#C5A869] rounded-r-xs">
                <p className="text-xs sm:text-sm text-slate-200 italic font-mono leading-relaxed">
                  "Development viability begins with technical feasibility. Engineering analysis provides property initiatives
                  with early certainty regarding earthworks, foundation requirements, and utility infrastructure."
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400 block">
                  Support Across Real Estate Development:
                </span>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] shrink-0 mt-1.5" />
                    <span>Technical feasibility reviews for site acquisition and land planning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] shrink-0 mt-1.5" />
                    <span>Topographical, grading, and drainage master planning for residential layouts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] shrink-0 mt-1.5" />
                    <span>Clear separation: not all property schemes require internal engineering involvement.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => onNavigate ? onNavigate('/businesses#properties') : (window.location.href = '/businesses#properties')}
                className="text-xs font-mono text-[#C5A869] hover:underline flex items-center gap-1.5"
              >
                <span>View AUREXON PROPERTIES Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[10px] text-slate-500">ENGAGEMENT-SPECIFIC</span>
            </div>
          </div>
        </div>

        {/* Non-Exclusive Clarification Note */}
        <div className="mt-8 p-4 bg-[#0E1E38]/40 border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-400 font-mono">
          <ShieldAlert className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-300 font-semibold uppercase">Independence & Modularity: </span>
            AUREXON ENGINEERING is available as an independent technical consultant to external developers, architects,
            and general contractors. It does not require clients to utilize AUREXON CONSTRUCT or AUREXON PROPERTIES, nor
            does every construction or property project within the group mandate engineering division involvement.
          </div>
        </div>
      </div>
    </section>
  );
};
