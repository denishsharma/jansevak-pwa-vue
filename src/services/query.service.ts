import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/authStore";

export interface CreateQueryData {
    form: {
        subject: string;
        description: string;
        category: string;
    },
    relation: {
        onBehalfOf: string;
        assignedTo: string;
    },
    attachments: File[]
}

export default class QueryService {
    static listCategories(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("query/category/list", "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static listOnBehalfOf(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("query/on-behalf/list", "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static listMyQueries(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("query/list/my", "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static createQuery(data: CreateQueryData, success?: (data: any) => void, error?: (data: any) => void) {
        const formData = new FormData();
        formData.append("form", JSON.stringify(data.form));
        formData.append("relation", JSON.stringify({
            on_behalf_of: data.relation.onBehalfOf,
            assigned_to: data.relation.assignedTo,
        }));
        data.attachments.forEach((file, index) => {
            formData.append(`attachments[${index}]`, file);
        });

        const authStore = useAuthStore();
        const { user } = storeToRefs(authStore);

        return useAsyncState(call("query/create", "post", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + user.value && user.value.token ? `Bearer ${user.value.token}` : null,
            },
        }).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}