/**
 * AUREXON CONSTRUCTS NIGERIA LIMITED
 * Core Type Definitions
 */

export interface NavItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    name: string;
    href: string;
    description: string;
    divisionId?: string;
  }[];
}

export interface BusinessDivision {
  id: string;
  number: string;
  name: string;
  brandTitle: string;
  scopeSummary: string;
  capabilities: string[];
  routePath: string;
  accentBadge: string;
}

export interface ExpertiseArea {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  applicableStandardsNote: string;
}

export interface CapabilityArchetype {
  id: string;
  code: string;
  title: string;
  division: 'AUREXON CONSTRUCT' | 'AUREXON ENGINEERING' | 'AUREXON PROPERTIES';
  category: string;
  scopeOverview: string;
  technicalHighlights: string[];
}

export interface CompanyMilestone {
  period: string;
  title: string;
  description: string;
}

export interface PropertyPhilosophyStage {
  step: number;
  phase: string;
  title: string;
  description: string;
  keyMilestones: string[];
}

export interface ProcessStage {
  step: number;
  stage: string;
  subtitle: string;
  description: string;
  gateCriteria: string[];
}

export interface InsightPreviewItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  isDemoContent: boolean;
}

export interface BusinessDivisionDetail {
  id: string;
  number: string;
  name: string;
  shortName: string;
  heading: string;
  badge: string;
  description: string;
  focusAreas: string[];
  ctaText: string;
  ctaLink: string;
  technicalCode: string;
}

export interface IntegratedFlowStep {
  step: number;
  stage: 'PLAN' | 'DESIGN' | 'ENGINEER' | 'EXECUTE' | 'DELIVER' | 'CREATE LONG-TERM VALUE';
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export interface ConstructCapability {
  letter: string;
  title: string;
  description: string;
  scopeHighlights: string[];
  technicalCode: string;
}

export interface ConstructApproachStep {
  step: string;
  title: 'PLAN' | 'COORDINATE' | 'EXECUTE' | 'MONITOR' | 'DELIVER';
  summary: string;
  description: string;
  keyActions: string[];
}

export interface ConstructProjectCategory {
  id: string;
  code: string;
  title: string;
  description: string;
  scopeOverview: string[];
}

export interface EngineeringCapability {
  letter: string;
  title: string;
  description: string;
  scopeHighlights: string[];
  technicalCode: string;
}

export interface EngineeringApproachStep {
  step: string;
  title: 'UNDERSTAND' | 'ANALYSE' | 'DESIGN' | 'COORDINATE' | 'SUPERVISE' | 'DELIVER';
  summary: string;
  description: string;
  keyActions: string[];
}

export interface EngineeringProjectCategory {
  id: string;
  code: string;
  title: string;
  description: string;
  scopeOverview: string[];
}

export interface PropertyCapability {
  letter: string;
  title: string;
  description: string;
  scopeHighlights: string[];
  categoryCode: string;
}

export interface PropertyApproachStep {
  step: string;
  title: 'UNDERSTAND' | 'PLAN' | 'DESIGN' | 'ENGINEER' | 'BUILD' | 'DELIVER';
  summary: string;
  description: string;
  keyActions: string[];
}

export interface PropertyOpportunityCategory {
  id: string;
  code: string;
  title: string;
  description: string;
  scopeOverview: string[];
}

export interface PropertyPrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  slug: string;
  category: string;
  division: 'AUREXON CONSTRUCT' | 'AUREXON ENGINEERING' | 'AUREXON PROPERTIES' | string;
  status: 'Proposed' | 'Ongoing' | 'Completed' | 'Illustrative' | string;
  location: string;
  year?: string;
  description: string;
  services: string[];
  image?: string;
  featured?: boolean;
}

export interface ProjectCategoryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  scopeAreas: string[];
  divisions: string[];
}

export interface ProjectDeliveryStep {
  step: string;
  title: 'UNDERSTAND' | 'PLAN' | 'DESIGN' | 'ENGINEER' | 'EXECUTE' | 'MONITOR' | 'DELIVER';
  subtitle: string;
  description: string;
  focus: string;
}

export interface ProjectInformationPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface PropertyRecord {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: 'Proposed' | 'Planned' | 'Ongoing' | 'Completed' | 'Available' | string;
  location: string;
  description: string;
  propertyType: string;
  developmentStage: string;
  image?: string;
  featured?: boolean;
}

export interface ResponsiblePropertyPresentationPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface InsightRecord {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  author?: string;
  publishedDate?: string;
  readingTime?: string;
  image?: string;
  featured?: boolean;
  status?: 'Draft' | 'Approved' | 'Published' | string;
}

export interface InsightCategoryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focusAreas: string[];
}

export interface KnowledgeApproachStep {
  step: string;
  title: 'OBSERVE' | 'ANALYSE' | 'LEARN' | 'SHARE' | 'APPLY';
  summary: string;
  description: string;
}

export interface InsightQualityPrinciple {
  number: string;
  title: string;
  description: string;
}

// ==========================================
// PHASE 6: CAREERS, CONTACT & GET A QUOTE TYPES
// ==========================================

