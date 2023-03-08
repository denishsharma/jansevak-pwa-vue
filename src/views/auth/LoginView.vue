<template>
    <PageHeading class="mb-6" title="Welcome to" emphasis="Jansevak">
        <template #subtitle>
            Enter your Phone Number to get started. We will send you a verification code.
        </template>
    </PageHeading>

    <AppComponentBase>
        <div class="flex flex-col gap-2">

            <label class="relative">
                <input v-maska data-maska="##########" type="text" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your phone number">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-3.5">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.56262 18.7347H2.83598C1.64942 18.7347 0.6875 17.7727 0.6875 16.5862V5.4141C0.6875 4.22754 1.64942 3.26562 2.83598 3.26562H7.56262V18.7347Z" fill="#FF9E1C" />
                        <path d="M14.4377 3.26562H7.56262V18.7347H14.4377V3.26562Z" fill="white" />
                        <path d="M19.1644 18.7347H14.4377V3.26562H19.1644C20.351 3.26562 21.3129 4.22754 21.3129 5.4141V16.5862C21.3129 17.7727 20.351 18.7347 19.1644 18.7347Z" fill="#6DA544" />
                        <path d="M11.0002 8.422C9.57629 8.422 8.422 9.57629 8.422 11.0002C8.422 12.424 9.57629 13.5783 11.0002 13.5783C12.424 13.5783 13.5783 12.424 13.5783 11.0002C13.5783 9.57629 12.424 8.422 11.0002 8.422ZM11.0002 12.7189C10.0509 12.7189 9.28139 11.9494 9.28139 11.0002C9.28139 10.0509 10.0509 9.28139 11.0002 9.28139C11.9494 9.28139 12.7189 10.0509 12.7189 11.0002C12.7189 11.9494 11.9494 12.7189 11.0002 12.7189Z" fill="#0053B5" />
                        <path d="M11.0001 9.78479L11.2327 10.4387L11.8595 10.1407L11.5616 10.7676L12.2155 11.0001L11.5616 11.2327L11.8595 11.8595L11.2327 11.5616L11.0001 12.2155L10.7676 11.5616L10.1407 11.8595L10.4387 11.2327L9.78479 11.0001L10.4387 10.7676L10.1407 10.1407L10.7676 10.4387L11.0001 9.78479Z" fill="#0053B5" />
                    </svg>

                </div>
            </label>

            <label class="relative">
                <input type="password" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your password">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-3.5 text-gray-600">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.35" d="M16.5003 19.2503H5.50005C3.98111 19.2503 2.75 18.0192 2.75 16.5003V9.1668C2.75 7.64785 3.98111 6.41675 5.50005 6.41675H16.5003C18.0192 6.41675 19.2503 7.64785 19.2503 9.1668V16.5003C19.2503 18.0192 18.0192 19.2503 16.5003 19.2503Z" fill="currentColor" />
                        <path d="M7.33337 6.41673C7.33337 4.39177 8.97515 2.74999 11.0001 2.74999C13.0251 2.74999 14.6668 4.39177 14.6668 6.41673H16.5002C16.5002 3.37884 14.038 0.916626 11.0001 0.916626C7.96221 0.916626 5.5 3.37884 5.5 6.41673H7.33337Z" fill="currentColor" />
                        <path d="M11.0001 11.0001C9.98718 11.0001 9.16675 11.8206 9.16675 12.8335C9.16675 13.8464 9.98718 14.6669 11.0001 14.6669C12.0131 14.6669 12.8335 13.8464 12.8335 12.8335C12.8335 11.8206 12.0131 11.0001 11.0001 11.0001Z" fill="currentColor" />
                    </svg>
                </div>
            </label>

        </div>
    </AppComponentBase>

    <AppComponentBase class="mt-3.5">
        <div class="flex flex-col gap-2">
            <button @click="onLogin" type="button" class="py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all">
                Login
            </button>

            <a type="button" class="py-2 px-4 w-full text-xs select-none inline-flex justify-center items-center rounded-lg border border-transparent text-gray-500 hover:bg-gray-200 active:bg-gray-300 focus:outline-none transition-all">
                Forgot Password?&nbsp;<span class="inline font-semibold text-gray-500">Reset Password</span>
            </a>
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
        <button type="button" class="py-3.5 px-4 w-full text-xs font-medium select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all">
            Log in using OTP
        </button>
    </AppComponentBase>

    <AppComponentBase class="mt-8 flex flex-col justify-end grow">
        <div class="px-4 text-gray-400 text-xxs text-center leading-tight">
            By proceeding, you agree to our
            <span class="font-semibold">Privacy Policy</span> and
            <span class="font-semibold">Terms and Conditions</span>
        </div>
    </AppComponentBase>


    <VerifyOTPModalPage ref="refVerifyOtpModal" @on-verify="onVerifyOtp" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { vMaska } from "maska";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import VerifyOTPModalPage from "@/modals/auth/VerifyOTPModalPage.vue";
import Button from "@/components/button/Button.vue";

const refVerifyOtpModal = ref<InstanceType<typeof VerifyOTPModalPage>>();

const onLogin = () => {
    openVerifyOtp();
};

const openVerifyOtp = () => {
    refVerifyOtpModal.value?.openModal();
};

const onVerifyOtp = (s: boolean) => {
    console.log(s);
};
</script>

<style scoped>

</style>