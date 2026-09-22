import {
  PropertyCapability,
  PropertyApproachStep,
  PropertyOpportunityCategory,
  PropertyPrincipleItem,
  PropertyRecord,
  ResponsiblePropertyPresentationPrinciple,
} from '../types.ts';

export const PROPERTY_OPERATIONAL_BADGE =
  'DIVISION OF AUREXON CONSTRUCTS NIGERIA LIMITED • RC: 9729028';

export const PROPERTY_CORE_CAPABILITIES: PropertyCapability[] = [
  {
    letter: 'A',
    title: 'PROPERTY DEVELOPMENT',
    categoryCode: 'CAP-DEV-01',
    description:
      'Planning and coordination of property development opportunities according to project requirements.',
    scopeHighlights: [
      'Land opportunity assessment and development concepts',
      'Statutory planning and regulatory alignment coordination',
      'Cross-functional project orchestration across disciplines',
      'Milestone governance toward structured handover',
    ],
  },
  {
    letter: 'B',
    title: 'REAL ESTATE INVESTMENT',
    categoryCode: 'CAP-INV-02',
    description:
      'Participation in property-related investment and development opportunities subject to project, commercial and legal requirements.',
    scopeHighlights: [
      'Commercial viability reviews and project cost modeling',
      'Risk evaluation across capital allocation milestones',
      'Joint development structures and partnership frameworks',
      'Disciplined commercial stewardship without return speculation',
    ],
  },
  {
    letter: 'C',
    title: 'PROPERTY SALES',
    categoryCode: 'CAP-SAL-03',
    description:
      'Property sales where applicable to approved AUREXON property opportunities.',
    scopeHighlights: [
      'Transparent contract structuring and sale documentation',
      'Clear title transfer and allocation protocols',
      'Buyer onboarding and property condition briefings',
      'Direct engagement on applicable developed schemes',
    ],
  },
  {
    letter: 'D',
    title: 'LEASING',
    categoryCode: 'CAP-LEA-04',
    description:
      'Leasing opportunities where applicable to approved properties.',
    scopeHighlights: [
      'Commercial and residential tenancy structuring',
      'Lease agreement preparation and term clarity',
      'Facility use and handover specifications',
      'Tenancy coordination on available portfolio assets',
    ],
  },
  {
    letter: 'E',
    title: 'DEVELOPMENT MANAGEMENT',
    categoryCode: 'CAP-MGT-05',
    description:
      'Coordination of development activities from planning through delivery.',
    scopeHighlights: [
      'Inter-disciplinary coordination (design, engineering, build)',
      'Budget monitoring, milestone tracking, and reporting',
      'Contract administration and vendor oversight',
      'Statutory compliance and occupancy transition management',
    ],
  },
  {
    letter: 'F',
    title: 'LAND-TO-PROPERTY DEVELOPMENT',
    categoryCode: 'CAP-L2P-06',
    description:
      'Structured development from suitable land opportunities toward intended property outcomes.',
    scopeHighlights: [
      'Raw land physical assessment and topography consideration',
      'Access, servicing, and site infrastructure planning',
      'Integration with civil and structural engineering input',
      'Phased conversion from land parcel into durable built property',
    ],
  },
];

