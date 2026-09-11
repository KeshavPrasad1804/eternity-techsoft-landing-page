import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Eternity Techsoft',
    short_name: 'Eternity Tech',
    description:
      'High-impact software engineering services and flagship products (K-Sign, K-Code & Geomeridian).',
    start_url: '/',
    display: 'standalone',
    background_color: '#06080d',
    theme_color: '#06080d',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48 32x32 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
