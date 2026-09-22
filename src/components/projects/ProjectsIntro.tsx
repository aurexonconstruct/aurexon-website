import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CheckCircle2, Sliders, Layers, FileCheck, ArrowUpRight } from 'lucide-react';

export const ProjectsIntro: React.FC = () => {
  const capabilitiesList = [
    'Building construction',
    'Civil works & infrastructure',
    'Civil and structural engineering',
    'Engineering design & consultancy',
    'Project management',
    'Construction management',
    'Property development',
  ];

  const variabilityFactors = [
    {
      title: 'Project Scope',
      desc: 'The specific spatial, physical, and functional boundaries established for the works.',
    },
    {
      title: 'Client Requirements',
      desc: 'Commercial objectives, technical briefs, quality standards, and handover expectations.',
    },
    {
      title: 'Technical Requirements',
      desc: 'Geotechnical conditions, structural parameters, engineering codes, and statutory approvals.',
    },
    {
      title: 'Delivery Structure',
      desc: 'Selected contractual framework, EPC, design-build, consultancy, or construction management.',
    },
    {
      title: 'Applicable Project Arrangements',
      desc: 'Site logistics, phased milestones, stakeholder interfaces, and operational agreements.',
    },
  ];

  return (
    <section id="projects-intro" className="py-20 sm:py-24 bg-[#0B1528] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="PROJECT FRAMEWORK"
          title="BUILT AROUND PROJECT REQUIREMENTS."
          subtitle="AUREXON establishes project delivery structures tailored to specific technical, operational, and commercial parameters."
          technicalCode="PRJ-FMWK-01"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Core Overview & Capabilities Roster */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              AUREXON’s project delivery is organized around the distinct technical and logistical demands of each commission. Rather than imposing rigid, standardized delivery models, our operations are structured to match the precise requirements of each brief.
            </p>

            <div className="p-6 bg-[#070E1B] border border-slate-800 rounded-xs space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Layers className="w-4 h-4 text-[#C5A869]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#C5A869]">
                  Comprehensive Project Capabilities
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilitiesList.map((cap) => (
                  <li key={cap} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#132B4F]/30 border-l-2 border-[#C5A869] rounded-r-xs text-xs text-slate-300 space-y-1 font-mono">
              <p className="font-bold text-[#E6D3A3]">FOCUSED OPERATIONAL DEPLOYMENT</p>
              <p className="text-slate-400 font-sans leading-relaxed">
                AUREXON does not imply or mandate that every engagement involves all three operating divisions. Specific contracts may engage exclusively engineering consultancy, dedicated construction execution, or coordinated property development.
              </p>
            </div>
          </div>

          {/* Right Column: Parameters Governing Involvement */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 pb-2">
              <Sliders className="w-4 h-4 text-[#C5A869]" />
              <span>Involvement Varies According To Key Determinants</span>
            </div>

            <div className="space-y-3">
              {variabilityFactors.map((factor, idx) => (
                <div
                  key={factor.title}
                  className="p-4 bg-[#070E1B] border border-slate-800 hover:border-slate-700 transition-colors rounded-xs group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#C5A869] bg-[#0E1E38] px-1.5 py-0.5 rounded-xs border border-[#C5A869]/30">
                        0{idx + 1}
                      </span>
                      <h4 className="font-display text-sm font-semibold text-white group-hover:text-[#C5A869] transition-colors">
                        {factor.title}
                      </h4>
                    </div>
                    <FileCheck className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#C5A869] transition-colors" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-7">
                    {factor.desc}
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
