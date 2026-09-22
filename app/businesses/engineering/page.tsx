import React from 'react';
import { Header } from '../../../src/components/layout/Header.tsx';
import { Footer } from '../../../src/components/layout/Footer.tsx';
import { EngineeringHero } from '../../../src/components/engineering/EngineeringHero.tsx';
import { EngineeringIntroduction } from '../../../src/components/engineering/EngineeringIntroduction.tsx';
import { EngineeringCapabilities } from '../../../src/components/engineering/EngineeringCapabilities.tsx';
import { EngineeringApproach } from '../../../src/components/engineering/EngineeringApproach.tsx';
import { CivilStructuralSection } from '../../../src/components/engineering/CivilStructuralSection.tsx';
import { DesignConsultancySupervision } from '../../../src/components/engineering/DesignConsultancySupervision.tsx';
import { EngineeringIntegrations } from '../../../src/components/engineering/EngineeringIntegrations.tsx';
import { EngineeringQualityPractice } from '../../../src/components/engineering/EngineeringQualityPractice.tsx';
import { EngineeringProjectCategories } from '../../../src/components/engineering/EngineeringProjectCategories.tsx';
import { EngineeringIntegratedModel } from '../../../src/components/engineering/EngineeringIntegratedModel.tsx';
import { EngineeringCTA } from '../../../src/components/engineering/EngineeringCTA.tsx';

export const metadata = {
  title: 'AUREXON ENGINEERING | Civil & Structural Engineering Division',
  description:
    'AUREXON ENGINEERING is the civil and structural engineering division of AUREXON CONSTRUCTS NIGERIA LIMITED, providing design, consultancy, planning, supervision and project management support.',
  openGraph: {
    title: 'AUREXON ENGINEERING | Civil & Structural Engineering Division',
    description:
      'AUREXON ENGINEERING is the civil and structural engineering division of AUREXON CONSTRUCTS NIGERIA LIMITED, providing design, consultancy, planning, supervision and project management support.',
    type: 'website',
  },
};

export default function EngineeringRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1528] text-slate-100 selection:bg-[#C5A869]/30 selection:text-[#E8D49E]">
      <Header />

      <main className="flex-1 w-full" id="main-content">
        <EngineeringHero />
        <EngineeringIntroduction />
        <EngineeringCapabilities />
        <EngineeringApproach />
        <CivilStructuralSection />
        <DesignConsultancySupervision />
        <EngineeringIntegrations />
        <EngineeringQualityPractice />
        <EngineeringProjectCategories />
        <EngineeringIntegratedModel />
        <EngineeringCTA />
      </main>

      <Footer />
    </div>
  );
}
