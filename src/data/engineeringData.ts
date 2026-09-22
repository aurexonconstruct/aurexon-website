import {
  EngineeringCapability,
  EngineeringApproachStep,
  EngineeringProjectCategory,
} from '../types.ts';

export const ENGINEERING_DETAILS = {
  divisionName: 'AUREXON ENGINEERING',
  shortName: 'ENGINEERING',
  legalEntityNotice:
    'AUREXON ENGINEERING is a business division of AUREXON CONSTRUCTS NIGERIA LIMITED (RC: 9729028). It is an operational unit and not an independently incorporated company or separate legal entity.',
  slogan: 'ENGINEERING THE PLAN. SUPPORTING THE DELIVERY.',
  heroDescription:
    'AUREXON ENGINEERING provides civil and structural engineering expertise supporting planning, design, consultancy, supervision and project delivery.',
};

export const ENGINEERING_CAPABILITIES: EngineeringCapability[] = [
  {
    letter: 'A',
    title: 'CIVIL ENGINEERING',
    description:
      'Civil engineering services supporting infrastructure, site development and other civil works according to defined project requirements.',
    scopeHighlights: [
      'Site development, grading and earthworks planning',
      'Drainage networks and stormwater routing analysis',
      'Internal accessways, pavement, and infrastructure alignment',
    ],
    technicalCode: 'ENG-01 // CIV-ENG',
  },
  {
    letter: 'B',
    title: 'STRUCTURAL ENGINEERING',
    description:
      'Structural engineering support involving structural understanding, analysis, design and technical coordination according to project requirements and applicable standards.',
    scopeHighlights: [
      'Structural framing analysis and system evaluation',
      'Substructure and foundation design coordination',
      'Structural detailing and reinforcement specifications',
    ],
    technicalCode: 'ENG-02 // STRUCT-ENG',
  },
  {
    letter: 'C',
    title: 'ENGINEERING DESIGN',
    description:
      'Development and coordination of engineering design information to support project planning and execution.',
    scopeHighlights: [
      'Production of clear technical drawings and details',
      'Cross-disciplinary design harmonization and coordination',
      'Constructability review and material specification drafting',
    ],
    technicalCode: 'ENG-03 // ENG-DESIGN',
  },
  {
    letter: 'D',
    title: 'ENGINEERING CONSULTANCY',
    description:
      'Technical engineering advice and consultancy support according to the defined scope and requirements of an engagement.',
    scopeHighlights: [
      'Early-stage technical feasibility and site evaluation',
      'Engineering reviews of third-party proposals and plans',
      'Specialized engineering problem-solving and advisory',
    ],
    technicalCode: 'ENG-04 // CONSULT',
  },
  {
    letter: 'E',
    title: 'PLANNING & SUPERVISION',
    description:
      'Engineering planning, site supervision and monitoring where required by project scope and engagement.',
    scopeHighlights: [
      'Technical milestone scheduling and inspection programs',
      'Verification of works against approved engineering drawings',
      'On-site technical issue clarification and monitoring',
    ],
    technicalCode: 'ENG-05 // PLAN-SUPERV',
  },
  {
    letter: 'F',
    title: 'PROJECT MANAGEMENT',
    description:
      'Project planning, coordination, monitoring and management support across defined engineering and construction activities.',
    scopeHighlights: [
      'Inter-trade coordination across technical disciplines',
      'Progress tracking against established technical programs',
      'Systematic engineering documentation and reporting',
    ],
    technicalCode: 'ENG-06 // PROJ-MGMT',
  },
];

