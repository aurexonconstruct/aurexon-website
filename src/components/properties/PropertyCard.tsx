import React from 'react';
import { PropertyRecord } from '../../types.ts';
import { MapPin, Building, ShieldCheck, Tag, ArrowRight } from 'lucide-react';
import { MediaImage } from '../common/MediaImage';

interface PropertyCardProps {
  property: PropertyRecord;
  onNavigate?: (href: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onNavigate }) => {
  return (
    <div className="bg-[#0E1E38] border border-slate-800 rounded-xs overflow-hidden flex flex-col justify-between hover:border-[#C5A869]/50 transition-all group">
      {/* Property Visual / Architectural Header */}
      <div className="relative bg-[#0B1528] overflow-hidden border-b border-slate-800">
        <MediaImage
          src={property.image}
          alt={property.title}
          aspectRatio="16:9"
          placeholderCategory="PROPERTY"
          placeholderTitle="PROPERTY VISUALS DEVELOPING"
          placeholderSubtitle="Approved property development visuals will appear upon verification."
          imageClassName="group-hover:scale-105 transition-transform duration-500"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 bg-[#0B1528]/90 backdrop-blur-xs border border-slate-700 text-[#C5A869] font-mono text-[10px] font-bold uppercase tracking-wider rounded-xs">
            {property.status}
          </span>
        </div>

        {/* Development Stage Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 bg-[#132B4F]/90 border border-slate-700 text-slate-300 font-mono text-[10px] uppercase rounded-xs">
            {property.developmentStage}
          </span>
        </div>
      </div>


      {/* Property Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata Bar */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2.5">
            <span className="inline-flex items-center gap-1">
              <Tag className="w-3 h-3 text-[#C5A869]" />
              {property.category}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#C5A869]" />
              {property.location}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#C5A869] transition-colors mb-2">
            {property.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
            {property.description}
          </p>
        </div>

        {/* Technical Specification Footer */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span className="font-mono text-[11px] text-slate-400">
            {property.propertyType}
          </span>

          <button
            type="button"
            onClick={() => onNavigate?.('/contact')}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C5A869] hover:text-[#E8D49E] transition-colors"
          >
            <span>INQUIRE</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
