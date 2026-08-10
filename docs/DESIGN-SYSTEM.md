# Design System — El Conmutador

Component library for the SOLO JOSÉ portfolio. Tokens source: `stitch_el_conmutador_design_system/el_conmutador/DESIGN.md`.

Live reference page: `/design-system` (run `npm run dev`).

---

## Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#0D0D0D` | Page base |
| `surface` | `#1A1A1A` | Panels |
| `primary-container` | `#FF6B00` | Actions, active states |
| `secondary` | `#708238` | Success / metadata |
| `tertiary` | `#673AB7` | Analytical overlays |
| `grid-line` | `#333333` | Visible infrastructure |

Typography: **Space Grotesk** (headlines), **Inter** (body), **JetBrains Mono** (labels).

All border radius: **0px**. Transitions: **50ms**.

---

## Layout components

| Component | Path | Purpose |
|-----------|------|---------|
| `Header` | `components/Header.astro` | Sticky nav + mobile bar |
| `Footer` | `components/Footer.astro` | Coordinates + social links |
| `TechnicalGrid` | `components/TechnicalGrid.astro` | Viewport grid lines |
| `BaseLayout` | `layouts/BaseLayout.astro` | Page shell |

---

## UI primitives (`components/ui/`)

| Component | Purpose |
|-----------|---------|
| `NavLink` | Nav item with active/inactive states |
| `StatusBadge` | Mono status label (default or outline) |
| `StatusNode` | Icon + mono label row |
| `SectionHeader` | Title + optional meta (e.g. QTR_4 // DEPLOYMENTS) |
| `Panel` | Bordered container with optional header strip |
| `PanelHeaderBar` | Inline panel ID bar (project cards) |
| `InputField` | Underline or boxed input/textarea |
| `Checkbox` | Square checkbox with × mark |
| `Overlay` | Backdrop blur overlay |
| `DirectoryBar` | Archive section path bar |
| `GridCell` | Archive thumbnail or empty slot |
| `ImageFrame` | Grayscale → color hover image |
| `TelemetryBar` | Progress bar with mono labels |

## Content components

| Component | Purpose |
|-----------|---------|
| `ActionButton` | Primary CTA (default / solid / link) |
| `DataTag` | Category/role tag |
| `ProjectCard` | Home project grid item |

---

## CSS utilities (`styles/global.css`)

- `.btn-action-node` / `.btn-action-node-solid`
- `.panel` / `.panel-header` / `.panel-header-bar`
- `.nav-link-active` / `.nav-link-inactive`
- `.input-field` / `.input-field-boxed`
- `.ds-checkbox` (+ box with × on checked)
- `.image-frame` (grayscale hover)
- `.overlay-backdrop` / `.overlay-panel`
- `.directory-bar` / `.grid-cell` / `.telemetry-bar`

---

## Usage example

```astro
---
import Panel from '@/components/ui/Panel.astro';
import SectionHeader from '@/components/ui/SectionHeader.astro';
import StatusNode from '@/components/ui/StatusNode.astro';
---

<SectionHeader title="ACTIVE NODES" meta="QTR_4 // DEPLOYMENTS" />

<Panel label="SYS_DIAGNOSTIC :: APPROACH.LOG">
  <StatusNode icon="computer" label="UI PROPERTIES: ACCESSIBILITY_VALIDATED" color="secondary" />
</Panel>
```

Registry: `src/components/ui/registry.ts`
