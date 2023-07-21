// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "/pages/about.html"),
        // project: resolve(__dirname, "/pages/project.html"),
      },
    },
  },
});