export interface CareerOpportunity {
  id: string;
  title: string;
  area: string;
  location?: string;
  employmentType?: string;
  description?: string;
  requirements?: string[];
  status?: 'Open' | 'Closed' | 'Developing' | string;
}

export interface CareerAreaItem {
  id: string;
  title: string;
  code: string;
  badge: 'POTENTIAL CAREER AREA';
  description: string;
  disciplines: string[];
}

export interface ProfessionalDevelopmentPillar {
  number: string;
  title: string;
  description: string;
}

export interface ContactCategoryItem {
  id: string;
  name: string;
  description: string;
}

export interface QuoteProjectTypeItem {
  id: string;
  name: string;
  category: string;
}

export interface QuoteProjectStageItem {
  id: string;
  name: string;
  description: string;
}

// ==========================================
// PHASE 7: VISUAL & MEDIA SYSTEM TYPES
// ==========================================

export type MediaApprovalStatus = 'draft' | 'review' | 'approved' | 'published';

export type MediaType =
  | 'photograph'
  | 'architectural-render'
  | 'technical-diagram'
  | 'illustration'
  | 'floor-plan'
  | 'site-plan'
  | 'drawing'
  | 'video-thumbnail'
  | 'other';

export type MediaCategory =
  | 'property'
  | 'project'
  | 'engineering'
  | 'insight'
  | 'corporate'
  | 'brand';

/**
 * PUBLIC AUREXON MEDIA ASSET DATA MODEL
 * Represents verified, approved public media assets.
 * MUST NOT be used for private client project documents.
 */
export interface MediaAsset {
  id: string;
  src: string;
  altText: string;
  title: string;
  caption?: string;
  description?: string;
  source?: string;
  licence?: string;
  mediaType: MediaType;
  category: MediaCategory;
  associatedProjectId?: string;
  associatedPropertyId?: string;
  associatedInsightId?: string;
  featured?: boolean;
  approvalStatus: MediaApprovalStatus;
  width?: number;
  height?: number;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:2' | '21:9' | 'auto';
  isIllustrative?: boolean;
}

/**
 * PROPERTY MEDIA PROFILE
 * Future-ready visual structure for verified AUREXON Properties.
 * Does not contain fabricated listings.
 */
export interface PropertyMediaProfile {
  propertyId: string;
  heroImage?: MediaAsset;
  exteriorPhotographs?: MediaAsset[];
  interiorPhotographs?: MediaAsset[];
  architecturalRenders?: MediaAsset[];
  developmentConceptImagery?: MediaAsset[];
  sitePhotographs?: MediaAsset[];
  floorPlans?: MediaAsset[];
  sitePlans?: MediaAsset[];
  gallery?: MediaAsset[];
}

/**
 * PROJECT MEDIA PROFILE
 * Future-ready visual structure for verified AUREXON Projects.
 * Does not contain fabricated project records.
 */
export interface ProjectMediaProfile {
  projectId: string;
  coverImage?: MediaAsset;
  projectGallery?: MediaAsset[];
  constructionPhotographs?: MediaAsset[];
  progressPhotographs?: MediaAsset[];
  completedWorkPhotographs?: MediaAsset[];
  technicalDiagrams?: MediaAsset[];
  approvedDrawings?: MediaAsset[];
}

/**
 * ENGINEERING MEDIA PROFILE
 * Future-ready visual structure for approved engineering diagrams and technical illustrations.
 * Confidential client drawings are strictly excluded.
 */
export interface EngineeringMediaProfile {
  disciplineId: string;
  structuralDiagrams?: MediaAsset[];
  engineeringDrawings?: MediaAsset[];
  technicalIllustrations?: MediaAsset[];
  calculationAnalysisGraphics?: MediaAsset[];
  approvedDesignVisuals?: MediaAsset[];
  conceptDiagrams?: MediaAsset[];
}

/**
 * INSIGHT MEDIA PROFILE
 * Future-ready visual structure for approved insight knowledge articles.
 */
export interface InsightMediaProfile {
  insightId: string;
  coverImage?: MediaAsset;
  supportingPhotographs?: MediaAsset[];
  technicalDiagrams?: MediaAsset[];
  engineeringIllustrations?: MediaAsset[];
  chartsFigures?: MediaAsset[];
}

/**
 * PRIVATE CLIENT PROJECT DOCUMENT (FUTURE BACKEND DATA SPECIFICATION)
 * STRICTLY ARCHITECTURALLY SEPARATED FROM PUBLIC MEDIA ASSETS.
 * Must NOT be stored in public media collections or rendered in public galleries.
 */
export interface ClientProjectDocumentSpec {
  documentId: string;
  projectId: string;
  clientId: string;
  filename: string;
  documentType:
    | 'architectural-drawing'
    | 'structural-drawing'
    | 'boq'
    | 'cost-estimation'
    | 'specification'
    | 'survey'
    | 'permit'
    | 'technical-document';
  version: string;
  accessPermissions: string[];
  uploadDate: string;
  reviewStatus: 'pending' | 'under-review' | 'verified' | 'archived';
  confidentialityStatus: 'strictly-confidential' | 'restricted-project-team';
}

