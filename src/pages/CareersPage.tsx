import React, { useEffect } from 'react';
import { CareersHero } from '../components/careers/CareersHero';
import { CareersIntro } from '../components/careers/CareersIntro';
import { CareerAreas } from '../components/careers/CareerAreas';
import { ProfessionalDevelopment } from '../components/careers/ProfessionalDevelopment';
import { CareersOpportunities } from '../components/careers/CareersOpportunities';
import { CareersCTA } from '../components/careers/CareersCTA';

interface CareersPageProps {
  onNavigate: (path: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Careers | AUREXON';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Learn about professional disciplines, career pathways and prospective opportunities within AUREXON across construction, engineering and project management.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#070E1B] text-slate-100 min-h-screen">
      <CareersHero onNavigate={onNavigate} />
      <CareersIntro />
      <CareerAreas />
      <ProfessionalDevelopment />
      <CareersOpportunities />
      <CareersCTA onNavigate={onNavigate} />
    </div>
  );
};