export const PROPERTY_APPROACH_STEPS: PropertyApproachStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    summary: 'Understand the land, opportunity, intended use and development objectives.',
    description:
      'Every responsible development begins with objective assessment. We evaluate the physical site, legal and statutory parameters, surrounding urban context, intended functional use, and client or partnership objectives before formulating solutions.',
    keyActions: [
      'Site physical inspection and boundary verification',
      'Intended end-user needs and functional brief definition',
      'Contextual constraints and environmental factors review',
      'Preliminary project timeline and objective alignment',
    ],
  },
  {
    step: '02',
    title: 'PLAN',
    summary: 'Assess planning considerations, project scope and development requirements.',
    description:
      'Translating raw opportunity into a feasible development roadmap. We examine zoning allowances, town planning regulations, infrastructure requirements, servicing logistics, and preliminary cost benchmarks.',
    keyActions: [
      'Town planning and zoning conformity review',
      'Master planning and site layout formulation',
      'Development cost framework and preliminary budgeting',
      'Phasing strategy and stakeholder engagement planning',
    ],
  },
  {
    step: '03',
    title: 'DESIGN',
    summary: 'Develop an appropriate design response.',
    description:
      'Formulating architectural schemes that harmonize functional spatial utility, climatic adaptability, aesthetic dignity, and commercial efficiency suited to the specific Nigerian locale.',
    keyActions: [
      'Architectural space planning and circulation layouts',
      'Natural ventilation and solar orientation design',
      'Material schedule specification and durability checks',
      'Constructability and maintenance-accessibility review',
    ],
  },
  {
    step: '04',
    title: 'ENGINEER',
    summary: 'Address relevant engineering and technical requirements.',
    description:
      'Coordinating engineering input early. Where appropriate, civil and structural engineering calculations ensure robust foundations, reliable drainage, and resilient utility infrastructure.',
    keyActions: [
      'Foundation scheme adaptation to site geotechnical data',
      'Structural framing calculations and load path verification',
      'Stormwater management and site servicing design',
      'Technical coordination across engineering disciplines',
    ],
  },
  {
    step: '05',
    title: 'BUILD',
    summary: 'Coordinate construction and development execution where applicable.',
    description:
      'Disciplined site execution through qualified construction processes. Coordinating contractors, monitoring material compliance, and enforcing safety and quality standards.',
    keyActions: [
      'Construction methodology formulation and logistics setup',
      'Material quality verification against specifications',
      'On-site milestone monitoring and workmanship inspections',
      'Safety, site discipline, and progress governance',
    ],
  },
  {
    step: '06',
    title: 'DELIVER',
    summary: 'Move the completed property toward its intended use or commercial outcome.',
    description:
      'Transitioning the physical build into an active, functional asset. Conducting systematic snagging, completing documentation, and facilitating client occupancy, lease commencement, or property sale.',
    keyActions: [
      'Comprehensive finishing inspections and snag resolution',
      'Statutory completion reviews and handover documentation',
      'Clear commercial onboarding for occupants, buyers, or tenants',
      'Operational and maintenance guidance for long-term stewardship',
    ],
  },
];

export const PROPERTY_PRINCIPLES: PropertyPrincipleItem[] = [
  {
    number: '01',
    title: 'CLEAR OBJECTIVES',
    description:
      'Understand the intended purpose and development requirements.',
  },
  {
    number: '02',
    title: 'SITE & CONTEXT',
    description:
      'Consider location, site conditions and surrounding context.',
  },
  {
    number: '03',
    title: 'PLANNING',
    description:
      'Consider applicable planning and development requirements.',
  },
  {
    number: '04',
    title: 'FUNCTIONAL DESIGN',
    description:
      'Develop appropriate functional and user-focused design considerations.',
  },
  {
    number: '05',
    title: 'ENGINEERING COORDINATION',
    description:
      'Coordinate technical and engineering requirements.',
  },
  {
    number: '06',
    title: 'RESPONSIBLE CONSTRUCTION',
    description:
      'Approach construction with disciplined coordination and quality-conscious execution.',
  },
  {
    number: '07',
    title: 'INTENDED USERS',
    description:
      'Consider the intended users and practical requirements of the property.',
  },
  {
    number: '08',
    title: 'LONG-TERM USEFULNESS',
    description:
      'Focus on functionality, durability and long-term usefulness rather than unsupported promises of financial performance.',
  },
];

