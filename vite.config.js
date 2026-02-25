import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for React single-page site.
export default defineConfig({
  plugins: [react()],
});
