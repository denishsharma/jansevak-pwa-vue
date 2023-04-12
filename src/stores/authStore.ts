import { set } from "@vueuse/core";
import { defineStore } from "pinia";
import { ref } from "vue";

interface UserInterface {
    id: string | null;
    token: string | null;
    refreshToken: string | null,
    permissions: string[] | null;
    data: any | null;
}

export const useAuthStore = defineStore("auth", () => {
    const isAuthenticated = ref(false);
    const isProfileCompleted = ref(false);
    const user = ref<UserInterface>({
        id: null,
        token: null,
        refreshToken: null,
        permissions: null,
        data: null,
    });

    const setIsAuthenticated = (value: boolean) => {
        set(isAuthenticated, value);
    };

    const setIsProfileCompleted = (value: boolean) => {
        set(isProfileCompleted, value);
    };

    const setUser = (value: UserInterface) => {
        set(user, value);
    };

    const setUserData = (value: any) => {
        set(user, { ...user.value, data: value });
    };

    const setUserId = (value: string | null) => {
        set(user, { ...user.value, id: value });
    };

    const setUserToken = (value: string | null) => {
        set(user, { ...user.value, token: value });
    };

    const setUserRefreshToken = (value: string | null) => {
        set(user, { ...user.value, refreshToken: value });
    };

    const setUserPermissions = (value: string[] | null) => {
        set(user, { ...user.value, permissions: value });
    };

    const logout = () => {
        set(isAuthenticated, false);
        set(isProfileCompleted, false);
        set(user, null);
    };

    return {
        isAuthenticated, setIsAuthenticated,
        isProfileCompleted, setIsProfileCompleted,
        user, setUser, setUserData, setUserId, setUserToken, setUserRefreshToken, setUserPermissions,
        logout,
    };

}, { persist: { debug: true } });