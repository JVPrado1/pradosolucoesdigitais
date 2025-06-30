// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { i18n } from "astro-i18n-aut/integration";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    i18n({
      defaultLocale: "pt",
      locales: {
        pt: "pt-BR",
        en: "en-US",
      },
    }),
  ],
});
