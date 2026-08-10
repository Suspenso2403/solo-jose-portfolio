import type { NavItem, SocialLink } from '@/types';
import { phase0 } from '@/data/phase0';

export const siteConfig = {
  name: phase0.brand,
  title: `${phase0.brand} — Product Designer`,
  description:
    'Product designer with a background in editorial design. UX for mobile apps, desktop web, and SaaS.',
  url: 'https://Suspenso2403.github.io/solo-jose-portfolio',
  lang: phase0.language,
  locale: phase0.locale,
  coordinates: '40.4168N_3.7038W',
} as const;

export const navItems: NavItem[] = [
  { label: 'ABOUT', href: '/about' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GITHUB', href: 'https://github.com/Suspenso2403' },
  {
    label: 'LINKEDIN',
    href: 'https://linkedin.com/in/josé-fernando-lópez-calderón-754699167',
  },
  { label: 'SYSTEM_STATUS', href: '/about' },
];

export const contactEmail = 'jflcalderon@gmail.com';
