import React, { useEffect } from 'react';
import { X, ChevronRight, Building2, HardHat, Compass } from 'lucide-react';
import { NAVIGATION_ITEMS, COMPANY_DETAILS, BUSINESS_DIVISIONS } from '../../data/companyData.ts';
import { Button } from '../common/Button.tsx';
import { Logo } from '../common/Logo.tsx';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="relative ml-auto w-full max-w-sm bg-[#0B1528] border-l border-slate-800 text-white h-full flex flex-col z-10 shadow-2xl overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800/80 flex items-center justify-between bg-[#070E1B]">
          <Logo
            variant="drawer"
            onNavigate={(href) => {
              onNavigate(href);
              onClose();
            }}
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-sm hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[#C5A869]"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corporate Slogan Banner */}
        <div className="px-5 py-3 bg-[#132B4F]/40 border-b border-slate-800 text-center">
          <p className="text-xs font-semibold tracking-widest text-[#C5A869] uppercase font-display">
            {COMPANY_DETAILS.primarySlogan}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5 tracking-wide">
            {COMPANY_DETAILS.supportingPositioning}
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="p-5 flex-1 space-y-1">
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.name} className="py-1">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.href);
                  onClose();
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-medium text-slate-200 hover:text-[#C5A869] hover:bg-slate-800/40 transition-colors"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>

              {/* Division Sub-links if Businesses */}
              {item.children && (
                <div className="ml-4 pl-3 border-l border-slate-800 space-y-1 mt-1 mb-2">
                  {BUSINESS_DIVISIONS.map((div) => (
                    <a
                      key={div.id}
                      href={`/businesses#${div.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/businesses#${div.id}`);
                        onClose();
                      }}
                      className="block px-2 py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <span className="text-[#C5A869] font-mono text-[10px] mr-1.5">
                        {div.number}
                      </span>
                      {div.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Direct Action Button */}
        <div className="p-5 border-t border-slate-800 space-y-3 bg-[#070E1B]">
          <Button
            variant="primary"
            className="w-full justify-center"
            onClick={() => {
              onNavigate('/get-a-quote');
              onClose();
            }}
          >
            Get a Quote
          </Button>

          {/* Verification / Identification Badge */}
          <div className="pt-2 text-center text-[10px] text-slate-300 font-mono">
            <span>RC: {COMPANY_DETAILS.rcNumber} • {COMPANY_DETAILS.corporateStatus}</span>
            <p className="mt-1 text-slate-400 text-[10px]">
              AUREXON CONSTRUCTS NIGERIA LIMITED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
