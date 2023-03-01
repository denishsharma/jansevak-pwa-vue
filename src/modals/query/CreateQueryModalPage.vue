<template>
    <ModalPage id="create-query" ref="refModalPage">
        <AppContainerBase>
            <template #title>
                Create Query
            </template>

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
                <PageHeading class="mb-6" emphasis="Query" title="Create">
                    <template #subtitle>
                        Fill out the query details and select the Jansevak you want to get resolved from.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="flex flex-col gap-5">
                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    On Behalf Of
                                </div>
                                <div class="relative">
                                    <input class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="mobile_number" placeholder="Enter your phone number" type="text">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1] pl-3.5">
                                        <div class="h-[1.375rem] w-[1.375rem]">
                                            <img alt="" class="w-full h-full shadow-[0_0_0_1px] shadow-gray-200 bg-white object-cover object-center rounded-full" src="https://api.dicebear.com/5.x/thumbs/svg?seed=NagendraM">
                                        </div>
                                    </div>
                                </div>
                                <div class="block text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                    Your city and state will be automatically added to your address using your postal
                                    code.
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Query Category
                                </div>
                                <label class="relative">
                                    <input class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="e.g. P.K Road, Mulund West" type="text">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Subject
                                </div>
                                <label class="relative">
                                    <input class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="Describe query in one line" type="text">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Description
                                </div>
                                <label class="relative">
                                    <textarea ref="refDescriptionTextarea" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="Describe your query or issue in detail" rows="3" />
                                </label>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <AppComponentBase class="mt-8">
                    <div class="select-none flex flex-col gap-1">
                        <div class="font-semibold text-sm leading-tight mr-10">
                            Assign to Jansevak
                        </div>
                        <div class="text-gray-500 leading-tight text-xs mr-10">
                            You can assign your query to a specific Jansevak or let the system assign.
                        </div>
                    </div>

                    <div class="flex flex-col gap-5 mt-4">
                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Jansevak
                                </div>
                                <div class="relative">
                                    <input class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="mobile_number" placeholder="Select Jansevak" type="text">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1] pl-3.5">
                                        <div class="h-[1.375rem] w-[1.375rem]">
                                            <img alt="" class="w-full h-full shadow-[0_0_0_1px] shadow-gray-200 bg-white object-cover object-center rounded-full" src="https://api.dicebear.com/5.x/thumbs/svg?seed=NagendraM">
                                        </div>
                                    </div>
                                </div>
                                <div class="block text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                    You can find your ward code on your voter ID card. Ward code will be used to assign
                                    Jansevak for you.
                                </div>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <AppComponentBase class="mt-8">
                    <div class="select-none flex flex-col gap-1">
                        <div class="font-semibold text-sm leading-tight mr-10">
                            Supporting Documents
                        </div>
                        <div class="text-gray-500 leading-tight text-xs mr-10">
                            You can upload upto 5 documents. Each file should be less than 2MB.
                        </div>
                    </div>

                    <div class="flex flex-col gap-5 mt-4">
                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden">
                                <div v-for="i in '123'" class="flex items-center gap-2 px-2.5 py-1.5">
                                    <div class="flex items-center grow gap-2 overflow-hidden">
                                        <div class="shrink-0 h-5 w-5">
                                            <svg class="h-full w-full text-red-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.66675 17.417V4.58342C3.66675 3.06448 4.89785 1.83337 6.4168 1.83337H12.8336L18.3337 7.33348V17.417C18.3337 18.9359 17.1026 20.167 15.5836 20.167H6.4168C4.89785 20.167 3.66675 18.9359 3.66675 17.417Z" fill="currentColor" opacity="0.35" />
                                                <path d="M12.8336 5.50011V1.83337L18.3337 7.33348H14.667C13.654 7.33348 12.8336 6.51304 12.8336 5.50011Z" fill="currentColor" />
                                                <path d="M8.8946 12.7245C8.8946 14.2261 7.68 14.4956 7.25557 14.4956H6.72023V15.8898C6.72023 16.2272 6.44706 16.5003 6.10972 16.5003C5.77329 16.5003 5.50012 16.2272 5.50012 15.8908V11.7263C5.50012 11.3247 5.82463 11.0002 6.22522 11.0002H7.20882C7.62133 11.0002 8.8946 11.1561 8.8946 12.7245ZM7.7295 12.7484C7.7295 12.1259 7.28674 12.0489 7.11532 12.0489H6.72023V13.4863H7.11624C7.28674 13.4863 7.7295 13.3699 7.7295 12.7484Z" fill="currentColor" />
                                                <path d="M13.38 13.7658C13.38 15.8494 12.2653 16.5003 11.0956 16.5003H10.2751C9.87455 16.5003 9.55005 16.1758 9.55005 15.7752V11.7262C9.55005 11.3256 9.87455 11.0011 10.2751 11.0011H11.0956C12.3083 11.0002 13.38 11.6831 13.38 13.7658ZM12.1287 13.7658C12.1287 12.311 11.4109 12.0874 11.1112 12.0874H10.8077V15.4113H11.1112C11.4109 15.4122 12.1287 15.2215 12.1287 13.7658Z" fill="currentColor" />
                                                <path d="M15.3435 12.1195V13.2452H16.1428C16.4261 13.2452 16.6553 13.4744 16.6553 13.7576V13.7961C16.6553 14.0794 16.4261 14.3086 16.1428 14.3086H15.3508V15.8706C15.3508 16.218 15.0694 16.4994 14.722 16.4994C14.3746 16.4994 14.0931 16.218 14.0931 15.8706V11.7253C14.0931 11.3248 14.4176 11.0002 14.8182 11.0002H16.2253C16.5279 11.0002 16.7735 11.2459 16.7735 11.5484V11.5723C16.7735 11.8748 16.5279 12.1204 16.2253 12.1204H15.3435V12.1195Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div class="text-xs font-medium grow overflow-hidden whitespace-nowrap pr-2 text-ellipsis">
                                            prince_nagendra_aadhar-2021-09-01-12-00-00.pdf
                                        </div>
                                    </div>
                                    <button class="shrink-0 -mr-1 h-fit flex items-center z-[1] p-1 px-1 w-fit text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button">
                                        <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                            <path d="M13.5669 14.8503L7.15013 8.43348C6.78345 8.06681 6.78345 7.5168 7.15013 7.15013C7.5168 6.78345 8.06681 6.78345 8.43348 7.15013L14.8503 13.5669C15.2169 13.9336 15.2169 14.4836 14.8503 14.8503C14.4836 15.2169 13.9336 15.2169 13.5669 14.8503Z" fill="currentColor" />
                                            <path d="M7.15013 13.5669L13.5669 7.15013C13.9336 6.78345 14.4836 6.78345 14.8503 7.15013C15.2169 7.5168 15.2169 8.06681 14.8503 8.43348L8.43348 14.8503C8.06681 15.2169 7.5168 15.2169 7.15013 14.8503C6.78345 14.4836 6.78345 13.9336 7.15013 13.5669Z" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>
            </template>

            <template #footer>
                <div class="flex">
                    <button class="py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all" type="button">
                        Create Query
                    </button>
                </div>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import ModalPage from "@/components/modal-page/ModalPage.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import autosize from "autosize";
import router from "@/router";

const refModalPage = ref<InstanceType<typeof ModalPage>>(null);
const refDescriptionTextarea = ref<HTMLTextAreaElement | null>(null);

const openModal = () => {
    refModalPage.value?.openModal();
    nextTick(() => {
        autosize(refDescriptionTextarea.value as HTMLTextAreaElement);
    });
    (document.activeElement as HTMLElement)?.blur();
};

const closeModal = () => {
    refModalPage.value?.closeModal();
};

const goBack = () => {
    refModalPage.value?.goBack();
};

defineExpose({
    openModal,
    closeModal,
    goBack,
});
</script>

<style scoped>

</style>