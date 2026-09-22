import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { AUREXON_PERSPECTIVES_TOPICS } from '../../data/insightsData.ts';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AurexonPerspectives: React.FC = () => {
  return (
    <section id="aurexon-perspectives" className="py-20 bg-[#0B1528] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="CORPORATE OUTLOOK"
          title="AUREXON PERSPECTIVES"
          subtitle="Thematic viewpoints and operational philosophies guiding future corporate publications and industry commentary."
        />

        {/* Narrative Context (Strict language adherence: "Future perspectives may explore...") */}
        <div className="mt-8 max-w-4xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            As AUREXON continues its commercial and operational activities across Nigeria, leadership and technical teams will articulate structured corporate perspectives. Future perspectives may explore critical questions surrounding project governance, interdisciplinary collaboration, and sustainable built-environment delivery.
          </p>
          <p className="text-slate-400 text-xs sm:text-sm">
            We deliberately refrain from publishing unsubstantiated economic forecasts, market speculation, or artificial thought leadership. Every corporate viewpoint released will be grounded in verified execution realities and practical governance standards.
          </p>
        </div>

        {/* 6 Thematic Perspectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {AUREXON_PERSPECTIVES_TOPICS.map((topic, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0E1E38] border border-slate-800 hover:border-[#C5A869]/50 transition-all rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="font-mono text-xs text-[#C5A869] font-bold">
                    THEME 0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 bg-[#132B4F] border border-slate-700 text-slate-300 font-mono text-[10px] rounded-xs uppercase">
                    {topic.focus}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide mb-2.5">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {topic.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#C5A869]" />
                  <span>FUTURE EXPLORATION</span>
                </span>
                <span className="text-[#C5A869]">PLANNED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
