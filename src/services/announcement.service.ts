import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export default class AnnouncementService {
    static list(data?: { p?: string, sd?: string, ed?: string, withArchived?: boolean, withUnpublished?: boolean }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("announcement/list", "get", {}, {
            params: {
                p: data?.p,
                sd: data?.sd,
                ed: data?.ed,
                withArchived: data?.withArchived,
                withUnpublished: data?.withUnpublished,
            },
        }).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static show(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`announcement/show/${data.id}`, "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}