import React, { useState } from 'react';
import { COMPANY_DETAILS, BUSINESS_DIVISIONS } from '../../data/companyData.ts';
import { SectionHeading } from '../common/SectionHeading.tsx';
import { Button } from '../common/Button.tsx';
import {
  ShieldCheck,
  Send,
  Building,
  HardHat,
  Compass,
  CheckCircle,
  MapPin,
  Mail,
  Phone,
  Clock,
  FileCheck,
  Loader2,
  AlertCircle,
} from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpnppyd';

export const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    divisionInterest: 'AUREXON CONSTRUCT',
    estimatedTimeline: 'Immediate (1-3 months)',
    projectScope: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [referenceProtocol, setReferenceProtocol] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          fullName: formData.fullName,
          email: formData.email,
          _replyto: formData.email,
          phone: formData.phone,
          organization: formData.organization || 'Individual / Private Client',
          division: formData.divisionInterest,
          timeline: formData.estimatedTimeline,
          message: formData.projectScope,
          projectScope: formData.projectScope,
          _subject: `New Project Inquiry: [${formData.divisionInterest}] from ${formData.fullName}`,
        }),
      });

      if (response.ok) {
        const ref = `AUR-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
        setReferenceProtocol(ref);
        setFormSubmitted(true);
        setIsSubmitting(false);
      } else {
        const data = await response.json().catch(() => null);
        let errorMsg = 'Unable to send inquiry through the automated gateway.';
        if (data && data.errors && data.errors.length > 0) {
          errorMsg = data.errors.map((err: { message?: string }) => err.message || 'Validation error').join(', ');
        }
        setSubmitError(errorMsg);
        setIsSubmitting(false);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Network error occurred while submitting.';
      setSubmitError(message);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      divisionInterest: 'AUREXON CONSTRUCT',
      estimatedTimeline: 'Immediate (1-3 months)',
      projectScope: '',
    });
    setFormSubmitted(false);
    setSubmitError(null);
    setReferenceProtocol('');
  };

  return (
    <section id="final-cta" className="py-20 sm:py-28 bg-[#0B1528] relative overflow-hidden">
      {/* Background blueprint pattern */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          badge="CONTACT & CONSULTATION"
          title="Initiate Project Discussion"
          subtitle="Engage with our team regarding building construction, civil engineering consultancy, or property development initiatives across Nigeria."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Direct Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E1E38] border border-slate-800 rounded-xs p-6 sm:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                  Project Consultation & Technical Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Direct submission for executive project and engineering review
                </p>
              </div>
              <span className="font-mono text-[10px] bg-[#132B4F] text-[#C5A869] px-2.5 py-1 rounded-xs border border-slate-700">
                PROJECT INQUIRY
              </span>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#070E1B] border border-[#C5A869]/50 rounded-xs text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#C5A869]/10 border border-[#C5A869] flex items-center justify-center mx-auto text-[#C5A869]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-white">
                  Technical Inquiry Transmitted Successfully
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting {COMPANY_DETAILS.legalName}. Your briefing has
                  been dispatched directly to our technical desk for <strong className="text-white">{formData.divisionInterest}</strong>.
                </p>
                <div className="p-3.5 bg-[#0E1E38] border border-slate-800 rounded-xs text-[11px] font-mono text-slate-300 space-y-1 text-left max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Reference Protocol:</span>
                    <span className="text-[#C5A869] font-bold">{referenceProtocol}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">Contact Email:</span>
                    <span className="text-white">{formData.email}</span>
                  </div>
                  {formData.phone && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact Phone:</span>
                      <span className="text-white">{formData.phone}</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-[#C5A869] font-mono">
                  Our team will review your specifications and respond swiftly to your email.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
                  className="mt-2"
                >
                  Submit Another Brief
                </Button>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
              >
                {submitError && (
                  <div className="p-3.5 bg-rose-950/40 border border-rose-800/80 rounded-xs text-xs text-rose-200 flex items-start gap-2.5 animate-in fade-in duration-200">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{submitError}</p>
                      <p className="mt-1 text-[11px] text-rose-300/80">
                        You can also email your brief directly to{' '}
                        <a
                          href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                          className="underline hover:text-white font-mono"
                        >
                          {COMPANY_DETAILS.corporateEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Engr. B. Adeleke / Alh. M. Ibrahim"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full bg-[#070E1B] border border-slate-800 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A869] placeholder:text-slate-600 font-sans disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Private, Institutional, or Corporate"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full bg-[#070E1B] border border-slate-800 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A869] placeholder:text-slate-600 font-sans disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Corporate Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="official@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full bg-[#070E1B] border border-slate-800 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A869] placeholder:text-slate-600 font-sans disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Phone / WhatsApp Contact *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+234 800 000 0000 / WhatsApp"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full bg-[#070E1B] border border-slate-800 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A869] placeholder:text-slate-600 font-sans disabled:opacity-60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Primary Division of Interest *
                    </label>
                    <select
                      name="divisionInterest"
                      value={formData.divisionInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, divisionInterest: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full bg-[#070E1B] border border-slate-800 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A869] font-sans disabled:opacity-60"
                    >
                      <option value="AUREXON CONSTRUCT">
                        AUREXON CONSTRUCT (Building & Civil Works)
                      </option>
                      <option value="AUREXON ENGINEERING">
                        AUREXON ENGINEERING (Structural & Civil Design)
                      </option>
                      <option value="AUREXON PROPERTIES">
                        AUREXON PROPERTIES (Real Estate Development)
                      </option>
                      <option value="INTEGRATED MULTI-DIVISION">
                        INTEGRATED MULTI-DIVISION (Full Turnkey)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Target Project Timeline
                    </label>
                    <select
                      name="estimatedTimeline"
                      value={formData.estimatedTimeline}
                      onChange={(e) =>
                        setFormData({ ...formData, estimatedTimeline: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="w-full bg-[#070E1B] border border-slate-800 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A869] font-sans disabled:opacity-60"
                    >
                      <option value="Immediate (1-3 months)">
                        Immediate (1-3 months)
                      </option>
                      <option value="Medium Term (3-6 months)">
                        Medium Term (3-6 months)
                      </option>
                      <option value="Long Term (6-12 months)">
                        Long Term (6-12 months)
                      </option>
                      <option value="Conceptual / Planning Stage">
                        Conceptual / Planning Stage
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Project Scope & Engineering Requirements *
                  </label>
                  <textarea
                    rows={4}
                    name="projectScope"
                    required
                    placeholder="Briefly detail project location, scope (e.g. road drainage, structural audit, multi-floor construction, or land masterplanning), and target objectives..."
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    disabled={isSubmitting}
                    className="w-full bg-[#070E1B] border border-slate-800 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A869] placeholder:text-slate-600 font-sans disabled:opacity-60"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-400 font-mono">
                    All project inquiries are handled with professional discretion and care.
                  </span>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[200px]"
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#0B1528]" />
                      ) : (
                        <Send className="w-3.5 h-3.5" />
                      )
                    }
                  >
                    {isSubmitting ? 'Transmitting Brief...' : 'Submit Technical Inquiry'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Institutional Contact Details & Verification (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#070E1B] border border-slate-800 rounded-xs p-6 sm:p-8 space-y-5">
              <h4 className="font-display text-base font-bold uppercase tracking-wider text-[#C5A869]">
                Corporate Channels
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-1" />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                      Registered Office
                    </span>
                    <span className="text-slate-200 block mt-0.5 leading-snug">
                      {COMPANY_DETAILS.registeredOffice.address}
                    </span>
                    <span className="text-slate-400 text-xs font-mono block mt-0.5">
                      Post Code: {COMPANY_DETAILS.registeredOffice.postCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C5A869] shrink-0 mt-1" />
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">
                      Corporate Correspondence & Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.corporateEmail}`}
                      className="text-[#C5A869] hover:underline font-mono block mt-0.5 text-xs sm:text-sm break-all font-medium"
                    >
                      {COMPANY_DETAILS.corporateEmail}
                    </a>
                    <span className="text-slate-400 text-[11px] block mt-1">
                      Official corporate channel for proposals, technical submissions, and project inquiries.
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Governance Endorsement */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[10px] font-mono text-[#C5A869] uppercase tracking-widest block mb-1">
                  Corporate Philosophy
                </span>
                <p className="text-xs text-slate-300 italic">
                  “Our approach is grounded in disciplined upfront planning and sound engineering practice. Plan Well. Build Once.”
                </p>
                <p className="text-xs font-semibold text-white mt-2">
                  — {COMPANY_DETAILS.founder.name}
                </p>
                <p className="text-[10px] font-mono text-slate-400">
                  {COMPANY_DETAILS.founder.role}
                </p>
              </div>
            </div>

            {/* Regulatory Notice Card */}
            <div className="p-4 bg-[#0E1E38] border border-slate-800 rounded-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
                <FileCheck className="w-4 h-4 text-[#C5A869]" />
                <span>Corporate Registration Details</span>
              </div>
              <div className="text-xs text-slate-300 font-mono space-y-1">
                <p>RC: <span className="text-white font-semibold">{COMPANY_DETAILS.rcNumber}</span></p>
                <p>Status: <span className="text-emerald-400 font-semibold">{COMPANY_DETAILS.corporateStatus}</span></p>
                <p className="text-[11px] text-slate-400">{COMPANY_DETAILS.companyType} • Inc. {COMPANY_DETAILS.dateOfIncorporation}</p>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed pt-1 border-t border-slate-800">
                {COMPANY_DETAILS.legalNotice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