export const PROPERTY_OPPORTUNITY_CATEGORIES: PropertyOpportunityCategory[] = [
  {
    id: 'prop-cat-01',
    code: 'RESIDENTIAL',
    title: 'Residential Development',
    description:
      'Private family residences, residential multi-unit developments, terrace schemes, and gated residential communities planned with functional layouts and infrastructure.',
    scopeOverview: [
      'Single-family private residences & custom homes',
      'Multi-unit residential layouts and townhouses',
      'Infrastructure integration (access roads, drainage, lighting)',
      'Security, perimeter planning, and communal utility layouts',
    ],
  },
  {
    id: 'prop-cat-02',
    code: 'COMMERCIAL',
    title: 'Commercial Development',
    description:
      'Corporate offices, professional workspaces, logistics hubs, and commercial trade facilities designed for operational efficiency and professional presence.',
    scopeOverview: [
      'Commercial office spaces and corporate headquarters',
      'Light industrial warehousing and logistics yards',
      'Retail plazas and commercial services centers',
      'Dedicated parking, access control, and services facilities',
    ],
  },
  {
    id: 'prop-cat-03',
    code: 'MIXED-USE',
    title: 'Mixed-Use Development',
    description:
      'Integrated developments harmonizing residential living, commercial workspaces, and community retail within unified, coordinated site plans.',
    scopeOverview: [
      'Podium commercial suites with upper residential units',
      'Coordinated vehicular circulation and pedestrian walkways',
      'Separated utility metering and services management',
      'Balanced density and shared infrastructure management',
    ],
  },
  {
    id: 'prop-cat-04',
    code: 'LAND-TO-PROPERTY',
    title: 'Land-to-Property Development',
    description:
      'The comprehensive transition of raw acreage or underutilized land parcels through master planning, civil works, and structured building delivery.',
    scopeOverview: [
      'Land parcel evaluation, boundary checks, and contour analysis',
      'Access road grading, drainage outfalls, and earthworks',
      'Subdivision planning and infrastructure servitude design',
      'Phased vertical development and service connection',
    ],
  },
  {
    id: 'prop-cat-05',
    code: 'RENOVATION',
    title: 'Property Improvement & Renovation',
    description:
      'Adaptive reuse, structural refurbishment, modern refits, and facility upgrades that restore functional utility and extend building lifecycles.',
    scopeOverview: [
      'Structural audit and existing condition assessments',
      'Interior spatial remodeling and modern M&E retrofitting',
      'Building envelope upgrades and facade renewal',
      'Defect remediation and functional modernization',
    ],
  },
  {
    id: 'prop-cat-06',
    code: 'OPPORTUNITIES',
    title: 'Real Estate Development Opportunities',
    description:
      'Joint-venture development concepts, landholder partnerships, and development management engagements structured on clear project parameters.',
    scopeOverview: [
      'Landholder equity participation frameworks',
      'Technical development management for capital partners',
      'Statutory approval coordination and agency engagement',
      'Structured project accounting and transparent milestone reporting',
    ],
  },
];

export const PROPERTY_MODEL_STAGES = [
  { step: '01', name: 'LAND', label: 'Land Evaluation & Opportunity Identification' },
  { step: '02', name: 'PLANNING', label: 'Statutory Alignment, Master Planning & Feasibility' },
  { step: '03', name: 'DESIGN', label: 'Architectural & Spatial Planning' },
  { step: '04', name: 'ENGINEERING', label: 'Civil & Structural Technical Coordination' },
  { step: '05', name: 'CONSTRUCTION', label: 'Execution & Quality-Controlled Site Works' },
  { step: '06', name: 'PROPERTY DELIVERY', label: 'Snagging, Inspection & Formal Handover' },
  { step: '07', name: 'SALE / LEASE', label: 'Transparent Commercial Tenancy or Transfer' },
  { step: '08', name: 'LONG-TERM VALUE', label: 'Asset Stewardship & Enduring Property Utility' },
];

