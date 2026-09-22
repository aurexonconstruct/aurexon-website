import { CareerOpportunity, CareerAreaItem, ProfessionalDevelopmentPillar } from '../types';

/**
 * AUREXON CAREERS DATA REPOSITORY
 * Phase 6 Implementation
 *
 * Strict Compliance:
 * - CAREER_OPPORTUNITIES = [] (empty-state, no fabricated vacancies).
 * - POTENTIAL CAREER AREAS represent multidisciplinary tracks, not open positions.
 */

export const CAREER_OPPORTUNITIES: CareerOpportunity[] = [];

export const CAREER_AREAS: CareerAreaItem[] = [
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    code: 'CE-01',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Infrastructure planning, earthworks, drainage analysis, structural foundations, and site civil coordination.',
    disciplines: ['Site Engineering', 'Drainage & Earthworks', 'Infrastructure Works']
  },
  {
    id: 'structural-engineering',
    title: 'Structural Engineering',
    code: 'SE-02',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Structural calculation, reinforced concrete detailing, structural steel analysis, and integrity verification.',
    disciplines: ['Structural Design', 'Load Analysis', 'Rebar & Steel Detailing']
  },
  {
    id: 'construction',
    title: 'Construction',
    code: 'CN-03',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Building execution, trade supervision, methodology execution, and technical build quality control.',
    disciplines: ['Building Execution', 'Site Supervision', 'Trade Coordination']
  },
  {
    id: 'site-operations',
    title: 'Site Operations',
    code: 'SO-04',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Logistics coordination, material handling, plant and equipment supervision, and physical site controls.',
    disciplines: ['Plant & Materials', 'Site Logistics', 'Field Coordination']
  },
  {
    id: 'project-management',
    title: 'Project Management',
    code: 'PM-05',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Schedule tracking, milestone delivery, cross-disciplinary progress control, and resource stewardship.',
    disciplines: ['Schedule Control', 'Contract Administration', 'Programme Delivery']
  },
  {
    id: 'engineering-consultancy',
    title: 'Engineering Consultancy',
    code: 'EC-06',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Feasibility assessments, structural appraisals, technical reporting, and pre-contract advisory support.',
    disciplines: ['Technical Due Diligence', 'Advisory Reporting', 'Structural Reviews']
  },
  {
    id: 'property-development',
    title: 'Property Development',
    code: 'PD-07',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Site assessment, development feasibility, asset planning, and real estate project positioning.',
    disciplines: ['Development Feasibility', 'Site Assessment', 'Asset Positioning']
  },
  {
    id: 'quantity-commercial',
    title: 'Quantity / Commercial Functions',
    code: 'QC-08',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Bill of quantities preparation, measurement, cost verification, valuation, and procurement tracking.',
    disciplines: ['Quantity Surveying', 'Cost Control', 'Measurement & BOQ']
  },
  {
    id: 'hse',
    title: 'Health, Safety & Environment',
    code: 'HS-09',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Site safety compliance, environmental management protocols, risk assessments, and safe working audits.',
    disciplines: ['Safety Auditing', 'Environmental Plans', 'Risk Mitigation']
  },
  {
    id: 'administration-support',
    title: 'Administration & Professional Support',
    code: 'AS-10',
    badge: 'POTENTIAL CAREER AREA',
    description: 'Document control, corporate administration, compliance records, and general project support.',
    disciplines: ['Document Control', 'Corporate Records', 'Operational Support']
  }
];

export const PROFESSIONAL_DEVELOPMENT_PILLARS: ProfessionalDevelopmentPillar[] = [
  {
    number: '01',
    title: 'Practical Project Delivery',
    description: 'Direct exposure to on-site realities, technical standards, project methodologies, and the physical execution of built environment works.'
  },
  {
    number: '02',
    title: 'Technical Rigour & Codes',
    description: 'Adherence to engineering principles, statutory standards, quality control criteria, and disciplined documentation practices.'
  },
  {
    number: '03',
    title: 'Professional Responsibility',
    description: 'Clear accountability for work scope, ethical integrity, safety awareness, and disciplined team coordination.'
  },
  {
    number: '04',
    title: 'Multidisciplinary Collaboration',
    description: 'Constructive interaction between civil, structural, construction, commercial, and operational specialists across project phases.'
  }
];
