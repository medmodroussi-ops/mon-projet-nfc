import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'; // Changement ici : 'vite' au lieu de 'vitest/config'

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    // Vitest supporte parfaitement le defineConfig de Vite
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
