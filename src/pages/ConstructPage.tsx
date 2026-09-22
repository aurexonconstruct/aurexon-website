import React, { useEffect } from 'react';
import { ConstructHero } from '../components/construct/ConstructHero.tsx';
import { ConstructIntroduction } from '../components/construct/ConstructIntroduction.tsx';
import { ConstructCapabilities } from '../components/construct/ConstructCapabilities.tsx';
import { ConstructApproach } from '../components/construct/ConstructApproach.tsx';
import { ConstructIntegrations } from '../components/construct/ConstructIntegrations.tsx';
import { ConstructQualitySafety } from '../components/construct/ConstructQualitySafety.tsx';
import { ConstructProjectTypes } from '../components/construct/ConstructProjectTypes.tsx';
import { ConstructCTA } from '../components/construct/ConstructCTA.tsx';

interface ConstructPageProps {
  onNavigate?: (href: string) => void;
}

export const ConstructPage: React.FC<ConstructPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'AUREXON CONSTRUCT | Building Construction & Civil Execution';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'AUREXON CONSTRUCT is the construction division of AUREXON CONSTRUCTS NIGERIA LIMITED, responsible for building construction, civil works, infrastructure, site development and coordinated construction delivery.'
      );
    }

    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="w-full flex-1" id="construct-page">
      {/* 1. HERO */}
      <ConstructHero onNavigate={onNavigate} />

      {/* 2. INTRODUCTION */}
      <ConstructIntroduction />

      {/* 3. CORE CAPABILITIES */}
      <ConstructCapabilities />

      {/* 4. OUR CONSTRUCTION APPROACH */}
      <ConstructApproach />

      {/* 5 & 6. INTEGRATION WITH ENGINEERING & PROPERTIES */}
      <ConstructIntegrations onNavigate={onNavigate} />

      {/* 7. QUALITY, SAFETY & RESPONSIBLE DELIVERY */}
      <ConstructQualitySafety />

      {/* 8. PROJECT TYPES */}
      <ConstructProjectTypes onNavigate={onNavigate} />

      {/* 9. FINAL CTA */}
      <ConstructCTA onNavigate={onNavigate} />
    </div>
  );
};
