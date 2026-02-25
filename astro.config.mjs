import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Static site - no adapter needed for dev
  // Use: npm run build && wrangler pages deploy dist
  integrations: [],
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  // Markdown configuration if needed later
  markdown: {
    syntaxHighlight: 'shiki',
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
});
