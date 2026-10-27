import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { publishedAssets } from './scripts/published-assets.mjs';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), {
    name: 'publish-active-assets',
    writeBundle(options) {
      for (const asset of publishedAssets) {
        const target = resolve(options.dir || 'dist', asset);
        mkdirSync(dirname(target), { recursive: true });
        copyFileSync(resolve('public', asset), target);
      }
    },
  }],
  build: { copyPublicDir: false },
  server: { port: 5173, strictPort: true },
});
