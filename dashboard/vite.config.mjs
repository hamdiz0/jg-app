import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log(process.env.VITE_INTERNAL_API_BASE);

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  build: {
    outDir: './dist',
    emptyOutDir: true,
  },
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
