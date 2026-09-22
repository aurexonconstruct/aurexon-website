import React, { useState } from 'react';
import { QuoteProjectTypes } from './QuoteProjectTypes';
import { QUOTE_PROJECT_STAGES, COMMERCIAL_DISCLAIMER_TEXT, CLIENT_DOCUMENT_NOTICE } from '../../data/quoteData';
import { Send, AlertCircle, Info, Lock } from 'lucide-react';
import { Button } from '../common/Button';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    projectName: '',
    projectLocation: '',
    projectType: 'building-construction',
    requiredService: '',
    projectDescription: '',
    projectStage: 'concept',
    timeline: '',
    projectScope: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [clientNotice, setClientNotice] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.projectName.trim()) newErrors.projectName = 'Project Name / Identifier is required.';
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Project Location is required.';
    if (!formData.requiredService.trim()) newErrors.requiredService = 'Please specify the required service.';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setClientNotice(null);
      return;
    }

    setErrors({});
    // Phase 6 strict requirement: Do not display "Your quote has been submitted" unless an actual submission mechanism exists.
    setClientNotice(
      'Your project brief has been verified in this client interface. Direct submission will be activated as backend communications are connected. You may also forward detailed project briefs directly to aurexonconstructnig.ltd@gmail.com.'
    );
  };

  return (
    <div className="rounded-xl bg-[#0B1528] border border-[#1E293B] p-6 sm:p-8">
      <div className="mb-6">
        <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-1">
          PROJECT SCOPE DEFINITION
        </span>
        <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
          REQUEST A PROJECT QUOTATION
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Project Type Select */}
        <QuoteProjectTypes
          selectedType={formData.projectType}
          onSelectType={(typeId) => setFormData({ ...formData, projectType: typeId })}
        />

        {/* Contact Details Group */}
        <div className="p-4 rounded-lg bg-[#070E1B] border border-[#1E293B] mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#C5A869] block mb-3">
            1. Client / Contact Information
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="quote-fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name <span className="text-[#C5A869]">*</span>
              </label>
              <input
                id="quote-fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-[#1E293B]'
                }`}
                placeholder="e.g. Arc. Ibrahim Danladi"
              />
              {errors.fullName && (
                <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="quote-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address <span className="text-[#C5A869]">*</span>
              </label>
              <input
                id="quote-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#1E293B]'
                }`}
                placeholder="e.g. name@organisation.com"
              />
              {errors.email && (
                <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="quote-phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number <span className="text-[#C5A869]">*</span>
              </label>
              <input
                id="quote-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-[#1E293B]'
                }`}
                placeholder="e.g. +234..."
              />
              {errors.phone && (
                <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="quote-org" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Organisation / Company <span className="text-slate-500 text-[10px] normal-case">(optional)</span>
              </label>
              <input
                id="quote-org"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border border-[#1E293B] text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors"
                placeholder="e.g. Commercial Enterprise / Private Client"
              />
            </div>
          </div>
        </div>

        {/* Project Details Group */}
        <div className="p-4 rounded-lg bg-[#070E1B] border border-[#1E293B] mb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#C5A869] block mb-3">
            2. Project Parameters
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="quote-projName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Project Name / Reference <span className="text-[#C5A869]">*</span>
              </label>
              <input
                id="quote-projName"
                type="text"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
                  errors.projectName ? 'border-red-500' : 'border-[#1E293B]'
                }`}
                placeholder="e.g. Commercial Plaza Development"
              />
              {errors.projectName && (
                <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.projectName}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="quote-location" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Project Location <span className="text-[#C5A869]">*</span>
              </label>
              <input
                id="quote-location"
                type="text"
                value={formData.projectLocation}
                onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
                  errors.projectLocation ? 'border-red-500' : 'border-[#1E293B]'
                }`}
                placeholder="e.g. Abuja / Potiskum / Kano / Lagos"
              />
              {errors.projectLocation && (
                <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.projectLocation}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="quote-reqService" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Required Service <span className="text-[#C5A869]">*</span>
              </label>
              <input
                id="quote-reqService"
                type="text"
                value={formData.requiredService}
                onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
                  errors.requiredService ? 'border-red-500' : 'border-[#1E293B]'
                }`}
                placeholder="e.g. Structural Engineering Detailing / Main Contractor"
              />
              {errors.requiredService && (
                <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.requiredService}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="quote-stage" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Current Project Stage <span className="text-[#C5A869]">*</span>
              </label>
              <select
                id="quote-stage"
                value={formData.projectStage}
                onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border border-[#1E293B] text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors"
              >
                {QUOTE_PROJECT_STAGES.map((st) => (
                  <option key={st.id} value={st.id} className="bg-[#0B1528] text-white">
                    {st.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="quote-timeline" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Expected / Target Timeline <span className="text-slate-500 text-[10px] normal-case">(optional)</span>
              </label>
              <input
                id="quote-timeline"
                type="text"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border border-[#1E293B] text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors"
                placeholder="e.g. Q3 2026 / 12 Months execution"
              />
            </div>

            <div>
              <label htmlFor="quote-scope" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Approximate Scope / Size <span className="text-slate-500 text-[10px] normal-case">(optional)</span>
              </label>
              <input
                id="quote-scope"
                type="text"
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border border-[#1E293B] text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors"
                placeholder="e.g. 4 floors, ~1,800 sqm GFA"
              />
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <label htmlFor="quote-desc" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Project Description & Requirements <span className="text-[#C5A869]">*</span>
            </label>
            <textarea
              id="quote-desc"
              rows={4}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors resize-y ${
                errors.projectDescription ? 'border-red-500' : 'border-[#1E293B]'
              }`}
              placeholder="Outline project objectives, site condition, known constraints, structural framework preferences, or specific deliverables..."
            />
            {errors.projectDescription && (
              <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.projectDescription}
              </span>
            )}
          </div>

          {/* Additional Information */}
          <div>
            <label htmlFor="quote-addInfo" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Additional Information <span className="text-slate-500 text-[10px] normal-case">(optional)</span>
            </label>
            <textarea
              id="quote-addInfo"
              rows={2}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B1528] border border-[#1E293B] text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors resize-y"
              placeholder="Any other relevant details or stakeholder requirements..."
            />
          </div>
        </div>

        {/* Future-Ready Supporting Document Notice Area */}
        <div className="mb-6 p-4 rounded-lg bg-[#070E1B] border border-[#1E293B] space-y-2">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#C5A869]" />
            <span className="font-mono text-xs text-[#C5A869] uppercase tracking-wider">
              Project Documents Notice
            </span>
          </div>
          <p className="text-xs text-slate-300 font-sans leading-relaxed">
            &ldquo;{CLIENT_DOCUMENT_NOTICE}&rdquo;
          </p>
          <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
            Client-submitted project drawings, BOQs, specifications, and surveys are private project information and are strictly isolated from public website content.
          </p>
        </div>

        {/* Client Notice */}
        {clientNotice && (
          <div className="mb-6 p-4 rounded-lg bg-[#070E1B] border border-[#C5A869]/40 text-xs text-slate-300 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-[#C5A869] uppercase block mb-1">
                Client Interface Notice
              </span>
              <p className="leading-relaxed">{clientNotice}</p>
            </div>
          </div>
        )}

        {/* Submit Action */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          <Button type="submit" variant="primary" className="flex items-center justify-center gap-2">
            SUBMIT PROJECT BRIEF
            <Send className="w-4 h-4" />
          </Button>

          <span className="text-xs font-mono text-slate-400">
            AUREXON CONSTRUCTS NIGERIA LIMITED • RC 9729028
          </span>
        </div>
      </form>
    </div>
  );
};
