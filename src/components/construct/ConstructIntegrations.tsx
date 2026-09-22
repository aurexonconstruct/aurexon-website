import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Compass, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface ConstructIntegrationsProps {
  onNavigate?: (href: string) => void;
}

export const ConstructIntegrations: React.FC<ConstructIntegrationsProps> = ({ onNavigate }) => {
  return (
    <section
      id="construct-integrations"
      className="py-16 sm:py-24 bg-[#070E1B] border-b border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="DIVISIONAL COLLABORATION"
          technicalCode="DIV-01 // CO-OPERATIONS"
          title="FLEXIBLE INTER-DIVISIONAL COLLABORATION."
          subtitle="Operating under unified corporate governance, AUREXON CONSTRUCT coordinates with sibling divisions when project scope, technical complexity, or delivery structures require it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section 5: Integration with AUREXON ENGINEERING */}
          <div className="p-8 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-slate-700 transition-colors relative group">
            <div>
              {/* Top Tag & Code */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A869]" />
                  <span className="font-mono text-xs text-[#C5A869] font-bold uppercase tracking-wider">
                    TECHNICAL ALIGNMENT
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  REF: CONSTRUCT + ENGINEERING
                </span>
              </div>

              {/* Heading 5 */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                CONSTRUCTION SUPPORTED BY ENGINEERING.
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                <p>
                  AUREXON CONSTRUCT can work alongside <strong>AUREXON ENGINEERING</strong> where project requirements call for
                  engineering design, technical consultancy, structural supervision or specialized geotechnical input.
                </p>

                <p className="p-4 bg-[#0E1E38] border-l-2 border-[#C5A869] rounded-xs text-xs text-slate-300 italic">
                  &ldquo;Where appropriate, construction activities may be supported by the capabilities of AUREXON ENGINEERING,
                  depending on project scope and delivery requirements.&rdquo;
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Engagements remain modular and demand-driven. AUREXON CONSTRUCT operates effectively working from external third-party
                  engineering designs, or when paired internally with AUREXON ENGINEERING for end-to-end design-and-build arrangements.
                </p>
              </div>

              {/* Functional Highlights */}
              <div className="pt-4 border-t border-slate-800/80 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
                  Potential Collaborative Inputs
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Structural calculation reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Foundation verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Site engineering supervision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Technical advisory & audits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Button
                variant="outline"
                size="sm"
                href="/businesses#engineering"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('/businesses#engineering');
                }}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                VIEW AUREXON ENGINEERING
              </Button>
            </div>
          </div>

          {/* Section 6: Relationship with AUREXON PROPERTIES */}
          <div className="p-8 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-slate-700 transition-colors relative group">
            <div>
              {/* Top Tag & Code */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A869]" />
                  <span className="font-mono text-xs text-[#C5A869] font-bold uppercase tracking-wider">
                    DEVELOPMENT ALIGNMENT
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  REF: CONSTRUCT + PROPERTIES
                </span>
              </div>

              {/* Heading 6 */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                FROM DEVELOPMENT VISION TO BUILT REALITY.
              </h3>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                <p>
                  AUREXON CONSTRUCT may contribute construction capability to property-development projects where the project
                  structure, delivery framework and investor requirements call for it.
                </p>

                <p className="p-4 bg-[#0E1E38] border-l-2 border-[#C5A869] rounded-xs text-xs text-slate-300 italic">
                  &ldquo;AUREXON CONSTRUCT acts as the physical delivery mechanism that translates strategic land acquisition
                  and property planning concepts into tangible, structurally sound built environments.&rdquo;
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Project structures remain flexible. Not every AUREXON PROPERTIES development must be constructed by AUREXON CONSTRUCT,
                  nor is AUREXON CONSTRUCT restricted exclusively to internal property ventures; it serves external institutional,
                  commercial, and private clients across Nigeria.
                </p>
              </div>

              {/* Functional Highlights */}
              <div className="pt-4 border-t border-slate-800/80 mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
                  Potential Collaborative Inputs
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Development site preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Vertical building construction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Estate civil works & paving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                    <span>Facility handover management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Button
                variant="outline"
                size="sm"
                href="/businesses#properties"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('/businesses#properties');
                }}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                VIEW AUREXON PROPERTIES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
