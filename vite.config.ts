import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from 'vite-plugin-eslint';
//import { fileURLToPath, URL } from "url";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslintPlugin(), vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `
          @import  "@/scss/main.scss";
          `,
      },
    }
  }
});
