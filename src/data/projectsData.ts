import {
  ProjectRecord,
  ProjectCategoryItem,
  ProjectDeliveryStep,
  ProjectInformationPrinciple,
} from '../types.ts';

/**
 * AUREXON CONSTRUCTS NIGERIA LIMITED
 * Projects Directory Data Architecture
 * 
 * CRITICAL POLICY:
 * In accordance with corporate governance and responsible project presentation,
 * no unverified, speculative, or fabricated project records are published.
 * The PROJECTS collection starts empty and will be populated only with
 * formally approved, verified corporate project records.
 */
export const PROJECTS: ProjectRecord[] = [];

/**
 * Project Categories
 * Operational and technical domains of project capability.
 * These describe functional categories of competence, not a claim of historical completed projects.
 */
export const PROJECT_CATEGORIES: ProjectCategoryItem[] = [
  {
    id: 'building-construction',
    number: '01',
    title: 'BUILDING CONSTRUCTION',
    description:
      'Execution of structural, architectural, and commercial building developments, ranging from residential schemes to institutional and industrial facilities.',
    scopeAreas: [
      'Residential & commercial buildings',
      'Institutional & administrative facilities',
      'Structural shell & core execution',
      'Reinforced concrete & steel frame construction',
      'Interior fit-out coordination & finishes',
    ],
    divisions: ['AUREXON CONSTRUCT'],
  },
  {
    id: 'civil-works-infrastructure',
    number: '02',
    title: 'CIVIL WORKS & INFRASTRUCTURE',
    description:
      'Civil infrastructure engineering and construction including site preparation, earthworks, drainage networks, internal roads, and access corridors.',
    scopeAreas: [
      'Site preparation, clearing & bulk earthworks',
      'Access roadways, pavements & hardscaping',
      'Stormwater drainage channels & culverts',
      'Perimeter retaining walls & perimeter civil works',
      'Subsurface utility ducting & trenching',
    ],
    divisions: ['AUREXON CONSTRUCT', 'AUREXON ENGINEERING'],
  },
  {
    id: 'engineering-structural-works',
    number: '03',
    title: 'ENGINEERING & STRUCTURAL WORKS',
    description:
      'Detailed civil and structural design analysis, calculations, foundation engineering, reinforcement detailing, and technical construction supervision.',
    scopeAreas: [
      'Structural design & numerical analysis',
      'Foundation engineering & geotechnical coordination',
      'Reinforced concrete & structural steel detailing',
      'Structural integrity evaluations & assessments',
      'Engineering consultancy & site technical supervision',
    ],
    divisions: ['AUREXON ENGINEERING'],
  },
  {
    id: 'project-construction-management',
    number: '04',
    title: 'PROJECT & CONSTRUCTION MANAGEMENT',
    description:
      'Disciplined technical coordination, schedule tracking, procurement sequencing, quality assurance, and site supervision across all phases of delivery.',
    scopeAreas: [
      'Project planning & baseline milestone scheduling',
      'Bills of Quantities (BOQ) & material specification review',
      'On-site construction supervision & quality control',
      'Contractor coordination & subcontractor management',
      'Health, safety, and environmental (HSE) oversight',
    ],
    divisions: ['AUREXON CONSTRUCT', 'AUREXON ENGINEERING'],
  },
  {
    id: 'property-development',
    number: '05',
    title: 'PROPERTY DEVELOPMENT',
    description:
      'Development structuring, residential community master planning, commercial property creation, and integrated real estate asset realization.',
    scopeAreas: [
      'Site evaluation & development planning',
      'Residential estate master planning & layout coordination',
      'Commercial & mixed-use scheme conception',
      'Integrated engineering-to-construction execution',
      'Long-term property value realization & asset delivery',
    ],
    divisions: ['AUREXON PROPERTIES'],
  },
  {
    id: 'renovation-improvement',
    number: '06',
    title: 'RENOVATION & IMPROVEMENT',
    description:
      'Structural rehabilitation, building modernization, adaptive reuse, envelope refurbishment, and facility improvements for existing properties.',
    scopeAreas: [
      'Structural strengthening & member rehabilitation',
      'Architectural retrofits & facility modernization',
      'Building envelope restoration & waterproofing',
      'Space reconfiguration & adaptive interior remodeling',
      'Infrastructure upgrades & remedial civil works',
    ],
    divisions: ['AUREXON CONSTRUCT', 'AUREXON ENGINEERING'],
  },
];

