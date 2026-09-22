import React from 'react';
import { InsightRecord } from '../../types.ts';
import { Tag, Calendar, Clock, ArrowRight, User, BookOpen } from 'lucide-react';
import { MediaImage } from '../common/MediaImage';

interface InsightCardProps {
  insight: InsightRecord;
  onNavigate?: (href: string) => void;
}

export const InsightCard: React.FC<InsightCardProps> = ({ insight, onNavigate }) => {
  return (
    <article className="bg-[#0E1E38] border border-slate-800 rounded-xs overflow-hidden flex flex-col justify-between hover:border-[#C5A869]/50 transition-all group">
      {/* Visual / Editorial Banner */}
      <div className="relative bg-[#0B1528] overflow-hidden border-b border-slate-800">
        <MediaImage
          src={insight.image}
          alt={insight.title}
          aspectRatio="16:9"
          placeholderCategory="INSIGHT"
          placeholderTitle="INSIGHT MEDIA DEVELOPING"
          placeholderSubtitle="Approved technical perspective imagery will appear upon publication."
          imageClassName="group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 bg-[#0B1528]/90 backdrop-blur-xs border border-slate-700 text-[#C5A869] font-mono text-[10px] font-bold uppercase tracking-wider rounded-xs">
            {insight.category}
          </span>
        </div>

        {/* Status / Reading Time Badge */}
        {insight.readingTime && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#132B4F]/90 border border-slate-700 text-slate-300 font-mono text-[10px] uppercase rounded-xs">
              <Clock className="w-3 h-3 text-[#C5A869]" />
              {insight.readingTime}
            </span>
          </div>
        )}
      </div>


      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Bar */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2.5">
            {insight.publishedDate && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#C5A869]" />
                {insight.publishedDate}
              </span>
            )}
            {insight.publishedDate && insight.author && <span>•</span>}
            {insight.author && (
              <span className="inline-flex items-center gap-1">
                <User className="w-3 h-3 text-[#C5A869]" />
                {insight.author}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#C5A869] transition-colors mb-2">
            {insight.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
            {insight.excerpt}
          </p>
        </div>

        {/* Technical Footer */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span className="font-mono text-[11px] text-slate-400">
            {insight.status || 'APPROVED PUBLICATION'}
          </span>

          <button
            type="button"
            onClick={() => onNavigate?.(`/insights/${insight.slug}`)}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C5A869] hover:text-[#E8D49E] transition-colors"
          >
            <span>READ PERSPECTIVE</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
