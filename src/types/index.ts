export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  tagColor?: 'primary' | 'secondary' | 'tertiary';
  image: string;
  imageAlt: string;
}

export interface ArchiveItem {
  id: string;
  slug: string;
  label: string;
  title: string;
  category: ArchiveCategoryId;
  image: string;
  imageAlt: string;
  description?: string;
  aspect?: 'square' | 'poster' | 'video';
}

export type ArchiveCategoryId =
  | 'editorial-design'
  | 'posters'
  | 'brand-marks'
  | 'typography';

export interface ArchiveCategory {
  id: ArchiveCategoryId;
  path: string;
  slotsAvailable: number;
  gridClass: string;
  aspect: 'square' | 'poster' | 'video';
  slots: ArchiveSlot[];
}

export type ArchiveSlot =
  | { type: 'item'; item: ArchiveItem }
  | { type: 'empty'; emptyText?: string }
  | { type: 'no-asset' };

export interface CareerEntry {
  nodeLabel: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillPanel {
  id: string;
  title: string;
  icon: string;
  items: string[];
  activeDots?: boolean[];
}

export interface SocialLink {
  label: string;
  href: string;
}
