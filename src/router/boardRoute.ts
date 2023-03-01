import type { RouteRecordRaw } from "vue-router";

const boardRoute: RouteRecordRaw[] = [
    {
        path: "/board",
        name: "board",
        component: () => import("@/views/board/BoardView.vue"),
    },
];

export default boardRoute;