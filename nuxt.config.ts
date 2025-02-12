// https://nuxt.com/docs/api/configuration/nuxt-config
import { cssLinks, jsScripts } from "./headAssets.generated";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        ...cssLinks,
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://www.kdbakery.sn" },
      ],
      script: [...jsScripts],
    },
  },
  // Configuration du prérendering
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/robots.txt"],
    },
  },
  // Configuration des règles de routes
  routeRules: {
    "/": { prerender: true },
    "/about": { prerender: true },
  },
  // Configuration des robots
  robots: {
    userAgent: "*",
    allow: "/",
    disallow: ["/admin", "/private"],
    sitemap: "https://www.kdbakery.sn/sitemap.xml",
  },
  // Configuration du sitemap
  site: {
    url: "https://www.kdbakery.sn",
  },
});
