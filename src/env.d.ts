/// <reference path="../.astro/types.d.ts" />

type Runtime = import("@astrojs/cloudflare").Runtime;

declare namespace App {
  interface Locals extends Runtime {
    // Add custom properties to Astro.locals here if needed
  }
}

// Environment variables
interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_SITE_NAME?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
