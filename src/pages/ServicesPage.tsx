import React, { useEffect } from 'react';
import { ServicesHero } from '../components/services/ServicesHero.tsx';
import { ServicesIntro } from '../components/services/ServicesIntro.tsx';
import { ServicesDirectory } from '../components/services/ServicesDirectory.tsx';
import { ServicesConnection } from '../components/services/ServicesConnection.tsx';
import { ServicesDeliveryApproach } from '../components/services/ServicesDeliveryApproach.tsx';
import { ServicesDivisionPanels } from '../components/services/ServicesDivisionPanels.tsx';
import { ServicesCTA } from '../components/services/ServicesCTA.tsx';

interface ServicesPageProps {
  onNavigate?: (href: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Our Services | AUREXON CONSTRUCTS NIGERIA LIMITED';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Company-wide services directory of AUREXON CONSTRUCTS NIGERIA LIMITED across building construction, civil engineering, structural design, project management, and property development.'
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
    <div className="w-full flex-1" id="services-page">
      {/* 1. PAGE HERO */}
      <ServicesHero onNavigate={onNavigate} />

      {/* 2. SERVICES INTRO */}
      <ServicesIntro />

      {/* 3. SERVICE DIRECTORY */}
      <ServicesDirectory onNavigate={onNavigate} />

      {/* 4. HOW SERVICES CONNECT */}
      <ServicesConnection />

      {/* 5. SERVICE DELIVERY APPROACH */}
      <ServicesDeliveryApproach />

      {/* 6. DIVISION CONNECTION */}
      <ServicesDivisionPanels onNavigate={onNavigate} />

      {/* 7. CTA */}
      <ServicesCTA onNavigate={onNavigate} />
    </div>
  );
};
