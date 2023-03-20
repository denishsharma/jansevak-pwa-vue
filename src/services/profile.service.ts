import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";

export default class ProfileService {
    static setup(data: any, success?: (data: any) => void, error?: (data: any) => void) {
        const authStore = useAuthStore();
        const { user } = storeToRefs(authStore);

        return useAsyncState(call("/profile/setup", "post", data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.value && user.value.token ? `Bearer ${user.value.token}` : null,
            },
        }).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}