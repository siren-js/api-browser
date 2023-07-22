import { defineConfig } from 'vite';
import prismPlugin from 'vite-plugin-prismjs';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidPlugin(),
    prismPlugin({
      languages: 'all',
      plugins: ['line-numbers'],
      theme: 'tomorrow',
      css: true,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  base: '/api-browser/',
});