export const ENGINEERING_APPROACH_STEPS: EngineeringApproachStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    summary: 'Establish the project objectives, scope, constraints and technical requirements.',
    description:
      'Engaging early with the client and project documentation to define boundaries, site conditions, architectural intentions, and statutory constraints before technical work begins.',
    keyActions: [
      'Review of project objectives and functional client brief',
      'Evaluation of site physical constraints and boundary parameters',
      'Identification of required engineering deliverables and scope boundaries',
    ],
  },
  {
    step: '02',
    title: 'ANALYSE',
    summary: 'Assess relevant technical information and engineering requirements.',
    description:
      'Conducting structured engineering assessments including load calculations, structural behavior evaluations, geotechnical data reviews, and stormwater flow modeling.',
    keyActions: [
      'Evaluation of geotechnical reports and foundation soil capacity',
      'Structural load analysis and design condition assessment',
      'Site topography and hydraulic drainage evaluation',
    ],
  },
  {
    step: '03',
    title: 'DESIGN',
    summary: 'Develop appropriate engineering solutions and documentation within the defined scope.',
    description:
      'Developing coordinated engineering drawings, schedules, details, and technical specifications that translate analytical findings into buildable instructions.',
    keyActions: [
      'Preparation of structural and civil engineering drawings',
      'Detailing of reinforcement schedules, joints, and connections',
      'Drafting of clear technical specifications and material criteria',
    ],
  },
  {
    step: '04',
    title: 'COORDINATE',
    summary: 'Coordinate technical information with relevant project participants and disciplines.',
    description:
      'Aligning engineering outputs with architectural concepts, services design, and client requirements to eliminate geometric or technical conflicts before site mobilization.',
    keyActions: [
      'Cross-check of engineering plans against architectural layouts',
      'Resolution of inter-disciplinary spatial and technical interfaces',
      'Active communication with client representatives and consultants',
    ],
  },
  {
    step: '05',
    title: 'SUPERVISE',
    summary: 'Where included in the engagement, support monitoring and supervision of relevant works.',
    description:
      'Providing engineering oversight on site during critical construction phases to verify that physical execution aligns faithfully with approved engineering documentation.',
    keyActions: [
      'Periodic or full-time site inspection as defined in the scope',
      'Verification of reinforcement placement, formwork, and foundation works',
      'Direct technical guidance on unexpected ground or site conditions',
    ],
  },
  {
    step: '06',
    title: 'DELIVER',
    summary: 'Support the project through technical coordination and responsible engineering input.',
    description:
      'Systematic consolidation of as-built records, technical documentation, inspection logs, and responsible engineering handover to support long-term asset integrity.',
    keyActions: [
      'Review and compilation of engineering as-built information',
      'Final technical coordination sign-off within defined engagement scope',
      'Handover of comprehensive technical project documentation',
    ],
  },
];

export const CIVIL_CAPABILITIES_BREAKDOWN = {
  title: 'Civil Engineering',
  subtitle: 'Ground, Infrastructure & Site Backbone',
  description:
    'Civil engineering provides the foundational framework that connects a project to its physical environment, managing site topography, earthworks, water movement, and physical access.',
  focusAreas: [
    {
      name: 'Infrastructure Works',
      description: 'Engineering planning for site backbone services, utility corridors, and essential physical networks.',
    },
    {
      name: 'Drainage & Site Development',
      description: 'Hydraulic drainage networks, surface stormwater management, retention structures, and runoff routing.',
    },
    {
      name: 'Earthworks & Grading',
      description: 'Cut-and-fill analysis, slope stabilization, ground platform preparation, and earth retention coordination.',
    },
    {
      name: 'Roads & Civil Works',
      description: 'Internal estate roads, paved accessways, curbs, culverts, and circulation layout engineering.',
    },
    {
      name: 'Broader Civil Requirements',
      description: 'Site perimeter containment, boundary civil elements, and municipal utility tie-in considerations.',
    },
  ],
};

export const STRUCTURAL_CAPABILITIES_BREAKDOWN = {
  title: 'Structural Engineering',
  subtitle: 'Stability, Load Paths & Built Resilience',
  description:
    'Structural engineering addresses the stability, strength, and durability of physical structures, ensuring that load paths from roof to foundation are clearly calculated and detailed.',
  focusAreas: [
    {
      name: 'Structural Systems',
      description: 'Selection and configuration of reinforced concrete frames, steel trusses, masonry, and hybrid structural arrangements.',
    },
    {
      name: 'Structural Analysis',
      description: 'Mathematical analysis of vertical, lateral, dead, and live loads acting on building elements.',
    },
    {
      name: 'Structural Design',
      description: 'Dimensioning of beams, columns, slabs, foundation footings, and load-bearing walls.',
    },
    {
      name: 'Reinforcement & Construction Documentation',
      description: 'Preparation of precise rebar bending schedules, detailing drawings, and concrete specifications.',
    },
    {
      name: 'Technical Coordination',
      description: 'Harmonization of structural frames with architectural requirements and service penetrations.',
    },
  ],
};

export const LIFECYCLE_STAGES = [
  {
    phase: 'Phase 01',
    title: 'Planning & Feasibility',
    timing: 'Early Project Stage',
    description:
      'Reviewing site physical viability, soil suitability considerations, preliminary structural schemes, and technical constraints to guide informed capital decisions.',
  },
  {
    phase: 'Phase 02',
    title: 'Design & Detailed Analysis',
    timing: 'Pre-Construction Stage',
    description:
      'Performing rigorous engineering calculations, producing detailed structural and civil drawings, and formulating clear technical specifications for execution.',
  },
  {
    phase: 'Phase 03',
    title: 'Inter-Disciplinary Coordination',
    timing: 'Procurement & Mobilization',
    description:
      'Resolving technical clashes between architectural layouts, mechanical/electrical routing, and structural frames to ensure constructability before work starts.',
  },
  {
    phase: 'Phase 04',
    title: 'Site Supervision & Monitoring',
    timing: 'Construction & Delivery',
    description:
      'Where engaged by contract, conducting milestone inspections, reviewing rebar placement and concrete pours, and addressing unforeseen site engineering queries.',
  },
];

