/// <reference types="vitest" />
/// <reference types="vite/client" />

import million from 'million/compiler';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
