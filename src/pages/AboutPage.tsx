import React, { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero.tsx';
import { WhoWeAre } from '../components/about/WhoWeAre.tsx';
import { FounderLeadership } from '../components/about/FounderLeadership.tsx';
import { BusinessStructure } from '../components/about/BusinessStructure.tsx';
import { OperatingPrinciples } from '../components/about/OperatingPrinciples.tsx';
import { DevelopmentPhilosophy } from '../components/about/DevelopmentPhilosophy.tsx';
import { AboutProcess } from '../components/about/AboutProcess.tsx';
import { AboutCTA } from '../components/about/AboutCTA.tsx';

interface AboutPageProps {
  onNavigate?: (href: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'About Us | AUREXON CONSTRUCTS NIGERIA LIMITED';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about AUREXON CONSTRUCTS NIGERIA LIMITED, our leadership, business divisions, core principles, and disciplined engineering philosophy: Plan Well. Build Once.'
      );
    }
  }, []);

  return (
    <div className="w-full flex-1" id="about-page">
      {/* 1. ABOUT HERO */}
      <AboutHero onNavigate={onNavigate} />

      {/* 2. WHO WE ARE */}
      <WhoWeAre />

      {/* 3. FOUNDER & LEADERSHIP */}
      <FounderLeadership />

      {/* 4. BUSINESS STRUCTURE */}
      <BusinessStructure onNavigate={onNavigate} />

      {/* 5. OPERATING PRINCIPLES */}
      <OperatingPrinciples />

      {/* 6. PROPERTY DEVELOPMENT PHILOSOPHY */}
      <DevelopmentPhilosophy />

      {/* 7. THE AUREXON PROCESS */}
      <AboutProcess />

      {/* 8. CLOSING CTA */}
      <AboutCTA onNavigate={onNavigate} />
    </div>
  );
};

export default AboutPage;
