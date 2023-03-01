import { createRouter, createWebHistory } from "vue-router";
import authRoute from "@/router/authRoute";
import profileRoute from "@/router/profileRoute";
import masterRoute from "@/router/masterRoute";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...authRoute,
        ...profileRoute,
        ...masterRoute,
    ],
});

export default router;
