import React from 'react';
import { SectionHeading } from '../common/SectionHeading.tsx';
import {
  Cpu,
  HardHat,
  Briefcase,
  Building,
  CheckCircle,
  FileCheck2,
  Info,
} from 'lucide-react';

export const InsightsIntro: React.FC = () => {
  const practicalTopics = [
    {
      title: 'Engineering',
      desc: 'Civil works coordination, structural load considerations, foundation assessments, and site technical parameters.',
      icon: <Cpu className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Construction',
      desc: 'Workmanship standards, on-site material testing, safety protocols, and physical delivery management.',
      icon: <HardHat className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Project Management',
      desc: 'Schedule programming, cost control, procurement oversight, and multi-stakeholder milestone coordination.',
      icon: <Briefcase className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Property Development',
      desc: 'Land suitability assessment, statutory planning alignment, spatial utility, and long-term asset usefulness.',
      icon: <Building className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Planning & Delivery',
      desc: 'Phased sequencing, regulatory coordination, quality assurance milestones, and operational handover processes.',
      icon: <FileCheck2 className="w-4 h-4 text-[#C5A869]" />,
    },
    {
      title: 'Professional Practice',
      desc: 'Ethical procurement, corporate governance, team coordination, and continuous technical improvement.',
      icon: <CheckCircle className="w-4 h-4 text-[#C5A869]" />,
    },
  ];

  return (
    <section id="insights-intro" className="py-20 bg-[#070E1B] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="GROUNDED PERSPECTIVE"
          title="KNOWLEDGE BUILT FROM PRACTICE."
          subtitle="AUREXON's insights are drawn from real-world site execution, engineering coordination, and built-environment delivery."
        />

        {/* Narrative Context */}
        <div className="mt-8 max-w-4xl space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            AUREXON approaches knowledge sharing as a natural extension of day-to-day practice. Our perspectives are rooted in direct operational experience—managing site realities, solving technical engineering challenges, and coordinating complex physical works within Nigeria's built environment.
          </p>
          <p className="text-slate-400 text-sm">
            Future insight articles will examine practical topics arising across engineering, construction, project management, property development, planning, and professional practice. Rather than abstract academic theories, our focus remains on pragmatic observations, disciplined execution methodologies, and the lessons learned through delivering actual physical structures.
          </p>
        </div>

        {/* Institutional Modesty & Editorial Disclaimer Note */}
        <div className="mt-8 p-5 bg-[#0E1E38] border border-slate-800 rounded-xs flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#C5A869] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Editorial Scope & Scope of Authority
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              AUREXON is a commercial contracting, engineering, and property development organization, not an academic or research institution. Perspectives published through AUREXON Insights reflect operational observations and professional experiences; they do not constitute formal academic research or universal regulatory pronouncements.
            </p>
          </div>
        </div>

        {/* 6 Practical Practice Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practicalTopics.map((topic, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0B1528] border border-slate-800 rounded-xs hover:border-[#C5A869]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3.5">
                  <div className="w-8 h-8 rounded-xs bg-[#132B4F] flex items-center justify-center border border-slate-700/60">
                    {topic.icon}
                  </div>
                  <span className="font-mono text-[11px] text-[#C5A869]">
                    TOPIC 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
