<template>
    <ModalPage id="auth-login" ref="refModalPage" :do-on-open="doOnOpen">
        <AppContainerBase>
            <template #header>
                <div class="border border-gray-200 flex h-10 w-10 rounded-xl bg-white">
                    <img :src="platformLogo" alt="" class="h-6 w-6 mx-auto my-auto object-contain object-center">
                </div>
            </template>

            <template #body>
                <PageHeading class="mb-6" emphasis="Jansevak" title="Welcome to">
                    <template #subtitle>
                        Enter your Phone Number to get started. We will send you a verification code.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <transition mode="out-in" name="fade-scale">
                        <div v-if="isLoginFailed" class="mb-4 w-full bg-red-100/[0.8] text-red-500 rounded-lg px-3 py-2.5 flex items-center gap-2.5">
                            <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                <path d="M15.9027 13.4854C16.2822 12.7383 16.5004 11.8958 16.5004 11.0002C16.5004 7.96233 14.0382 5.50012 11.0003 5.50012C10.1047 5.50012 9.26223 5.71829 8.51514 6.0978L15.9027 13.4854Z" fill="currentColor" />
                                <path d="M6.0978 8.51514C5.71829 9.26223 5.50012 10.1047 5.50012 11.0003C5.50012 14.0382 7.96233 16.5004 11.0002 16.5004C11.8958 16.5004 12.7383 16.2822 13.4854 15.9027L6.0978 8.51514Z" fill="currentColor" />
                            </svg>
                            <div class="text-xs font-medium">
                                Invalid credentials provided. Please try again.
                            </div>
                        </div>
                    </transition>

                    <div class="flex flex-col gap-2">
                        <label class="relative">
                            <input v-maska :disabled="isLoggingIn" :value="authData.phone" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" data-maska="##########" placeholder="Enter your phone number" type="text" @input="updatePhoneNumber">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-3.5">
                                <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.56262 18.7347H2.83598C1.64942 18.7347 0.6875 17.7727 0.6875 16.5862V5.4141C0.6875 4.22754 1.64942 3.26562 2.83598 3.26562H7.56262V18.7347Z" fill="#FF9E1C" />
                                    <path d="M14.4377 3.26562H7.56262V18.7347H14.4377V3.26562Z" fill="white" />
                                    <path d="M19.1644 18.7347H14.4377V3.26562H19.1644C20.351 3.26562 21.3129 4.22754 21.3129 5.4141V16.5862C21.3129 17.7727 20.351 18.7347 19.1644 18.7347Z" fill="#6DA544" />
                                    <path d="M11.0002 8.422C9.57629 8.422 8.422 9.57629 8.422 11.0002C8.422 12.424 9.57629 13.5783 11.0002 13.5783C12.424 13.5783 13.5783 12.424 13.5783 11.0002C13.5783 9.57629 12.424 8.422 11.0002 8.422ZM11.0002 12.7189C10.0509 12.7189 9.28139 11.9494 9.28139 11.0002C9.28139 10.0509 10.0509 9.28139 11.0002 9.28139C11.9494 9.28139 12.7189 10.0509 12.7189 11.0002C12.7189 11.9494 11.9494 12.7189 11.0002 12.7189Z" fill="#0053B5" />
                                    <path d="M11.0001 9.78479L11.2327 10.4387L11.8595 10.1407L11.5616 10.7676L12.2155 11.0001L11.5616 11.2327L11.8595 11.8595L11.2327 11.5616L11.0001 12.2155L10.7676 11.5616L10.1407 11.8595L10.4387 11.2327L9.78479 11.0001L10.4387 10.7676L10.1407 10.1407L10.7676 10.4387L11.0001 9.78479Z" fill="#0053B5" />
                                </svg>
                            </div>
                        </label>

                        <label v-if="authMode === 'password'" class="relative">
                            <input :disabled="isLoggingIn" :value="authData.password" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" placeholder="Enter your password" type="password" @input="updatePassword">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-3.5 text-gray-600">
                                <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5003 19.2503H5.50005C3.98111 19.2503 2.75 18.0192 2.75 16.5003V9.1668C2.75 7.64785 3.98111 6.41675 5.50005 6.41675H16.5003C18.0192 6.41675 19.2503 7.64785 19.2503 9.1668V16.5003C19.2503 18.0192 18.0192 19.2503 16.5003 19.2503Z" fill="currentColor" opacity="0.35" />
                                    <path d="M7.33337 6.41673C7.33337 4.39177 8.97515 2.74999 11.0001 2.74999C13.0251 2.74999 14.6668 4.39177 14.6668 6.41673H16.5002C16.5002 3.37884 14.038 0.916626 11.0001 0.916626C7.96221 0.916626 5.5 3.37884 5.5 6.41673H7.33337Z" fill="currentColor" />
                                    <path d="M11.0001 11.0001C9.98718 11.0001 9.16675 11.8206 9.16675 12.8335C9.16675 13.8464 9.98718 14.6669 11.0001 14.6669C12.0131 14.6669 12.8335 13.8464 12.8335 12.8335C12.8335 11.8206 12.0131 11.0001 11.0001 11.0001Z" fill="currentColor" />
                                </svg>
                            </div>
                        </label>
                    </div>
                </AppComponentBase>

                <AppComponentBase class="mt-3.5">
                    <div class="flex flex-col gap-2">
                        <button :disabled="isLoggingIn || !validationPass || (authMode === 'password' && authData.password.trim().length === 0)" class="disabled:bg-gray-100 disabled:text-gray-300 bg-orange-500 text-white active:bg-orange-600 focus:outline-none py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent transition-all" type="button" @click="handleLogin">
                            <div v-show="isLoggingIn" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                            {{ isLoggingIn ? "Logging In..." : "Login" }}
                        </button>

                        <button v-if="authMode === 'password'" class="py-2 px-4 w-full text-xs select-none inline-flex justify-center items-center rounded-lg border border-transparent text-gray-500 active:bg-gray-300 focus:outline-none transition-all" type="button" @click="openForgotPasswordSheet">
                            Forgot Password?&nbsp;<span class="inline font-semibold text-gray-500">Reset Password</span>
                        </button>
                    </div>
                </AppComponentBase>

                <AppComponentBase class="my-3">
                    <div class="select-none w-full flex justify-evenly gap-3 items-center">
                        <div class="h-px w-full grow bg-gray-100"></div>
                        <span class="text-xs text-gray-500 leading-tight shrink-0">or</span>
                        <div class="h-px w-full grow bg-gray-100"></div>
                    </div>
                </AppComponentBase>

                <AppComponentBase>
                    <transition mode="out-in" name="fade">
                        <button class="py-3.5 px-4 w-full text-xs font-medium select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-gray-500 text-white active:bg-gray-700 focus:outline-none transition-all" type="button" @click="changeLoginMode">
                            Log in using {{ authMode === "password" ? "OTP" : "Password" }}
                        </button>
                    </transition>
                </AppComponentBase>

                <AppComponentBase class="mt-8 flex flex-col justify-end grow">
                    <div class="px-4 text-gray-400 text-xxs text-center leading-tight">
                        By proceeding, you agree to our
                        <span class="font-semibold">Privacy Policy</span> and
                        <span class="font-semibold">Terms and Conditions</span>
                    </div>
                </AppComponentBase>

                <VerifyOTPModalPage ref="refVerifyOTPModal" @on-close="onCloseVerifyOTPModal" @on-verify="fetchAuthenticatedUser" />
                <ForgotPasswordSheet ref="refForgotPasswordSheet" @on-close="onCloseForgotPasswordSheet" />
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import { LocalNotifications } from "@capacitor/local-notifications";
import { ref } from "vue";
import { vMaska } from "maska";
import ModalPage from "@/components/modal-page/ModalPage.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import VerifyOTPModalPage from "@/modals/auth/VerifyOTPModalPage.vue";
import ForgotPasswordSheet from "@/sheets/forgot-password/ForgotPasswordSheet.vue";
import type { AuthMode, AuthData } from "@/services/auth.service";
import { set, syncRef, useAsyncState } from "@vueuse/core";
import AuthService from "@/services/auth.service";
import { clsx } from "clsx";
import { useAuthStore } from "@/stores/authStore";
import platformLogo from "@/assets/images/logo.svg";
import { useAsyncValidator } from "@vueuse/integrations/useAsyncValidator";
import type { Rules } from "async-validator";
import { executeAfter } from "@/helpers/general";

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);
const refVerifyOTPModal = ref<InstanceType<typeof VerifyOTPModalPage>>();

