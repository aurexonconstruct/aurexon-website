import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, ShieldCheck, FolderGit2 } from 'lucide-react';
import { MediaAsset } from '../../types';
import { MediaImage } from './MediaImage';

export interface MediaGalleryProps {
  items?: MediaAsset[];
  category?: 'PROPERTY' | 'PROJECT' | 'ENGINEERING' | 'INSIGHT' | 'GENERAL';
  title?: string;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
  className?: string;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({
  items = [],
  category = 'GENERAL',
  title,
  emptyStateTitle,
  emptyStateDescription,
  className = '',
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // If no items exist, render intentional, premium architectural empty state
  if (!items || items.length === 0) {
    const defaultTitle = emptyStateTitle || `${category} IMAGERY DEVELOPING`;
    const defaultDesc =
      emptyStateDescription ||
      `Approved ${category.toLowerCase()} visual records will appear here as corporate documentation is verified. Under AUREXON governance, no speculative or fabricated imagery is displayed.`;

    return (
      <div className={`rounded-xl bg-[#0B1528] border border-[#1E293B] p-6 sm:p-10 ${className}`}>
        {title && (
          <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1E293B]">
            <h4 className="text-base font-display font-medium text-white">{title}</h4>
            <span className="text-[10px] font-mono tracking-widest text-[#C5A869] uppercase px-2 py-0.5 rounded bg-[#070E1B] border border-[#C5A869]/30">
              MEDIA GALLERY
            </span>
          </div>
        )}

        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="w-14 h-14 rounded-full bg-[#070E1B] border border-[#C5A869]/40 flex items-center justify-center mb-4 text-[#C5A869]">
            <FolderGit2 className="w-6 h-6" />
          </div>

          <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase mb-2">
            {defaultTitle}
          </span>

          <p className="text-sm text-slate-300 font-sans max-w-md leading-relaxed mb-6">
            {defaultDesc}
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#070E1B] border border-[#1E293B] text-xs font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
            GOVERNANCE PROTOCOL ACTIVE
          </div>
        </div>
      </div>
    );
  }

  const activeItem = items[selectedIndex] || items[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`rounded-xl bg-[#0B1528] border border-[#1E293B] p-4 sm:p-6 ${className}`}>
      {title && (
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#1E293B]">
          <h4 className="text-base font-display font-medium text-white">{title}</h4>
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
            {selectedIndex + 1} OF {items.length}
          </span>
        </div>
      )}

      {/* Featured / Active Main Image */}
      <div className="relative mb-4">
        <MediaImage
          asset={activeItem}
          alt={activeItem.altText}
          aspectRatio="16:9"
          priority={true}
        />

        {items.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="pointer-events-auto p-2 rounded-lg bg-[#070E1B]/80 hover:bg-[#070E1B] border border-[#1E293B] text-white hover:text-[#C5A869] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A869]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="pointer-events-auto p-2 rounded-lg bg-[#070E1B]/80 hover:bg-[#070E1B] border border-[#1E293B] text-white hover:text-[#C5A869] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5A869]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails Row if multi-image */}
      {items.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-2 border-t border-[#1E293B]">
          {items.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <button
                key={item.id || index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Select image ${index + 1}: ${item.title}`}
                className={`relative aspect-video rounded-md overflow-hidden border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#C5A869] ring-2 ring-[#C5A869]/30'
                    : 'border-[#1E293B] opacity-60 hover:opacity-100 hover:border-slate-500'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.altText}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
