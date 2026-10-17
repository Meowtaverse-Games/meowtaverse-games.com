import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://meowtaverse-games.com',
  output: 'static',
  // Preserve the pre-v7 whitespace behavior for the migrated page text.
  compressHTML: true,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: { plugins: [tailwindcss()] },
});
