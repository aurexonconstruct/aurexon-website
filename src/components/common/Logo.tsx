import React from 'react';
import { COMPANY_DETAILS } from '../../data/companyData.ts';

export interface LogoProps {
  id?: string;
  variant?: 'header' | 'footer' | 'drawer' | 'default';
  className?: string;
  imgClassName?: string;
  onNavigate?: (href: string) => void;
  href?: string;
  isScrolled?: boolean;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  id,
  variant = 'default',
  className = '',
  imgClassName = '',
  onNavigate,
  href = '/',
  isScrolled = false,
  alt = 'AUREXON — AUREXON CONSTRUCTS NIGERIA LIMITED',
}) => {
  const elementId = id || (variant === 'header' ? 'header-brand-logo' : variant === 'footer' ? 'footer-brand-logo' : 'brand-logo');
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = href;
      }
    }
  };

  // Determine appropriate responsive dimensions per placement
  let imageSizing = 'h-10 w-auto object-contain';
  if (variant === 'header') {
    imageSizing = isScrolled
      ? 'h-9 sm:h-10 w-auto max-w-[200px] object-contain transition-all duration-300'
      : 'h-11 sm:h-12 md:h-14 w-auto max-w-[240px] object-contain transition-all duration-300';
  } else if (variant === 'footer') {
    imageSizing = 'h-14 sm:h-16 md:h-20 w-auto max-w-[260px] object-contain transition-all duration-300';
  } else if (variant === 'drawer') {
    imageSizing = 'h-11 sm:h-12 w-auto max-w-[200px] object-contain';
  }

  if (imgClassName) {
    imageSizing = `${imageSizing} ${imgClassName}`;
  }

  return (
    <a
      id={elementId}
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A869] rounded-xs transition-opacity hover:opacity-95 ${className}`}
      aria-label={alt}
      title={alt}
    >
      <img
        src={COMPANY_DETAILS.logoUrl}
        alt={alt}
        className={imageSizing}
        decoding="async"
        loading="eager"
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src.includes('/images/aurexon-logo.png')) {
            target.src = COMPANY_DETAILS.logoFallbackUrl;
          }
        }}
      />
    </a>
  );
};
