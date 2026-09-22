import {
  ConstructCapability,
  ConstructApproachStep,
  ConstructProjectCategory,
} from '../types.ts';

export const CONSTRUCT_DETAILS = {
  divisionName: 'AUREXON CONSTRUCT',
  shortName: 'CONSTRUCT',
  legalEntityNotice:
    'AUREXON CONSTRUCT is a business division of AUREXON CONSTRUCTS NIGERIA LIMITED (RC: 9729028). It is an operational unit and not an independently incorporated company or separate legal entity.',
  slogan: 'BUILDING WITH DISCIPLINE. DELIVERING WITH PURPOSE.',
  heroDescription:
    'AUREXON CONSTRUCT focuses on the execution and delivery of building, civil and infrastructure works through disciplined planning, coordinated construction activities and responsible project execution.',
};

export const CONSTRUCT_CAPABILITIES: ConstructCapability[] = [
  {
    letter: 'A',
    title: 'BUILDING CONSTRUCTION',
    description:
      'Building construction and coordinated execution across the project lifecycle according to defined project requirements.',
    scopeHighlights: [
      'Coordinated execution across the project lifecycle',
      'Structural assembly aligned with approved drawings',
      'Delivery tailored to defined client requirements',
    ],
    technicalCode: 'CAP-01 // BLD-EXEC',
  },
  {
    letter: 'B',
    title: 'CIVIL WORKS & INFRASTRUCTURE',
    description:
      'Civil and infrastructure works including applicable site and infrastructure construction activities.',
    scopeHighlights: [
      'Applicable site and infrastructure construction activities',
      'Site circulation, drainage, and earth retention works',
      'Essential utility routing and ground infrastructure',
    ],
    technicalCode: 'CAP-02 // CIV-INFRA',
  },
  {
    letter: 'C',
    title: 'GENERAL CONSTRUCTION',
    description:
      'Coordinated construction services across defined project scopes and requirements.',
    scopeHighlights: [
      'Comprehensive general construction trade coordination',
      'Execution adhering to defined scope boundaries',
      'Synchronized site labor and equipment management',
    ],
    technicalCode: 'CAP-03 // GEN-WORKS',
  },
  {
    letter: 'D',
    title: 'SITE DEVELOPMENT',
    description:
      'Site preparation, development and related construction activities required to establish project sites.',
    scopeHighlights: [
      'Site preparation and perimeter establishment',
      'Terrain clearing, grading, and site access creation',
      'Foundational preparation for vertical construction',
    ],
    technicalCode: 'CAP-04 // SITE-DEV',
  },
  {
    letter: 'E',
    title: 'CONSTRUCTION MANAGEMENT',
    description:
      'Planning, coordination, monitoring and management of construction activities to support controlled project delivery.',
    scopeHighlights: [
      'Milestone scheduling and resource coordination',
      'On-site activity monitoring and progress tracking',
      'Controlled delivery management and communication',
    ],
    technicalCode: 'CAP-05 // CONST-MGMT',
  },
  {
    letter: 'F',
    title: 'PROJECT EXECUTION',
    description:
      'Coordinated implementation of approved project plans, drawings, specifications and construction requirements.',
    scopeHighlights: [
      'Implementation of approved engineering and architectural plans',
      'Adherence to technical specifications and dimensions',
      'Consistent translation of design into physical works',
    ],
    technicalCode: 'CAP-06 // PROJ-EXEC',
  },
];

export const CONSTRUCT_APPROACH_STEPS: ConstructApproachStep[] = [
  {
    step: '01',
    title: 'PLAN',
    summary: 'Understand project objectives, scope, requirements and constraints.',
    description:
      'Thorough early assessment establishing delivery boundaries, client objectives, site conditions, regulatory parameters, and timeline dependencies before mobilizing resources.',
    keyActions: [
      'Comprehensive review of project drawings and technical requirements',
      'Identification of site constraints, access, and logistical factors',
      'Establishment of initial construction program and milestone alignment',
    ],
  },
  {
    step: '02',
    title: 'COORDINATE',
    summary: 'Align the relevant technical, construction and project activities.',
    description:
      'Systematic coordination bringing together site personnel, material supply sequences, equipment availability, and engineering documentation into an orderly schedule.',
    keyActions: [
      'Alignment of site supervisors, trade specialists, and equipment',
      'Sequencing of material procurements with active construction phases',
      'Clear cross-discipline communication and role clarity',
    ],
  },
  {
    step: '03',
    title: 'EXECUTE',
    summary: 'Carry out construction activities in accordance with approved project requirements and applicable standards.',
    description:
      'Physical construction operations carried out strictly against approved technical specifications, structural drawings, and recognized building methodologies.',
    keyActions: [
      'Disciplined site assembly and structural element construction',
      'Adherence to designated material specifications and installation practices',
      'Consistent supervision of day-to-day physical site tasks',
    ],
  },
  {
    step: '04',
    title: 'MONITOR',
    summary: 'Track progress, quality, safety and coordination throughout delivery.',
    description:
      'Ongoing oversight comparing active site progress against planned milestones, verifying material compliance, reviewing work quality, and maintaining safety awareness.',
    keyActions: [
      'Regular tracking of scheduled milestone completion',
      'Quality checks against approved drawings and standards',
      'Active site safety awareness and issue documentation',
    ],
  },
  {
    step: '05',
    title: 'DELIVER',
    summary: 'Complete defined works with attention to project requirements and responsible handover.',
    description:
      'Systematic completion verification, address of completion items, final review against project requirements, and responsible handover to the client.',
    keyActions: [
      'Verification of completed scopes against defined requirements',
      'Systematic inspection and punch-list resolution',
      'Orderly handover of the project site and documentation',
    ],
  },
];

