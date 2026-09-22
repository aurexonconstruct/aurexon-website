import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTY_OPPORTUNITY_CATEGORIES } from '../../data/propertiesData.ts';
import { Check, Info, Home, Building2, Layers, Map, RefreshCw, Briefcase } from 'lucide-react';

interface PropertyCategoriesProps {
  onNavigate?: (href: string) => void;
}

export const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onNavigate }) => {
  const getCategoryIcon = (code: string) => {
    switch (code) {
      case 'RESIDENTIAL':
        return <Home className="w-5 h-5 text-[#C5A869]" />;
      case 'COMMERCIAL':
        return <Building2 className="w-5 h-5 text-[#C5A869]" />;
      case 'MIXED-USE':
        return <Layers className="w-5 h-5 text-[#C5A869]" />;
      case 'LAND-TO-PROPERTY':
        return <Map className="w-5 h-5 text-[#C5A869]" />;
      case 'RENOVATION':
        return <RefreshCw className="w-5 h-5 text-[#C5A869]" />;
      case 'OPPORTUNITIES':
        return <Briefcase className="w-5 h-5 text-[#C5A869]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section id="categories" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="SECTOR SPECIALIZATION"
          title="PROPERTY CATEGORIES"
          subtitle="Core operational categories defining AUREXON's property-development, coordination, and investment participation focus."
        />

        {/* Clear Classification Disclaimer (Mandated by Prompt) */}
        <div className="mt-8 p-4 bg-[#0E1E38] border border-slate-800 rounded-xs flex items-start gap-3">
          <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-mono uppercase">Scope Notice: </strong>
            These categories represent areas of property-development activity and technical capability. They are <span className="text-white font-semibold">NOT</span> claims of currently available properties, speculative inventory, or active public listings.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROPERTY_OPPORTUNITY_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/50 transition-all rounded-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="w-9 h-9 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700">
                    {getCategoryIcon(cat.code)}
                  </div>
                  <span className="font-mono text-xs text-[#C5A869] font-bold tracking-wider">
                    {cat.code}
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
                  Key Focus Areas:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300 mb-6">
                  {cat.scopeOverview.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onNavigate?.('/contact')}
                  className="w-full py-2 bg-[#0E1E38] hover:bg-[#132B4F] border border-slate-700 text-xs font-mono text-slate-200 hover:text-white transition-colors rounded-xs uppercase tracking-wider"
                >
                  DISCUSS {cat.code} OPPORTUNITY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
