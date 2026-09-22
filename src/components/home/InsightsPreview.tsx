import React from 'react';
import { INSIGHTS_PREVIEW } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';

interface InsightsPreviewProps {
  onNavigate?: (href: string) => void;
}

export const InsightsPreview: React.FC<InsightsPreviewProps> = ({ onNavigate }) => {
  return (
    <section id="insights-preview" className="py-20 sm:py-28 bg-[#070E1B] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="PERSPECTIVES & INSIGHTS"
          title="Engineering & Development Insights"
          subtitle="Perspectives on Nigerian civil infrastructure, structural efficiency, and property investment economics."
        />

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {INSIGHTS_PREVIEW.map((insight) => (
            <article
              key={insight.id}
              className="bg-[#0B1528] border border-slate-800 rounded-xs p-6 sm:p-7 flex flex-col justify-between hover:border-[#C5A869]/50 transition-all duration-200 group shadow-md"
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] text-[#C5A869] uppercase tracking-wider bg-[#132B4F]/60 px-2 py-0.5 rounded-xs border border-slate-700/60">
                    {insight.category}
                  </span>
                  <span className="font-mono text-[10px] bg-amber-950/50 text-amber-300 border border-amber-800/50 px-1.5 py-0.5 rounded-xs">
                    [DEMO PERSPECTIVE]
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#C5A869] transition-colors mb-3 leading-snug">
                  {insight.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {insight.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>{insight.readTime}</span>
                </div>

                <a
                  href="#final-cta"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate('#final-cta');
                  }}
                  className="inline-flex items-center gap-1 font-semibold text-[#C5A869] hover:text-white uppercase tracking-wider transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Future Publications Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-mono">
            Perspectives, articles, and industry insights will be published here as our knowledge sharing initiatives expand.
          </p>
        </div>
      </div>
    </section>
  );
};
