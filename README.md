# SOLO JOSÉ — Portfolio

Portfolio site for José. Brand: **SOLO JOSÉ**. Language: **English**. Design system: **El Conmutador** (industrial minimalist / brutalist-technical).

Phase 0 decisions: [`docs/PHASE0.md`](docs/PHASE0.md)

Design system components: [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) · live at `/design-system`

## Requisitos

- [Node.js](https://nodejs.org/) 18+ (LTS recomendado)
- npm (incluido con Node)

## Setup

```bash
cd solo-jose-portfolio
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321).

## Scripts

| Comando         | Descripción              |
|-----------------|--------------------------|
| `npm run dev`   | Servidor de desarrollo   |
| `npm run build` | Build de producción      |
| `npm run preview` | Preview del build      |

## Estructura

```
solo-jose-portfolio/
├── public/assets/       # Imágenes, video hero, favicon
├── src/
│   ├── components/      # Header, Footer, ProjectCard, DataTag…
│   ├── content/         # JSON / Markdown (archive, casos)
│   ├── data/            # Config del sitio y proyectos
│   ├── layouts/         # BaseLayout
│   ├── pages/           # Rutas (index, about, archive, work)
│   ├── styles/          # global.css + Tailwind
│   └── types/           # TypeScript interfaces
├── tailwind.config.mjs  # Tokens del design system
└── astro.config.mjs
```

## Routes

| Route | Status | Stitch source |
|-------|--------|-----------------|
| `/` | Home (Phase 1) | `home_solo_jos_standardized_header` |
| `/about` | ✓ Phase 3 | `system_profile_jos_fernando_l_pez_calder_n` |
| `/archive` | ✓ Phase 3 | `visual_archive_standardized_header` |
| `/archive/[slug]` | ✓ Phase 3 | `visual_archive_expanded_view_standardized_header` |
| `/work/ey-gds` | ✓ Phase 4 | `case_study_ey_gds_mexico_system_aligned` |
| `/work/stori-card` | ✓ Phase 4 | `case_study_stori_card_system_aligned` |
| `/work/multiplica-talent` | ✓ Phase 4 | `case_study_multiplica_talent_standardized_header` |

## Design system

Tokens definidos en `tailwind.config.mjs` a partir de `../stitch_el_conmutador_design_system/el_conmutador/DESIGN.md`:

- **Colores:** `#0D0D0D` background, `#FF6B00` primary, grid `#333333`
- **Tipografías:** Space Grotesk, Inter, JetBrains Mono
- **Border radius:** 0px en todo el sistema

## Próximos pasos

1. ~~**Fase 2:** Refinar componentes del design system~~ ✓
2. ~~**Fase 3:** Migrar About y Visual Archive~~ ✓
3. ~~**Fase 4:** Casos de estudio (EY GDS, Stori Card, Multiplica Talent)~~ ✓
4. Agregar video hero en `public/assets/hero.mp4`
5. Actualizar links sociales en `src/data/site.ts`
6. Deploy a producción (Vercel / Netlify)

## Stitch prototypes

Canonical HTML exports live in `../stitch_el_conmutador_design_system/`. Deprecated iterations are listed in [`docs/PHASE0.md`](docs/PHASE0.md) and [`../stitch_el_conmutador_design_system/_DEPRECATED.md`](../stitch_el_conmutador_design_system/_DEPRECATED.md).
