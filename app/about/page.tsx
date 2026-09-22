import React from 'react';
import { Header } from '../../src/components/layout/Header.tsx';
import { Footer } from '../../src/components/layout/Footer.tsx';
import { AboutHero } from '../../components/about/AboutHero.tsx';
import { WhoWeAre } from '../../components/about/WhoWeAre.tsx';
import { FounderLeadership } from '../../components/about/FounderLeadership.tsx';
import { BusinessStructure } from '../../components/about/BusinessStructure.tsx';
import { OperatingPrinciples } from '../../components/about/OperatingPrinciples.tsx';
import { DevelopmentPhilosophy } from '../../components/about/DevelopmentPhilosophy.tsx';
import { AboutProcess } from '../../components/about/AboutProcess.tsx';
import { AboutCTA } from '../../components/about/AboutCTA.tsx';

export const metadata = {
  title: 'About Us | AUREXON CONSTRUCTS NIGERIA LIMITED',
  description:
    'Learn about AUREXON CONSTRUCTS NIGERIA LIMITED, our corporate identity, executive leadership under Umar Alhaji Danladi, three core operating divisions, and disciplined engineering philosophy: Plan Well. Build Once.',
  openGraph: {
    title: 'About Us | AUREXON CONSTRUCTS NIGERIA LIMITED',
    description:
      'Official corporate profile, executive leadership, three operating divisions, and engineering delivery framework of AUREXON CONSTRUCTS NIGERIA LIMITED (RC 9729028).',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1528] text-slate-100 selection:bg-[#C5A869]/30 selection:text-[#E8D49E]">
      {/* Existing Global Navbar */}
      <Header />

      {/* Main Content Flow: Strictly the 8 Required Sections */}
      <main className="flex-1 w-full" id="main-content">
        {/* 1. ABOUT HERO */}
        <AboutHero />

        {/* 2. WHO WE ARE */}
        <WhoWeAre />

        {/* 3. FOUNDER & LEADERSHIP */}
        <FounderLeadership />

        {/* 4. BUSINESS STRUCTURE */}
        <BusinessStructure />

        {/* 5. OPERATING PRINCIPLES */}
        <OperatingPrinciples />

        {/* 6. PROPERTY DEVELOPMENT PHILOSOPHY */}
        <DevelopmentPhilosophy />

        {/* 7. THE AUREXON PROCESS */}
        <AboutProcess />

        {/* 8. CLOSING CTA */}
        <AboutCTA />
      </main>

      {/* Existing Global Footer */}
      <Footer />
    </div>
  );
}
