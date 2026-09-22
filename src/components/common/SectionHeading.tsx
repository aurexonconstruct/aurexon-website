import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  lightTheme?: boolean;
  className?: string;
  technicalCode?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  lightTheme = false,
  className = '',
  technicalCode,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {/* Eyebrow / Category Badge */}
      <div className={`flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {badge && (
          <span
            className={`inline-flex items-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-xs border ${
              lightTheme
                ? 'bg-slate-100 text-slate-700 border-slate-300'
                : 'bg-[#C5A869]/10 text-[#C5A869] border-[#C5A869]/30'
            }`}
          >
            {badge}
          </span>
        )}
        {technicalCode && (
          <span className="font-mono text-[10px] text-slate-300 tracking-wider">
            [{technicalCode}]
          </span>
        )}
      </div>

      {/* Main Title */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase ${
          lightTheme ? 'text-[#070E1B]' : 'text-white'
        }`}
      >
        {title}
      </h2>

      {/* Subtle Architectural Accent Line */}
      <div
        className={`mt-4 flex items-center gap-1.5 ${isCenter ? 'justify-center' : 'justify-start'}`}
      >
        <span className="h-[2px] w-12 bg-[#C5A869]" />
        <span className="h-[2px] w-2 bg-[#C5A869]/50" />
        <span className="h-[2px] w-1 bg-[#C5A869]/30" />
      </div>

      {/* Subtitle / Descriptive Text */}
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            lightTheme ? 'text-slate-600' : 'text-slate-200'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
