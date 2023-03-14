import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export default class QuestionService {
    static list(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("question/list", "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}