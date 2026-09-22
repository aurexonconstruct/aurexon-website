import React, { useEffect } from 'react';
import { InsightsHero } from '../components/insights/InsightsHero.tsx';
import { InsightsIntro } from '../components/insights/InsightsIntro.tsx';
import { InsightCategories } from '../components/insights/InsightCategories.tsx';
import { InsightsLibrary } from '../components/insights/InsightsLibrary.tsx';
import { KnowledgeApproach } from '../components/insights/KnowledgeApproach.tsx';
import { InsightQualityPrinciples } from '../components/insights/InsightQualityPrinciples.tsx';
import { BuiltEnvironmentKnowledge } from '../components/insights/BuiltEnvironmentKnowledge.tsx';
import { AurexonPerspectives } from '../components/insights/AurexonPerspectives.tsx';
import { PublishingPurpose } from '../components/insights/PublishingPurpose.tsx';
import { InsightsCTA } from '../components/insights/InsightsCTA.tsx';

interface InsightsPageProps {
  onNavigate?: (href: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Ideas, Knowledge & Perspectives | AUREXON INSIGHTS';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore AUREXON Insights: technical perspectives, professional knowledge and practical observations across construction, engineering, project delivery and property development.'
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
    <div className="w-full flex-1" id="insights-page">
      {/* 1. INSIGHTS HERO */}
      <InsightsHero onNavigate={onNavigate} />

      {/* 2. INSIGHTS INTRODUCTION */}
      <InsightsIntro />

      {/* 3. INSIGHT CATEGORIES */}
      <InsightCategories onNavigate={onNavigate} />

      {/* 4. INSIGHTS LIBRARY (DATA-DRIVEN ARCHITECTURE WITH DELIBERATE EMPTY STATE) */}
      <InsightsLibrary onNavigate={onNavigate} />

      {/* 5. KNOWLEDGE APPROACH (OBSERVE → ANALYSE → LEARN → SHARE → APPLY) */}
      <KnowledgeApproach />

      {/* 6. INSIGHT QUALITY PRINCIPLES (6 RESPONSIBLE STANDARDS) */}
      <InsightQualityPrinciples />

      {/* 7. BUILT-ENVIRONMENT KNOWLEDGE */}
      <BuiltEnvironmentKnowledge />

      {/* 8. CORPORATE PERSPECTIVES (FUTURE PERSPECTIVES EXPLORATION) */}
      <AurexonPerspectives />

      {/* 9. INSIGHT GOVERNANCE (PUBLISHING WITH PURPOSE) */}
      <PublishingPurpose />

      {/* 10. CALL TO ACTION */}
      <InsightsCTA onNavigate={onNavigate} />
    </div>
  );
};
