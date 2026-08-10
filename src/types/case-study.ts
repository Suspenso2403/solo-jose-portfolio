export interface CaseStudyStat {
  label: string;
  value: string;
  highlight?: boolean;
  pulse?: boolean;
}

export interface CaseStudyCircuit {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface CaseStudyTelemetry {
  label: string;
  value: string;
  percent: number;
}

export interface CaseStudyMetaItem {
  label: string;
  value: string | string[];
}

export interface CaseStudyChallenge {
  id: string;
  title: string;
  description: string;
}

export interface CaseStudyChannel {
  id: string;
  title: string;
  items: string[];
  critical?: boolean;
}

export interface CaseStudyPhase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  align: 'left' | 'right';
}

export interface CaseStudy {
  slug: string;
  layout: 'enterprise' | 'fintech' | 'corporate';
  title: string;
  headline: string;
  description: string;
  role: string;
  period?: string;
  heroImage: string;
  heroImageAlt: string;
  /** How the hero image fills its frame. Defaults to contain. */
  heroImageFit?: 'cover' | 'contain';
  confidentiality?: {
    title: string;
    text: string;
  };
  stats: CaseStudyStat[];
  protocol: {
    header: string;
    version?: string;
    columns: string[][];
  };
  circuits: CaseStudyCircuit[];
  telemetry?: {
    bars: CaseStudyTelemetry[];
    tags: string[];
  };
  featureTags?: string[];
  footerNote?: string;
  metadata?: CaseStudyMetaItem[];
  heroInlineImage?: string;
  challenges?: CaseStudyChallenge[];
  channels?: CaseStudyChannel[];
  phases?: CaseStudyPhase[];
  outputLog?: string[];
}
