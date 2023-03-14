import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";

const API_URL = `${import.meta.env.VITE_API_URL}/api/`;

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";


export const useAxiosOptions = (success?: (data: any) => void, error?: (data: any) => void) => {
    return {
        immediate: false, resetOnExecute: true,
        onSuccess: (data) => {
            success && success((data as AxiosResponse).data);
        },
        onError: (data) => {
            error && error((data as AxiosError).response?.data);
        },
    };
};

export const call = (url: string, method: "get" | "post" | "put" | "delete", data: any, options: any) => {
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);

    const _authToken = user.value && user.value.token ? `Bearer ${user.value.token}` : null;

    const _axios = axios({
        url,
        method,
        data,
        headers: {
            ...options.headers,
            Authorization: _authToken,
        },
        ...options,
    });

    _axios.catch((err: AxiosError) => {
        err.response?.status === 401 && authStore.logout();
    });

    return _axios;
};