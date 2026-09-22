import { MediaAsset, MediaApprovalStatus } from '../types';

/**
 * AUREXON MEDIA ASSET REPOSITORY
 * Phase 7 Implementation
 *
 * Strict Compliance & Governance:
 * - DRAFT -> REVIEW -> APPROVED -> PUBLISHED lifecycle.
 * - MEDIA_ASSETS collection only contains genuine, approved corporate assets.
 * - Empty by default for projects, properties, and insights until genuine approved assets exist.
 * - NO fabricated project photography, NO fake property listings, NO unverified render claims.
 * - STRICT ARCHITECTURAL ISOLATION: Client project documents are NEVER stored or referenced here.
 */

export const MEDIA_APPROVAL_WORKFLOW: {
  stage: MediaApprovalStatus;
  label: string;
  description: string;
}[] = [
  {
    stage: 'draft',
    label: 'DRAFT',
    description: 'Internal asset submission, awaiting verification of rights, authenticity and documentation.'
  },
  {
    stage: 'review',
    label: 'REVIEW',
    description: 'Technical, compliance, and architectural review for accuracy and non-misleading representation.'
  },
  {
    stage: 'approved',
    label: 'APPROVED',
    description: 'Formally cleared by corporate governance for public organizational presentation.'
  },
  {
    stage: 'published',
    label: 'PUBLISHED',
    description: 'Live asset accessible through public AUREXON digital media endpoints.'
  }
];

export const IMAGE_GOVERNANCE_RULES = [
  {
    rule: 'No Misleading Stock Photography',
    description: 'A stock photograph must never be presented as an actual AUREXON built project.'
  },
  {
    rule: 'Render Distinction',
    description: 'An architectural render must be clearly labeled and not presented as a completed building.'
  },
  {
    rule: 'Concept vs. Property',
    description: 'A concept image or preliminary sketch must not be presented as an existing commercial property.'
  },
  {
    rule: 'Client Confidentiality',
    description: 'Client technical drawings, surveys, and BOQs are confidential project assets and must NEVER be published in public media collections.'
  },
  {
    rule: 'Attribution & Licencing',
    description: 'All public media records must explicitly record their author, source, and licence clearance.'
  }
];

/**
 * PUBLIC AUREXON MEDIA ASSETS
 * Preserved clean and empty of fabricated project/property imagery.
 */
export const MEDIA_ASSETS: MediaAsset[] = [];

/**
 * Helper utility to filter approved published media assets
 */
export const getPublishedMedia = (category?: string): MediaAsset[] => {
  return MEDIA_ASSETS.filter((asset) => {
    const isPublished = asset.approvalStatus === 'published';
    if (!category) return isPublished;
    return isPublished && asset.category === category;
  });
};
