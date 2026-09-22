import React, { useEffect } from 'react';
import { QuoteHero } from '../components/quote/QuoteHero';
import { QuoteForm } from '../components/quote/QuoteForm';
import { QuoteGuidance } from '../components/quote/QuoteGuidance';
import { QuoteCTA } from '../components/quote/QuoteCTA';

interface GetAQuotePageProps {
  onNavigate: (path: string) => void;
}

export const GetAQuotePage: React.FC<GetAQuotePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = 'Get a Quote | AUREXON';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Request a structured project quotation from AUREXON for building construction, civil engineering, project management, and property development.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#070E1B] text-slate-100 min-h-screen">
      <QuoteHero />

      <section className="py-16 sm:py-24 bg-[#070E1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>

            {/* Sidebar Column: Guidance & Document Handling */}
            <div className="lg:col-span-5">
              <QuoteGuidance />
            </div>
          </div>
        </div>
      </section>

      <QuoteCTA onNavigate={onNavigate} />
    </div>
  );
};
