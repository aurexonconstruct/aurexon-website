import React from 'react';
import { Header } from '../../../src/components/layout/Header.tsx';
import { Footer } from '../../../src/components/layout/Footer.tsx';
import { ConstructHero } from '../../../src/components/construct/ConstructHero.tsx';
import { ConstructIntroduction } from '../../../src/components/construct/ConstructIntroduction.tsx';
import { ConstructCapabilities } from '../../../src/components/construct/ConstructCapabilities.tsx';
import { ConstructApproach } from '../../../src/components/construct/ConstructApproach.tsx';
import { ConstructIntegrations } from '../../../src/components/construct/ConstructIntegrations.tsx';
import { ConstructQualitySafety } from '../../../src/components/construct/ConstructQualitySafety.tsx';
import { ConstructProjectTypes } from '../../../src/components/construct/ConstructProjectTypes.tsx';
import { ConstructCTA } from '../../../src/components/construct/ConstructCTA.tsx';

export const metadata = {
  title: 'AUREXON CONSTRUCT | Building Construction & Civil Execution',
  description:
    'AUREXON CONSTRUCT is the construction division of AUREXON CONSTRUCTS NIGERIA LIMITED, responsible for building construction, civil works, infrastructure, site development and coordinated construction delivery.',
  openGraph: {
    title: 'AUREXON CONSTRUCT | Building Construction & Civil Execution',
    description:
      'AUREXON CONSTRUCT is the construction division of AUREXON CONSTRUCTS NIGERIA LIMITED, responsible for building construction, civil works, infrastructure, site development and coordinated construction delivery.',
    type: 'website',
  },
};

export default function ConstructRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1528] text-slate-100 selection:bg-[#C5A869]/30 selection:text-[#E8D49E]">
      <Header />

      <main className="flex-1 w-full" id="main-content">
        <ConstructHero />
        <ConstructIntroduction />
        <ConstructCapabilities />
        <ConstructApproach />
        <ConstructIntegrations />
        <ConstructQualitySafety />
        <ConstructProjectTypes />
        <ConstructCTA />
      </main>

      <Footer />
    </div>
  );
}
