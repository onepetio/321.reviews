import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command, mode }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': `"${mode}"`,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
}));
