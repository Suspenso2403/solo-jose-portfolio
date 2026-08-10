/**
 * Hero video layout on a 12-column grid (desktop).
 *
 * Side-by-side options (text + video):
 * - 3  → video 25%  — very compact, text-first
 * - 4  → video 33%  — balanced (default)
 * - 5  → video 42%  — more visible clip
 * - 6  → video 50%  — equal split
 *
 * Below text:
 * - 'below-6'  → centered, half width
 * - 'below-8'  → centered, two-thirds width
 * - 'below-12' → full width strip under intro
 */
export type HeroVideoLayout = 3 | 4 | 5 | 6 | 'below-6' | 'below-8' | 'below-12';

export const HERO_VIDEO_LAYOUT: HeroVideoLayout = 5;

export const heroVideoLayoutOptions: {
  value: HeroVideoLayout;
  label: string;
  description: string;
}[] = [
  { value: 3, label: '3 cols', description: 'Clip estrecho — máximo foco en texto' },
  { value: 4, label: '4 cols', description: 'Equilibrio texto / video (recomendado)' },
  { value: 5, label: '5 cols', description: 'Clip más presente sin dominar' },
  { value: 6, label: '6 cols', description: 'Mitad y mitad en desktop' },
  { value: 'below-6', label: 'Debajo · 6 cols', description: 'Horizontal centrado, media página' },
  { value: 'below-8', label: 'Debajo · 8 cols', description: 'Horizontal centrado, ancho cómodo' },
  { value: 'below-12', label: 'Debajo · 12 cols', description: 'Banda horizontal a ancho completo' },
];

type LayoutClasses = {
  mode: 'side' | 'below';
  text: string;
  video: string;
};

const sideLayouts: Record<3 | 4 | 5 | 6, LayoutClasses> = {
  3: { mode: 'side', text: 'lg:col-span-9', video: 'lg:col-span-3 lg:pt-7' },
  4: { mode: 'side', text: 'lg:col-span-8', video: 'lg:col-span-4 lg:pt-7' },
  5: { mode: 'side', text: 'lg:col-span-7', video: 'lg:col-span-5 lg:pt-7' },
  6: { mode: 'side', text: 'lg:col-span-6', video: 'lg:col-span-6 lg:pt-7' },
};

const belowLayouts: Record<'below-6' | 'below-8' | 'below-12', LayoutClasses> = {
  'below-6': {
    mode: 'below',
    text: 'lg:col-span-12',
    video: 'lg:col-span-6 lg:col-start-4',
  },
  'below-8': {
    mode: 'below',
    text: 'lg:col-span-12',
    video: 'lg:col-span-8 lg:col-start-3',
  },
  'below-12': {
    mode: 'below',
    text: 'lg:col-span-12',
    video: 'lg:col-span-12',
  },
};

export function getHeroLayout(layout: HeroVideoLayout = HERO_VIDEO_LAYOUT): LayoutClasses {
  if (typeof layout === 'number') {
    return sideLayouts[layout];
  }
  return belowLayouts[layout];
}
