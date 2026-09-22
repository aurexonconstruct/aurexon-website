import React from 'react';
import { CAPABILITY_ARCHETYPES, COMPANY_DETAILS } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CapabilityArchetype } from '../../types.ts';
import { Layers, Info, CheckCircle, ArrowRight, Briefcase } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface ProjectsPreviewProps {
  onNavigate?: (href: string) => void;
}

export const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({ onNavigate }) => {
  return (
    <section
      id="projects-preview"
      className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="PORTFOLIO & CAPABILITIES"
          title="Project Portfolio & Capabilities"
          subtitle="Selected project capabilities and developments will be showcased here as our portfolio grows."
        />

        {/* Professional Portfolio Announcement & Notice Card */}
        <div className="mb-12 p-8 sm:p-10 bg-[#0B1528] border border-slate-800 rounded-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#C5A869]/10 to-transparent pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132B4F]/60 border border-[#C5A869]/40 rounded-xs text-[#E6D3A3] text-xs font-mono tracking-wider uppercase">
              <Briefcase className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>Portfolio Notice</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wide">
              Selected project capabilities and developments will be showcased here as our portfolio grows.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {COMPANY_DETAILS.legalName} provides building construction, civil engineering, and
              property development services across Nigeria. Project portfolios, execution milestones,
              and verified case studies will be introduced here as our portfolio expands.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('#final-cta');
                  } else {
                    document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Inquire Regarding Project Scopes
              </Button>
            </div>
          </div>
        </div>

        {/* Illustrative Capability Archetypes (Unmistakably Demonstration Content) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider block">
                Capability Archetypes
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                The illustrations below reflect technical focus areas across our operating divisions.
              </p>
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] bg-[#0E1E38] text-amber-300 border border-amber-800/40 px-2.5 py-1 rounded-xs">
              ILLUSTRATIVE CAPABILITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CAPABILITY_ARCHETYPES.map((archetype) => (
              <div
                key={archetype.id}
                className="bg-[#0B1528] border border-slate-800 rounded-xs overflow-hidden flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-300 group shadow-lg"
              >
                {/* Technical Schematic Header Area */}
                <div className="h-36 bg-[#0E1E38] relative border-b border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-40" />

                  {/* Architectural Vector Schematic */}
                  <svg
                    className="absolute inset-0 w-full h-full text-[#C5A869]/20 group-hover:text-[#C5A869]/30 transition-colors pointer-events-none"
                    viewBox="0 0 300 150"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <rect x="25" y="25" width="250" height="95" strokeDasharray="3 3" />
                    <line x1="25" y1="70" x2="275" y2="70" />
                    <line x1="150" y1="25" x2="150" y2="120" />
                  </svg>

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-[10px] bg-[#070E1B] text-amber-300 border border-amber-800/50 px-2 py-0.5 rounded-xs tracking-wider">
                      ILLUSTRATIVE CAPABILITY
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                      {archetype.code}
                    </span>
                  </div>

                  {/* Division indicator */}
                  <div className="relative z-10">
                    <span className="font-mono text-[10px] text-[#C5A869] block tracking-wider uppercase">
                      {archetype.division}
                    </span>
                    <span className="text-xs text-white font-medium">{archetype.category}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display text-base font-bold text-white group-hover:text-[#C5A869] transition-colors mb-2 leading-snug">
                      {archetype.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {archetype.scopeOverview}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Technical Highlights:
                      </span>
                      {archetype.technicalHighlights.map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400">
                      Scope: Capability Focus
                    </span>
                    <a
                      href="#final-cta"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onNavigate) onNavigate('#final-cta');
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#C5A869] hover:text-white uppercase tracking-wider transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
