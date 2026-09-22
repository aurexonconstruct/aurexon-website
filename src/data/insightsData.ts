import {
  InsightRecord,
  InsightCategoryItem,
  KnowledgeApproachStep,
  InsightQualityPrinciple,
} from '../types.ts';

/**
 * AUREXON INSIGHTS LIBRARY DATA
 *
 * CRITICAL REQUIREMENT:
 * There are currently no approved public Insight articles to populate.
 * INSIGHTS must remain an empty array ([]).
 * No fake article records, authors, dates, or statistics are permitted.
 */
export const INSIGHTS: InsightRecord[] = [];

/**
 * 6 INSIGHT PUBLISHING CATEGORIES
 * Note: These are publishing categories and do not represent existing published article counts.
 */
export const INSIGHT_CATEGORIES: InsightCategoryItem[] = [
  {
    id: 'engineering-design',
    number: '01',
    title: 'ENGINEERING & DESIGN',
    description:
      'Civil, structural, and geotechnical engineering observations, architectural coordination, and design methodologies.',
    focusAreas: [
      'Structural Load Analysis & Coordination',
      'Civil Drainage & Earthworks Design',
      'Geotechnical & Foundation Evaluation',
      'Statutory Engineering Standards Compliance',
    ],
  },
  {
    id: 'construction-delivery',
    number: '02',
    title: 'CONSTRUCTION & DELIVERY',
    description:
      'Practical site execution, material testing, quality control, safety compliance, and physical delivery techniques.',
    focusAreas: [
      'Site Execution & Quality Control Protocols',
      'Material Performance & Conformance Testing',
      'Construction Health, Safety & Environmental Standards',
      'Workmanship Standards & Structural Supervision',
    ],
  },
  {
    id: 'project-management',
    number: '03',
    title: 'PROJECT MANAGEMENT',
    description:
      'Milestone programming, cost engineering, risk mitigation, and disciplined delivery across multi-stakeholder projects.',
    focusAreas: [
      'Milestone Sequencing & Schedule Management',
      'Budget Discipline & Quantity Surveying Oversight',
      'Technical Risk Assessment & Mitigation',
      'Contractual Administration & Scope Control',
    ],
  },
  {
    id: 'property-development',
    number: '04',
    title: 'PROPERTY DEVELOPMENT',
    description:
      'Land feasibility, site integration, planning approvals, spatial functionality, and long-term asset usefulness.',
    focusAreas: [
      'Land Suitability & Due Diligence Principles',
      'Statutory Planning & Regulatory Integration',
      'Functional Spatial Utility & Occupant Value',
      'Development Lifecycle & Asset Maintenance',
    ],
  },
  {
    id: 'professional-practice',
    number: '05',
    title: 'PROFESSIONAL PRACTICE',
    description:
      'Corporate governance, institutional discipline, ethical contracting, and continuous engineering development.',
    focusAreas: [
      'Corporate Governance & Legal Transparency',
      'Ethical Procurement & Contractor Relations',
      'Technical Mentorship & Professional Growth',
      'Interdisciplinary Engineering Coordination',
    ],
  },
  {
    id: 'industry-perspectives',
    number: '06',
    title: 'INDUSTRY PERSPECTIVES',
    description:
      'Observations on Nigerian and regional built-environment trends, infrastructure demands, and sustainable practice.',
    focusAreas: [
      'Built-Environment Infrastructure Trends',
      'Regional Construction Dynamics in Nigeria',
      'Sustainable Building & Material Efficiency',
      'Urban Growth & Infrastructure Resilience',
    ],
  },
];

/**
 * KNOWLEDGE APPROACH SEQUENCE
 * Sequence: OBSERVE → ANALYSE → LEARN → SHARE → APPLY
 */
export const KNOWLEDGE_APPROACH_STEPS: KnowledgeApproachStep[] = [
  {
    step: '01',
    title: 'OBSERVE',
    summary: 'Document actual site, engineering and project conditions.',
    description:
      'Capture grounded empirical observations from ongoing civil works, site execution, material behaviour, and operational challenges.',
  },
  {
    step: '02',
    title: 'ANALYSE',
    summary: 'Evaluate practical observations against technical principles.',
    description:
      'Assess collected site data and delivery outcomes against statutory standards, structural calculations, and engineering specifications.',
  },
  {
    step: '03',
    title: 'LEARN',
    summary: 'Distill structured lessons from delivery and coordination.',
    description:
      'Identify what worked effectively, where coordination gaps occurred, and how project sequencing can be systematically improved.',
  },
  {
    step: '04',
    title: 'SHARE',
    summary: 'Communicate balanced professional knowledge responsibly.',
    description:
      'Articulate clear, non-speculative perspectives that distinguish between technical facts, operational experiences, and general practice.',
  },
  {
    step: '05',
    title: 'APPLY',
    summary: 'Integrate verified insights back into future project execution.',
    description:
      'Embed lessons learned into updated standard operating guidelines, quality check routines, and future engineering coordination.',
  },
];

/**
 * 6 INSIGHT QUALITY PRINCIPLES
 */
