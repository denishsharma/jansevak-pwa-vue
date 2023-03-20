import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export default class WardService {
    static list(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("ward/list", "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static postOfficeList(data: { pincode: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`ward/post-office-list/${data.pincode}`, "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}