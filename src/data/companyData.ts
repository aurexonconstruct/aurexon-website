/**
 * AUREXON CONSTRUCTS NIGERIA LIMITED
 * Official Corporate Data Foundation
 * 
 * Strict Content Accuracy: Contains ONLY verified information and approved company details.
 * No unsupported claims, no certification claims, no fictional project claims, and no invented titles.
 */

import {
  BusinessDivision,
  ExpertiseArea,
  CapabilityArchetype,
  PropertyPhilosophyStage,
  ProcessStage,
  InsightPreviewItem,
  NavItem,
  CompanyMilestone,
  BusinessDivisionDetail,
  IntegratedFlowStep,
} from '../types.ts';

export const COMPANY_DETAILS = {
  legalName: 'AUREXON CONSTRUCTS NIGERIA LIMITED',
  brandName: 'AUREXON',
  primarySlogan: 'PLAN WELL. BUILD ONCE.',
  supportingPositioning: 'BUILDING EXCELLENCE. SHAPING THE FUTURE.',
  rcNumber: '9729028',
  corporateStatus: 'ACTIVE',
  companyType: 'Private Company Limited by Shares',
  dateOfIncorporation: '30 July 2026',
  registeredOffice: {
    address: '004, Jigawa Area Potiskum House, Potiskum, Yobe State, Nigeria',
    postCode: '622101',
    fullFormatted: '004, Jigawa Area Potiskum House, Potiskum, Yobe State, Nigeria',
  },
  corporateEmail: 'AUREXONCONSTRUCTNIG.LTD@GMAIL.COM',
  founder: {
    name: 'Umar Alhaji Danladi',
    role: 'Founder & Managing Director',
    company: 'AUREXON CONSTRUCTS NIGERIA LIMITED',
  },
  logoUrl: '/images/aurexon-logo.png?v=3',
  logoFallbackUrl: '/logo.png?v=3',
  logoRemoteUrl: 'https://i.imgur.com/FDo7WCp.png',
  legalNotice:
    'AUREXON CONSTRUCTS NIGERIA LIMITED (RC 9729028) is an independent private Nigerian company operating in construction, civil engineering, engineering consultancy, project management, property development and related activities. AUREXON and AurexonHub Professional Network (APN) are distinct and independently operated organizations connected by a common founder, ownership foundation and broader strategic vision. Their operational, commercial, technological, intellectual-property, data and governance arrangements remain distinct unless otherwise expressly established.',
};

export const ORIGIN_TIMELINE = [
  {
    year: '2024',
    stage: 'The Vision',
    title: 'Conceptual Genesis',
    description:
      'The vision and concept behind AUREXON began to take shape, focused on establishing disciplined upfront planning and engineering rigor in Nigerian construction and property development.',
    badge: 'VISION',
  },
  {
    year: '2025',
    stage: 'Early Operations',
    title: 'Technical Advisory & Initial Execution',
    description:
      'The AUREXON initiative began providing services including Bills of Quantities (BOQ), structural design and engineering consultancy, while the team began working on and executing selected smaller projects.',
    badge: 'OPERATIONS',
  },
  {
    year: '30 July 2026',
    stage: 'Official Incorporation',
    title: 'Corporate Establishment',
    description:
      'AUREXON CONSTRUCTS NIGERIA LIMITED was officially incorporated under Nigerian corporate law as a Private Company Limited by Shares (RC: 9729028), formalizing its three dedicated operating divisions.',
    badge: 'INCORPORATION',
  },
];

