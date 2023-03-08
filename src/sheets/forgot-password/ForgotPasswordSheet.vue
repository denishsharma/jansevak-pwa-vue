<template>
    <BottomSheet id="forgot-password" ref="refBottomSheet">
        <div class="overflow-y-auto h-full">
            <div class="mb-4 mt-3 flex flex-col">
                <AppComponentBase class="mb-2">
                    <div class="w-full flex h-10 items-center justify-between gap-4">
                        <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all" type="button" @click="router.back()">
                            <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </AppComponentBase>

                <PageHeading class="mb-6" emphasis="Forgot" title="Password">
                    <template #subtitle>
                        You can create a new query or add family member from here.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="flex flex-col gap-2">
                        <div class="text-sm">
                            In case you forgot your password, you can login using your phone number and OTP.
                        </div>
                    </div>
                </AppComponentBase>
            </div>
        </div>
    </BottomSheet>
</template>

<script lang="ts" setup>
import BottomSheet from "@/components/bottom-sheet/BottomSheet.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import router from "@/router";
import { ref } from "vue";

const refBottomSheet = ref<InstanceType<typeof BottomSheet>>();

const openModal = () => {
    refBottomSheet.value?.openModal();
    (document.activeElement as HTMLElement)?.blur();
};

const closeModal = () => {
    refBottomSheet.value?.closeModal();
};

const goBack = () => {
    refBottomSheet.value?.goBack();
};

defineExpose({
    openModal,
    closeModal,
    goBack,
    suspend: () => refBottomSheet.value?.suspend(),
    resume: () => refBottomSheet.value?.resume(),
});
</script>

<style scoped>

</style>