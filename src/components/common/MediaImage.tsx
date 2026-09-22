import React, { useState } from 'react';
import { ImageOff, Sparkles, ShieldCheck } from 'lucide-react';
import { MediaAsset } from '../../types';

export interface MediaImageProps {
  src?: string;
  alt: string;
  asset?: MediaAsset;
  caption?: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:2' | '21:9' | 'auto';
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  isIllustrative?: boolean;
  placeholderCategory?: 'PROPERTY' | 'PROJECT' | 'ENGINEERING' | 'INSIGHT' | 'GENERAL';
  placeholderTitle?: string;
  placeholderSubtitle?: string;
  onClick?: () => void;
}

export const MediaImage: React.FC<MediaImageProps> = ({
  src,
  alt,
  asset,
  caption,
  title,
  aspectRatio = '16:9',
  className = '',
  imageClassName = '',
  priority = false,
  isIllustrative,
  placeholderCategory = 'GENERAL',
  placeholderTitle,
  placeholderSubtitle,
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Derive source and metadata from either asset object or direct props
  const effectiveSrc = asset?.src || src;
  const effectiveAlt = asset?.altText || alt;
  const effectiveCaption = asset?.caption || caption;
  const effectiveTitle = asset?.title || title;
  const effectiveIllustrative = asset?.isIllustrative ?? isIllustrative ?? false;
  const effectiveRatio = asset?.aspectRatio || aspectRatio;

  // Aspect ratio classes
  const ratioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:2': 'aspect-[3/2]',
    '21:9': 'aspect-[21/9]',
    auto: '',
  }[effectiveRatio];

  // Placeholder category display titles
  const getCategoryPlaceholderText = () => {
    if (placeholderTitle) return placeholderTitle;
    switch (placeholderCategory) {
      case 'PROPERTY':
        return 'PROPERTY VISUALS DEVELOPING';
      case 'PROJECT':
        return 'PROJECT IMAGERY DEVELOPING';
      case 'ENGINEERING':
        return 'TECHNICAL VISUALS DEVELOPING';
      case 'INSIGHT':
        return 'INSIGHT MEDIA DEVELOPING';
      case 'GENERAL':
      default:
        return 'MEDIA DEVELOPING';
    }
  };

  const getCategoryPlaceholderSub = () => {
    if (placeholderSubtitle) return placeholderSubtitle;
    return 'Approved corporate visual assets will appear here upon formal review.';
  };

  // Missing or empty image state -> Render intentional, premium AUREXON visual placeholder
  if (!effectiveSrc || imageError) {
    return (
      <figure className={`relative overflow-hidden rounded-xl bg-[#0B1528] border border-[#1E293B] ${ratioClasses} ${className}`}>
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(to_right,#C5A869_1px,transparent_1px),linear-gradient(to_bottom,#C5A869_1px,transparent_1px)] bg-[size:2rem_2rem]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#070E1B] border border-[#C5A869]/30 flex items-center justify-center mb-3 text-[#C5A869]">
            <ImageOff className="w-5 h-5 text-[#C5A869]/80" />
          </div>

          <span className="text-[10px] font-mono tracking-widest text-[#C5A869] uppercase mb-1">
            {getCategoryPlaceholderText()}
          </span>

          <p className="text-xs text-slate-400 font-sans max-w-xs leading-relaxed">
            {getCategoryPlaceholderSub()}
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#070E1B] border border-[#1E293B] text-[9px] font-mono text-slate-400 uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-[#C5A869]" />
            AUREXON GOVERNANCE
          </div>
        </div>

        {effectiveCaption && (
          <figcaption className="absolute bottom-0 inset-x-0 bg-[#070E1B]/90 backdrop-blur-xs p-2 text-center text-[11px] text-slate-400 font-mono border-t border-[#1E293B]">
            {effectiveCaption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={`relative overflow-hidden rounded-xl bg-[#070E1B] border border-[#1E293B] ${className}`}>
      <div className={`relative w-full overflow-hidden ${ratioClasses}`}>
        {/* Loading skeleton pulse prior to decode */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#0B1528] animate-pulse flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#C5A869]/30 animate-spin" />
          </div>
        )}

        <img
          src={effectiveSrc}
          alt={effectiveAlt}
          title={effectiveTitle}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          onClick={onClick}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${onClick ? 'cursor-pointer hover:scale-[1.02] transition-transform duration-500' : ''} ${imageClassName}`}
        />

        {/* Illustrative Label if applicable */}
        {effectiveIllustrative && (
          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#070E1B]/90 border border-[#C5A869]/40 text-[9px] font-mono tracking-widest text-[#C5A869] uppercase backdrop-blur-xs">
            ILLUSTRATIVE
          </span>
        )}
      </div>

      {effectiveCaption && (
        <figcaption className="p-3 bg-[#0B1528] border-t border-[#1E293B] text-xs text-slate-300 font-sans flex items-center justify-between gap-2">
          <span>{effectiveCaption}</span>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider shrink-0">
            AUREXON MEDIA
          </span>
        </figcaption>
      )}
    </figure>
  );
};
