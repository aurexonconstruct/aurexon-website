import React from 'react';
import { ProjectRecord } from '../../types.ts';
import { MapPin, Calendar, Tag, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { MediaImage } from '../common/MediaImage';

interface ProjectCardProps {
  project: ProjectRecord;
  onNavigate?: (href: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate }) => {
  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60';
      case 'ongoing':
        return 'bg-blue-950/60 text-blue-300 border-blue-800/60';
      case 'proposed':
        return 'bg-amber-950/60 text-amber-300 border-amber-800/60';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="bg-[#0B1528] border border-slate-800 hover:border-[#C5A869]/60 transition-all duration-300 rounded-xs overflow-hidden flex flex-col justify-between group">
      {/* Visual / Blueprint Header */}
      <div className="bg-[#070E1B] border-b border-slate-800 relative overflow-hidden">
        <MediaImage
          src={project.image}
          alt={project.title}
          aspectRatio="16:9"
          placeholderCategory="PROJECT"
          placeholderTitle="PROJECT IMAGERY DEVELOPING"
          placeholderSubtitle="Approved corporate project photographs will appear upon verification."
          imageClassName="group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 right-3 z-10 flex justify-between items-start pointer-events-none">
          <span className="font-mono text-[10px] text-[#C5A869] bg-[#0E1E38]/90 backdrop-blur-xs px-2 py-0.5 border border-[#C5A869]/30 rounded-xs">
            {project.category}
          </span>
          <span className={`font-mono text-[10px] uppercase px-2 py-0.5 border rounded-xs backdrop-blur-xs ${getStatusBadgeClass(project.status)}`}>
            {project.status}
          </span>
        </div>
      </div>


      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C5A869]">
            <span>{project.division}</span>
            {project.year && (
              <>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              </>
            )}
          </div>

          <h3 className="font-display text-lg font-bold text-white group-hover:text-[#C5A869] transition-colors leading-snug">
            {project.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{project.location}</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed pt-2 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Services / Tags */}
        <div className="pt-3 border-t border-slate-800/80 space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {project.services.map((svc, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-slate-300 bg-[#070E1B] px-2 py-0.5 rounded-xs border border-slate-800"
              >
                {svc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
