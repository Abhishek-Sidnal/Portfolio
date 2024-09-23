import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'src/assets/models', dest: 'assets' },
        { src: 'src/assets/texture', dest: 'assets' }
      ]
    })
  ],
});
