import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROJECTS } from '../../data/projectsData.ts';
import { ProjectCard } from './ProjectCard.tsx';
import { ShieldCheck, FileCheck, Layers, ArrowRight, Lock, Clock } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface ProjectsPortfolioProps {
  onNavigate?: (href: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onNavigate }) => {
  const hasProjects = PROJECTS.length > 0;

  return (
    <section id="project-portfolio" className="py-20 sm:py-28 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="VERIFIED PORTFOLIO"
          title="PROJECT PORTFOLIO"
          subtitle="A structured portfolio environment established for presenting verified project records upon corporate and client authorization."
          technicalCode="PRJ-PORT-00"
        />

        {hasProjects ? (
          /* Render Active Project Cards When Populated With Verified Data */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj) => (
              <ProjectCard key={proj.id} project={proj} onNavigate={onNavigate} />
            ))}
          </div>
        ) : (
          /* Intentional, Deliberate & Premium Empty State */
          <div className="relative rounded-xs border border-slate-800 bg-[#070E1B] p-8 sm:p-14 overflow-hidden">
            {/* Background Architectural Grid Accent */}
            <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#C5A869]/10 to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
              {/* Status Emblem */}
              <div className="inline-flex items-center justify-center p-3.5 bg-[#0E1E38] border border-[#C5A869]/40 rounded-xs shadow-md">
                <ShieldCheck className="w-8 h-8 text-[#C5A869]" />
              </div>

              {/* Status Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132B4F]/50 border border-[#C5A869]/30 rounded-xs text-[11px] font-mono text-[#E6D3A3] uppercase tracking-widest">
                  <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>GOVERNANCE PROTOCOL ACTIVE</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
                  PORTFOLIO INFORMATION DEVELOPING
                </h3>
              </div>

              {/* Supporting Copy strictly according to prompt */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                Verified project records will be added as AUREXON project information is approved for public presentation.
              </p>

              {/* Architectural Technical Criteria Box */}
              <div className="mt-8 p-6 bg-[#0B1528] border border-slate-800 rounded-xs text-left grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-slate-800/80 pb-3 sm:pb-0 sm:pr-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C5A869]">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>01. VERIFICATION</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Formal engineering and corporate verification prior to public release.
                  </p>
                </div>

                <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-slate-800/80 pb-3 sm:pb-0 sm:pr-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C5A869]">
                    <Lock className="w-3.5 h-3.5" />
                    <span>02. CONFIDENTIALITY</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Strict adherence to client commercial privacy and contractual stipulations.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C5A869]">
                    <Layers className="w-3.5 h-3.5" />
                    <span>03. ACCURACY</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Precise attribution of technical roles, scopes, and structural milestones.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => (onNavigate ? onNavigate('/get-a-quote') : (window.location.href = '/get-a-quote'))}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Request Technical Inquiry
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => (onNavigate ? onNavigate('/contact') : (window.location.href = '/contact'))}
                >
                  Contact Project Office
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
