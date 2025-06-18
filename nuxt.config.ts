import tailwindcss from "@tailwindcss/vite";
import { APP_ENV, APP_NAME, BASE_API_URL } from "./main.config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      app_name: APP_NAME,
      base_url: BASE_API_URL,
      app_env: APP_ENV,
    },
  },

  compatibilityDate: "2025-05-15",

  css: ["~/assets/css/styles.css"],

  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@pinia/nuxt", "@nuxtjs/i18n", "nuxt-headlessui", "@nuxt/icon"],

  i18n: {
    lazy: false,
    locales: [
      { code: "fr", iso: "fr-FR", name: "Français", file: "fr.json" },
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
    ],
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: true,
    },
    langDir: "locales/",
    vueI18n: "./i18n.config.ts",
  },

  headlessui: {
    prefix: "Headless",
  },

  icon: {
    serverBundle: {
      collections: ["lucide"],
    },
  },
});
