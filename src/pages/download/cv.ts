import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { profile } from '@/data/about';

export const prerender = true;

export const GET: APIRoute = () => {
  const assetPath = path.join(process.cwd(), 'public', profile.cv.path.replace(/^\//, ''));
  const file = fs.readFileSync(assetPath);

  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${profile.cv.downloadName}"; filename*=UTF-8''${encodeURIComponent(profile.cv.downloadName)}`,
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
