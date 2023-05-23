// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),

        contact: resolve(__dirname, "contact.html"),
        blog: resolve(__dirname, "blog.html"),
        work: resolve(__dirname, "work.html"),
      },
    },
  },
});
