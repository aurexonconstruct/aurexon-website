import React from 'react';
import { Header } from '../../src/components/layout/Header.tsx';
import { Footer } from '../../src/components/layout/Footer.tsx';
import { BusinessesHero } from '../../src/components/businesses/BusinessesHero.tsx';
import { BusinessOverview } from '../../src/components/businesses/BusinessOverview.tsx';
import { DivisionConstruct } from '../../src/components/businesses/DivisionConstruct.tsx';
import { DivisionEngineering } from '../../src/components/businesses/DivisionEngineering.tsx';
import { DivisionProperties } from '../../src/components/businesses/DivisionProperties.tsx';
import { IntegratedModel } from '../../src/components/businesses/IntegratedModel.tsx';
import { BusinessesCTA } from '../../src/components/businesses/BusinessesCTA.tsx';

export const metadata = {
  title: 'Our Businesses | AUREXON CONSTRUCTS NIGERIA LIMITED',
  description:
    'Explore AUREXON CONSTRUCT, AUREXON ENGINEERING, and AUREXON PROPERTIES—three specialized business divisions delivering building construction, civil engineering design, and property development under an integrated operating model.',
  openGraph: {
    title: 'Our Businesses | AUREXON CONSTRUCTS NIGERIA LIMITED',
    description:
      'Explore AUREXON CONSTRUCT, AUREXON ENGINEERING, and AUREXON PROPERTIES—three specialized business divisions delivering building construction, civil engineering design, and property development under an integrated operating model.',
    type: 'website',
  },
};

export default function BusinessesRoutePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1528] text-slate-100 selection:bg-[#C5A869]/30 selection:text-[#E8D49E]">
      <Header />

      <main className="flex-1 w-full" id="main-content">
        <BusinessesHero />
        <BusinessOverview />
        <DivisionConstruct />
        <DivisionEngineering />
        <DivisionProperties />
        <IntegratedModel />
        <BusinessesCTA />
      </main>

      <Footer />
    </div>
  );
}
