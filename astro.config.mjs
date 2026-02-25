import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Static site - no adapter needed for dev
  output: 'hybrid', // Static by default, Server where you need it
  adapter: cloudflare({
    platformProxy: {
      enabled: true, // This lets you test Cloudflare features locally
    },
    // Required if you use Node.js built-in modules
    nodeCompat: true,
  }),
  imageService: 'cloudflare',
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
