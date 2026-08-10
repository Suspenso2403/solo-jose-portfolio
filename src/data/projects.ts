import type { Project } from '@/types';
import { withBase } from '@/utils/path';

export const projects: Project[] = [
  {
    id: 'PRJ-001',
    title: 'EY GDS — CONSULTANCY',
    slug: 'ey-gds',
    tags: ['Business Strategy', 'UI Architecture'],
    tagColor: 'primary',
    image: '/assets/ey-gds.png',
    imageAlt: 'EY GDS consultancy project wireframe and UI architecture',
  },
  {
    id: 'PRJ-002',
    title: 'STORI CARD',
    slug: 'stori-card',
    tags: ['User Research', 'Cross-functional UI'],
    tagColor: 'tertiary',
    image: '/assets/stori-card.png',
    imageAlt: 'Stori Card user research and cross-functional UI project',
  },
  {
    id: 'PRJ-003',
    title: 'MULTIPLICA TALENT',
    slug: 'multiplica-talent',
    tags: ['Product Strategy', 'Visual Systems'],
    tagColor: 'secondary',
    image: '/assets/multiplica-mockup.jpeg',
    imageAlt: 'Multiplica Talent corporate website redesign',
  },
  {
    id: 'PRJ-004',
    title: 'GRAPHIC DESIGN ARCHIVE',
    slug: 'archive',
    tags: ['Editorial Design', 'Visual Systems'],
    tagColor: 'secondary',
    image: '/assets/editorial-01.png',
    imageAlt: 'Graphic design and editorial archive',
  },
];

export function getProjectHref(slug: string): string {
  return withBase(slug === 'archive' ? '/archive' : `/work/${slug}`);
}
