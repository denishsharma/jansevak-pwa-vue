import { useAuthStore } from "@/stores/authStore";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { storeToRefs } from "pinia";

export const TEMP_HOST = "https://jansevak.loophole.site";
// export const TEMP_HOST = "http://14.141.78.150";
// export const TEMP_HOST = "http://localhost:3333";

// const API_URL = `${import.meta.env.VITE_API_URL}/api/`;
const API_URL = `${TEMP_HOST}/api/`;

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
        headers: Object.assign({ "Authorization": _authToken }, options.headers),
        ...options,
    });

    _axios.catch((err: AxiosError) => {
        err.response?.status === 401 && authStore.logout();
    });

    return _axios;
};