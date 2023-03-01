import type { RouteRecordRaw } from "vue-router";
import { defineAsyncComponent } from "vue";

const queryRoute: RouteRecordRaw[] = [
    {
        path: "/queries",
        name: "query.list",
        component: () => defineAsyncComponent(() => import("../views/query/QueryListView.vue")),
    },
];

export default queryRoute;