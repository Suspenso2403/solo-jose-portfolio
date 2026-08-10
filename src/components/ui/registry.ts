/**
 * Design system component registry.
 * Import paths for documentation and page migrations.
 */
export const uiComponents = [
  'NavLink',
  'StatusBadge',
  'StatusNode',
  'SectionHeader',
  'Panel',
  'PanelHeaderBar',
  'InputField',
  'Checkbox',
  'Overlay',
  'DirectoryBar',
  'GridCell',
  'ImageFrame',
  'TelemetryBar',
] as const;

export const layoutComponents = [
  'Header',
  'Footer',
  'TechnicalGrid',
  'ActionButton',
  'DataTag',
  'ProjectCard',
] as const;

export type UiComponent = (typeof uiComponents)[number];
export type LayoutComponent = (typeof layoutComponents)[number];
