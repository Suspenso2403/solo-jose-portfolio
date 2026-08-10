/** Prefix internal paths with Astro base (e.g. /solo-jose-portfolio/). */
export function withBase(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalized}`;
}

/** Strip deploy base prefix from the current pathname for route matching. */
export function stripBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base || base === '/') return path;
  if (path === base || path === `${base}/`) return '/';
  if (path.startsWith(`${base}/`)) return path.slice(base.length);
  return path;
}
