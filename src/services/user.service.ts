import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export default class UserService {
    static listJansevaks(data: { id?: string, ward?: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("user/jansevak/list", "get", {}, {
            params: {
                ...(data.id ? { user: data.id } : {}),
                ...(data.ward ? { ward: data.ward } : {}),
            },
        }).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}