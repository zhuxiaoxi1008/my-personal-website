import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    open: true,
  },
  base: "/resume/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/assets/scss/variables.scss';",
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto/auto-imports.d.ts",
    }),
    Components({
      dts: "src/auto/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
