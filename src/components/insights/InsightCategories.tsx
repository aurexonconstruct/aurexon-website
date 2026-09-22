import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { INSIGHT_CATEGORIES } from '../../data/insightsData.ts';
import {
  Cpu,
  HardHat,
  Briefcase,
  Building,
  ShieldCheck,
  Globe2,
  Check,
  Info,
} from 'lucide-react';

interface InsightCategoriesProps {
  onNavigate?: (href: string) => void;
}

export const InsightCategories: React.FC<InsightCategoriesProps> = ({ onNavigate }) => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'engineering-design':
        return <Cpu className="w-5 h-5 text-[#C5A869]" />;
      case 'construction-delivery':
        return <HardHat className="w-5 h-5 text-[#C5A869]" />;
      case 'project-management':
        return <Briefcase className="w-5 h-5 text-[#C5A869]" />;
      case 'property-development':
        return <Building className="w-5 h-5 text-[#C5A869]" />;
      case 'professional-practice':
        return <ShieldCheck className="w-5 h-5 text-[#C5A869]" />;
      case 'industry-perspectives':
        return <Globe2 className="w-5 h-5 text-[#C5A869]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section id="insight-categories" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="EDITORIAL TAXONOMY"
          title="INSIGHT CATEGORIES"
          subtitle="A structured publishing taxonomy organizing technical insights, field observations, and operational perspectives."
        />

        {/* Clear Classification Disclaimer (Mandated by Prompt) */}
        <div className="mt-8 p-4 bg-[#070E1B] border border-slate-800 rounded-xs flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-mono uppercase">Editorial Scope Notice: </strong>
            These six categories represent thematic publishing areas for future knowledge dissemination. They are <span className="text-white font-semibold">publishing categories</span> and do <span className="text-white font-semibold">NOT</span> represent existing published article counts or active archives.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {INSIGHT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-[#0E1E38] border border-slate-800 hover:border-[#C5A869]/50 transition-all rounded-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="w-9 h-9 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <span className="font-mono text-xs text-[#C5A869] font-bold tracking-wider">
                    CATEGORY {cat.number}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#C5A869] transition-colors mb-2">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 pb-1 border-b border-slate-800/60">
                  Anticipated Thematic Areas:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                  {cat.focusAreas.map((area, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{area}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PUBLISHING TRACK</span>
                  <span className="text-[#C5A869]">EDITORIAL THEME</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
