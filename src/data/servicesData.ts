export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  primaryDivision: 'AUREXON CONSTRUCT' | 'AUREXON ENGINEERING' | 'AUREXON PROPERTIES';
  divisionShort: 'CONSTRUCT' | 'ENGINEERING' | 'PROPERTIES';
  description: string;
  link: string;
  divisionBadge: string;
}

export interface ServiceDeliveryStep {
  step: string;
  title: string;
  summary: string;
}

export interface DivisionOverviewPanel {
  id: string;
  name: string;
  badge: string;
  code: string;
  description: string;
  buttonText: string;
  link: string;
}

export const APPROVED_SERVICES: ServiceItem[] = [
  {
    id: 'building-construction',
    number: '01',
    name: 'Building Construction',
    primaryDivision: 'AUREXON CONSTRUCT',
    divisionShort: 'CONSTRUCT',
    description:
      'Building construction services covering project execution, site coordination and delivery of building works according to defined project requirements.',
    link: '/businesses/construct',
    divisionBadge: 'CONSTRUCTION DIVISION',
  },
  {
    id: 'civil-works-infrastructure',
    number: '02',
    name: 'Civil Works & Infrastructure',
    primaryDivision: 'AUREXON CONSTRUCT',
    divisionShort: 'CONSTRUCT',
    description:
      'Civil works and infrastructure execution including site development and related construction activities according to project scope.',
    link: '/businesses/construct',
    divisionBadge: 'CONSTRUCTION DIVISION',
  },
  {
    id: 'civil-structural-engineering',
    number: '03',
    name: 'Civil & Structural Engineering',
    primaryDivision: 'AUREXON ENGINEERING',
    divisionShort: 'ENGINEERING',
    description:
      'Civil and structural engineering services supporting analysis, design, technical coordination and project requirements.',
    link: '/businesses/engineering',
    divisionBadge: 'ENGINEERING DIVISION',
  },
  {
    id: 'engineering-design-consultancy',
    number: '04',
    name: 'Engineering Design & Consultancy',
    primaryDivision: 'AUREXON ENGINEERING',
    divisionShort: 'ENGINEERING',
    description:
      'Engineering design, technical consultancy and professional coordination supporting informed project planning and delivery.',
    link: '/businesses/engineering',
    divisionBadge: 'ENGINEERING DIVISION',
  },
  {
    id: 'project-management',
    number: '05',
    name: 'Project Management',
    primaryDivision: 'AUREXON ENGINEERING',
    divisionShort: 'ENGINEERING',
    description:
      'Project planning, coordination, monitoring and management support across defined project requirements and delivery structures.',
    link: '/businesses/engineering',
    divisionBadge: 'ENGINEERING DIVISION',
  },
  {
    id: 'construction-management',
    number: '06',
    name: 'Construction Management',
    primaryDivision: 'AUREXON CONSTRUCT',
    divisionShort: 'CONSTRUCT',
    description:
      'Construction coordination and management focused on organized execution, progress monitoring, quality-conscious delivery and site coordination.',
    link: '/businesses/construct',
    divisionBadge: 'CONSTRUCTION DIVISION',
  },
  {
    id: 'property-development',
    number: '07',
    name: 'Property Development',
    primaryDivision: 'AUREXON PROPERTIES',
    divisionShort: 'PROPERTIES',
    description:
      'Property development from land and planning considerations through design, engineering, construction and property delivery.',
    link: '/businesses/properties',
    divisionBadge: 'PROPERTY DIVISION',
  },
  {
    id: 'real-estate-investment',
    number: '08',
    name: 'Real Estate Investment',
    primaryDivision: 'AUREXON PROPERTIES',
    divisionShort: 'PROPERTIES',
    description:
      'Real estate development and investment activities considered within defined property, land, planning, technical and commercial structures.',
    link: '/businesses/properties',
    divisionBadge: 'PROPERTY DIVISION',
  },
  {
    id: 'planning-supervision-delivery',
    number: '09',
    name: 'Planning, Supervision & Delivery',
    primaryDivision: 'AUREXON ENGINEERING',
    divisionShort: 'ENGINEERING',
    description:
      'Planning, supervision, coordination and delivery support across technical and project requirements.',
    link: '/businesses/engineering',
    divisionBadge: 'ENGINEERING DIVISION',
  },
];

export const SERVICE_DELIVERY_STEPS: ServiceDeliveryStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    summary:
      'Evaluate project requirements, site conditions, client objectives, constraints and regulatory considerations.',
  },
  {
    step: '02',
    title: 'PLAN',
    summary:
      'Establish technical approach, project scheduling, resource requirements and delivery parameters.',
  },
  {
    step: '03',
    title: 'DESIGN',
    summary:
      'Coordinate spatial, architectural, civil and functional designs responsive to project specifications.',
  },
  {
    step: '04',
    title: 'ENGINEER',
    summary:
      'Conduct rigorous structural calculations, geotechnical analysis and technical verification.',
  },
  {
    step: '05',
    title: 'EXECUTE',
    summary:
      'Mobilize disciplined construction, site coordination, fabrication and physical works delivery.',
  },
  {
    step: '06',
    title: 'MONITOR',
    summary:
      'Maintain continuous quality supervision, specification checks, progress tracking and safety oversight.',
  },
  {
    step: '07',
    title: 'DELIVER',
    summary:
      'Complete inspections, handover documentation and transition to intended operational or asset use.',
  },
];

export const DIVISION_CONNECTION_PANELS: DivisionOverviewPanel[] = [
  {
    id: 'construct',
    name: 'AUREXON CONSTRUCT',
    badge: 'CONSTRUCTION DIVISION',
    code: 'DIV-01 // EXECUTION & WORKS',
    description:
      'Building construction, civil works, infrastructure, site development, construction management and project execution.',
    buttonText: 'EXPLORE CONSTRUCT',
    link: '/businesses/construct',
  },
  {
    id: 'engineering',
    name: 'AUREXON ENGINEERING',
    badge: 'ENGINEERING DIVISION',
    code: 'DIV-02 // DESIGN & SUPERVISION',
    description:
      'Civil and structural engineering, engineering design, consultancy, planning, supervision and project management.',
    buttonText: 'EXPLORE ENGINEERING',
    link: '/businesses/engineering',
  },
  {
    id: 'properties',
    name: 'AUREXON PROPERTIES',
    badge: 'PROPERTY DIVISION',
    code: 'DIV-03 // ASSET & DEVELOPMENT',
    description:
      'Property development, real estate investment, property sales, leasing and land-to-property development.',
    buttonText: 'EXPLORE PROPERTIES',
    link: '/businesses/properties',
  },
];
