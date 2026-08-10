import type { CaseStudy } from '@/types/case-study';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ey-gds',
    layout: 'enterprise',
    title: 'EY GDS Mexico',
    headline: 'EY GDS MEXICO:\nENTERPRISE RISK & ARCHITECTURE',
    description: '',
    role: 'Senior Product Designer',
    period: 'Aug 2022 – Present',
    heroImage: '/assets/ey-gds.png',
    heroImageAlt: 'EY GDS enterprise architecture interface',
    heroImageFit: 'cover',
    confidentiality: {
      title: 'CONFIDENTIALITY_RESTRICTION_PROTOCOL',
      text: "I can't share the full details of this work publicly. I'm happy to discuss my process and contributions in a conversation — reach out anytime.",
    },
    stats: [
      { label: 'SYSTEM_LOC:', value: 'ENTERPRISE_CORE' },
      { label: 'STATUS:', value: 'DEPLOYED', highlight: true },
    ],
    protocol: {
      header: 'OPERATIONAL_PROTOCOL_LOG',
      columns: [
        ['Product Foundation Understanding', 'Requirement Gathering'],
        ['Process Flow Creation', 'Lo-Fi and Hi-Fi Wireframes'],
        ['High-Fidelity Figma Prototype', 'User Testing & Interview Guide'],
        ['Design Iteration', 'Stakeholder Management'],
      ],
    },
    circuits: [
      {
        id: 'NODE_01',
        icon: 'admin_panel_settings',
        title: 'Enterprise Risk & Regulatory Intelligence',
        tag: 'Risk Management',
        description:
          'Designing multi-tenant SaaS platforms to track, categorize, and evaluate regulatory changes across varying severity levels. I transformed complex compliance data into intuitive risk-assessment workflows, helping enterprise teams make fast, informed decisions.',
      },
      {
        id: 'NODE_02',
        icon: 'health_and_safety',
        title: 'Medicaid Compliance & Document Analysis',
        tag: 'Healthcare Compliance',
        description:
          'Streamlining regulatory change detection within official Medicaid documentation. I designed an inline-highlighting and impact-analysis interface that allowed compliance officers to identify policy shifts directly inside regulatory texts and immediately assess their operational priority.',
      },
      {
        id: 'NODE_03',
        icon: 'account_tree',
        title: 'EY Fabric Cost Reporting & Data Density',
        tag: 'Information Architecture',
        description:
          'Redesigning the monthly cost reporting experience within EY Fabric. I structured complex financial data by creating dynamic column customization, a dual-view system (high-level summary vs. a 40+ column complete view), and an intuitive export workflow for customizable file downloads.',
      },
      {
        id: 'NODE_04',
        icon: 'edit_note',
        title: 'System Communications & UX Copywriting',
        tag: 'Transactional Design & Copy',
        description:
          'Crafting clear, empathetic transactional microcopy and email messaging for EY Fabric users. I designed end-to-end communication touchpoints to notify global teams about system updates, billing adjustments, and account changes without causing friction.',
      },
    ],
    telemetry: {
      bars: [
        { label: 'BITRATE', value: '44.1KHZ', percent: 66 },
        { label: 'REF_MOD', value: 'ANALYTICAL', percent: 100 },
      ],
      tags: ['AES-256_GDS_STD', '99.98% NODE_STABILITY', 'HTTP/3_QUIC_ARMOR', 'DESIGN_OPS_v4.2.1'],
    },
    footerNote: 'EY GDS Mexico Architecture Dept. © 2026',
  },
  {
    slug: 'stori-card',
    layout: 'fintech',
    title: 'Stori Card',
    headline: 'Stori Card:\nScaling Financial Access',
    description:
      'Acting as the strategic bridge between Business, Legal, Ops, and Client Services to democratize financial access in a high-growth fintech environment.',
    role: 'Product Designer',
    heroImage: '/assets/stori-card.png',
    heroImageAlt: 'Stori Card product interface',
    heroImageFit: 'cover',
    stats: [
      { label: 'SYSTEM_LOC:', value: 'LATAM_CORE' },
      { label: 'STATUS:', value: 'DEPLOYED', highlight: true, pulse: true },
    ],
    protocol: {
      header: 'OPERATIONAL_PROTOCOLS.SH',
      version: 'v2.0.4',
      columns: [
        ['Product Foundation Understanding', 'Requirement Gathering'],
        ['Process Flow Creation', 'Lo-Fi and Hi-Fi Wireframes'],
        ['High-Fidelity Figma Prototype', 'User Testing & Interview Guide'],
        ['Design Iteration', 'Stakeholder Management & Negotiation'],
      ],
    },
    circuits: [
      {
        id: 'CIRCUIT 01',
        icon: 'terminal',
        title: 'Core Experience',
        description:
          'Designed end-to-end solutions for the credit card experience, including onboarding, bill pay, and digital card management, in close collaboration with product managers, stakeholders, and the research team.',
      },
      {
        id: 'CIRCUIT 02',
        icon: 'query_stats',
        title: 'Growth & Automation',
        description:
          'Co-designed the credit line increase program ("Stori Crece") and optimized the chatbot flow. Simplified in-app content to boost user autonomy and reduce customer support workload.',
      },
      {
        id: 'CIRCUIT 03',
        icon: 'fingerprint',
        title: 'Validation',
        description:
          'Validated value propositions through prototyping, usability testing, and persona analysis to ensure features addressed real financial needs.',
      },
      {
        id: 'CIRCUIT 04',
        icon: 'groups',
        title: 'Leadership',
        description:
          'Collaborated within multidisciplinary Scrum squads (PMs, Data, Devs, QA) to prioritize projects and mentor new design team members.',
        highlighted: true,
      },
    ],
    featureTags: [
      '#0001_ONBOARDING',
      '#0002_CREDIT_LINE',
      '#0003_USER_INTERVIEWS',
      '#0004_SCALABILITY',
      '#0005_LEGAL_COMPLIANCE',
    ],
  },
  {
    slug: 'multiplica-talent',
    layout: 'corporate',
    title: 'Multiplica Talent',
    headline: 'MULTIPLICA TALENT:\nCORPORATE WEBSITE REDESIGN',
    description:
      "Design of a global website to communicate and position Talent's value proposition clearly and simply.",
    role: 'UX/UI Trainee',
    heroImage: '/assets/multiplica-mockup.jpeg',
    heroImageAlt: 'Multiplica Talent corporate website redesign',
    stats: [],
    protocol: { header: '', columns: [] },
    circuits: [],
    metadata: [
      { label: 'Sector', value: 'Digital profile recruitment' },
      { label: 'Duration', value: '4 months' },
      { label: 'Tools', value: 'Sketch, Adobe CC, InVision' },
      {
        label: 'Team',
        value: [
          'Interdisciplinary',
          'Mentor: Francis Restoy',
          'Trainees: Amalia Acitlali, Ulises Galnares, Alejandro Rossette, Samantha Morales, Valeria Cansigno, Fernanda Moncada, María Loza, Rodrigo López, Brisa Arreola',
        ],
      },
    ],
    heroInlineImage: '/assets/multiplica-mockup.jpeg',
    challenges: [
      {
        id: 'NODE.01',
        title: 'Value Proposition',
        description: "Identify and communicate Talent's difference in a saturated market.",
      },
      {
        id: 'NODE.02',
        title: 'Global Website',
        description: 'Design for everyone without losing local and specific cultural context.',
      },
      {
        id: 'NODE.03',
        title: 'Brand Confusion',
        description: "Differentiate Multiplica's Talent to avoid corporate ambiguities.",
      },
      {
        id: 'NODE.04',
        title: 'Intuitive & Responsive',
        description: 'Create a digestible information architecture adaptable to multiple devices.',
      },
    ],
    channels: [
      {
        id: 'A',
        title: 'CHANNEL_A // UX',
        items: ['Needs Assessment', 'Qualitative Research', 'Usability Tests'],
      },
      {
        id: 'B',
        title: 'CHANNEL_B // UI',
        items: ['Wireframes', 'Contact Flow', 'Atomic Design'],
      },
      {
        id: 'C',
        title: 'CHANNEL_C // BUSINESS',
        items: ['Workshops', 'IT Coordination', 'Business Presentations'],
        critical: true,
      },
    ],
    phases: [
      {
        id: 'PHASE.01',
        title: 'Research & Empathize',
        subtitle: 'PHASE.01',
        description: '32 Hypotheses, 30 Insights generated from initial data collection.',
        align: 'left',
      },
      {
        id: 'PHASE.02',
        title: 'Analysis & Conceptualization',
        subtitle: 'PHASE.02',
        description: '3 Personas defined: Strategy, Enthusiast, Innovator.',
        align: 'right',
      },
      {
        id: 'PHASE.03',
        title: 'MVP & Prototyping',
        subtitle: 'PHASE.03',
        description: 'Wireframes and structural flow diagrams established.',
        align: 'left',
      },
      {
        id: 'PHASE.04',
        title: 'Testing & Validation',
        subtitle: 'PHASE.04',
        description: '15 think-aloud interviews conducted to validate assumptions.',
        align: 'right',
      },
      {
        id: 'PHASE.05',
        title: 'UI Kit & Design System',
        subtitle: 'PHASE.05',
        description: 'Finalization of visual assets and component libraries.',
        align: 'left',
      },
    ],
    outputLog: [
      'EXECUTION_SUCCESSFUL',
      'We identified the value proposition. Keeping the user at the center without losing alignment with business objectives became an essential pillar.',
      'The rigorous application of structural grid systems and modular components enabled a scalable architecture that respects both technical constraints and user needs.',
      "We defined the brand's value proposition to establish the UX writing tone, developed a comprehensive UI kit and design system, and delivered a functional prototype — including a home page, contact section, chatbot integration, job board, and end-to-end application flow.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
