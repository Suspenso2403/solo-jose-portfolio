import type { CareerEntry, SkillPanel } from '@/types';

export const profile = {
  systemId: 'PRODUCT_DESIGNER_01',
  name: 'José Fernando López Calderón',
  alias: 'SOLO JOSÉ',
  bio: "I'm a Senior Product Designer with a background in design and visual communication — editorial design in particular. I've worked with multidisciplinary teams to build user-centered experiences for mobile apps and SaaS products, primarily in fintech, e-commerce, and risk management. I use research and data to guide design decisions and deliver interfaces that are clear, accessible, and easy to use.",
  portrait: '/assets/foto-yo.jpg',
  portraitAlt: 'Portrait of José Fernando López Calderón',
  languages: [
    { code: 'ES', level: 'NATIVE' },
    { code: 'EN', level: 'C1' },
    { code: 'FR', level: 'A1' },
  ],
  cv: {
    /** Static asset in `public/assets/` — served as-is on GitHub Pages */
    path: '/assets/cv-solo-jose.pdf',
    downloadName: 'CV - Solo José 2026.pdf',
    label: 'DOWNLOAD CV',
  },
} as const;

export const skillPanels: SkillPanel[] = [
  {
    id: 'A',
    title: 'PANEL_A // DISCIPLINES',
    icon: 'terminal',
    items: [
      'Product Design & UX/UI',
      'Prototyping & Wireframing',
      'UX Research & Usability Testing',
      'Graphic & Editorial Design',
      'Web Accessibility (Verified Cert)',
    ],
  },
  {
    id: 'B',
    title: 'PANEL_B // STACK',
    icon: 'memory',
    items: ['Figma, Miro, Maze, Sketch', 'Adobe Creative Suite', 'Agile / Scrum / Waterfall'],
    activeDots: [true, false, true],
  },
  {
    id: 'C',
    title: 'PANEL_C // SECTORS',
    icon: 'lan',
    items: [
      'Finance & Risk Management',
      'Talent Acquisition Platforms',
      'Culture, Arts & Technology',
    ],
  },
];

export const careerEntries: CareerEntry[] = [
  {
    nodeLabel: 'Current_State',
    period: 'Aug 2022 – Present',
    role: 'Senior Product Designer',
    company: 'GDS RISK MANAGEMENT PLATFORMS',
    description:
      'Defining structures and paths for complex risk management systems. Aligning MVP goals with product strategy, large-scale data handling, and extensive usability testing for enterprise-grade tools.',
  },
  {
    nodeLabel: 'Legacy_Node_01',
    period: 'Sept 2020 – Sept 2022',
    role: 'Product Designer',
    company: 'CREDIT CARD APP / STORICARD',
    description:
      'End-to-end design for critical flows: Onboarding, real-time payments, AI chatbot integration, and the Stori Crece loyalty ecosystem. Development of digital card interfaces.',
  },
  {
    nodeLabel: 'Legacy_Node_02',
    period: 'Oct 2019 – Mar 2020',
    role: 'UX/UI Trainee',
    company: 'TALENT ATTRACTION COMPANY',
    description:
      'User research foundation: conducting interviews, facilitating workshops, drafting user testing guides, and assisting in initial UI Kit architecture.',
  },
  {
    nodeLabel: 'Legacy_Node_03',
    period: 'Apr 2018 – Mar 2019',
    role: 'Web Designer & Account Manager',
    company: 'E-COMMERCE SPECIALIST',
    description:
      'Visual identity and digital strategy for wedding registries. Managed high-traffic landing pages for national retail events (Hot Sale / Buen Fin), mailing systems, and social performance assets.',
  },
];

export const contactCopy = {
  title: 'Initiate Transmission',
  description:
    'Available for strategic collaborations in product design and UX/UI. Open to discussing new projects and partnerships.',
  lat: '40.4168N',
  lng: '3.7038W',
};
