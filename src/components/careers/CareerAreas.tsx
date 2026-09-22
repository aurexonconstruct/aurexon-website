import React from 'react';
import { CAREER_AREAS } from '../../data/careersData';
import { Layers } from 'lucide-react';

export const CareerAreas: React.FC = () => {
  return (
    <section id="career-areas" className="py-20 sm:py-28 bg-[#070E1B] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-3">
            ORGANIZATIONAL DISCIPLINES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white tracking-tight mb-4">
            CAREER AREAS
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            The disciplines below reflect prospective areas of professional activity within AUREXON. These represent multidisciplinary fields across engineering, construction, management, and commercial operations rather than active vacancies.
          </p>
        </div>

        {/* Grid of Career Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_AREAS.map((area) => (
            <div
              key={area.id}
              className="p-6 rounded-xl bg-[#0B1528] border border-[#1E293B] hover:border-[#C5A869]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono text-slate-400">{area.code}</span>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest bg-[#070E1B] border border-[#C5A869]/30 text-[#C5A869] uppercase">
                    {area.badge}
                  </span>
                </div>

                <h3 className="text-lg font-medium text-white mb-2.5">{area.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E293B]">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C5A869]" />
                  Key Disciplines
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.disciplines.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#070E1B] text-slate-300 text-xs border border-[#1E293B]"
                    >
                      {item}
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
