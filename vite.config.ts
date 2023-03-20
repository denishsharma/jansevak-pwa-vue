import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        // PWA,
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
            images: fileURLToPath(new URL("./src/assets/images", import.meta.url)),
            styles: fileURLToPath(new URL("./src/assets/styles", import.meta.url)),
            components: fileURLToPath(new URL("./src/components", import.meta.url)),
            helpers: fileURLToPath(new URL("./src/helpers", import.meta.url)),
            services: fileURLToPath(new URL("./src/services", import.meta.url)),
            stores: fileURLToPath(new URL("./src/stores", import.meta.url)),
            views: fileURLToPath(new URL("./src/views", import.meta.url)),
            modals: fileURLToPath(new URL("./src/modals", import.meta.url)),
            sheets: fileURLToPath(new URL("./src/sheets", import.meta.url)),
            fragments: fileURLToPath(new URL("./src/fragments", import.meta.url)),
            skeleton: fileURLToPath(new URL("./src/skeleton", import.meta.url)),
        },
    },
});