export const CONSTRUCT_QUALITY_PILLARS = [
  {
    title: 'Attention to Project Requirements',
    description:
      'Every phase of construction begins with detailed review of the client’s approved plans, dimensions, and specifications to ensure works strictly reflect contractual parameters.',
  },
  {
    title: 'Construction Coordination',
    description:
      'Active synchronization across equipment, site logistics, and specialized trades prevents conflicting activities and maintains an orderly work environment.',
  },
  {
    title: 'Quality-Conscious Execution',
    description:
      'Materials and workmanship are evaluated against approved project specifications, reinforcing structural soundness and functional performance.',
  },
  {
    title: 'Site Safety Awareness',
    description:
      'Continuous emphasis on personal protective equipment (PPE), hazard awareness, clean work zones, and proactive site precautions protect workers and visitors.',
  },
  {
    title: 'Progress Monitoring',
    description:
      'Disciplined tracking of milestone completion against the construction schedule provides transparency and allows early identification of potential delays.',
  },
  {
    title: 'Documentation & Communication',
    description:
      'Clear, written site records, progress reporting, and consistent stakeholder updates ensure alignment between clients, consultants, and site teams.',
  },
  {
    title: 'Regulatory & Standard Compliance',
    description:
      'Execution strictly conforms with applicable Nigerian building codes, town planning requirements, and relevant engineering standards governing construction works.',
  },
];

export const CONSTRUCT_PROJECT_CATEGORIES: ConstructProjectCategory[] = [
  {
    id: 'building-projects',
    code: 'CAT-01',
    title: 'Building Projects',
    description:
      'Execution of commercial, residential, administrative, and institutional building structures based on approved architectural and engineering designs.',
    scopeOverview: [
      'Residential and commercial buildings',
      'Institutional and administrative facilities',
      'Structural shell and vertical enclosures',
    ],
  },
  {
    id: 'civil-works',
    code: 'CAT-02',
    title: 'Civil Works',
    description:
      'Construction of critical site-level civil elements supporting facilities, including internal accessways, reinforced drainage, and retaining structures.',
    scopeOverview: [
      'Internal roads and paved accessways',
      'Stormwater drainage channels and culverts',
      'Earth retaining and perimeter structures',
    ],
  },
  {
    id: 'infrastructure-projects',
    code: 'CAT-03',
    title: 'Infrastructure Projects',
    description:
      'Foundational civil infrastructure works providing vital connectivity, utility access, and physical site backbone services.',
    scopeOverview: [
      'Site utility corridors and containment',
      'Municipal network connection points',
      'Ground infrastructure and substructure works',
    ],
  },
  {
    id: 'site-development',
    code: 'CAT-04',
    title: 'Site Development',
    description:
      'Comprehensive site preparation transforming raw or uneven land into fully prepared, graded, and secure construction platforms.',
    scopeOverview: [
      'Land clearing, grubbing, and earthmoving',
      'Level grading and terrain stabilization',
      'Site fencing, security access, and temporary logistics',
    ],
  },
  {
    id: 'renovation-works',
    code: 'CAT-05',
    title: 'Renovation & Improvement Works',
    description:
      'Controlled structural modifications, facility upgrades, rehabilitation of existing buildings, and targeted building enhancements.',
    scopeOverview: [
      'Facility remodeling and structural alterations',
      'Rehabilitation of worn or dated elements',
      'Building expansion and envelope upgrades',
    ],
  },
  {
    id: 'construction-management',
    code: 'CAT-06',
    title: 'Construction Management Assignments',
    description:
      'Dedicated management and supervisory assignments coordinating client-appointed subcontractors and monitoring site execution programs.',
    scopeOverview: [
      'On-site contractor oversight and coordination',
      'Construction scheduling and milestone auditing',
      'Quality compliance monitoring and client reporting',
    ],
  },
];