export const TECHNICAL_DISCIPLINE_PRINCIPLES = [
  {
    title: 'Attention to Defined Project Requirements',
    description:
      'Every engineering engagement begins with meticulous assessment of client goals, site parameters, and defined project briefs, avoiding arbitrary or uncoordinated solutions.',
  },
  {
    title: 'Appropriate Engineering Analysis',
    description:
      'Structural and civil calculations are performed with methodical rigor based on sound mechanics and recognized engineering principles appropriate to the structure type.',
  },
  {
    title: 'Coordinated Technical Documentation',
    description:
      'Engineering drawings, calculation sheets, and specifications are clearly annotated and structured to avoid ambiguity on site or in procurement.',
  },
  {
    title: 'Clear Cross-Discipline Communication',
    description:
      'Maintaining continuous, professional dialogue with clients, architects, builders, and specialists to ensure technical alignment across all stages.',
  },
  {
    title: 'Design & Construction Coordination',
    description:
      'Actively evaluating constructability to ensure that calculated designs can be executed safely, practically, and efficiently under real-world site conditions.',
  },
  {
    title: 'Technical Review Appropriate to the Engagement',
    description:
      'Internal peer checks and systematic drawing reviews ensure consistency of dimensions, load assumptions, and material notations.',
  },
  {
    title: 'Regulatory & Recognized Standards Consideration',
    description:
      'Engineering solutions adhere to applicable Nigerian building codes, town planning requirements, and recognized professional engineering standards relevant to the project.',
  },
  {
    title: 'Responsible Documentation & Project Records',
    description:
      'Maintaining orderly calculation files, revision histories, transmittal logs, and as-built notes for long-term accountability and client records.',
  },
];

export const ENGINEERING_PROJECT_CATEGORIES: EngineeringProjectCategory[] = [
  {
    id: 'building-structures',
    code: 'CAT-01',
    title: 'Building Structures',
    description:
      'Engineering analysis, framing design, and structural detailing for residential, commercial, administrative, and institutional building projects.',
    scopeOverview: [
      'Reinforced concrete framing and slab systems',
      'Structural masonry and load-bearing evaluations',
      'Substructure and foundation engineering',
    ],
  },
  {
    id: 'civil-infrastructure',
    code: 'CAT-02',
    title: 'Civil Infrastructure',
    description:
      'Civil engineering support for infrastructure networks, site utility containment, ground infrastructure, and essential connectivity corridors.',
    scopeOverview: [
      'Site utility containment corridors',
      'Ground infrastructure and earth retention',
      'Civil connectivity and access networks',
    ],
  },
  {
    id: 'site-development',
    code: 'CAT-03',
    title: 'Site Development',
    description:
      'Topographical evaluation, site grading plans, cut-and-fill modeling, and stormwater drainage engineering to establish stable building platforms.',
    scopeOverview: [
      'Terrain grading and earthworks modeling',
      'Stormwater drainage channels and retention',
      'Site platform preparation and stabilization',
    ],
  },
  {
    id: 'structural-design',
    code: 'CAT-04',
    title: 'Structural Design',
    description:
      'Dedicated structural calculations, framing layout development, and reinforcement schedules prepared to recognized technical standards.',
    scopeOverview: [
      'Comprehensive structural calculation sheets',
      'Detailed rebar bending schedules and notations',
      'Structural member sizing and specification',
    ],
  },
  {
    id: 'civil-engineering-works',
    code: 'CAT-05',
    title: 'Civil Engineering Works',
    description:
      'Engineering design and technical support for internal access roads, paved compounds, culverts, retaining walls, and perimeter civil works.',
    scopeOverview: [
      'Internal access road and pavement design',
      'Drainage culverts and outfall coordination',
      'Perimeter boundary walls and civil structures',
    ],
  },
  {
    id: 'engineering-consultancy',
    code: 'CAT-06',
    title: 'Engineering Consultancy',
    description:
      'Independent technical reviews, condition evaluations, structural advisory, and feasibility assessments tailored to specific client mandates.',
    scopeOverview: [
      'Pre-acquisition technical feasibility reviews',
      'Independent third-party design audits',
      'Specialized engineering advisory services',
    ],
  },
  {
    id: 'construction-stage-support',
    code: 'CAT-07',
    title: 'Construction-Stage Technical Support',
    description:
      'Technical coordination during active construction, responding to requests for information (RFIs), clarifying drawing details, and reviewing site variations.',
    scopeOverview: [
      'RFI technical clarification and drawing resolution',
      'Site condition review and engineering adjustments',
      'Milestone construction inspection and reporting',
    ],
  },
  {
    id: 'project-management-assignments',
    code: 'CAT-08',
    title: 'Project Management Assignments',
    description:
      'Dedicated project management, milestone tracking, and inter-trade coordination across defined engineering, design, and construction activities.',
    scopeOverview: [
      'Technical program scheduling and monitoring',
      'Inter-disciplinary coordination and alignment',
      'Comprehensive milestone auditing and reporting',
    ],
  },
];
