import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export type ProfileData = {
    profile?: {
        first_name?: string;
        last_name?: string;
        email?: string;
        gender?: string;
        aadhar_number?: string;
        voter_id_number?: string;
    },
    address?: {
        address_line_1?: string;
        address_line_2?: string;
        district?: string;
        city?: string;
        state?: string;
        pincode?: string;
    },
    ward?: {
        ward_code?: string;
    }
}

export default class ProfileService {
    static update(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("ward/list-all", "get", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }
}