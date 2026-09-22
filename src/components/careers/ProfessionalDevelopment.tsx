import React from 'react';
import { PROFESSIONAL_DEVELOPMENT_PILLARS } from '../../data/careersData';
import { Award, Compass, BookOpen, Target } from 'lucide-react';

export const ProfessionalDevelopment: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#0B1528] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-3">
            CAPABILITY & GROWTH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-white tracking-tight mb-4">
            GROW THROUGH EXPERIENCE.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
            In the built environment, enduring competence is formed through practical experience, technical development, professional responsibility, teamwork, learning and direct exposure to project delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFESSIONAL_DEVELOPMENT_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded-xl bg-[#070E1B] border border-[#1E293B] relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-mono text-[#C5A869] font-medium block mb-4">
                  {pillar.number}
                </span>
                <h3 className="text-base font-medium text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center gap-2 text-xs font-mono text-slate-400">
                <Target className="w-3.5 h-3.5 text-[#C5A869]" />
                Professional Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
