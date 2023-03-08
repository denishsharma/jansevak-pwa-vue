import type { RouteRecordRaw } from "vue-router";
import AuthBase from "@/layouts/AuthBase.vue";
import VerifyOTPModalPage from "@/modals/auth/VerifyOTPModalPage.vue";

const authRoute: RouteRecordRaw[] = [
    {
        path: "/auth",
        component: AuthBase,
        children: [
            {
                path: "",
                redirect: "/auth/login",
            },
            {
                path: "login",
                name: "auth.login",
                component: () => import("@/views/auth/LoginView.vue"),
            },
        ],
    },
    {
        path: "/auth/verify-otp",
        name: "auth.verify-otp",
        component: VerifyOTPModalPage,
    },
];

export default authRoute;