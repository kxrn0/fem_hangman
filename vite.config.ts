import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { VitePWA } from "vite-plugin-pwa";

import type { ManifestOptions, VitePWAOptions } from "vite-plugin-pwa";

const options: Partial<VitePWAOptions> = {
  mode: "production",
  base: "/fem_hangman/",
  includeAssets: ["**/*"],
  manifest: {
    name: "Hangman",
    short_name: "hangman",
    theme_color: "#2463ff",
    background_color: "#25abff",
    icons: [
      {
        src: "/fem_hangman/icons/pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/fem_hangman/icons/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/fem_hangman/icons/pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};

export default defineConfig({
  base: "/fem_hangman/",
  plugins: [solid(), VitePWA(options)],
});
