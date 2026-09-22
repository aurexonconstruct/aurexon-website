import React, { useEffect } from 'react';
import { PropertiesHero } from '../components/properties/PropertiesHero.tsx';
import { PropertiesIntro } from '../components/properties/PropertiesIntro.tsx';
import { PropertyPhilosophy } from '../components/properties/PropertyPhilosophy.tsx';
import { PropertyCapabilities } from '../components/properties/PropertyCapabilities.tsx';
import { PropertiesPortfolio } from '../components/properties/PropertiesPortfolio.tsx';
import { PropertyCategories } from '../components/properties/PropertyCategories.tsx';
import { PropertyDevelopmentApproach } from '../components/properties/PropertyDevelopmentApproach.tsx';
import { PropertyDivisionPanels } from '../components/properties/PropertyDivisionPanels.tsx';
import { PropertyPrinciples } from '../components/properties/PropertyPrinciples.tsx';
import { ResponsiblePropertyPresentation } from '../components/properties/ResponsiblePropertyPresentation.tsx';
import { PropertyModel } from '../components/properties/PropertyModel.tsx';
import { PropertiesCTA } from '../components/properties/PropertiesCTA.tsx';

interface PropertiesDirectoryPageProps {
  onNavigate?: (href: string) => void;
}

export const PropertiesDirectoryPage: React.FC<PropertiesDirectoryPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Properties & Development Framework | AUREXON PROPERTIES';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore AUREXON PROPERTIES disciplined property development, real estate investment and land-to-property opportunities through structured planning, design, engineering and construction.'
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
    <div className="w-full flex-1" id="properties-directory-page">
      {/* 1. PROPERTIES HERO */}
      <PropertiesHero onNavigate={onNavigate} />

      {/* 2. INTRODUCTION */}
      <PropertiesIntro />

      {/* 3. PROPERTY DEVELOPMENT PHILOSOPHY */}
      <PropertyPhilosophy />

      {/* 4. PROPERTY CAPABILITIES */}
      <PropertyCapabilities />

      {/* 5. PROPERTY OPPORTUNITIES (PORTFOLIO & VERIFIED EMPTY STATE) */}
      <PropertiesPortfolio onNavigate={onNavigate} />

      {/* 6. PROPERTY CATEGORIES */}
      <PropertyCategories onNavigate={onNavigate} />

      {/* 7. DEVELOPMENT APPROACH */}
      <PropertyDevelopmentApproach />

      {/* 8. INTEGRATED PROPERTY CAPABILITIES (DIVISION PANELS) */}
      <PropertyDivisionPanels onNavigate={onNavigate} />

      {/* 9. PROPERTY DEVELOPMENT PRINCIPLES */}
      <PropertyPrinciples />

      {/* 10. RESPONSIBLE PROPERTY PRESENTATION */}
      <ResponsiblePropertyPresentation />

      {/* 11. PROPERTY MODEL */}
      <PropertyModel />

      {/* 12. PROPERTY CONSULTATION (CTA) */}
      <PropertiesCTA onNavigate={onNavigate} />
    </div>
  );
};
