import type { RouteRecordRaw } from "vue-router";

const queryRoute: RouteRecordRaw[] = [
    {
        path: "/queries",
        name: "query.list",
        component: () => import("../views/query/QueryListView.vue"),
    },
];

export default queryRoute;