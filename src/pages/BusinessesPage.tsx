import React, { useEffect } from 'react';
import { BusinessesHero } from '../components/businesses/BusinessesHero.tsx';
import { BusinessOverview } from '../components/businesses/BusinessOverview.tsx';
import { DivisionConstruct } from '../components/businesses/DivisionConstruct.tsx';
import { DivisionEngineering } from '../components/businesses/DivisionEngineering.tsx';
import { DivisionProperties } from '../components/businesses/DivisionProperties.tsx';
import { IntegratedModel } from '../components/businesses/IntegratedModel.tsx';
import { BusinessesCTA } from '../components/businesses/BusinessesCTA.tsx';

interface BusinessesPageProps {
  onNavigate?: (href: string) => void;
}

export const BusinessesPage: React.FC<BusinessesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Our Businesses | AUREXON CONSTRUCTS NIGERIA LIMITED';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore AUREXON CONSTRUCT, AUREXON ENGINEERING, and AUREXON PROPERTIES—three specialized business divisions delivering building construction, civil engineering design, and property development under an integrated operating model.'
      );
    }

    // Check if there is a hash to scroll to
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
    <div className="w-full flex-1" id="businesses-page">
      {/* 1. HERO */}
      <BusinessesHero onNavigate={onNavigate} />

      {/* 2. BUSINESS OVERVIEW */}
      <BusinessOverview />

      {/* 3. AUREXON CONSTRUCT */}
      <DivisionConstruct onNavigate={onNavigate} />

      {/* 4. AUREXON ENGINEERING */}
      <DivisionEngineering onNavigate={onNavigate} />

      {/* 5. AUREXON PROPERTIES */}
      <DivisionProperties onNavigate={onNavigate} />

      {/* 6. INTEGRATED MODEL */}
      <IntegratedModel />

      {/* 7. CLOSING CTA */}
      <BusinessesCTA onNavigate={onNavigate} />
    </div>
  );
};

export default BusinessesPage;
