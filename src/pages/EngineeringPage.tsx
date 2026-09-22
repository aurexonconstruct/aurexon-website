import React, { useEffect } from 'react';
import { EngineeringHero } from '../components/engineering/EngineeringHero.tsx';
import { EngineeringIntroduction } from '../components/engineering/EngineeringIntroduction.tsx';
import { EngineeringCapabilities } from '../components/engineering/EngineeringCapabilities.tsx';
import { EngineeringApproach } from '../components/engineering/EngineeringApproach.tsx';
import { CivilStructuralSection } from '../components/engineering/CivilStructuralSection.tsx';
import { DesignConsultancySupervision } from '../components/engineering/DesignConsultancySupervision.tsx';
import { EngineeringIntegrations } from '../components/engineering/EngineeringIntegrations.tsx';
import { EngineeringQualityPractice } from '../components/engineering/EngineeringQualityPractice.tsx';
import { EngineeringProjectCategories } from '../components/engineering/EngineeringProjectCategories.tsx';
import { EngineeringIntegratedModel } from '../components/engineering/EngineeringIntegratedModel.tsx';
import { EngineeringCTA } from '../components/engineering/EngineeringCTA.tsx';

interface EngineeringPageProps {
  onNavigate?: (href: string) => void;
}

export const EngineeringPage: React.FC<EngineeringPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'AUREXON ENGINEERING | Civil & Structural Engineering Division';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'AUREXON ENGINEERING is the civil and structural engineering division of AUREXON CONSTRUCTS NIGERIA LIMITED, providing design, consultancy, planning, supervision and project management support.'
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
    <div className="w-full flex-1" id="engineering-page">
      {/* 1. HERO */}
      <EngineeringHero onNavigate={onNavigate} />

      {/* 2. INTRODUCTION */}
      <EngineeringIntroduction />

      {/* 3. CORE ENGINEERING CAPABILITIES */}
      <EngineeringCapabilities />

      {/* 4. ENGINEERING APPROACH */}
      <EngineeringApproach />

      {/* 5. CIVIL & STRUCTURAL ENGINEERING */}
      <CivilStructuralSection />

      {/* 6. DESIGN, CONSULTANCY & SUPERVISION */}
      <DesignConsultancySupervision />

      {/* 7 & 8. INTEGRATION WITH CONSTRUCT & RELATIONSHIP WITH PROPERTIES */}
      <EngineeringIntegrations onNavigate={onNavigate} />

      {/* 9. TECHNICAL QUALITY & RESPONSIBLE PRACTICE */}
      <EngineeringQualityPractice />

      {/* 10. ENGINEERING PROJECT CATEGORIES */}
      <EngineeringProjectCategories />

      {/* 11. AUREXON INTEGRATED MODEL */}
      <EngineeringIntegratedModel />

      {/* 12. CLOSING CTA */}
      <EngineeringCTA onNavigate={onNavigate} />
    </div>
  );
};