export const OPERATING_PRINCIPLES = [
  {
    number: '01',
    title: '“Plan Well. Build Once.” Philosophy',
    summary:
      'Disciplined pre-construction planning, geotechnical awareness, and structural calculations to prevent avoidable delays, material wastage, and costly on-site rework before physical construction begins.',
    keyPoints: [
      'Comprehensive site evaluation before mobilization',
      'Structural and spatial constructability reviews',
      'Minimization of alteration cycles during execution',
    ],
  },
  {
    number: '02',
    title: 'Engineering Rigor & Relevant Standards',
    summary:
      'Structural design and civil infrastructure benchmarked against applicable Nigerian regulations and recognized engineering standards appropriate to project requirements.',
    keyPoints: [
      'Strict adherence to applicable Nigerian building regulations',
      'Structural safety, stability, and load-bearing adequacy',
      'Professional engineering oversight across all phases',
    ],
  },
  {
    number: '03',
    title: 'Material Integrity & Quality Verification',
    summary:
      'Selection and verification of project-specified construction materials, prioritizing structural durability, safety, and long-term resilience over shortcut practices.',
    keyPoints: [
      'Specification compliance for concrete, reinforcement, and aggregates',
      'Material verification and on-site quality checks',
      'Zero tolerance for material-cutting compromises',
    ],
  },
  {
    number: '04',
    title: 'Multidisciplinary Technical Integration',
    summary:
      'Seamless coordination between civil engineering consultancy, building construction management, and property development planning.',
    keyPoints: [
      'Elimination of misalignments between design engineers and site crews',
      'Unified scheduling and milestone tracking',
      'Accountable, single-point corporate delivery',
    ],
  },
  {
    number: '05',
    title: 'Local Context & Climatic Adaptation',
    summary:
      'Engineering solutions formulated specifically for Nigerian soil profiles, local terrain realities, and seasonal hydrological conditions.',
    keyPoints: [
      'Adequate stormwater drainage and flood mitigation',
      'Thermal efficiency and local climate suitability',
      'Geotechnical consideration in foundation engineering',
    ],
  },
  {
    number: '06',
    title: 'Long-Term Asset Value Stewardship',
    summary:
      'Focusing on lifecycle asset performance, enduring functional utility, and reduced maintenance burdens for facility owners and occupants.',
    keyPoints: [
      'Handover with clear maintenance recommendations',
      'Durable envelope and structural detailing',
      'Value preservation across the property lifecycle',
    ],
  },
];

export const COMPANY_HISTORY: CompanyMilestone[] = [
  {
    period: '2024',
    title: 'The Vision',
    description:
      'The vision and concept behind AUREXON began to take shape.',
  },
  {
    period: '2025',
    title: 'Early Operations',
    description:
      'The AUREXON initiative began providing services including Bills of Quantities (BOQ), structural design and engineering consultancy, while the team began working on and executing selected smaller projects.',
  },
  {
    period: '30 July 2026',
    title: 'Official Incorporation',
    description:
      'AUREXON CONSTRUCTS NIGERIA LIMITED was officially incorporated under Nigerian corporate law as a Private Company Limited by Shares (RC: 9729028).',
  },
];

