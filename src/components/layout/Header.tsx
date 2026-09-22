import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { NAVIGATION_ITEMS, COMPANY_DETAILS, BUSINESS_DIVISIONS } from '../../data/companyData.ts';
import { Button } from '../common/Button.tsx';
import { Logo } from '../common/Logo.tsx';
import { MobileMenu } from './MobileMenu.tsx';

interface HeaderProps {
  onNavigate?: (href: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else {
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        {/* Top Technical & Regulatory Bar */}
        <div className="bg-[#070E1B] border-b border-slate-800/80 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 font-mono">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A869]" />
                <span className="tracking-wide">{COMPANY_DETAILS.legalName}</span>
              </span>
              <span className="hidden md:inline text-slate-500">•</span>
              <span className="hidden md:inline text-slate-400">
                RC: {COMPANY_DETAILS.rcNumber}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] sm:text-[11px]">
              <span className="text-[#C5A869] font-medium tracking-wider uppercase">
                {COMPANY_DETAILS.primarySlogan}
              </span>
              <span className="hidden lg:inline text-slate-500">•</span>
              <span className="hidden lg:inline text-slate-400">
                Independent Construction & Development
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#0B1528]/95 backdrop-blur-md shadow-xl border-b border-slate-800/80 py-3'
              : 'bg-[#0B1528]/80 backdrop-blur-xs border-b border-slate-800/40 py-4 sm:py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            {/* Official Corporate Logo */}
            <Logo
              variant="header"
              isScrolled={isScrolled}
              onNavigate={handleNavClick}
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {NAVIGATION_ITEMS.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setBusinessDropdownOpen(true)}
                      onMouseLeave={() => setBusinessDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.href)}
                        className="flex items-center gap-1 px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#C5A869] transition-colors uppercase tracking-wider focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A869]"
                        aria-expanded={businessDropdownOpen}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            businessDropdownOpen ? 'rotate-180 text-[#C5A869]' : 'text-slate-400'
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {businessDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-[#0B1528] border border-slate-800 shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150 rounded-xs">
                          <div className="px-2 py-1.5 mb-1 border-b border-slate-800 text-[10px] font-mono uppercase tracking-widest text-[#C5A869]">
                            Operating Divisions
                          </div>
                          {BUSINESS_DIVISIONS.map((division) => (
                            <a
                              key={division.id}
                              href={`/businesses#${division.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(`/businesses#${division.id}`);
                                setBusinessDropdownOpen(false);
                              }}
                              className="block p-2.5 rounded-xs hover:bg-[#132B4F]/50 transition-colors group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-display text-xs font-semibold text-white group-hover:text-[#C5A869]">
                                  {division.name}
                                </span>
                                <span className="text-[10px] font-mono text-[#C5A869]">
                                  {division.number}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                                {division.brandTitle}
                              </p>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-[#C5A869] transition-colors uppercase tracking-wider focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A869]"
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
                onClick={() => handleNavClick('/get-a-quote')}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get a Quote
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xs focus:outline-none focus:ring-2 focus:ring-[#C5A869]"
                aria-label="Open mobile navigation"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={handleNavClick}
      />
    </>
  );
};