export const RESPONSIBLE_POSITIONING_FACTORS = [
  {
    label: 'Location & Context',
    detail: 'Accessibility, neighborhood dynamics, terrain characteristics, and surrounding infrastructure.',
  },
  {
    label: 'Land Status & Title',
    detail: 'Verified boundary coordinates, statutory land categorization, and documentation due diligence.',
  },
  {
    label: 'Planning Requirements',
    detail: 'Building setbacks, density limits, permitted uses, and local town planning agency approvals.',
  },
  {
    label: 'Development Scope',
    detail: 'Exact functional brief, spatial requirements, phasing strategy, and required specifications.',
  },
  {
    label: 'Technical Requirements',
    detail: 'Soil load-bearing capacity, stormwater drainage routes, foundation design, and utility connections.',
  },
  {
    label: 'Commercial Structure',
    detail: 'Project cost models, procurement strategy, contractual frameworks, and partnership terms.',
  },
  {
    label: 'Intended Use',
    detail: 'Owner-occupation, commercial tenancy, leasehold operations, or structured property disposition.',
  },
];

/**
 * REUSABLE DATA-DRIVEN ARCHITECTURE FOR FUTURE VERIFIED PROPERTY RECORDS.
 * Deliberately maintained empty until verified records are approved for public publication.
 * Under governance directives, no fabricated, unverified, or speculative listings exist.
 */
export const PROPERTIES: PropertyRecord[] = [];

export const RESPONSIBLE_PROPERTY_PRESENTATION_PRINCIPLES: ResponsiblePropertyPresentationPrinciple[] = [
  {
    number: '01',
    title: 'VERIFIED PROPERTY INFORMATION',
    description: 'Only approved property information should be presented publicly.',
  },
  {
    number: '02',
    title: 'CLEAR DEVELOPMENT STATUS',
    description: 'Clearly distinguish proposed, planned, ongoing, completed, available or other approved status.',
  },
  {
    number: '03',
    title: 'LAND & TITLE INFORMATION',
    description: 'Do not publish claims about ownership, title, approvals or land status unless verified and authorised.',
  },
  {
    number: '04',
    title: 'AUTHORISED IMAGERY',
    description: 'Only approved photographs, drawings, renders and visual materials should be used.',
  },
  {
    number: '05',
    title: 'NO GUARANTEED RETURNS',
    description: 'Do not present property appreciation, rental income, investment returns or financial outcomes as guaranteed.',
  },
];

export const PROPERTY_INTEGRATED_DIVISIONS = [
  {
    division: 'AUREXON ENGINEERING',
    role: 'Civil & Structural Technical Integration',
    summary: 'Supports civil and structural engineering, design, consultancy, planning and supervision where required.',
    highlights: [
      'Site geotechnical and structural coordination',
      'Civil infrastructure and drainage engineering',
      'Statutory engineering compliance and audits',
    ],
    buttonText: 'EXPLORE ENGINEERING',
    href: '/businesses/engineering',
    code: 'DIV-ENG-02',
  },
  {
    division: 'AUREXON CONSTRUCT',
    role: 'Physical Construction & Site Execution',
    summary: 'Supports construction, civil works, site development and project execution where required.',
    highlights: [
      'Site preparation, earthworks, and foundation delivery',
      'Structural superstructures and quality execution',
      'Rigorous material compliance and safety governance',
    ],
    buttonText: 'EXPLORE CONSTRUCT',
    href: '/businesses/construct',
    code: 'DIV-CON-01',
  },
  {
    division: 'AUREXON PROPERTIES',
    role: 'Development & Real Estate Direction',
    summary: 'Leads the property-development and real-estate side of the AUREXON model where applicable.',
    highlights: [
      'Land opportunity assessment and development planning',
      'Development management across project phases',
      'Commercial structuring and structured handover',
    ],
    buttonText: 'PROPERTY CAPABILITIES',
    href: '#capabilities',
    code: 'DIV-PROP-03',
  },
];
