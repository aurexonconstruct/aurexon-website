import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { Hero } from './components/home/Hero.tsx';
import { CorporateIntro } from './components/home/CorporateIntro.tsx';
import { BusinessDivisions } from './components/home/BusinessDivisions.tsx';
import { ExpertiseSection } from './components/home/ExpertiseSection.tsx';
import { ProjectsPreview } from './components/home/ProjectsPreview.tsx';
import { PropertyDevelopmentSection } from './components/home/PropertyDevelopmentSection.tsx';
import { WhyAurexon } from './components/home/WhyAurexon.tsx';
import { AurexonProcess } from './components/home/AurexonProcess.tsx';
import { InsightsPreview } from './components/home/InsightsPreview.tsx';
import { FinalCTA } from './components/home/FinalCTA.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { BusinessesPage } from './pages/BusinessesPage.tsx';
import { ConstructPage } from './pages/ConstructPage.tsx';
import { EngineeringPage } from './pages/EngineeringPage.tsx';
import { PropertiesPage } from './pages/PropertiesPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { ProjectsPage } from './pages/ProjectsPage.tsx';
import { PropertiesDirectoryPage } from './pages/PropertiesDirectoryPage.tsx';
import { InsightsPage } from './pages/InsightsPage.tsx';
import { CareersPage } from './pages/CareersPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { GetAQuotePage } from './pages/GetAQuotePage.tsx';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);

    if (window.location.hash === '#final-cta') {
      setTimeout(() => {
        const element = document.querySelector('#final-cta');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (href: string) => {
    if (href === '/about' || href === 'about') {
      if (window.location.pathname !== '/about') {
        window.history.pushState({}, '', '/about');
        setCurrentPath('/about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/businesses/construct' || href === 'businesses/construct') {
      if (window.location.pathname !== '/businesses/construct') {
        window.history.pushState({}, '', '/businesses/construct');
        setCurrentPath('/businesses/construct');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/businesses/engineering' || href === 'businesses/engineering') {
      if (window.location.pathname !== '/businesses/engineering') {
        window.history.pushState({}, '', '/businesses/engineering');
        setCurrentPath('/businesses/engineering');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/businesses/properties' || href === 'businesses/properties') {
      if (window.location.pathname !== '/businesses/properties') {
        window.history.pushState({}, '', '/businesses/properties');
        setCurrentPath('/businesses/properties');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/services' || href === 'services') {
      if (window.location.pathname !== '/services') {
        window.history.pushState({}, '', '/services');
        setCurrentPath('/services');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/projects' || href === 'projects' || href.startsWith('/projects')) {
      let targetHash = '';
      const basePath = '/projects';
      if (href.includes('#')) {
        targetHash = href.substring(href.indexOf('#'));
      }
      const fullUrl = basePath + targetHash;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(basePath);
      if (targetHash) {
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (
      href === '/properties' ||
      href === 'properties' ||
      (href.startsWith('/properties') && !href.startsWith('/businesses/properties'))
    ) {
      let targetHash = '';
      const basePath = '/properties';
      if (href.includes('#')) {
        targetHash = href.substring(href.indexOf('#'));
      }
      const fullUrl = basePath + targetHash;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(basePath);
      if (targetHash) {
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/insights' || href === 'insights' || href.startsWith('/insights')) {
      let targetHash = '';
      const basePath = '/insights';
      if (href.includes('#')) {
        targetHash = href.substring(href.indexOf('#'));
      }
      const fullUrl = basePath + targetHash;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(basePath);
      if (targetHash) {
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/businesses' || href === 'businesses' || href.startsWith('/businesses')) {
      let targetHash = '';
      const basePath = '/businesses';

      if (href.includes('#')) {
        targetHash = href.substring(href.indexOf('#'));
      }

      const fullUrl = basePath + targetHash;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(basePath);

      if (targetHash) {
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/careers' || href === 'careers' || href.startsWith('/careers')) {
      let targetHash = '';
      const basePath = '/careers';
      if (href.includes('#')) {
        targetHash = href.substring(href.indexOf('#'));
      }
      const fullUrl = basePath + targetHash;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(basePath);
      if (targetHash) {
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/contact' || href === 'contact' || href.startsWith('/contact')) {
      let targetHash = '';
      const basePath = '/contact';
      if (href.includes('#')) {
        targetHash = href.substring(href.indexOf('#'));
      }
      const fullUrl = basePath + targetHash;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(basePath);
      if (targetHash) {
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/get-a-quote' || href === 'get-a-quote' || href.startsWith('/get-a-quote')) {
      let targetHash = '';
      const basePath = '/get-a-quote';
      if (href.includes('#')) {
        targetHash = href.substring(href.indexOf('#'));
      }
      const fullUrl = basePath + targetHash;
      window.history.pushState({}, '', fullUrl);
      setCurrentPath(basePath);
      if (targetHash) {
        setTimeout(() => {
          const element = document.querySelector(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (href === '/' || href === '' || href === '#hero') {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector('#hero');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      return;
    }

    if (href.startsWith('#')) {
      // If currently on /about or /businesses, check if target element exists locally
      const localTarget = document.querySelector(href);
      if (localTarget) {
        localTarget.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // If not present locally, navigate to homepage section
      window.history.pushState({}, '', '/' + href);
      setCurrentPath('/');
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    if (href.startsWith('/')) {
      window.history.pushState({}, '', href);
      setCurrentPath(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isAboutPage = currentPath === '/about';
  const isServicesPage = currentPath === '/services';
  const isProjectsPage = currentPath === '/projects' || currentPath.startsWith('/projects');
  const isPropertiesDirectoryPage =
    currentPath === '/properties' ||
    (currentPath.startsWith('/properties') && !currentPath.startsWith('/businesses/properties'));
  const isInsightsPage = currentPath === '/insights' || currentPath.startsWith('/insights');
  const isCareersPage = currentPath === '/careers' || currentPath.startsWith('/careers');
  const isContactPage = currentPath === '/contact' || currentPath.startsWith('/contact');
  const isGetAQuotePage = currentPath === '/get-a-quote' || currentPath.startsWith('/get-a-quote');
  const isConstructPage = currentPath === '/businesses/construct';
  const isEngineeringPage = currentPath === '/businesses/engineering';
  const isPropertiesPage = currentPath === '/businesses/properties';
  const isBusinessesPage =
    (currentPath === '/businesses' || currentPath.startsWith('/businesses')) &&
    !isConstructPage &&
    !isEngineeringPage &&
    !isPropertiesPage;

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1528] text-slate-100 selection:bg-[#C5A869]/30 selection:text-[#E8D49E]">
      {/* Primary Corporate Header & Navigation */}
      <Header onNavigate={handleNavigate} />

      {/* Main View Flow */}
      {isAboutPage ? (
        <AboutPage onNavigate={handleNavigate} />
      ) : isServicesPage ? (
        <ServicesPage onNavigate={handleNavigate} />
      ) : isProjectsPage ? (
        <ProjectsPage onNavigate={handleNavigate} />
      ) : isPropertiesDirectoryPage ? (
        <PropertiesDirectoryPage onNavigate={handleNavigate} />
      ) : isInsightsPage ? (
        <InsightsPage onNavigate={handleNavigate} />
      ) : isCareersPage ? (
        <CareersPage onNavigate={handleNavigate} />
      ) : isContactPage ? (
        <ContactPage onNavigate={handleNavigate} />
      ) : isGetAQuotePage ? (
        <GetAQuotePage onNavigate={handleNavigate} />
      ) : isConstructPage ? (
        <ConstructPage onNavigate={handleNavigate} />
      ) : isEngineeringPage ? (
        <EngineeringPage onNavigate={handleNavigate} />
      ) : isPropertiesPage ? (
        <PropertiesPage onNavigate={handleNavigate} />
      ) : isBusinessesPage ? (
        <BusinessesPage onNavigate={handleNavigate} />
      ) : (
        /* Main Homepage Flow (Strictly in the required order 1-10) */
        <main className="flex-1 w-full" id="main-content">
          {/* 1. Hero */}
          <Hero onNavigate={handleNavigate} />

          {/* 2. Corporate Introduction */}
          <CorporateIntro />

          {/* 3. Business Divisions */}
          <BusinessDivisions onNavigate={handleNavigate} />

          {/* 4. Expertise */}
          <ExpertiseSection />

          {/* 5. Projects Preview */}
          <ProjectsPreview onNavigate={handleNavigate} />

          {/* 6. Property Development */}
          <PropertyDevelopmentSection />

          {/* 7. Why AUREXON */}
          <WhyAurexon />

          {/* 8. AUREXON Process */}
          <AurexonProcess />

          {/* 9. Insights Preview */}
          <InsightsPreview onNavigate={handleNavigate} />

          {/* 10. Final CTA */}
          <FinalCTA />
        </main>
      )}

      {/* Primary Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}


