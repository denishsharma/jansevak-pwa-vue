import { createRouter, createWebHistory } from "vue-router";
import masterRoute from "@/router/masterRoute";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...masterRoute,
    ],
});

export default router;
