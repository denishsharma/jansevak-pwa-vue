import { LocalNotifications } from "@capacitor/local-notifications";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import ApexCharts from "apexcharts";
import { vMaska } from "maska";

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $apexCharts: typeof ApexCharts;
    }
}

import { App as CapacitorApp } from "@capacitor/app";

import "@splidejs/splide/dist/css/splide-core.min.css";
import "@/assets/css/style.scss";

import App from "./App.vue";
import mitt from "mitt";
import VueSplide from "@splidejs/vue-splide";
import VueApexCharts from "vue3-apexcharts";
import router from "./router";
import { executeAfter } from "@/helpers/general";

const emitter = mitt();
const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.use(router);
app.use(VueSplide);
app.use(VueApexCharts);

app.directive("maska", vMaska);

app.config.errorHandler = (err, vm, info) => {
    console.log(err);
    console.log(vm);
    console.log(info);
};

app.config.globalProperties.$apexCharts = ApexCharts;
app.config.globalProperties.emitter = emitter;
app.mount("#app");

CapacitorApp.addListener("backButton", async (canGoBack) => {
    if (canGoBack) {
        router.back();
    } else {
        await CapacitorApp.exitApp();
    }
});

LocalNotifications.checkPermissions().then((res) => {
    if (res.display !== "granted") {
        LocalNotifications.requestPermissions().then((_res) => {
            if (_res.display !== "granted") {
                console.log("Notification permission denied");
            }
        });
    }
});

const resize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
};

//
// function disableForwardButton() {
//     let flag: boolean, loop = false;
//     window.addEventListener("popstate", function (event) {
//         if (flag) {
//             if (history.state && history.state.hasOwnProperty("page")) {
//                 loop = true;
//                 history.go(-1);
//             } else {
//                 loop = false;
//                 history.go(-1);
//             }
//         } else {
//             history.pushState({
//                     page: true,
//                 },
//                 "",
//                 null,
//             );
//         }
//         flag = loop ? true : !flag;
//     });
//
//     window.onclick = function (event) {
//         flag = false;
//     };
// }


window.addEventListener("DOMContentLoaded", function () {
    resize();

    executeAfter(() => {
        const splashScreen = document.querySelector("[data-splash-screen]");
        if (splashScreen) {
            splashScreen.classList.add("hidden");
        }
    }, 1000);

    // disableForwardButton();
});
window.addEventListener("resize", resize);