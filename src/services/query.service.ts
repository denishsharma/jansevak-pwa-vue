import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/authStore";
import type { DateTime } from "luxon";

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

export interface QueryInfoSchema {
    uuid: string;
    fid: string;
    subject: string;
    description: string;
    status: string;
    deleted_at: DateTime | null;
    created_at: DateTime;
    total_attachments: number;
    category: {
        uuid: string;
        name: string;
    },
    onBehalfOf: {
        uuid: string;
        phone_number: string;
        user_type: string;
        full_name: string;
        avatar_url: string;
        address: {
            address_line_one: string;
            address_line_two: string;
            district: string;
            state: string;
            country: string;
            pincode: string;
        }
    },
    creator: {
        uuid: string;
        phone_number: string;
        user_type: string;
        full_name: string;
        avatar_url: string;
    },
    jansevak: {
        uuid: string;
        phone_number: string;
        user_type: string;
        full_name: string;
        avatar_url: string;
    }
}

export interface QueryAttachmentsSchema {
    attachments: Array<{ url: string, name: string }>,
    total: number,
}

export interface QueryCommentSchema {
    uuid: string;
    type: "LOG" | "COMMENT";
    comment: string | null;
    status: string | null;
    created_at: DateTime;
    user: null | {
        uuid: string;
        phone_number: string;
        user_type: string;
        full_name: string;
        avatar_url: string;
    };
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

    static listAssignedToMeQueries(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("query/list/assigned", "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
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

    static getQueryInfo(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/show/${data.id}/info`, "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static getQueryAttachments(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/show/${data.id}/attachments`, "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static getQueryComments(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/show/${data.id}/comments`, "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static addRegularComment(data: { id: string, comment: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/comment/regular`, "post", {
            query: data.id,
            comment: data.comment,
        }, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static updateQueryStatusToInReview(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/status/review/${data.id}`, "post", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static updateQueryStatusToInProgress(data: { id: string, comment?: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/status/progress/${data.id}`, "post", {
            ...(data.comment && { comment: data.comment }),
        }, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static updateQueryStatusToResolved(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/status/resolved/${data.id}`, "post", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static updateQueryStatusToRejected(data: { id: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call(`query/status/reject/${data.id}`, "post", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}