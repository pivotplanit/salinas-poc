import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'hybrid', // Best for migrations
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    nodeCompat: true,
    imageService: 'cloudflare',
  }),

  markdown: {
    syntaxHighlight: 'shiki',
  },

  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});