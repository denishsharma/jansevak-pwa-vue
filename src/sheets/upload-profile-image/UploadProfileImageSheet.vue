<template>
    <BottomSheet id="upload-profile-image" ref="refBottomSheet" :do-on-close="doOnClose">
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

                <PageHeading class="mb-6" emphasis="Upload" title="Photo">
                    <template #subtitle>
                        Upload a photo to your profile to make it more recognizable.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="flex flex-col gap-2">
                        <input id="upload-image-dialog" accept="image/*" class="hidden" type="file" @change="onFileChange">
                        <label class="py-2.5 px-2 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" for="upload-image-dialog">
                            <div class="grow flex items-center gap-2">
                                <svg class="h-5 w-5 text-indigo-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                    <path d="M14.0298 10.0835C14.5954 10.0835 14.8796 9.40148 14.4817 8.99998L11.6538 6.14542C11.2935 5.78242 10.7068 5.78242 10.3466 6.14542L7.51861 8.99998C7.12076 9.40148 7.40585 10.0835 7.97053 10.0835H14.0298Z" fill="currentColor" />
                                    <path d="M10.0835 9.16687C10.0835 9.16687 10.0835 15.2646 10.0835 15.5837C10.0835 16.0897 10.4942 16.5003 11.0002 16.5003C11.5062 16.5003 11.9169 16.0897 11.9169 15.5837C11.9169 15.2646 11.9169 9.16687 11.9169 9.16687H10.0835Z" fill="currentColor" />
                                </svg>

                                Upload new Image
                            </div>
                            <div class="shrink-0">
                                <svg class="w-3.5 h-3.5 mr-1 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                                </svg>
                            </div>
                        </label>
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
import { ref, shallowRef } from "vue";

const refBottomSheet = ref<InstanceType<typeof BottomSheet>>();

const onFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    const file = files?.item(0);
    if (!file) return;

    const result = URL.createObjectURL(file);
    emit("on-image-selected", {
        ["uri" as string]: result,
        ["file" as string]: file,
    });
    router.back();
};

const doOnClose = () => {};

const emit = defineEmits(["on-image-selected"]);

defineExpose({
    openModal: () => refBottomSheet.value?.openModal(),
    closeModal: () => refBottomSheet.value?.closeModal(),
    goBack: () => refBottomSheet.value?.goBack(),
    suspend: () => refBottomSheet.value?.suspend(),
    resume: () => refBottomSheet.value?.resume(),
});
</script>

<style scoped>

</style>