/**
 * Project Delivery Sequence
 * A structured, phased approach adaptable to project scope and commercial structure.
 */
export const PROJECT_DELIVERY_STEPS: ProjectDeliveryStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    subtitle: 'Requirements Definition',
    description:
      'Clarifying client objectives, functional requirements, site conditions, regulatory parameters, and commercial constraints.',
    focus: 'Requirement clarity & baseline parameters',
  },
  {
    step: '02',
    title: 'PLAN',
    subtitle: 'Strategic & Technical Planning',
    description:
      'Establishing project methodology, procurement schedules, resource allocation, and sequence planning before site deployment.',
    focus: 'Program schedule & logistical feasibility',
  },
  {
    step: '03',
    title: 'DESIGN',
    subtitle: 'Architectural & Spatial Synthesis',
    description:
      'Coordinating architectural concepts, functional layouts, spatial configurations, and statutory compliance documents.',
    focus: 'Spatial efficiency & regulatory compliance',
  },
  {
    step: '04',
    title: 'ENGINEER',
    subtitle: 'Structural & Technical Rigor',
    description:
      'Performing engineering calculations, structural modeling, foundation analysis, and technical specifications.',
    focus: 'Structural integrity & buildability analysis',
  },
  {
    step: '05',
    title: 'EXECUTE',
    subtitle: 'Disciplined Construction Operations',
    description:
      'Deploying skilled supervision, quality-controlled materials, and disciplined site workmanship according to engineering drawings.',
    focus: 'Workmanship standards & site coordination',
  },
  {
    step: '06',
    title: 'MONITOR',
    subtitle: 'Quality & Schedule Control',
    description:
      'Continuous inspection, milestone tracking, technical verification, and health & safety compliance across active site works.',
    focus: 'Quality assurance & risk mitigation',
  },
  {
    step: '07',
    title: 'DELIVER',
    subtitle: 'Commissioning & Handover',
    description:
      'Comprehensive inspection, snag resolution, operational documentation, and formal handover to client or facility operations.',
    focus: 'Handover integrity & operational readiness',
  },
];

/**
 * Division Connections
 * Three operational divisions delivering connected project capabilities.
 */
export const PROJECT_DIVISION_PANELS = [
  {
    id: 'construct',
    number: '01',
    name: 'AUREXON CONSTRUCT',
    tagline: 'Construction Execution & Infrastructure Delivery',
    description:
      'Building construction, civil works, infrastructure, site development, construction management and project execution.',
    buttonText: 'EXPLORE CONSTRUCT',
    buttonLink: '/businesses/construct',
    accentColor: '#C5A869',
  },
  {
    id: 'engineering',
    number: '02',
    name: 'AUREXON ENGINEERING',
    tagline: 'Civil, Structural & Technical Consultancy',
    description:
      'Civil and structural engineering, engineering design, consultancy, planning, supervision and project management.',
    buttonText: 'EXPLORE ENGINEERING',
    buttonLink: '/businesses/engineering',
    accentColor: '#4A90E2',
  },
  {
    id: 'properties',
    number: '03',
    name: 'AUREXON PROPERTIES',
    tagline: 'Development & Real Estate Capabilities',
    description:
      'Property development and related real estate capabilities.',
    buttonText: 'EXPLORE PROPERTIES',
    buttonLink: '/businesses/properties',
    accentColor: '#50E3C2',
  },
];

/**
 * Responsible Project Presentation Principles
 * Corporate commitments ensuring accuracy, confidentiality, and truth in advertising.
 */
export const RESPONSIBLE_PRESENTATION_PRINCIPLES: ProjectInformationPrinciple[] = [
  {
    number: '01',
    title: 'VERIFIED INFORMATION',
    description:
      'Only approved project information should be presented as factual AUREXON portfolio content.',
  },
  {
    number: '02',
    title: 'CLEAR STATUS',
    description:
      'Projects should clearly distinguish proposed, ongoing, completed, illustrative or other approved status.',
  },
  {
    number: '03',
    title: 'CLIENT CONFIDENTIALITY',
    description:
      'Confidential client, commercial, technical or contractual information should not be published without authorization.',
  },
  {
    number: '04',
    title: 'AUTHORISED IMAGERY',
    description:
      'Project photographs, drawings, renders and other visual materials must have appropriate rights or permission for publication.',
  },
  {
    number: '05',
    title: 'TECHNICAL ACCURACY',
    description:
      'Technical descriptions should reflect the approved project record and should not exaggerate AUREXON\'s role.',
  },
];
