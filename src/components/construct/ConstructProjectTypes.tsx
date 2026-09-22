import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { CONSTRUCT_PROJECT_CATEGORIES } from '../../data/constructData.ts';
import { Layers, FolderGit2, Check, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button.tsx';

interface ConstructProjectTypesProps {
  onNavigate?: (href: string) => void;
}

export const ConstructProjectTypes: React.FC<ConstructProjectTypesProps> = ({ onNavigate }) => {
  return (
    <section
      id="construct-project-types"
      className="py-16 sm:py-24 bg-[#070E1B] border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="SCOPE OF ENGAGEMENT"
          technicalCode="DIV-01 // CATEGORIES"
          title="WHERE WE CAN CONTRIBUTE."
          subtitle="AUREXON CONSTRUCT undertakes broad construction categories across commercial, residential, civil, and institutional sectors based on approved project specifications."
        />

        {/* 6 Broad Project Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSTRUCT_PROJECT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-[#0B1528] border border-slate-800 rounded-xs flex flex-col justify-between hover:border-slate-700 transition-colors group"
            >
              <div>
                {/* Visual Label Banner - Explicitly stamped PROJECT CATEGORY */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-[#132B4F]/60 text-[#C5A869] border border-slate-700">
                      PROJECT CATEGORY
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">
                    {cat.code}
                  </span>
                </div>

                {/* Category Title */}
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-3 group-hover:text-[#C5A869] transition-colors">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Typical Scopes */}
              <div className="pt-4 border-t border-slate-800/60 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-2">
                  Scope Coverage
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {cat.scopeOverview.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Project Classification Advisory */}
        <div className="mt-10 p-4 bg-[#0E1E38] border border-slate-800 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-[#C5A869] shrink-0" />
            <p className="text-xs text-slate-300">
              <strong className="text-white uppercase font-mono tracking-wider">[NOTICE]: </strong>
              The project types above describe technical operational categories. AUREXON CONSTRUCT evaluates projects based on
              verified technical drawings, confirmed project scope, and defined contractual requirements.
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            href="/get-a-quote"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('/get-a-quote');
            }}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="shrink-0"
          >
            DISCUSS YOUR PROJECT
          </Button>
        </div>
      </div>
    </section>
  );
};
