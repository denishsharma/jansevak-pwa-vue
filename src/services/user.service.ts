import { call, useAxiosOptions } from "@/helpers/api";
import { useAsyncState } from "@vueuse/core";

export default class UserService {
    static listJansevaks(data: {
        id?: string,
        ward?: string
    }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("user/jansevak/list", "get", {}, {
            params: {
                ...(data.id ? { user: data.id } : {}),
                ...(data.ward ? { ward: data.ward } : {}),
            },
        }).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static updatePassword(data: {
        password: string,
        password_confirmation: string
    }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("user/update/password", "post", data, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static getUserByFid(data: {
        fid: string,
        get: "all" | "my_nagarik" | "family"
    }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`user/fid/${data.fid}`, "get", {}, {
            params: {
                get: data.get,
            },
        }).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static getAssignedNagariks(data: {
        id: string,
        only?: string
    }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`user/nagarik/list/assigned/${data.id}`, "get", {}, {
            params: {
                ...(data.only ? { only: data.only } : {}),
            },
        }).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}