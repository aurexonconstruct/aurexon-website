import React, { useEffect } from 'react';
import { PropertyHero } from '../components/properties/PropertyHero.tsx';
import { PropertyIntroduction } from '../components/properties/PropertyIntroduction.tsx';
import { PropertyPhilosophy } from '../components/properties/PropertyPhilosophy.tsx';
import { PropertyCapabilities } from '../components/properties/PropertyCapabilities.tsx';
import { PropertyApproach } from '../components/properties/PropertyApproach.tsx';
import { PropertyEngineeringIntegration } from '../components/properties/PropertyEngineeringIntegration.tsx';
import { PropertyConstructIntegration } from '../components/properties/PropertyConstructIntegration.tsx';
import { PropertyPrinciples } from '../components/properties/PropertyPrinciples.tsx';
import { PropertyOpportunityCategories } from '../components/properties/PropertyOpportunityCategories.tsx';
import { PropertyModel } from '../components/properties/PropertyModel.tsx';
import { PropertyResponsiblePositioning } from '../components/properties/PropertyResponsiblePositioning.tsx';
import { PropertyCTA } from '../components/properties/PropertyCTA.tsx';

interface PropertiesPageProps {
  onNavigate?: (href: string) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'AUREXON PROPERTIES | Property Development & Real Estate Division';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'AUREXON PROPERTIES is the property development division of AUREXON CONSTRUCTS NIGERIA LIMITED, connecting land, planning, design, engineering and construction with long-term property value.'
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
    <div className="w-full flex-1" id="properties-page">
      {/* 1. HERO */}
      <PropertyHero onNavigate={onNavigate} />

      {/* 2. INTRODUCTION */}
      <PropertyIntroduction />

      {/* 3. PROPERTY DEVELOPMENT PHILOSOPHY */}
      <PropertyPhilosophy />

      {/* 4. CORE CAPABILITIES */}
      <PropertyCapabilities />

      {/* 5. DEVELOPMENT APPROACH */}
      <PropertyApproach />

      {/* 6. INTEGRATION WITH AUREXON ENGINEERING */}
      <PropertyEngineeringIntegration onNavigate={onNavigate} />

      {/* 7. INTEGRATION WITH AUREXON CONSTRUCT */}
      <PropertyConstructIntegration onNavigate={onNavigate} />

      {/* 8. PROPERTY DEVELOPMENT PRINCIPLES */}
      <PropertyPrinciples />

      {/* 9. PROPERTY OPPORTUNITY CATEGORIES */}
      <PropertyOpportunityCategories onNavigate={onNavigate} />

      {/* 10. AUREXON PROPERTY MODEL */}
      <PropertyModel />

      {/* 11. RESPONSIBLE PROPERTY POSITIONING */}
      <PropertyResponsiblePositioning />

      {/* 12. CLOSING CTA */}
      <PropertyCTA onNavigate={onNavigate} />
    </div>
  );
};
