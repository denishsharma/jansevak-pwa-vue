import { createRouter, createWebHistory } from "vue-router";
import authRoute from "@/router/authRoute";
import HomeView from "@/views/HomeView.vue";
import ProfileSetupModalPageView from "@/views/profile/ProfileSetupModalPageView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...authRoute,
        {
            path: "/",
            component: HomeView,
        },
        {
            path: "/profile",
            component: ProfileSetupModalPageView,
        },
    ],
});

export default router;
