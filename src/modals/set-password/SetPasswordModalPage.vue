<template>
    <ModalPage id="set-password" ref="refModalPage">
        <AppContainerBase>
            <template #title>Set Password</template>

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
                <PageHeading class="mb-6" emphasis="Password" title="Set">
                    <template #subtitle>
                        Set your password for secondary mode of authentication in-case you are not in any network.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="h-[150px] w-full mb-3 border py-5 border-gray-200 border-dashed rounded-lg">
                        <img :src="passwordImage" alt="" class="h-full w-full object-center object-contain">
                    </div>

                    <transition mode="out-in" name="fade-scale">
                        <div v-if="isUpdateSuccessful" class="w-full bg-green-100/[0.8] text-green-500 rounded-lg px-3 py-2.5 flex items-center gap-2.5">
                            <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                <path d="M10.0835 14.6669C9.8488 14.6669 9.61413 14.5771 9.43537 14.3983L6.68532 11.6483C6.3269 11.2898 6.3269 10.7105 6.68532 10.3521C7.04374 9.99364 7.62309 9.99364 7.98151 10.3521L10.0835 12.454L14.0188 8.5187C14.3772 8.16027 14.9566 8.16027 15.315 8.5187C15.6734 8.87712 15.6734 9.45646 15.315 9.81489L10.7316 14.3983C10.5528 14.5771 10.3181 14.6669 10.0835 14.6669Z" fill="currentColor" />
                            </svg>
                            <div class="text-xs font-medium">
                                Password updated successfully.
                            </div>
                        </div>
                    </transition>

                    <div class="select-none flex flex-col gap-1 mt-8">
                        <div class="font-semibold text-sm leading-tight mr-10">
                            Authentication Password
                        </div>
                        <div class="text-gray-500 leading-tight text-xs mr-10">
                            Password must be at least 8 characters long and must not contain any spaces.
                        </div>
                    </div>

                    <div class="flex flex-col gap-2 mt-4">
                        <label class="relative">
                            <input :disabled="isProcessing" :value="formData.password" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" placeholder="Enter new password" type="password" @input="updatePassword">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-3.5 text-gray-600">
                                <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4169 9.16684H4.58337C3.57043 9.16684 2.75 8.34641 2.75 7.33347V3.66674C2.75 2.65381 3.57043 1.83337 4.58337 1.83337H17.4169C18.4299 1.83337 19.2503 2.65381 19.2503 3.66674V7.33347C19.2503 8.34641 18.4299 9.16684 17.4169 9.16684Z" fill="currentColor" opacity="0.35" />
                                    <path d="M11.0001 6.87517C11.7596 6.87517 12.3752 6.25955 12.3752 5.50015C12.3752 4.74074 11.7596 4.12512 11.0001 4.12512C10.2407 4.12512 9.62512 4.74074 9.62512 5.50015C9.62512 6.25955 10.2407 6.87517 11.0001 6.87517Z" fill="currentColor" />
                                    <path d="M6.41677 6.87517C7.17618 6.87517 7.7918 6.25955 7.7918 5.50015C7.7918 4.74074 7.17618 4.12512 6.41677 4.12512C5.65737 4.12512 5.04175 4.74074 5.04175 5.50015C5.04175 6.25955 5.65737 6.87517 6.41677 6.87517Z" fill="currentColor" />
                                    <path d="M15.5835 6.87517C16.3429 6.87517 16.9585 6.25955 16.9585 5.50015C16.9585 4.74074 16.3429 4.12512 15.5835 4.12512C14.8241 4.12512 14.2085 4.74074 14.2085 5.50015C14.2085 6.25955 14.8241 6.87517 15.5835 6.87517Z" fill="currentColor" />
                                    <path d="M11.0002 11.0002C9.68475 11.0002 8.43073 11.5668 7.56171 12.5531C7.22712 12.9326 7.26379 13.512 7.6433 13.8465C8.02372 14.1821 8.60215 14.1454 8.93674 13.765C9.45833 13.1737 10.2109 12.8336 11.0002 12.8336C12.5164 12.8336 13.7502 14.0675 13.7502 15.5837C13.7502 17.0999 12.5164 18.3337 11.0002 18.3337C10.3301 18.3337 9.68292 18.0899 9.18149 17.6462C8.80474 17.3125 8.22448 17.3474 7.88805 17.7269C7.55346 18.1064 7.58921 18.6857 7.96964 19.0212C8.80565 19.7601 9.88184 20.1671 11.0002 20.1671C13.5275 20.1671 15.5836 18.111 15.5836 15.5837C15.5836 13.0564 13.5275 11.0002 11.0002 11.0002Z" fill="currentColor" opacity="0.35" />
                                    <path d="M6.41675 12.0159V14.0115C6.41675 14.6266 6.91542 15.1253 7.5296 15.1253H9.52522C10.0211 15.1253 10.2696 14.5258 9.91848 14.1747L7.36643 11.6226C7.01626 11.2725 6.41675 11.52 6.41675 12.0159Z" fill="currentColor" />
                                </svg>
                            </div>
                        </label>

                        <label class="relative">
                            <input :disabled="isProcessing" :value="formData.confirmPassword" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:bg-gray-50" placeholder="Confirm your password" type="password" @input="updateConfirmPassword">
                            <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-3.5 text-gray-600">
                                <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4169 9.16684H4.58337C3.57043 9.16684 2.75 8.34641 2.75 7.33347V3.66674C2.75 2.65381 3.57043 1.83337 4.58337 1.83337H17.4169C18.4299 1.83337 19.2503 2.65381 19.2503 3.66674V7.33347C19.2503 8.34641 18.4299 9.16684 17.4169 9.16684Z" fill="currentColor" opacity="0.35" />
                                    <path d="M11.0001 6.87517C11.7596 6.87517 12.3752 6.25955 12.3752 5.50015C12.3752 4.74074 11.7596 4.12512 11.0001 4.12512C10.2407 4.12512 9.62512 4.74074 9.62512 5.50015C9.62512 6.25955 10.2407 6.87517 11.0001 6.87517Z" fill="currentColor" />
                                    <path d="M6.41677 6.87517C7.17618 6.87517 7.7918 6.25955 7.7918 5.50015C7.7918 4.74074 7.17618 4.12512 6.41677 4.12512C5.65737 4.12512 5.04175 4.74074 5.04175 5.50015C5.04175 6.25955 5.65737 6.87517 6.41677 6.87517Z" fill="currentColor" />
                                    <path d="M15.5835 6.87517C16.3429 6.87517 16.9585 6.25955 16.9585 5.50015C16.9585 4.74074 16.3429 4.12512 15.5835 4.12512C14.8241 4.12512 14.2085 4.74074 14.2085 5.50015C14.2085 6.25955 14.8241 6.87517 15.5835 6.87517Z" fill="currentColor" />
                                    <path d="M11.0002 11.0002C8.47012 11.0002 6.41675 13.0536 6.41675 15.5837C6.41675 18.1137 8.47012 20.1671 11.0002 20.1671C13.5302 20.1671 15.5836 18.1137 15.5836 15.5837C15.5836 13.0536 13.5302 11.0002 11.0002 11.0002ZM13.4019 15.2353L11.1102 17.527C10.9543 17.6737 10.7527 17.7654 10.5418 17.7654C10.331 17.7654 10.1293 17.6737 9.97348 17.527L8.59846 16.152C8.28678 15.8403 8.28678 15.327 8.59846 15.0153C8.91013 14.7036 9.42347 14.7036 9.73514 15.0153L10.5418 15.822L12.2652 14.0986C12.5769 13.787 13.0902 13.787 13.4019 14.0986C13.7135 14.4103 13.7135 14.9237 13.4019 15.2353Z" fill="currentColor" />
                                    <path d="M11.0001 19.2503C13.0252 19.2503 14.6668 17.6087 14.6668 15.5836C14.6668 13.5585 13.0252 11.9169 11.0001 11.9169C8.97503 11.9169 7.33337 13.5585 7.33337 15.5836C7.33337 17.6087 8.97503 19.2503 11.0001 19.2503Z" fill="currentColor" opacity="0.35" />
                                </svg>
                            </div>
                        </label>
                    </div>

                    <div class="mt-3.5">
                        <button :disabled="isProcessing || !isValid" class="disabled:bg-gray-100 disabled:text-gray-300 bg-orange-500 text-white active:bg-orange-600 focus:outline-none py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent transition-all" type="button" @click="handleSetPassword">
                            <div v-show="isProcessing" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                            {{ isProcessing ? "Setting Password..." : "Set Password" }}
                        </button>
                    </div>
                </AppComponentBase>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import ModalPage from "@/components/modal-page/ModalPage.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import router from "@/router";
