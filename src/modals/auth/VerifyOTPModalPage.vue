<template>
    <ModalPage id="verify-otp" ref="refModalPage">
        <AppContainerBase>
            <template #title>Verify OTP</template>

            <template #header>
                <div class="flex items-center">
                    <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all" type="button" @click="router.back()">
                        <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </template>

            <template #body>
                <PageHeading class="mb-6" emphasis="Phone Number" title="Verify your">
                    <template #subtitle>
                        Please enter the OTP sent to
                        <span class="font-semibold">+91 8355892633</span>. OTP takes some time
                        to arrive, please wait.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="grid grid-cols-6 gap-x-3.5">
                        <input :disabled="isVerifying" class="py-5 px-1 block w-full text-center border-gray-200/[0.7] rounded-lg text-xl uppercase font-bold focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" data-ref="otpFields" maxlength="1" minlength="1" pattern="." placeholder="0" type="text">
                        <input :disabled="isVerifying" class="py-5 px-1 block w-full text-center border-gray-200/[0.7] rounded-lg text-xl uppercase font-bold focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" data-ref="otpFields" maxlength="1" minlength="1" pattern="." placeholder="0" type="text">
                        <input :disabled="isVerifying" class="py-5 px-1 block w-full text-center border-gray-200/[0.7] rounded-lg text-xl uppercase font-bold focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" data-ref="otpFields" maxlength="1" minlength="1" pattern="." placeholder="0" type="text">
                        <input :disabled="isVerifying" class="py-5 px-1 block w-full text-center border-gray-200/[0.7] rounded-lg text-xl uppercase font-bold focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" data-ref="otpFields" maxlength="1" minlength="1" pattern="." placeholder="0" type="text">
                        <input :disabled="isVerifying" class="py-5 px-1 block w-full text-center border-gray-200/[0.7] rounded-lg text-xl uppercase font-bold focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" data-ref="otpFields" maxlength="1" minlength="1" pattern="." placeholder="0" type="text">
                        <input :disabled="isVerifying" class="py-5 px-1 block w-full text-center border-gray-200/[0.7] rounded-lg text-xl uppercase font-bold focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" data-ref="otpFields" maxlength="1" minlength="1" pattern="." placeholder="0" type="text">
                    </div>
                </AppComponentBase>

                <AppComponentBase class="mt-3.5">
                    <div class="flex flex-col gap-2">
                        <button :class="clsx({'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2': !isVerifying, 'bg-gray-100 text-gray-300': isVerifying})" :disabled="isVerifying" class="py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent transition-all" type="button" @click="verifyOtp">
                            <div v-show="isVerifying" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                            {{ isVerifying ? "Verifying..." : "Verify OTP" }}
                        </button>

                        <button class="py-3 px-4 w-full text-xs select-none inline-flex justify-center items-center rounded-lg border border-transparent text-gray-500 hover:bg-gray-200 active:bg-gray-300 focus:outline-none transition-all" type="button">
                            Resend code in &nbsp;<span class="inline font-semibold text-gray-500">00:30</span>
                        </button>
                    </div>
                </AppComponentBase>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import { nextTick, ref } from "vue";
import clsx from "clsx";
import ModalPage from "@/components/modal-page/ModalPage.vue";
import router from "@/router";

const emit = defineEmits(["onVerify"]);

const refModalPage = ref<InstanceType<typeof ModalPage>>(null);
const isVerifying = ref(false);
const otpFields = ref<HTMLInputElement[]>([]);

const openModal = () => {
    refModalPage.value?.openModal();
    nextTick(() => {
        attachEventListeners();
    });
    (document.activeElement as HTMLElement)?.blur();
};

const closeModal = () => {
    refModalPage.value?.closeModal();
};

const goBack = () => {
    refModalPage.value?.goBack();
};

const verifyOtp = () => {
    isVerifying.value = true;

    setTimeout(() => {
        const otp = otpFields.value.map((field) => field.value).join("");
        if (otp.length === 6) {
            emit("onVerify", true);
            router.back();
        }
        isVerifying.value = false;
    }, 2000);
};

const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const index = otpFields.value.indexOf(target);
    if (target.value.length === 1) {
        if (index < otpFields.value.length - 1) {
            otpFields.value[index + 1].focus();
        }
    } else if (target.value.length === 0) {
        if (index > 0) {
            otpFields.value[index - 1].focus();
        }
    }
};

const handlePaste = (e: ClipboardEvent) => {
    const pastedData = e.clipboardData?.getData("text");
    if (pastedData) {
        otpFields.value.forEach((field, index) => {
            field.value = pastedData[index] || "";
        });
    }
};

const handleBackspace = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    const index = otpFields.value.indexOf(target);


    if (e.key === "Backspace") {
        e.preventDefault();
        if (target.value.length === 0) {
            if (index > 0) {
                otpFields.value[index - 1].focus();
            }
        } else {
            target.focus();
            target.value = "";
        }
    }

};

const handleFocus = (e: Event) => {
    const target = e.target as HTMLInputElement;
    target.select();
};

const attachEventListeners = () => {
    otpFields.value = Array.from(document.querySelectorAll("[data-ref='otpFields']")) as HTMLInputElement[];
    otpFields.value.forEach((field) => {
        field.addEventListener("focus", handleFocus);
        field.addEventListener("paste", handlePaste);
        field.addEventListener("input", handleInput);
        field.addEventListener("keydown", handleBackspace);
    });
};

defineExpose({
    openModal,
    closeModal,
    goBack,
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style scoped>

</style>