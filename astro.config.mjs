import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';

/** @see https://Suspenso2403.github.io/solo-jose-portfolio/ */
const GITHUB_PAGES_SITE = 'https://Suspenso2403.github.io';
const REPO_BASE = '/solo-jose-portfolio';

export default defineConfig({
  site: GITHUB_PAGES_SITE,
  base: REPO_BASE,
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
