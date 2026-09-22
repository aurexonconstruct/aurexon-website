import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROJECT_CATEGORIES } from '../../data/projectsData.ts';
import {
  Building2,
  HardHat,
  Compass,
  ClipboardCheck,
  Building,
  Wrench,
  CheckCircle,
  Info,
} from 'lucide-react';

export const ProjectCategories: React.FC = () => {
  // Mapping specific architectural icons for the six categories
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'building-construction':
        return <Building2 className="w-5 h-5 text-[#C5A869]" />;
      case 'civil-works-infrastructure':
        return <HardHat className="w-5 h-5 text-[#C5A869]" />;
      case 'engineering-structural-works':
        return <Compass className="w-5 h-5 text-[#C5A869]" />;
      case 'project-construction-management':
        return <ClipboardCheck className="w-5 h-5 text-[#C5A869]" />;
      case 'property-development':
        return <Building className="w-5 h-5 text-[#C5A869]" />;
      case 'renovation-improvement':
        return <Wrench className="w-5 h-5 text-[#C5A869]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section id="project-categories" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="CAPABILITY DOMAINS"
          title="PROJECT CATEGORIES"
          subtitle="Functional areas across which AUREXON structures engineering and construction works. These represent operational capability categories, not historical project counts."
          technicalCode="PRJ-CAT-06"
        />

        {/* Essential Category Notice */}
        <div className="mb-10 p-4 bg-[#0B1528] border border-slate-800 rounded-xs flex items-start gap-3 max-w-3xl">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            <span className="text-[#C5A869] font-semibold">CATEGORICAL CLASSIFICATION NOTE:</span> The classifications below delineate technical areas of corporate capability. They do not constitute a roster of completed projects or historical past assignments.
          </p>
        </div>

        {/* 6 Responsive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="p-6 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/50 transition-all duration-300 rounded-xs flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A869]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Number & Category Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#C5A869] bg-[#0E1E38] px-2 py-0.5 rounded-xs border border-[#C5A869]/30">
                    CATEGORY {category.number}
                  </span>
                  <div className="p-2 bg-[#0E1E38] border border-slate-800 rounded-xs group-hover:border-[#C5A869]/40 transition-colors">
                    {getCategoryIcon(category.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-white mb-2.5 tracking-wide group-hover:text-[#C5A869] transition-colors uppercase">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Scope Areas */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80 mb-5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Scope Inclusions:
                  </span>
                  <ul className="space-y-1.5">
                    {category.scopeAreas.map((scope, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle className="w-3 h-3 text-[#C5A869] shrink-0 mt-0.5 opacity-80" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contributing Divisions */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-300 uppercase">
                  Division:
                </span>
                <div className="flex flex-wrap gap-1 justify-end">
                  {category.divisions.map((div) => (
                    <span
                      key={div}
                      className="text-[9px] font-mono text-[#C5A869] bg-[#132B4F]/40 border border-[#C5A869]/30 px-1.5 py-0.5 rounded-xs"
                    >
                      {div.replace('AUREXON ', '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
