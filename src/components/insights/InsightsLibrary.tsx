import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { INSIGHTS } from '../../data/insightsData.ts';
import { InsightCard } from './InsightCard.tsx';
import { BookOpen, ShieldCheck, FileCheck, Layers, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface InsightsLibraryProps {
  onNavigate?: (href: string) => void;
}

export const InsightsLibrary: React.FC<InsightsLibraryProps> = ({ onNavigate }) => {
  const hasInsights = INSIGHTS.length > 0;

  return (
    <section id="insights-library" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="KNOWLEDGE REPOSITORY"
          title="INSIGHTS LIBRARY"
          subtitle="A structured catalog for approved professional perspectives, engineering analyses, and construction observations."
        />

        {hasInsights ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.map((insight) => (
              <InsightCard
                key={insight.id}
                insight={insight}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        ) : (
          /* Deliberate, Premium Corporate Empty State (Mandated by Prompt) */
          <div className="mt-12 bg-[#070E1B] border border-slate-800 rounded-xs p-8 sm:p-12 relative overflow-hidden">
            {/* Subtle Blueprint Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #C5A869 1px, transparent 1px), linear-gradient(to bottom, #C5A869 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }}
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Editorial Icon Node */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-xs bg-[#0E1E38] border border-slate-700 flex items-center justify-center text-[#C5A869]">
                <BookOpen className="w-8 h-8" />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#132B4F] border border-[#C5A869]/30 rounded-xs text-[#C5A869] text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C5A869] animate-pulse" />
                <span>EDITORIAL STATUS: ACTIVE REPOSITORY</span>
              </div>

              {/* Required Heading */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase mb-3">
                INSIGHTS LIBRARY DEVELOPING
              </h3>

              {/* Required Supporting Text */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                Approved AUREXON insight articles, technical perspectives and professional publications will appear here as they are prepared and approved for publication.
              </p>

              {/* 3 Editorial Governance Verification Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 text-left mb-8">
                <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>01. Technical Review</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Zero speculative articles or promotional clickbait. Each publication undergoes internal technical vetting.
                  </p>
                </div>

                <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase mb-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>02. Author Attribution</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Clear identification of authors, professional context, and practical engineering background.
                  </p>
                </div>

                <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xs">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase mb-1">
                    <Layers className="w-3.5 h-3.5 text-[#C5A869]" />
                    <span>03. Practical Value</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Focused on actual construction techniques, project management discipline, and durable asset delivery.
                  </p>
                </div>
              </div>

              {/* Direct Engagement Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="gold"
                  onClick={() => onNavigate?.('/contact')}
                >
                  <span>CONTACT AUREXON EDITORIAL</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline-white"
                  onClick={() => onNavigate?.('/get-a-quote')}
                >
                  <span>DISCUSS A PROJECT REQUIREMENT</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
