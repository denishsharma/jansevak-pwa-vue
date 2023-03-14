import { useAsyncState } from "@vueuse/core";
import { call, useAxiosOptions } from "@/helpers/api";

export type AuthMode = "otp" | "email" | "password";

export type AuthData = {
    mode: AuthMode;
    phone?: string;
    email?: string;
    password?: string;
}

export default class AuthService {
    static login(data: AuthData, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("auth/login", "post", {
            mode: data.mode,
            phone_number: data.phone,
            email: data.email,
            password: data.password,
        }, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static verify(data: { id: string, otp: string }, success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("auth/verify", "post", {
            user_uuid: data.id,
            otp: data.otp,
        }, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

    static me(success?: (data: any) => void, error?: (data: any) => void) {
        return useAsyncState(call("auth/me", "post", {}, {}).then(d => d.data), {}, useAxiosOptions(success, error));
    }

}