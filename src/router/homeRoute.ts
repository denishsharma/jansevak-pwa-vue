import type { RouteRecordRaw } from "vue-router";

const homeRoute: RouteRecordRaw[] = [
    {
        path: "",
        name: "home.redirect",
        redirect: "/home",
    },
    {
        path: "/home",
        name: "home.dashboard",
        component: () => import("@/views/home/DashboardView.vue"),
    },
];

export default homeRoute;