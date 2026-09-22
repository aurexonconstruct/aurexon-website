import { ContactCategoryItem } from '../types';

/**
 * AUREXON CONTACT DATA REPOSITORY
 * Phase 6 Implementation
 *
 * Strict Compliance:
 * - Only verified corporate credentials:
 *   - Legal Entity: AUREXON CONSTRUCTS NIGERIA LIMITED
 *   - Public Brand: AUREXON
 *   - RC Number: 9729028
 *   - Registered Office: 004, Jigawa Area Potiskum House, Potiskum, Yobe State, Nigeria
 *   - Post Code: 622101
 *   - Corporate Email: AUREXONCONSTRUCTNIG.LTD@GMAIL.COM
 * - NO invented phone numbers, NO fake social media, NO fabricated secondary branches.
 */

export const CORPORATE_CONTACT_DETAILS = {
  legalEntity: 'AUREXON CONSTRUCTS NIGERIA LIMITED',
  publicBrand: 'AUREXON',
  rcNumber: '9729028',
  registeredOffice: '004, Jigawa Area Potiskum House, Potiskum, Yobe State, Nigeria',
  postCode: '622101',
  corporateEmail: 'AUREXONCONSTRUCTNIG.LTD@GMAIL.COM',
  country: 'Nigeria'
};

export const CONTACT_CATEGORIES: ContactCategoryItem[] = [
  {
    id: 'general-enquiry',
    name: 'General Enquiry',
    description: 'Corporate enquiries, institutional communication, and general organizational requests.'
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Building execution, civil construction, site methodology, and main contractor requirements.'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Civil and structural engineering, technical assessments, structural detailing, and design consultancy.'
  },
  {
    id: 'property-development',
    name: 'Property Development',
    description: 'Land development evaluation, project joint-ventures, asset positioning, and development enquiries.'
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Programme control, construction management, procurement coordination, and supervisory engagements.'
  },
  {
    id: 'professional-collaboration',
    name: 'Professional Collaboration',
    description: 'Specialist consultant alignment, subcontractor pre-qualification, and institutional technical partnerships.'
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Other verified enquiries not covered by standard operational categories.'
  }
];

export const ENQUIRY_GUIDANCE_ITEMS = [
  {
    title: 'Project Type & Sector',
    description: 'Specify whether the development is residential, commercial, industrial, infrastructural, or civil works.'
  },
  {
    title: 'Geographic Location',
    description: 'Identify the state, municipality, or site location of the proposed project.'
  },
  {
    title: 'Physical Scope & Size',
    description: 'Provide known dimensions, number of floors, gross floor area, or general scale indicators.'
  },
  {
    title: 'Current Project Stage',
    description: 'Clarify whether the brief is in concept, detailed design, tender preparation, or active site execution.'
  },
  {
    title: 'Required Engagement',
    description: 'State whether engineering design, turnkey construction, supervision, or management is required.'
  },
  {
    title: 'Target Timeframe',
    description: 'Indicate intended milestones, expected commencement dates, or statutory approval horizons.'
  }
];