import { reactive, ref, watch } from "vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import passwordImage from "@/assets/svg/undraw_my_password_re_ydq7.svg";
import { executeAfter } from "@/helpers/general";
import { set, syncRef } from "@vueuse/core";
import UserService from "@/services/user.service";

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);

const isProcessing = ref(false);
const isValid = ref(false);
const isUpdateSuccessful = ref<boolean | null>(null);

const formData = reactive({
    password: "",
    confirmPassword: "",
});

const verifyPasswordAndValidate = (_formData) => {
    // Password must be at least 8 characters long and not contain spaces
    const passwordRegex = /^((?!.*\s)(?=.*\d).{8,})$/;

    if (passwordRegex.test(_formData.password)) {
        isValid.value = _formData.password === _formData.confirmPassword;
    } else {
        isValid.value = false;
    }
};

// Watch for changes in the form data
watch(formData, (newVal) => {
    verifyPasswordAndValidate(newVal);
});

const updatePassword = (e: Event) => {
    formData.password = (e.target as HTMLInputElement).value;
};

const updateConfirmPassword = (e: Event) => {
    formData.confirmPassword = (e.target as HTMLInputElement).value;
};

const handleSetPasswordOnSuccess = () => {
    set(isUpdateSuccessful, true);
    resetForm();
    executeAfter(() => {
        set(isUpdateSuccessful, null);
    }, 5000);
};

const handleSetPassword = () => {
    executeAfter(() => {
        const { isLoading, execute } = UserService.updatePassword({
            password: formData.password,
            password_confirmation: formData.confirmPassword,
        }, handleSetPasswordOnSuccess);
        syncRef(isLoading, isProcessing);
        execute();
    });
};

const resetForm = () => {
    formData.password = "";
    formData.confirmPassword = "";
    set(isProcessing, false);
    set(isValid, false);
};

const doOnClose = () => {
    executeAfter(() => {
        resetForm();
        set(isUpdateSuccessful, null);
    }, 100);
};

defineExpose({
    openModal: () => refModalPage.value?.openModal(),
    closeModal: () => refModalPage.value?.closeModal(),
    goBack: () => refModalPage.value?.goBack(),
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style lang="scss" scoped>

</style>