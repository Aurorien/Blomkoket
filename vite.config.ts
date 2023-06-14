import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: "grey",
        display: "standalone",
        icons: [
          {
            purpose: "any",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
        ],
        name: "Blomgott - blomrecept",
        short_name: "Blomgott",
        start_url: ".",
        theme_color: "#789cb6",
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["assets/**", "index.html", "manifest.webmanifest"],
      },
    }),
    react(),
    // vue()
  ],
});
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
