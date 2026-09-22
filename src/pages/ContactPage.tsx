import React, { useEffect } from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactInformation } from '../components/contact/ContactInformation';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactGuidance } from '../components/contact/ContactGuidance';
import { ContactCTA } from '../components/contact/ContactCTA';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Contact AUREXON | Construction, Engineering & Property Development';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contact AUREXON CONSTRUCTS NIGERIA LIMITED (RC 9729028) for construction, civil and structural engineering, project management, and property development enquiries.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#070E1B] text-slate-100 min-h-screen">
      <ContactHero onNavigate={onNavigate} />

      <section className="py-16 sm:py-24 bg-[#070E1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Sidebar Column: Corporate Details & Guidance */}
            <div className="lg:col-span-5 space-y-8">
              <ContactInformation />
              <ContactGuidance />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA onNavigate={onNavigate} />
    </div>
  );
};
