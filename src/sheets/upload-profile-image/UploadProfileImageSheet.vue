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
                                <svg class="w-5 h-5 text-amber-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.50012 15.5836V4.58342C5.50012 3.06448 6.73123 1.83337 8.25017 1.83337H15.5836C17.1026 1.83337 18.3337 3.06448 18.3337 4.58342V15.5836C18.3337 17.1026 17.1026 18.3337 15.5836 18.3337H8.25017C6.73123 18.3337 5.50012 17.1026 5.50012 15.5836Z" fill="currentColor" opacity="0.35" />
                                    <path d="M8.25017 18.3336C6.73122 18.3336 5.50012 17.1025 5.50012 15.5836V4.58337C4.48718 4.58337 3.66675 5.40381 3.66675 6.41674V17.4169C3.66675 18.9359 4.89785 20.167 6.4168 20.167H13.7503C14.7632 20.167 15.5836 19.3466 15.5836 18.3336H8.25017Z" fill="currentColor" />
                                    <path d="M11.8096 11.8921H11.8041C11.19 11.8921 10.716 11.3375 10.8215 10.7325C11.1423 8.8872 12.5787 8.82304 12.5787 7.67718C12.5787 7.35909 12.5237 6.64683 11.7574 6.64683C11.3431 6.64683 11.0992 6.91175 10.9571 7.19409C10.7655 7.57635 10.3237 7.76427 9.90294 7.69001C9.26493 7.57635 8.87351 6.8925 9.14393 6.30399C9.53077 5.46339 10.3228 4.58337 11.8912 4.58337C14.4359 4.58337 14.7769 6.57624 14.7769 7.51309C14.7769 9.7278 13.1278 9.8103 12.7859 11.0863C12.6622 11.5465 12.2863 11.8921 11.8096 11.8921ZM13.1315 14.2388C13.1315 14.6165 13.0151 14.9355 12.7813 15.1949C12.5467 15.4534 12.2396 15.5836 11.8619 15.5836C11.4824 15.5836 11.1762 15.4534 10.9425 15.1949C10.7087 14.9355 10.5905 14.6165 10.5905 14.2388C10.5905 13.8694 10.7087 13.5513 10.9425 13.2809C11.1762 13.0123 11.4824 12.8784 11.8619 12.8784C12.2396 12.8784 12.5467 13.0123 12.7813 13.2809C13.0151 13.5513 13.1315 13.8703 13.1315 14.2388Z" fill="currentColor" />
                                </svg>

                                Upload new Image
                            </div>
                            <div class="shrink-0">
                                <svg class="w-3.5 h-3.5 mr-1 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                                </svg>
                            </div>
                        </label>

                        <button class="py-2.5 px-2 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" @click="">
                            <div class="grow flex items-center gap-2">
                                <svg class="w-5 h-5 text-blue-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6668 11.0001H7.33337V19.2503H14.6668V11.0001Z" fill="currentColor" opacity="0.35" />
                                    <path d="M14.6669 8.2501C16.1857 8.2501 17.417 7.01886 17.417 5.50005C17.417 3.98124 16.1857 2.75 14.6669 2.75C13.1481 2.75 11.9169 3.98124 11.9169 5.50005C11.9169 7.01886 13.1481 8.2501 14.6669 8.2501Z" fill="currentColor" opacity="0.35" />
                                    <path d="M7.33342 8.2501C8.85224 8.2501 10.0835 7.01886 10.0835 5.50005C10.0835 3.98124 8.85224 2.75 7.33342 2.75C5.81461 2.75 4.58337 3.98124 4.58337 5.50005C4.58337 7.01886 5.81461 8.2501 7.33342 8.2501Z" fill="currentColor" opacity="0.35" />
                                    <path d="M15.5836 10.0835H6.41673C4.39178 10.0835 2.75 11.7253 2.75 13.7502V15.5836C2.75 17.6086 4.39178 19.2503 6.41673 19.2503H8.2501V18.3336C8.2501 17.3207 9.07053 16.5003 10.0835 16.5003H11.9168C12.9298 16.5003 13.7502 17.3207 13.7502 18.3336V19.2503H15.5836C17.6085 19.2503 19.2503 17.6086 19.2503 15.5836V13.7502C19.2503 11.7253 17.6085 10.0835 15.5836 10.0835ZM11.0002 15.5836C9.98722 15.5836 9.16678 14.7632 9.16678 13.7502C9.16678 12.7373 9.98722 11.9169 11.0002 11.9169C12.0131 11.9169 12.8335 12.7373 12.8335 13.7502C12.8335 14.7632 12.0131 15.5836 11.0002 15.5836Z" fill="currentColor" />
                                    <path d="M19.012 8.4884C18.539 8.01539 18.385 7.33521 18.3355 6.88053C18.307 6.61378 18.5298 6.39103 18.7965 6.41944C19.2512 6.46803 19.9314 6.62295 20.4044 7.09596C20.8774 7.56896 21.0314 8.24914 21.0809 8.70382C21.1093 8.97057 20.8866 9.19333 20.6198 9.16491C20.1661 9.11541 19.485 8.96049 19.012 8.4884Z" fill="currentColor" opacity="0.35" />
                                </svg>

                                Remove Profile Picture
                            </div>
                            <div class="shrink-0">
                                <svg class="w-3.5 h-3.5 mr-1 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                                </svg>
                            </div>
                        </button>
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