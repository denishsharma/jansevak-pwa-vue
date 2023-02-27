import type { RouteRecordRaw } from "vue-router";
import AuthBase from "@/layouts/AuthBase.vue";
import LoginView from "@/views/auth/LoginView.vue";
import VerifyOTPModalPage from "@/modals/verify-otp/VerifyOTPModalPage.vue";

const authRoute: RouteRecordRaw[] = [
    {
        path: "/auth",
        name: "auth.base",
        component: AuthBase,
        children: [
            {
                path: "",
                redirect: "/auth/login",
            },
            {
                path: "login",
                name: "auth.login",
                component: LoginView,
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