import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import process from "process";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProduction ? "/toolkit-website-vite/" : "/",
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: "./postcss.config.js",
  },
});
