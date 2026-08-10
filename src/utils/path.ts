const TRAILING_SLASH_EXCEPTIONS = new Set(['/download/cv']);

export function isExternalPath(path: string): boolean {
  return (
    !path ||
    path.startsWith('http') ||
    path.startsWith('mailto:') ||
    path.startsWith('#')
  );
}

function normalizeBase(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

function shouldHaveTrailingSlash(path: string): boolean {
  const clean = path.split('?')[0]?.split('#')[0] ?? path;
  if (TRAILING_SLASH_EXCEPTIONS.has(clean)) return false;

  const lastSegment = clean.split('/').filter(Boolean).pop() ?? '';
  return Boolean(lastSegment) && !lastSegment.includes('.');
}

/** Prefix internal paths with Astro base (e.g. /solo-jose-portfolio/). */
export function withBase(path: string): string {
  if (isExternalPath(path)) return path;

  const base = normalizeBase();
  const normalized = path.startsWith('/') ? path.slice(1) : path;

  if (!normalized) return base;

  let result = `${base}${normalized}`;
  if (shouldHaveTrailingSlash(path) && !result.endsWith('/')) {
    result += '/';
  }

  return result;
}

/** Strip deploy base prefix from the current pathname for route matching. */
export function stripBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base || base === '/') return path;

  let stripped = path;
  if (path === base || path === `${base}/`) return '/';
  if (path.startsWith(`${base}/`)) stripped = path.slice(base.length);

  if (stripped !== '/' && stripped.endsWith('/')) {
    stripped = stripped.slice(0, -1);
  }

  return stripped || '/';
}
