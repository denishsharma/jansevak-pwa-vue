import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/css/style.scss";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

const resize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("DOMContentLoaded", resize);
window.addEventListener("resize", resize);