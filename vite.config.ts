import { VitePWA } from "vite-plugin-pwa";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    VitePWA({ registerType: "autoUpdate" }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
