import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export default class StatisticsService {
    static getQueryStatusSummary(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`stats/query-status/${data.id}`, "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}