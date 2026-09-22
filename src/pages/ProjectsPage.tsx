import React, { useEffect } from 'react';
import { ProjectsHero } from '../components/projects/ProjectsHero.tsx';
import { ProjectsIntro } from '../components/projects/ProjectsIntro.tsx';
import { ProjectCategories } from '../components/projects/ProjectCategories.tsx';
import { ProjectsPortfolio } from '../components/projects/ProjectsPortfolio.tsx';
import { ProjectDeliveryModel } from '../components/projects/ProjectDeliveryModel.tsx';
import { ProjectDivisionPanels } from '../components/projects/ProjectDivisionPanels.tsx';
import { ProjectInformationPrinciples } from '../components/projects/ProjectInformationPrinciples.tsx';
import { ProjectsCTA } from '../components/projects/ProjectsCTA.tsx';

interface ProjectsPageProps {
  onNavigate?: (href: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Projects Directory | AUREXON CONSTRUCTS NIGERIA LIMITED';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore AUREXON CONSTRUCTS NIGERIA LIMITED\'s project portfolio framework across building construction, civil engineering, project management, and property development.'
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
    <div className="w-full flex-1" id="projects-page">
      {/* 1. PROJECTS HERO */}
      <ProjectsHero onNavigate={onNavigate} />

      {/* 2. PROJECTS INTRO */}
      <ProjectsIntro />

      {/* 3. PROJECT CATEGORIES */}
      <ProjectCategories />

      {/* 4. PROJECT PORTFOLIO (With Deliberate Premium Empty State) */}
      <ProjectsPortfolio onNavigate={onNavigate} />

      {/* 5. PROJECT DELIVERY MODEL */}
      <ProjectDeliveryModel />

      {/* 6. INTEGRATED PROJECT CAPABILITIES / DIVISIONS */}
      <ProjectDivisionPanels onNavigate={onNavigate} />

      {/* 7. RESPONSIBLE PROJECT PRESENTATION PRINCIPLES */}
      <ProjectInformationPrinciples />

      {/* 8. PROJECT CTA */}
      <ProjectsCTA onNavigate={onNavigate} />
    </div>
  );
};