export const NAVIGATION_ITEMS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Businesses',
    href: '/businesses',
    children: [
      {
        name: 'Aurexon Construct',
        href: '/businesses/construct',
        description: 'Building construction, civil works, infrastructure, and site development.',
        divisionId: 'construct',
      },
      {
        name: 'Aurexon Engineering',
        href: '/businesses/engineering',
        description: 'Civil and structural engineering, design, consultancy, and supervision.',
        divisionId: 'engineering',
      },
      {
        name: 'Aurexon Properties',
        href: '/businesses/properties',
        description: 'Property development, real estate investment, sales, leasing, and management.',
        divisionId: 'properties',
      },
    ],
  },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Properties', href: '/properties' },
  { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export const BUSINESS_PAGE_DIVISIONS: BusinessDivisionDetail[] = [
  {
    id: 'construct',
    number: '01',
    name: 'AUREXON CONSTRUCT',
    shortName: 'CONSTRUCT',
    heading: 'AUREXON CONSTRUCT',
    badge: 'CONSTRUCTION DIVISION',
    description:
      'Our construction division focuses on the execution and delivery of building, civil and infrastructure works, from site development through coordinated construction activities.',
    focusAreas: [
      'Building Construction',
      'Civil Works & Infrastructure',
      'General Construction',
      'Site Development',
      'Construction Management',
      'Project Execution',
    ],
    ctaText: 'EXPLORE CONSTRUCT',
    ctaLink: '/businesses/construct',
    technicalCode: 'DIV-01 // EXECUTION & WORKS',
  },
  {
    id: 'engineering',
    number: '02',
    name: 'AUREXON ENGINEERING',
    shortName: 'ENGINEERING',
    heading: 'AUREXON ENGINEERING',
    badge: 'ENGINEERING DIVISION',
    description:
      'Our engineering division provides civil and structural engineering expertise supporting planning, design, consultancy, supervision and project delivery.',
    focusAreas: [
      'Civil Engineering',
      'Structural Engineering',
      'Engineering Design',
      'Engineering Consultancy',
      'Planning & Supervision',
      'Project Management',
    ],
    ctaText: 'EXPLORE ENGINEERING',
    ctaLink: '/businesses/engineering',
    technicalCode: 'DIV-02 // DESIGN & SUPERVISION',
  },
  {
    id: 'properties',
    number: '03',
    name: 'AUREXON PROPERTIES',
    shortName: 'PROPERTIES',
    heading: 'AUREXON PROPERTIES',
    badge: 'PROPERTY DIVISION',
    description:
      'Our property division focuses on property development and real estate opportunities, connecting land, planning, design, engineering and construction with long-term property value.',
    focusAreas: [
      'Property Development',
      'Real Estate Investment',
      'Property Sales',
      'Leasing',
      'Development Management',
      'Land-to-Property Development',
    ],
    ctaText: 'EXPLORE PROPERTIES',
    ctaLink: '/businesses/properties',
    technicalCode: 'DIV-03 // ASSETS & VALUE LIFECYCLE',
  },
];

export const INTEGRATED_MODEL_STEPS: IntegratedFlowStep[] = [
  {
    step: 1,
    stage: 'PLAN',
    subtitle: 'Scope Definition & Initial Assessment',
    description:
      'Early-stage evaluation establishing statutory parameters, site physical attributes, feasibility benchmarks, and timeline alignment before capital mobilization.',
    keyOutputs: [
      'Site context & physical parameters review',
      'Statutory & regulatory alignment review',
      'Initial feasibility & delivery roadmapping',
    ],
  },
  {
    step: 2,
    stage: 'DESIGN',
    subtitle: 'Architectural & Spatial Planning',
    description:
      'Developing functional spatial arrangements that harmonize architectural utility, site topography, climatic adaptation, and buildability.',
    keyOutputs: [
      'Functional spatial layout conception',
      'Climatic adaptation & ventilation planning',
      'Constructability review & design synchronization',
    ],
  },
  {
    step: 3,
    stage: 'ENGINEER',
    subtitle: 'Civil & Structural Technical Calculations',
    description:
      'Applying rigorous engineering calculations, structural modeling, and foundation analysis to ensure structural integrity and material efficiency.',
    keyOutputs: [
      'Structural calculations & load-bearing modeling',
      'Foundation design aligned with geotechnical data',
      'Technical specifications & structural drawings',
    ],
  },
  {
    step: 4,
    stage: 'EXECUTE',
    subtitle: 'Site Construction & Material Controls',
    description:
      'Managing physical site operations under active engineering supervision, verified material compliance, and structured site coordination.',
    keyOutputs: [
      'On-site construction oversight & coordination',
      'Material quality verification against specs',
      'Health, safety & environmental site protocols',
    ],
  },
  {
    step: 5,
    stage: 'DELIVER',
    subtitle: 'Systematic Inspection & Formal Handover',
    description:
      'Systematic snagging resolution, final quality audit, systems testing, and completion of transparent handover documentation.',
    keyOutputs: [
      'Comprehensive final walk-through review',
      'Structured snag list verification & resolution',
      'As-built handover records & operational briefs',
    ],
  },
  {
    step: 6,
    stage: 'CREATE LONG-TERM VALUE',
    subtitle: 'Enduring Asset Performance & Stewardship',
    description:
      'Delivering structures engineered to endure over decades, supported by lifecycle maintenance recommendations and sustainable facility utility.',
    keyOutputs: [
      'Lifecycle maintenance guidance schedules',
      'Asset utility & operational reliability',
      'Long-term commercial & functional value retention',
    ],
  },
];


export const BUSINESS_DIVISIONS: BusinessDivision[] = [
  {
    id: 'construct',
    number: '01',
    name: 'AUREXON CONSTRUCT',
    brandTitle: 'Building Construction & Civil Infrastructure',
    scopeSummary:
      'Building construction, civil works, infrastructure, general construction, project execution, site development and construction management.',
    capabilities: [
      'Building Construction & General Construction',
      'Civil Works & Infrastructure Execution',
      'Site Development & Earthworks',
      'Project Execution & On-Site Coordination',
      'Construction Management & Quality Oversight',
      'Site Safety & Environmental Awareness',
    ],
    routePath: '#business-divisions',
    accentBadge: 'CONSTRUCTION DIVISION',
  },
  {
    id: 'engineering',
    number: '02',
    name: 'AUREXON ENGINEERING',
    brandTitle: 'Civil & Structural Engineering Consultancy',
    scopeSummary:
      'Civil and structural engineering, engineering design, consultancy, supervision, project management and planning.',
    capabilities: [
      'Civil & Structural Engineering Design',
      'Engineering Design & Technical Analysis',
      'Consultancy & Technical Advisory',
      'Engineering Supervision & On-Site Monitoring',
      'Project Management & Coordination',
      'Project Planning & Scheduling',
    ],
    routePath: '#business-divisions',
    accentBadge: 'ENGINEERING DIVISION',
  },
  {
    id: 'properties',
    number: '03',
    name: 'AUREXON PROPERTIES',
    brandTitle: 'Property Development & Real Estate Management',
    scopeSummary:
      'Property development, real estate investment, sales, leasing, development and property management.',
    capabilities: [
      'Property Development & Project Planning',
      'Real Estate Investment Assessment',
      'Property Sales & Marketing Coordination',
      'Leasing & Tenancy Structuring',
      'Asset Development & Value Creation',
      'Property Management & Facility Coordination',
    ],
    routePath: '#business-divisions',
    accentBadge: 'PROPERTY DIVISION',
  },
];

export const EXPERTISE_LIST: ExpertiseArea[] = [
  {
    id: 'exp-1',
    code: 'CIVIL INFRASTRUCTURE',
    title: 'Civil Works & Infrastructure',
    category: 'Civil & Infrastructure',
    description:
      'Site preparation, access roads, drainage channels, and earthworks planned in careful consideration of local terrain and hydrological conditions.',
    applicableStandardsNote:
      'applicable Nigerian regulations and recognized engineering standards appropriate to project requirements.',
  },
  {
    id: 'exp-2',
    code: 'STRUCTURAL ANALYSIS',
    title: 'Structural Design & Technical Analysis',
    category: 'Structural Engineering',
    description:
      'Structural design for reinforced concrete and steel framed structures, focusing on structural stability, functional layout, and material efficiency.',
    applicableStandardsNote:
      'applicable Nigerian regulations and recognized engineering standards appropriate to project requirements.',
  },
  {
    id: 'exp-3',
    code: 'DEVELOPMENT PLANNING',
    title: 'Property Development Planning',
    category: 'Property & Real Estate',
    description:
      'Development planning integrating architectural conception, structural engineering feasibility, and commercial utility into balanced projects.',
    applicableStandardsNote:
      'applicable Nigerian regulations and recognized engineering standards appropriate to project requirements.',
  },
  {
    id: 'exp-4',
    code: 'SITE COORDINATION',
    title: 'Project Coordination & Site Oversight',
    category: 'Project Management',
    description:
      'Disciplined site coordination and milestone oversight supporting our core philosophy to “Plan Well. Build Once.”',
    applicableStandardsNote:
      'applicable Nigerian regulations and recognized engineering standards appropriate to project requirements.',
  },
];

export const CAPABILITY_ARCHETYPES: CapabilityArchetype[] = [
  {
    id: 'arch-01',
    code: 'BUILDING WORKS',
    title: 'Commercial & Multi-Storey Building Works',
    division: 'AUREXON CONSTRUCT',
    category: 'Building Construction',
    scopeOverview:
      'General construction execution capabilities for commercial, institutional, and residential facilities, emphasizing framed structures and quality site supervision.',
    technicalHighlights: [
      'Framed reinforced concrete superstructure execution',
      'Coordinated trade and contractor site management',
      'Structured quality checks during construction phases',
    ],
  },
  {
    id: 'arch-02',
    code: 'CIVIL & DRAINAGE',
    title: 'Civil Works & Drainage Infrastructure',
    division: 'AUREXON ENGINEERING',
    category: 'Civil & Structural Design',
    scopeOverview:
      'Engineering consultancy for access roads, stormwater drainage systems, and site infrastructure adapted to Nigerian terrain and weather patterns.',
    technicalHighlights: [
      'Hydrological evaluation and stormwater channel design',
      'Pavement layer specification and site preparation',
      'Periodic engineering supervision and compliance reviews',
    ],
  },
  {
    id: 'arch-03',
    code: 'PROPERTY PROJECTS',
    title: 'Residential & Mixed-Use Property Development',
    division: 'AUREXON PROPERTIES',
    category: 'Property Development',
    scopeOverview:
      'End-to-end development philosophy spanning land planning, engineering-integrated design, delivery coordination, and property management.',
    technicalHighlights: [
      'Master planning and infrastructure integration',
      'Development feasibility and spatial planning',
      'Long-term property upkeep and asset management',
    ],
  },
];

export const PROPERTY_PHILOSOPHY_STAGES: PropertyPhilosophyStage[] = [
  {
    step: 1,
    phase: 'LAND',
    title: 'Site Evaluation & Land Planning',
    description:
      'Evaluating location dynamics, terrain suitability, boundary verification, and initial access viability before committing resources.',
    keyMilestones: ['Site inspection & review', 'Title due diligence verification', 'Initial terrain assessment'],
  },
  {
    step: 2,
    phase: 'PLANNING',
    title: 'Development Planning & Feasibility',
    description:
      'Assessing density, preliminary cost models, and statutory alignment with relevant local planning authorities.',
    keyMilestones: ['Preliminary master layout', 'Zoning & regulatory review', 'Financial feasibility evaluation'],
  },
  {
    step: 3,
    phase: 'DESIGN',
    title: 'Architectural & Spatial Conception',
    description:
      'Developing practical architectural designs that balance aesthetic form, functional spatial utility, and local climate realities.',
    keyMilestones: ['Conceptual spatial drawings', 'Ventilation & daylight planning', 'Material schedule drafting'],
  },
  {
    step: 4,
    phase: 'ENGINEERING',
    title: 'Structural & Technical Coordination',
    description:
      'Applying civil and structural engineering principles early to design stable foundation and structural framing solutions.',
    keyMilestones: ['Preliminary structural review', 'Foundation sizing considerations', 'Services coordination'],
  },
  {
    step: 5,
    phase: 'CONSTRUCTION',
    title: 'Construction Execution',
    description:
      'Managing physical site operations in line with project specifications, reinforcing our core principle to "Plan Well. Build Once."',
    keyMilestones: ['Site safety coordination', 'Workmanship quality checks', 'Milestone progress tracking'],
  },
  {
    step: 6,
    phase: 'PROPERTY DELIVERY',
    title: 'Inspection & Project Handover',
    description:
      'Conducting systematic snagging reviews, finishing inspections, and formal handover to clients or operating teams.',
    keyMilestones: ['Snag list identification & resolution', 'Functional inspections', 'Handover documentation'],
  },
  {
    step: 7,
    phase: 'SALE / LEASE',
    title: 'Commercial Placement & Tenancy',
    description:
      'Structuring transparent property sale and leasing agreements with clear contractual terms for buyers and tenants.',
    keyMilestones: ['Clear contract terms', 'Tenancy documentation', 'Occupancy coordination'],
  },
  {
    step: 8,
    phase: 'LONG-TERM VALUE',
    title: 'Asset Stewardship & Property Management',
    description:
      'Providing ongoing property management and maintenance coordination to support enduring property value.',
    keyMilestones: ['Preventive maintenance scheduling', 'Facility oversight practices', 'Sustained property upkeep'],
  },
];

export const AUREXON_PROCESS_STAGES: ProcessStage[] = [
  {
    step: 1,
    stage: 'PLAN',
    subtitle: 'Project Definition & Initial Review',
    description:
      'Our approach emphasizes defining project scope, site parameters, and preliminary timelines before mobilization.',
    gateCriteria: [
      'Project scope and objective definition',
      'Site factors and regulatory awareness',
      'Initial cost and timeline alignment',
    ],
  },
  {
    step: 2,
    stage: 'DESIGN',
    subtitle: 'Architectural & Spatial Planning',
    description:
      'Translating project requirements into practical, constructible designs suited to local environmental conditions.',
    gateCriteria: [
      'Functional spatial layout planning',
      'Constructability considerations',
      'Client review and design alignment',
    ],
  },
  {
    step: 3,
    stage: 'ENGINEER',
    subtitle: 'Structural & Technical Analysis',
    description:
      'Conducting civil and structural engineering calculations to support structural stability and efficient material usage.',
    gateCriteria: [
      'Structural engineering review',
      'Technical specification alignment',
      'Multidisciplinary engineering coordination',
    ],
  },
  {
    step: 4,
    stage: 'EXECUTE',
    subtitle: 'Site Construction & Oversight',
    description:
      'Carrying out construction activities under active site supervision and quality checks tailored to project scope.',
    gateCriteria: [
      'Disciplined site coordination',
      'Material verification to specifications',
      'Periodic progress and safety monitoring',
    ],
  },
  {
    step: 5,
    stage: 'DELIVER',
    subtitle: 'Inspection & Handover',
    description:
      'Conducting systematic inspections, addressing snagging items, and completing structured handover documentation.',
    gateCriteria: [
      'Final walk-through inspection',
      'Resolution of snagging items',
      'Project handover documentation',
    ],
  },
  {
    step: 6,
    stage: 'CREATE LONG-TERM VALUE',
    subtitle: 'Enduring Asset Performance',
    description:
      'We seek to deliver structures that stand the test of time through sound engineering and practical maintenance planning.',
    gateCriteria: [
      'Maintenance recommendations',
      'Operational guidance for facility users',
      'Long-term value stewardship',
    ],
  },
];

export const WHY_AUREXON_PILLARS = [
  {
    number: '01',
    title: '“Plan Well. Build Once.” Philosophy',
    description:
      'Our approach emphasizes disciplined upfront planning and sound engineering practices. We aim to prevent avoidable delays, material wastage, and on-site rework before physical construction begins.',
  },
  {
    number: '02',
    title: 'Multidisciplinary Coordination',
    description:
      'Bringing together construction execution, engineering consultancy, and property development under one roof helps improve collaboration between design and site delivery.',
  },
  {
    number: '03',
    title: 'Local Context & Relevant Standards',
    description:
      'We seek to combine an understanding of local site, soil, and climatic conditions with applicable Nigerian regulations and recognized engineering standards appropriate to project requirements.',
  },
  {
    number: '04',
    title: 'Commitment to Structural Quality',
    description:
      'We aim to execute foundations, structural elements, and civil works with diligence, avoiding shortcut practices and prioritizing durable craftsmanship.',
  },
];

export const INSIGHTS_PREVIEW: InsightPreviewItem[] = [
  {
    id: 'ins-01',
    slug: 'mitigating-rework-in-nigerian-construction',
    title: 'The Role of Upfront Planning in Mitigating Construction Rework',
    category: 'Engineering Perspective',
    readTime: '4 min read',
    date: 'Perspective Brief',
    excerpt:
      'A technical discussion on how thorough geotechnical reviews and structural coordination before groundbreaking help avoid alterations during construction.',
    isDemoContent: true,
  },
  {
    id: 'ins-02',
    slug: 'infrastructure-drainage-hydrology-planning',
    title: 'Hydrological Considerations for Resilient Road and Drainage Works',
    category: 'Civil Infrastructure',
    readTime: '4 min read',
    date: 'Perspective Brief',
    excerpt:
      'Examining drainage and pavement design practices that respond effectively to heavy seasonal rainfall in Nigerian metropolitan and regional environments.',
    isDemoContent: true,
  },
  {
    id: 'ins-03',
    slug: 'property-development-value-chain',
    title: 'The 8-Stage Property Development Value Chain: From Land to Value',
    category: 'Property Development',
    readTime: '5 min read',
    date: 'Perspective Brief',
    excerpt:
      'How integrating engineering discipline with site evaluation and master planning supports sound, enduring property developments.',
    isDemoContent: true,
  },
];
