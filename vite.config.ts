import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Builds for the domain root (Vercel, Render, a custom domain) by default.
// The GitHub Pages workflow sets BASE_PATH=/connectstallion-aethera/ because Pages serves from a sub-folder.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: env.BASE_PATH || '/',
    plugins: [react(), tailwindcss()],
  };
});
