# Phase 0 — Decisions

Locked project decisions for the SOLO JOSÉ portfolio.

| Decision | Value |
|----------|-------|
| **Brand** | SOLO JOSÉ |
| **Language** | English (`en`) |
| **Screen policy** | Keep only `*_standardized_header` and `*_system_aligned` Stitch exports |
| **Design system** | El Conmutador (`stitch_el_conmutador_design_system/el_conmutador/DESIGN.md`) |

Code reference: `src/data/phase0.ts`

---

## Canonical screens → routes

| Route | Stitch folder | Role |
|-------|---------------|------|
| `/` | `home_solo_jos_standardized_header` | layout + content |
| `/about` | `system_profile_jos_fernando_l_pez_calder_n` | layout + content |
| `/archive` | `visual_archive_standardized_header` | layout + content |
| `/archive/[slug]` | `visual_archive_expanded_view_standardized_header` | layout + content |
| `/work/ey-gds` | `case_study_ey_gds_mexico_system_aligned` | content |
| `/work/stori-card` | `case_study_stori_card_system_aligned` | content |
| `/work/multiplica-talent` | `case_study_multiplica_talent_standardized_header` | layout + content |

### Secondary references (header/nav only)

| Route | Stitch folder |
|-------|---------------|
| `/work/ey-gds` | `case_study_ey_gds_mexico_standardized_header` |
| `/work/stori-card` | `case_study_stori_card_standardized_header` |

---

## Deprecated screens (do not migrate)

These folders are superseded iterations. They remain in `stitch_el_conmutador_design_system/` for history but must not be used as migration sources.

### Home
- `home_el_conmutador_standardized_header`
- `inicio_el_conmutador_1`
- `inicio_el_conmutador_2`
- `inicio_el_conmutador_m_tricas_din_micas`

### About
- `about_me_system_profile`

### Case studies
- `case_study_ey_gds_mexico`
- `case_study_ey_gds_mexico_updated`
- `case_study_ey_gds_mexico_aligned_layout`
- `case_study_stori_card`
- `caso_de_estudio_multiplica_talent`
- `caso_de_estudio_multiplica_talent_standardized_header`
- `case_study_multiplica_talent_en`

### Visual archive
- `visual_archive_categorized_directory`
- `visual_archive_editorial_reordered`
- `visual_archive_graphic_design_1`
- `visual_archive_graphic_design_2`
- `visual_archive_posters_populated`
- `visual_archive_expanded_asset_view`
- `visual_archive_expanded_asset_view_with_backdrop`
- `visual_archive_expanded_view_poster_asset`

---

## Brand rule

All pages must use **SOLO JOSÉ** in the header. Screens branded as **EL CONMUTADOR** are deprecated — El Conmutador is the design system name only, not the site brand.

## Language rule

All user-facing copy in the site must be **English**. Spanish Stitch exports (`caso_de_estudio_*`) are deprecated.
