// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: "/toolkit-website-vite/", // Adjust this path as needed
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: "./postcss.config.js",
  },
});
