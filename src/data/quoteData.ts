import { QuoteProjectTypeItem, QuoteProjectStageItem } from '../types';

/**
 * AUREXON QUOTE DATA REPOSITORY
 * Phase 6 Implementation
 *
 * Strict Compliance:
 * - NOT a price calculator.
 * - NO invented rates, cost estimates, or turnaround guarantees.
 * - Clear disclaimer regarding commercial reviews and client information privacy.
 */

export const QUOTE_PROJECT_TYPES: QuoteProjectTypeItem[] = [
  { id: 'building-construction', name: 'Building Construction', category: 'Construction' },
  { id: 'civil-works', name: 'Civil Works & Infrastructure', category: 'Construction' },
  { id: 'civil-structural-eng', name: 'Civil & Structural Engineering', category: 'Engineering' },
  { id: 'eng-design-consultancy', name: 'Engineering Design & Consultancy', category: 'Engineering' },
  { id: 'project-management', name: 'Project Management', category: 'Management' },
  { id: 'construction-management', name: 'Construction Management', category: 'Management' },
  { id: 'property-development', name: 'Property Development', category: 'Development' },
  { id: 'real-estate-investment', name: 'Real Estate Investment', category: 'Development' },
  { id: 'planning-supervision', name: 'Planning, Supervision & Delivery', category: 'Professional Services' },
  { id: 'other', name: 'Other', category: 'General' }
];

export const QUOTE_PROJECT_STAGES: QuoteProjectStageItem[] = [
  {
    id: 'concept',
    name: 'Concept / Early Planning',
    description: 'Initial project visioning, brief definition, or preliminary feasibility assessment.'
  },
  {
    id: 'design',
    name: 'Design Stage',
    description: 'Architectural or engineering design currently underway or requiring engineering completion.'
  },
  {
    id: 'documentation-tender',
    name: 'Documentation / Tender Stage',
    description: 'Bills of quantities, working drawings, specifications, or tender package preparation.'
  },
  {
    id: 'construction',
    name: 'Construction Stage',
    description: 'Ground broken, active site works, or contractor engagement underway.'
  },
  {
    id: 'existing-renovation',
    name: 'Existing Property / Renovation',
    description: 'Structural refurbishment, remodeling, expansion, or condition assessment of an existing asset.'
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Project status requiring specific clarification or multi-phase definition.'
  }
];

export const QUOTE_SUPPORTED_DOCUMENT_TYPES = [
  'Architectural drawings (GA, floor plans, elevations, sections)',
  'Structural drawings & calculation packages',
  'BOQs / Bills of Quantities & material schedules',
  'Technical specifications & material standards',
  'Topographical & geotechnical site surveys',
  'Existing project documentation & as-built records',
  'Other relevant technical information & statutory permits'
];

export const QUOTE_SUPPORTED_SERVICES = [
  'BOQ / Bill of Quantities',
  'Cost Estimation',
  'Structural Design',
  'Engineering Design & Consultancy',
  'Building Construction',
  'Civil Works & Infrastructure',
  'Project Management',
  'Construction Management',
  'Planning, Supervision & Delivery',
  'Property Development'
];

export const COMMERCIAL_DISCLAIMER_TEXT =
  'Information provided through this enquiry helps AUREXON understand the project scope. Any subsequent commercial proposal, quotation or engagement will depend on the project requirements, scope, technical information and applicable commercial arrangements.';

export const CLIENT_DOCUMENT_NOTICE =
  'Supporting documents can be shared during the project discussion where required.';
