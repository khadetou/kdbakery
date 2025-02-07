// https://nuxt.com/docs/api/configuration/nuxt-config
import { cssLinks, jsScripts } from "./headAssets.generated";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/icon"],
  app: {
    head: {
      link: [
        ...cssLinks,
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [...jsScripts],
    },
  },
});
