import type { RouteRecordRaw } from "vue-router";
import AppMasterView from "@/views/main/AppMasterView.vue";
import homeRoute from "@/router/homeRoute";
import queryRoute from "@/router/queryRoute";
import boardRoute from "@/router/boardRoute";
import menuRoute from "@/router/menuRoute";

const masterRoute: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => AppMasterView,
        children: [
            ...homeRoute,
            ...queryRoute,
            ...boardRoute,
            ...menuRoute,
        ],
    },
];

export default masterRoute;