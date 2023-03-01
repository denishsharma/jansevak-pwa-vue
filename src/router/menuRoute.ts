import type { RouteRecordRaw } from "vue-router";

const menuRoute: RouteRecordRaw[] = [
    {
        path: "/menu",
        name: "menu",
        component: () => import("@/views/menu/MenuView.vue"),
    },
];

export default menuRoute;