const refForgotPasswordSheet = ref<InstanceType<typeof ForgotPasswordSheet>>();

const authStore = useAuthStore();
const {
    setUserId,
    setIsProfileCompleted,
    setIsAuthenticated,
    setUserToken,
    setUserRefreshToken,
    setUserPermissions,
} = authStore;

// auth mode can be either "password" or "otp" for now
const authMode = ref<AuthMode>("otp");
const authData = ref<AuthData>({ mode: authMode.value, password: "" });

const formValidationRules: Rules = {
    phone: {
        required: true,
        min: 10,
        max: 10,
    },
    password: {
        ...(authMode.value === "password" && { required: true }),
    },
};

const { pass: validationPass, errorFields: validationErrors } = useAsyncValidator(authData, formValidationRules);

function handlePerformLogin(data: any) {
    setUserId(data.user.id);
    if (authMode.value === "otp") {
        openVerifyOTPModal();

        LocalNotifications.schedule({
            notifications: [
                {
                    title: "OTP Verification Code",
                    body: `Your OTP verification code is ${data.otp}`,
                    id: 1,
                    schedule: { at: new Date(Date.now() + 200) },
                    extra: null,
                },
            ],
        }).then(() => {
            console.log("LocalNotifications scheduled");
        });
    } else {
        setUserPermissions(data.user.permissions);
        setUserToken(data.jwt.token);
        setUserRefreshToken(data.jwt.refreshToken);
        fetchAuthenticatedUser();
    }
}

