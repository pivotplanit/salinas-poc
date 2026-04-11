import i18nConfig from "@configs/i18n";

export const i18nGetStaticPaths = () => {
  return i18nConfig.locales.map((locale) => ({ params: { locale } }));
};
