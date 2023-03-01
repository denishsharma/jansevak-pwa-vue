import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/css/style.scss";

import App from "./App.vue";
import mitt from "mitt";
import router from "./router";

const emitter = mitt();
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.globalProperties.emitter = emitter;
app.mount("#app");

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
    // disableForwardButton();
});
window.addEventListener("resize", resize);