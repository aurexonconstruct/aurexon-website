import React from 'react';
import {
  FileText,
  ShieldCheck,
  Lock,
  Layers,
  CheckCircle2,
  FolderGit2,
  FileCheck
} from 'lucide-react';
import {
  QUOTE_SUPPORTED_DOCUMENT_TYPES,
  QUOTE_SUPPORTED_SERVICES,
  CLIENT_DOCUMENT_NOTICE,
  COMMERCIAL_DISCLAIMER_TEXT
} from '../../data/quoteData';

export const QuoteGuidance: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Visual Section: PROJECT DOCUMENTS (Future-Ready Client Project Document Interface) */}
      <div className="rounded-xl bg-[#0B1528] border border-[#1E293B] p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#C5A869]" />
            CLIENT TECHNICAL DATA
          </span>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-widest bg-[#070E1B] border border-[#C5A869]/30 text-[#C5A869] uppercase">
            FUTURE-READY WORKFLOW
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-3">
          PROJECT DOCUMENTS
        </h3>

        {/* Primary Clear Labelled Notice */}
        <div className="p-4 rounded-lg bg-[#070E1B] border border-[#C5A869]/40 mb-6">
          <p className="text-sm text-slate-200 font-sans font-medium leading-relaxed mb-2">
            &ldquo;{CLIENT_DOCUMENT_NOTICE}&rdquo;
          </p>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            During preliminary enquiry review, prospective technical documentation may be coordinated directly with our engineering and project teams. In a future phase, this area will integrate with our authenticated client-document submission system.
          </p>
        </div>

        {/* Supporting project documents list */}
        <div className="mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#C5A869]" />
            Supporting Project Documents May Include:
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {QUOTE_SUPPORTED_DOCUMENT_TYPES.map((doc, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-[#070E1B]/70 border border-[#1E293B] flex items-start gap-2.5 text-xs text-slate-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Supported by Future Document Capability */}
        <div className="mb-6 pt-5 border-t border-[#1E293B]">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#C5A869]" />
            Services Supported by Technical Review:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {QUOTE_SUPPORTED_SERVICES.map((service, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#070E1B] border border-[#1E293B] text-[11px] text-slate-300 font-sans"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* IMPORTANT PRIVACY PRINCIPLE */}
        <div className="p-4 rounded-lg bg-[#070E1B] border border-[#1E293B] space-y-2.5">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#C5A869]" />
            <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase font-medium">
              PRIVACY PRINCIPLE & ARCHITECTURAL ISOLATION
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            <strong className="text-white">Client-submitted project documents are PRIVATE PROJECT INFORMATION.</strong> They remain strictly isolated from public project photographs, property listings, public galleries, architectural renders, published insights, and promotional portfolio content.
          </p>
          <div className="pt-2 border-t border-[#1E293B]/80 text-[11px] text-slate-400 font-sans leading-relaxed">
            A client drawing, BOQ, specification, survey or technical file will never automatically become public website content. Future implementations will enforce authenticated access controls, secure storage, virus scanning, versioning, and internal project workflow isolation.
          </div>
        </div>
      </div>

      {/* Commercial Integrity Notice */}
      <div className="rounded-xl bg-[#0B1528] border border-[#1E293B] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
          <span className="text-xs font-mono tracking-widest text-[#C5A869] uppercase">
            COMMERCIAL INTEGRITY NOTICE
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {COMMERCIAL_DISCLAIMER_TEXT}
        </p>
        <div className="mt-4 pt-3 border-t border-[#1E293B] text-[11px] font-mono text-slate-400">
          AUREXON CONSTRUCTS NIGERIA LIMITED • RC 9729028
        </div>
      </div>
    </div>
  );
};
