import { defineMiddleware } from "astro:middleware";
import i18nConfig from "./configs/i18n";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname === "/") {
    return context.rewrite(`${i18nConfig.defaultLocale}`);
  }
  return next();
});
