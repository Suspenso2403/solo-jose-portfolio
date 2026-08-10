/**
 * Phase 0 — Project decisions (locked)
 * @see docs/PHASE0.md
 */

export const phase0 = {
  brand: 'SOLO JOSÉ',
  language: 'en',
  locale: 'en-US',
  designSystem: 'El Conmutador',
  screenPolicy: 'standardized_header | system_aligned',
} as const;

export type ScreenRole = 'layout' | 'content' | 'layout+content';

export interface CanonicalScreen {
  route: string;
  folder: string;
  role: ScreenRole;
  notes?: string;
}

/** Primary Stitch sources for each route — use these when migrating pages. */
export const canonicalScreens: Record<string, CanonicalScreen> = {
  home: {
    route: '/',
    folder: 'home_solo_jos_standardized_header',
    role: 'layout+content',
  },
  about: {
    route: '/about',
    folder: 'system_profile_jos_fernando_l_pez_calder_n',
    role: 'layout+content',
    notes: 'Only SOLO JOSÉ profile screen; no *_standardized_header variant exists.',
  },
  archive: {
    route: '/archive',
    folder: 'visual_archive_standardized_header',
    role: 'layout+content',
  },
  archiveDetail: {
    route: '/archive/[slug]',
    folder: 'visual_archive_expanded_view_standardized_header',
    role: 'layout+content',
  },
  workEyGds: {
    route: '/work/ey-gds',
    folder: 'case_study_ey_gds_mexico_system_aligned',
    role: 'content',
    notes: 'Page body. Header reference: case_study_ey_gds_mexico_standardized_header',
  },
  workStoriCard: {
    route: '/work/stori-card',
    folder: 'case_study_stori_card_system_aligned',
    role: 'content',
    notes: 'Page body. Header reference: case_study_stori_card_standardized_header',
  },
  workMultiplicaTalent: {
    route: '/work/multiplica-talent',
    folder: 'case_study_multiplica_talent_standardized_header',
    role: 'layout+content',
    notes: 'English content. Discard caso_de_estudio_* and case_study_multiplica_talent_en.',
  },
};

/** Stitch folders kept as secondary references (header/nav patterns). */
export const secondaryScreens: CanonicalScreen[] = [
  {
    route: '/work/ey-gds',
    folder: 'case_study_ey_gds_mexico_standardized_header',
    role: 'layout',
    notes: 'Nav/header pattern for EY case study.',
  },
  {
    route: '/work/stori-card',
    folder: 'case_study_stori_card_standardized_header',
    role: 'layout',
    notes: 'Nav/header pattern for Stori case study.',
  },
];

/** Deprecated Stitch folders — do not migrate; reference only if needed. */
export const deprecatedScreens: string[] = [
  // Wrong brand / early home iterations
  'home_el_conmutador_standardized_header',
  'inicio_el_conmutador_1',
  'inicio_el_conmutador_2',
  'inicio_el_conmutador_m_tricas_din_micas',
  // About duplicate
  'about_me_system_profile',
  // Case study iterations (superseded)
  'case_study_ey_gds_mexico',
  'case_study_ey_gds_mexico_updated',
  'case_study_ey_gds_mexico_aligned_layout',
  'case_study_stori_card',
  'caso_de_estudio_multiplica_talent',
  'caso_de_estudio_multiplica_talent_standardized_header',
  'case_study_multiplica_talent_en',
  // Archive iterations (superseded)
  'visual_archive_categorized_directory',
  'visual_archive_editorial_reordered',
  'visual_archive_graphic_design_1',
  'visual_archive_graphic_design_2',
  'visual_archive_posters_populated',
  'visual_archive_expanded_asset_view',
  'visual_archive_expanded_asset_view_with_backdrop',
  'visual_archive_expanded_view_poster_asset',
];

export const stitchBasePath = '../stitch_el_conmutador_design_system';

export function stitchScreenPath(folder: string): string {
  return `${stitchBasePath}/${folder}/code.html`;
}
