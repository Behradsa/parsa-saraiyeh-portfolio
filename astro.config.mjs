// The new site (Astro). Lives in site/, builds into dist/next while it is being tested.
// When it replaces the current site: set BASE to '/' and outDir to './dist'.
import { defineConfig } from 'astro/config';

const BASE = '/next';

export default defineConfig({
  site: 'https://parsa-sa.com',
  base: BASE,
  srcDir: './site/src',
  publicDir: './site/public',
  outDir: './dist' + BASE,
  trailingSlash: 'ignore',
  build: { format: 'preserve' },
  devToolbar: { enabled: false },
});
