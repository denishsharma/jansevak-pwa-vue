import type { RouteRecordRaw } from "vue-router";
import homeRoute from "@/router/homeRoute";
import queryRoute from "@/router/queryRoute";
import boardRoute from "@/router/boardRoute";
import menuRoute from "@/router/menuRoute";

const masterRoute: RouteRecordRaw[] = [
    {
        path: "",
        component: () => import("@/views/main/AppMasterView.vue"),
        name: "app.master",
        children: [
            ...homeRoute,
            ...queryRoute,
            ...boardRoute,
            ...menuRoute,
        ],
    },
];

export default masterRoute;