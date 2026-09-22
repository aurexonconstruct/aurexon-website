import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { PROPERTY_OPPORTUNITY_CATEGORIES } from '../../data/propertiesData.ts';
import { Check, ShieldAlert, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface PropertyOpportunityCategoriesProps {
  onNavigate?: (href: string) => void;
}

export const PropertyOpportunityCategories: React.FC<PropertyOpportunityCategoriesProps> = ({
  onNavigate,
}) => {
  const handleConsultClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/get-a-quote');
    } else {
      window.location.href = '/get-a-quote';
    }
  };

  return (
    <section id="properties-opportunity-categories" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="SECTOR SCOPE"
          title="WHERE WE CAN CONTRIBUTE"
          subtitle="Broad property and development categories where our planning, development management, and technical capabilities apply."
        />

        {/* Clear Classification Notice */}
        <div className="mt-8 p-4 bg-[#0E1E38] border border-slate-800 rounded-xs flex items-start gap-3 text-xs text-slate-300">
          <ShieldAlert className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-mono uppercase">Scope Distinction: </strong>
            The categories below describe general property sectors and development typologies within our professional
            remit. They do not constitute an existing inventory of completed schemes, available housing units, or
            speculative real-estate sales listings.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROPERTY_OPPORTUNITY_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/50 transition-colors rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="font-mono text-[10px] text-[#C5A869] uppercase tracking-wider bg-[#132B4F] px-2.5 py-1 rounded-xs border border-slate-700 font-semibold">
                    PROPERTY DEVELOPMENT CATEGORY
                  </span>
                  <span className="font-mono text-[10px] text-slate-500 uppercase">
                    {cat.code}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 uppercase tracking-wide">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 border-t border-slate-800/80 pt-3">
                  Scope & Application:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {cat.scopeOverview.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Prompt */}
        <div className="mt-12 p-6 bg-[#0E1E38] border border-slate-800 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Considering a Project in Any of These Sectors?
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Engage our technical and development team to review site parameters and feasibility requirements.
            </p>
          </div>
          <Button
            variant="primary"
            size="sm"
            href="/get-a-quote"
            onClick={handleConsultClick}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            DISCUSS A DEVELOPMENT
          </Button>
        </div>
      </div>
    </section>
  );
};