export const INSIGHT_QUALITY_PRINCIPLES: InsightQualityPrinciple[] = [
  {
    number: '01',
    title: 'ACCURACY',
    description:
      'Information should be checked against the intended source and context before publication.',
  },
  {
    number: '02',
    title: 'CLEAR CONTEXT',
    description:
      'Technical and professional perspectives should clearly identify their context and limitations.',
  },
  {
    number: '03',
    title: 'PRACTICAL VALUE',
    description:
      'Content should aim to provide useful knowledge rather than unsupported claims.',
  },
  {
    number: '04',
    title: 'CONFIDENTIALITY',
    description:
      'Confidential client, project, commercial and technical information must not be disclosed without appropriate authorization.',
  },
  {
    number: '05',
    title: 'AUTHORSHIP',
    description:
      'Published content should identify the appropriate author or publishing source.',
  },
  {
    number: '06',
    title: 'RESPONSIBLE PRESENTATION',
    description:
      'Educational or professional content must not be presented as a substitute for project-specific professional advice where such distinction matters.',
  },
];

/**
 * BUILT-ENVIRONMENT KNOWLEDGE AREAS
 * Note: These are key areas of built-environment activity where AUREXON anticipates publishing.
 * It is not claimed that all these topics currently have published content.
 */
export const BUILT_ENVIRONMENT_AREAS = [
  {
    title: 'Civil Engineering',
    category: 'Engineering',
    description:
      'Site preparation, drainage design, earthworks stability, and urban infrastructure servicing.',
  },
  {
    title: 'Structural Engineering',
    category: 'Engineering',
    description:
      'Reinforced concrete design, structural steelwork, foundation sizing, and seismic/load calculations.',
  },
  {
    title: 'Building Construction',
    category: 'Construction',
    description:
      'Methods, materials, site logistics, safety protocols, and physical building erection.',
  },
  {
    title: 'Infrastructure',
    category: 'Civil Works',
    description:
      'Access corridors, road pavement layers, stormwater management, and perimeter retention.',
  },
  {
    title: 'Construction Management',
    category: 'Delivery',
    description:
      'On-site supervision, material batch testing, workforce coordination, and HSE compliance.',
  },
  {
    title: 'Project Management',
    category: 'Coordination',
    description:
      'Program sequencing, contractual administration, cost engineering, and milestone verification.',
  },
  {
    title: 'Property Development',
    category: 'Development',
    description:
      'Land-to-property conversion, statutory planning, functional space planning, and asset durability.',
  },
];

/**
 * AUREXON PERSPECTIVES TOPICS
 * Future perspectives may explore these thematic areas.
 */
export const AUREXON_PERSPECTIVES_TOPICS = [
  {
    title: 'Disciplined Project Delivery',
    focus: 'Execution',
    description:
      'Future perspectives may explore how structured workflows and milestone gatekeeping prevent scope creep and schedule overrun.',
  },
  {
    title: 'Engineering Coordination',
    focus: 'Technical',
    description:
      'Future perspectives may explore bridging architectural design with rigorous civil and structural engineering realities.',
  },
  {
    title: 'Construction Practice & Site Quality',
    focus: 'Field Operations',
    description:
      'Future perspectives may explore standardizing on-site testing protocols and material verification on commercial works.',
  },
  {
    title: 'Property Planning & Development',
    focus: 'Development',
    description:
      'Future perspectives may explore aligning land suitability and municipal approvals with realistic construction scheduling.',
  },
  {
    title: 'Professional Development & Ethics',
    focus: 'Governance',
    description:
      'Future perspectives may explore building local engineering competence and maintaining strict procurement transparency.',
  },
  {
    title: 'Long-Term Value Creation',
    focus: 'Asset Durability',
    description:
      'Future perspectives may explore designing and building for lifecycle durability, ease of maintenance, and lasting usefulness.',
  },
];

/**
 * PUBLISHING WITH PURPOSE - GOVERNANCE CRITERIA
 */
export const PUBLISHING_GOVERNANCE_CRITERIA = [
  {
    label: 'Source & Evidence',
    desc: 'Verification that references and data stem from verified project records, authoritative standards, or vetted practice.',
  },
  {
    label: 'Authorship & Attribution',
    desc: 'Clear identification of the individual author, engineering discipline, or corporate publishing source.',
  },
  {
    label: 'Factual Accuracy',
    desc: 'Rigorous cross-checking of all formulas, engineering principles, statutory references, and technical assertions.',
  },
  {
    label: 'Technical Review',
    desc: 'Internal review by qualified engineering or project management personnel where technical depth warrants.',
  },
  {
    label: 'Confidentiality & Non-Disclosure',
    desc: 'Strict removal or redaction of proprietary client information, confidential contracts, or sensitive site coordinates.',
  },
  {
    label: 'Intellectual Property & Copyright',
    desc: 'Absolute compliance with third-party intellectual property, patent rights, and technical literature citations.',
  },
  {
    label: 'Imagery & Media Rights',
    desc: 'Use of authorized photographs, technical drawings, and diagrams with proper permissions and accurate captions.',
  },
  {
    label: 'Publication Status & Versioning',
    desc: 'Clear designation of draft, review, or public release status, with tracking of post-publication amendments.',
  },
  {
    label: 'Intended Audience Alignment',
    desc: 'Ensuring tone, terminology, and technical detail appropriately serve developers, engineers, clients, or the wider public.',
  },
];
