import React from 'react';
import { ShieldCheck, MapPin, Mail, FileText, ArrowUpRight } from 'lucide-react';
import { COMPANY_DETAILS, BUSINESS_DIVISIONS } from '../../data/companyData.ts';
import { Logo } from '../common/Logo.tsx';

interface FooterProps {
  onNavigate?: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
    <footer className="bg-[#070E1B] border-t border-slate-800 text-slate-300 relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 bg-grid-blueprint-dense pointer-events-none opacity-40" />

      {/* Top Pre-Footer Bar with Primary Slogan */}
      <div className="border-b border-slate-800/80 relative z-10 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#C5A869] tracking-widest uppercase block mb-1">
              Corporate Motto
            </span>
            <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              “{COMPANY_DETAILS.primarySlogan}”
            </p>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              {COMPANY_DETAILS.supportingPositioning}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#final-cta"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#final-cta');
              }}
              className="px-5 py-2.5 bg-[#C5A869] hover:bg-[#D4AF37] text-[#070E1B] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 rounded-xs"
            >
              <span>Consult Engineering Team</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Founder Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Official Corporate Logo */}
            <Logo
              variant="footer"
              onNavigate={handleNavClick}
            />

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Integrated building construction, civil infrastructure engineering, and disciplined
              property development. Delivering structural excellence and long-term asset value
              across Nigeria.
            </p>

            {/* Founder and Leadership info strictly as specified */}
            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A869] block">
                Leadership
              </span>
              <p className="text-xs font-semibold text-white mt-1">
                {COMPANY_DETAILS.founder.name}
              </p>
              <p className="text-[11px] text-slate-400">
                {COMPANY_DETAILS.founder.role}
              </p>
            </div>
          </div>

          {/* Column 2: Business Divisions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#C5A869]">
              Operating Divisions
            </h3>
            <ul className="space-y-2 text-xs">
              {BUSINESS_DIVISIONS.map((division) => (
                <li key={division.id}>
                  <a
                    href={`/businesses#${division.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`/businesses#${division.id}`);
                    }}
                    className="group block p-2 rounded-xs hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-slate-200 group-hover:text-[#C5A869] font-medium">
                      <span className="font-mono text-[10px] text-[#C5A869]">
                        {division.number}
                      </span>
                      <span>{division.name}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block line-clamp-1 mt-0.5">
                      {division.brandTitle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Site Architecture & Sections (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#C5A869]">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Corporate Overview', href: '/' },
                { name: 'About AUREXON', href: '/about' },
                { name: 'Business Divisions', href: '/businesses' },
                { name: 'Services Directory', href: '/services' },
                { name: 'Projects Registry', href: '/projects' },
                { name: 'Properties Portfolio', href: '/properties' },
                { name: 'Insights Library', href: '/insights' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact AUREXON', href: '/contact' },
                { name: 'Get a Quote', href: '/get-a-quote' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-slate-300 hover:text-white transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate Governance & Verification (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#C5A869]">
              Corporate Status
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-3 bg-[#0B1528] border border-slate-800 rounded-xs space-y-2.5">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      Registration & Status
                    </span>
                    <span className="text-white font-mono text-xs font-semibold">
                      RC {COMPANY_DETAILS.rcNumber}
                    </span>
                    <span className="ml-2 text-[10px] font-mono text-emerald-400 font-medium">
                      [{COMPANY_DETAILS.corporateStatus}]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-800/80">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      Registered Office
                    </span>
                    <span className="text-slate-300 text-[11px] leading-tight block">
                      {COMPANY_DETAILS.registeredOffice.address}
                    </span>
                    <span className="text-slate-400 font-mono text-[10px] block mt-0.5">
                      Post Code: {COMPANY_DETAILS.registeredOffice.postCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-2 border-t border-slate-800/80">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      Corporate Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                      className="text-[#C5A869] hover:underline font-mono text-[11px] block break-all"
                    >
                      {COMPANY_DETAILS.corporateEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Strict Institutional Independence Statement */}
              <div className="p-2.5 bg-amber-950/20 border border-amber-900/30 text-amber-200/80 text-[10px] leading-relaxed rounded-xs">
                <p className="font-semibold text-amber-200 uppercase tracking-wider mb-1">
                  Legal Notice
                </p>
                {COMPANY_DETAILS.legalNotice}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Engineering Discipline</span>
            <span>•</span>
            <span>Structural Longevity</span>
            <span>•</span>
            <span>Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
