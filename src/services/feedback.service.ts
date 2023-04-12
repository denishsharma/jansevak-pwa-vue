import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export default class FeedbackService {
    static giveFeedback(data: { type: string; rating: number | undefined; for_user: string | undefined; for_query: string | undefined; subject: string; text: string | undefined; }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`feedback/give`, "post", data, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}