const isLoggingIn = ref(false);
const isLoginFailed = ref(false);

function updatePhoneNumber(e: Event) {
    authData.value.phone = (e.target as HTMLInputElement).value;
}

function updatePassword(e: Event) {
    authData.value.password = (e.target as HTMLInputElement).value;
}

const openVerifyOTPModal = () => {
    refVerifyOTPModal.value?.openModal();
    refModalPage.value?.suspend();
};

const onCloseVerifyOTPModal = () => {
    refModalPage.value?.resume();
};

const handleOnGetUser = (data) => {
    setIsAuthenticated(true);
    setIsProfileCompleted(data.is_setup_completed);
    emit("on-login-success");

    executeAfter(() => {
        set(isLoggingIn, false);
        authData.value.password = "";
    }, 100);
    refModalPage.value?.closeModal();
};

const fetchAuthenticatedUser = () => {
    const { isLoading, execute } = AuthService.me(handleOnGetUser, console.log);
    if (authMode.value === "otp") {
        syncRef(isLoading, isLoggingIn, { direction: "ltr" });
    }
    execute();
};

const openForgotPasswordSheet = () => {
    refForgotPasswordSheet.value?.openModal();
    refModalPage.value?.suspend();
};

const onCloseForgotPasswordSheet = () => {
    refModalPage.value?.resume();
};

const doOnOpen = () => {
    (document.activeElement as HTMLElement)?.blur();
};

const handleLogin = () => {
    const { isLoading, execute } = AuthService.login(authData.value, handlePerformLogin, () => {
        if (authMode.value === "password") {
            set(isLoginFailed, true);
            set(isLoggingIn, false);
            authData.value.password = "";

            executeAfter(() => {
                set(isLoginFailed, false);
            }, 5000);
        }
    });
    if (authMode.value === "otp") {
        syncRef(isLoading, isLoggingIn);
    } else {
        set(isLoggingIn, true);
    }
    execute();
};

const changeLoginMode = () => {
    authMode.value = authMode.value === "password" ? "otp" : "password";
    authData.value.mode = authMode.value;
    authData.value.password = "";
};

const emit = defineEmits(["on-login-success"]);

defineExpose({
    authMode,
    openModal: () => refModalPage.value?.openModal(),
    closeModal: () => refModalPage.value?.closeModal(),
    goBack: () => refModalPage.value?.goBack(),
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style scoped>

</style>