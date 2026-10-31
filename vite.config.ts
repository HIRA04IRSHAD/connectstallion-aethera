import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Served from https://<user>.github.io/connectstallion-aethera/ on GitHub Pages
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/connectstallion-aethera/' : '/',
  plugins: [react(), tailwindcss()],
}));
