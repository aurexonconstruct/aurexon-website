import React, { useState } from 'react';
import { ContactCategories } from './ContactCategories';
import { Send, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { Button } from '../common/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    category: 'general-enquiry',
    subject: '',
    message: ''
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
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Enquiry message is required.';
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
    // Phase 6 strict requirement: Do not claim the form sends email or stores submissions if no backend exists.
    // Make the form clearly frontend/future-ready.
    setClientNotice(
      'Your enquiry details have been verified in this client interface. Direct submission will be activated as backend communications are connected. You may also contact our corporate desk directly via aurexonconstructnig.ltd@gmail.com.'
    );
  };

  return (
    <div className="rounded-xl bg-[#0B1528] border border-[#1E293B] p-6 sm:p-8">
      <div className="mb-6">
        <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase block mb-1">
          CORRESPONDENCE DESK
        </span>
        <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
          SEND AN ENQUIRY
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Inquiry Category Select */}
        <ContactCategories
          selectedCategory={formData.category}
          onSelectCategory={(catId) => setFormData({ ...formData, category: catId })}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Full Name */}
          <div>
            <label htmlFor="contact-fullName" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Full Name <span className="text-[#C5A869]">*</span>
            </label>
            <input
              id="contact-fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070E1B] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
                errors.fullName ? 'border-red-500' : 'border-[#1E293B]'
              }`}
              placeholder="e.g. Engr. Mohammed Bello"
            />
            {errors.fullName && (
              <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Email Address <span className="text-[#C5A869]">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070E1B] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {/* Phone Number (Optional) */}
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Phone Number <span className="text-slate-500 text-[10px] normal-case">(optional)</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#070E1B] border border-[#1E293B] text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors"
              placeholder="e.g. +234..."
            />
          </div>

          {/* Organisation / Company (Optional) */}
          <div>
            <label htmlFor="contact-org" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Organisation / Company <span className="text-slate-500 text-[10px] normal-case">(optional)</span>
            </label>
            <input
              id="contact-org"
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#070E1B] border border-[#1E293B] text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors"
              placeholder="e.g. Development Authority / Private Entity"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
            Subject <span className="text-[#C5A869]">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070E1B] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors ${
              errors.subject ? 'border-red-500' : 'border-[#1E293B]'
            }`}
            placeholder="e.g. Structural engineering review for commercial facility"
          />
          {errors.subject && (
            <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
            Message <span className="text-[#C5A869]">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg bg-[#070E1B] border text-sm text-white focus:outline-none focus:border-[#C5A869] transition-colors resize-y ${
              errors.message ? 'border-red-500' : 'border-[#1E293B]'
            }`}
            placeholder="Please describe your enquiry, project scope, location, and key requirements..."
          />
          {errors.message && (
            <span className="text-xs text-red-400 mt-1 block flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </span>
          )}
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
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Button type="submit" variant="primary" className="flex items-center justify-center gap-2">
            SUBMIT ENQUIRY
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
