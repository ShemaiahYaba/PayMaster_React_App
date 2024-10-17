import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Default output directory for Vite
    rollupOptions: {
      external: [], // Remove axios from here; we don't want to exclude it from the bundle
    },
  },
});
