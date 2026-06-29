// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://finedining.example.com",
  base: "/",
  integrations: [mdx(), sitemap(), pagefind(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Cormorant Garamond",
        cssVariable: "--font-display",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-sans",
      }
    ]
  }
});