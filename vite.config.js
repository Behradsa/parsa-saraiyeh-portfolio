import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  // The old React portfolio now lives at /old/ (e.g. /old/#/nebulox).
  // The new site is plain HTML in public/ and is copied to the root of dist after the build.
  base: "/old/",
  build: {
    outDir: "dist/old",
    emptyOutDir: true,
    copyPublicDir: false,
  },
  plugins: [react(), imagetools()],
  preview: {
    port: 3000,
    strictPort: true,
  },

  server: {
    port: 3000,
    // strictPort: true,
    host: true,
    // origin: "http://0.0.0.0:3000",
  },
});
