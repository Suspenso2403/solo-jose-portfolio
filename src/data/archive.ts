import type { ArchiveCategory, ArchiveItem } from '@/types';

/** Local assets: `public/assets/editorial-{nn}.{png|jpg}` */
const editorialAssetExt: Record<number, 'png' | 'jpg'> = {
  1: 'png',
  2: 'jpg',
  3: 'png',
  4: 'png',
  5: 'png',
  6: 'png',
  7: 'jpg',
  8: 'png',
  9: 'jpg',
  10: 'jpg',
  11: 'png',
  12: 'jpg',
};

function editorialAssetPath(number: number): string {
  const ext = editorialAssetExt[number] ?? 'png';
  return `/assets/editorial-${String(number).padStart(2, '0')}.${ext}`;
}

export const editorialItems: ArchiveItem[] = Array.from({ length: 12 }, (_, index) => {
  const number = index + 1;
  const id = `ED_${String(number).padStart(2, '0')}`;

  return {
    id,
    slug: `editorial-${String(number).padStart(2, '0')}`,
    label: id,
    title: `Editorial ${number}`,
    category: 'editorial-design',
    image: editorialAssetPath(number),
    imageAlt: `Editorial design — piece ${number}`,
    description: `Editorial design exploration ${number} from the visual archive.`,
    aspect: 'square',
  };
});

function posterAssetPath(number: number): string {
  return `/assets/poster-${String(number).padStart(2, '0')}.png`;
}

export const posterItems: ArchiveItem[] = Array.from({ length: 4 }, (_, index) => {
  const number = index + 1;
  const id = `POSTER_${String(number).padStart(2, '0')}`;

  return {
    id,
    slug: `poster-${String(number).padStart(2, '0')}`,
    label: id,
    title: `Poster ${number}`,
    category: 'posters',
    image: posterAssetPath(number),
    imageAlt: `Poster design — piece ${number}`,
    description: `Poster exploration ${number} from the visual archive.`,
    aspect: 'poster',
  };
});

const logoAssetFiles: Record<number, string> = {
  1: 'logo-01.jpg',
  2: 'logo-02.jpg',
  3: 'logo-03.png',
  4: 'logo-04.png',
};

function logoAssetPath(number: number): string {
  const file = logoAssetFiles[number] ?? `logo-${String(number).padStart(2, '0')}.png`;
  return `/assets/${file}`;
}

export const brandMarkItems: ArchiveItem[] = Array.from({ length: 4 }, (_, index) => {
  const number = index + 1;
  const id = `LOGO_${String(number).padStart(2, '0')}`;

  return {
    id,
    slug: `logo-${String(number).padStart(2, '0')}`,
    label: id,
    title: `Logo ${number}`,
    category: 'brand-marks',
    image: logoAssetPath(number),
    imageAlt: `Brand mark — logo ${number}`,
    description: `Brand mark exploration ${number} from the visual archive.`,
    aspect: 'square',
  };
});

export const typographyItems: ArchiveItem[] = [
  {
    id: 'TIPO_01',
    slug: 'tipo-01',
    label: 'TIPO_01',
    title: 'RAYA',
    category: 'typography',
    image: '/assets/tipo-01.jpg',
    imageAlt: 'Typographic exploration — RAYA',
    description: 'Typographic exploration — RAYA type rescue study.',
    aspect: 'video',
  },
  {
    id: 'TIPO_02',
    slug: 'tipo-02',
    label: 'TIPO_02',
    title: 'TYPE STUDY 02',
    category: 'typography',
    image: '/assets/tipo-02.jpg',
    imageAlt: 'Typographic exploration — type study 02',
    description: 'Typographic exploration from the visual archive.',
    aspect: 'video',
  },
];

export const archiveItems: ArchiveItem[] = [
  ...editorialItems,
  ...posterItems,
  ...brandMarkItems,
  ...typographyItems,
];

export const archiveCategories: ArchiveCategory[] = [
  {
    id: 'editorial-design',
    path: '/editorial-design',
    slotsAvailable: 12,
    gridClass: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
    aspect: 'square',
    slots: editorialItems.map((item) => ({ type: 'item', item })),
  },
  {
    id: 'posters',
    path: '/posters',
    slotsAvailable: 4,
    gridClass: 'grid-cols-2 md:grid-cols-4',
    aspect: 'poster',
    slots: posterItems.map((item) => ({ type: 'item', item })),
  },
  {
    id: 'brand-marks',
    path: '/brand-marks',
    slotsAvailable: 4,
    gridClass: 'grid-cols-2 md:grid-cols-4',
    aspect: 'square',
    slots: brandMarkItems.map((item) => ({ type: 'item', item })),
  },
  {
    id: 'typography',
    path: '/typography',
    slotsAvailable: 2,
    gridClass: 'grid-cols-1 md:grid-cols-2',
    aspect: 'video',
    slots: typographyItems.map((item) => ({ type: 'item', item })),
  },
];

export function getArchiveItem(slug: string): ArchiveItem | undefined {
  return archiveItems.find((item) => item.slug === slug);
}

export function getAdjacentItems(slug: string): {
  prev?: ArchiveItem;
  next?: ArchiveItem;
} {
  const index = archiveItems.findIndex((item) => item.slug === slug);
  if (index === -1) return {};
  return {
    prev: archiveItems[index - 1],
    next: archiveItems[index + 1],
  };
}
