import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import i18nConfig from "./src/configs/i18n";
import { fileURLToPath } from "node:url"; // Add this

export default defineConfig({
  site: 'https://habitattraveltours.com',
  adapter: cloudflare({
    platformProxy: { enabled: true },
    nodeCompat: true,
    imageService: 'compile',
  }),

  i18n: {
    ...i18nConfig,
    routing: {
      prefixDefaultLocale: true,
    },
  },

  image: {
    domains: ["assets.habitattraveltours.com"],
  },

  integrations: [sitemap()],

  vite: {
    resolve: {
      alias: {
        // Use absolute paths if you're going to define these manually
        '@components': fileURLToPath(
          new URL('./src/components', import.meta.url),
        ),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@configs': fileURLToPath(new URL('./src/configs', import.meta.url)),
      },
    },
  },
});
