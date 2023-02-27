<template>
    <AppPageBaseLayout class="flex flex-col h-full overflow-hidden">
        <AppHeader ref="refAppHeader" class="shrink-0 bg-white fixed w-full z-20">
            <div class="relative flex items-center justify-between gap-4 h-10">
                <div class="z-10">
                    <button type="button" class="-ml-3 h-10 px-2.5 inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all">
                        <svg class="" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <div ref="refAppHeading" class="absolute h-full w-full flex items-center justify-center opacity-0 translate-y-1 pointer-events-none transition">
                    <div data-ref="appHeading" class="text-sm font-semibold">Complete Profile</div>
                </div>
            </div>
        </AppHeader>

        <AppBody ref="refAppBody" class="grow pt-12 pb-8">
            <PageHeading class="mb-6" title="Complete your" emphasis="Profile">
                <template #subtitle>
                    Enter your basic information to get started and get the most out of the platform.
                </template>
            </PageHeading>

            <AppComponentBase>
                <div class="flex flex-col gap-5">
                    <div class="flex justify-center items-center">
                        <div class="h-[8rem] w-[8rem] relative">
                            <img class="rounded-full h-full w-full object-cover object-center overflow-hidden" src="https://api.dicebear.com/5.x/thumbs/svg?seed=Denish" alt="">

                            <button type="button" class="absolute z-10 right-0 bottom-0 h-9 w-9 mr-0.5 mb-0.5 inline-flex flex-shrink-0 justify-center items-center gap-2 shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.35" d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" />
                                    <path d="M14.0298 10.0835C14.5954 10.0835 14.8796 9.40148 14.4817 8.99998L11.6538 6.14542C11.2935 5.78242 10.7068 5.78242 10.3466 6.14542L7.51861 8.99998C7.12076 9.40148 7.40585 10.0835 7.97053 10.0835H14.0298Z" fill="currentColor" />
                                    <path d="M10.0835 9.16687C10.0835 9.16687 10.0835 15.2646 10.0835 15.5837C10.0835 16.0897 10.4942 16.5003 11.0002 16.5003C11.5062 16.5003 11.9169 16.0897 11.9169 15.5837C11.9169 15.2646 11.9169 9.16687 11.9169 9.16687H10.0835Z" fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-x-3 mt-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                First Name
                            </div>
                            <label class="relative">
                                <input name="firstname" type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. Denish">
                            </label>
                        </div>

                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                Last Name
                            </div>
                            <label class="relative">
                                <input name="lastname" type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. Sharma">
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                Mobile Number
                            </div>
                            <label class="relative">
                                <input name="mobile_number" type="text" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your phone number">
                                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1] pl-3.5">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.56262 18.7347H2.83598C1.64942 18.7347 0.6875 17.7727 0.6875 16.5862V5.4141C0.6875 4.22754 1.64942 3.26562 2.83598 3.26562H7.56262V18.7347Z" fill="#FF9E1C" />
                                        <path d="M14.4377 3.26562H7.56262V18.7347H14.4377V3.26562Z" fill="white" />
                                        <path d="M19.1644 18.7347H14.4377V3.26562H19.1644C20.351 3.26562 21.3129 4.22754 21.3129 5.4141V16.5862C21.3129 17.7727 20.351 18.7347 19.1644 18.7347Z" fill="#6DA544" />
                                        <path d="M11.0002 8.422C9.57629 8.422 8.422 9.57629 8.422 11.0002C8.422 12.424 9.57629 13.5783 11.0002 13.5783C12.424 13.5783 13.5783 12.424 13.5783 11.0002C13.5783 9.57629 12.424 8.422 11.0002 8.422ZM11.0002 12.7189C10.0509 12.7189 9.28139 11.9494 9.28139 11.0002C9.28139 10.0509 10.0509 9.28139 11.0002 9.28139C11.9494 9.28139 12.7189 10.0509 12.7189 11.0002C12.7189 11.9494 11.9494 12.7189 11.0002 12.7189Z" fill="#0053B5" />
                                        <path d="M11.0001 9.78479L11.2327 10.4387L11.8595 10.1407L11.5616 10.7676L12.2155 11.0001L11.5616 11.2327L11.8595 11.8595L11.2327 11.5616L11.0001 12.2155L10.7676 11.5616L10.1407 11.8595L10.4387 11.2327L9.78479 11.0001L10.4387 10.7676L10.1407 10.1407L10.7676 10.4387L11.0001 9.78479Z" fill="#0053B5" />
                                    </svg>

                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                Gender
                            </div>
                            <div class="grid grid-cols-2 gap-2">
                                <label class="select-none flex px-4 py-3 block w-full bg-white border border-gray-200/[0.7] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                                    <input type="radio" name="gender" checked class="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-500 pointer-events-none focus:ring-orange-500">
                                    <span class="text-sm font-medium ml-3.5">Male</span>
                                </label>

                                <label class="select-none flex px-4 py-3 block w-full bg-white border border-gray-200/[0.7] rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                                    <input type="radio" name="gender" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-500 pointer-events-none focus:ring-orange-500">
                                    <span class="text-sm font-medium ml-3.5">Female</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                Email Address
                            </div>
                            <label class="relative">
                                <input type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email address">
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                House Number & Building Name
                            </div>
                            <label class="relative">
                                <input type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. G-1, Sandhya Building, Dharmajaya CHS">
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                Street Name
                            </div>
                            <label class="relative">
                                <input type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. P.K Road, Mulund West">
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                Landmark
                            </div>
                            <label class="relative">
                                <input type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. Vidyaben Gardi School">
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                Postal Code
                            </div>
                            <label class="relative">
                                <input type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. 400080">
                            </label>
                            <div class="block text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                Your city and state will be automatically added to your address using your postal code.
                            </div>
                        </div>
                    </div>
                </div>
            </AppComponentBase>

            <AppComponentBase class="mt-8">
                <div class="select-none flex flex-col gap-1">
                    <div class="font-semibold text-sm leading-tight mr-10">
                        Electoral Information
                    </div>
                    <div class="text-gray-500 leading-tight text-xs mr-10">
                        We need this information to verify your identity and to ensure that you are eligible to vote.
                    </div>
                </div>

                <div class="flex flex-col gap-5 mt-4">
                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                Ward Code
                            </div>
                            <label class="relative">
                                <input type="text" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. T-Ward">
                            </label>
                            <div class="block text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                You can find your ward code on your voter ID card. Ward code will be used to assign
                                Jansevak for you.
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                Aadhar Number
                            </div>
                            <label class="relative">
                                <input type="text" v-maska data-maska="#### #### ####" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. 0000 0000 0000">
                            </label>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-x-3">
                        <div class="flex flex-col">
                            <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                Voter ID Number
                            </div>
                            <label class="relative">
                                <input type="text" v-maska data-maska="@@@#######" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm uppercase focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g. ABC1234567">
                            </label>
                        </div>
                    </div>
                </div>
            </AppComponentBase>
        </AppBody>

        <AppFooter>
            <div class="flex">
                <button type="button" class="py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all">
                    Complete Profile
                </button>
            </div>
        </AppFooter>
    </AppPageBaseLayout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { vMaska } from "maska";

import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppBody from "@/components/sections/AppBody.vue";
import AppHeader from "@/components/sections/AppHeader.vue";
import AppPageBaseLayout from "@/layouts/AppPageBaseLayout.vue";
import AppFooter from "@/components/sections/AppFooter.vue";

const refAppBody = ref<InstanceType<typeof AppBody> | null>(null);
const refAppHeader = ref<InstanceType<typeof AppHeader> | null>(null);
const refAppHeading = ref<HTMLElement | null>(null);

const handleAppBodyOnScroll = (e: Event) => {
    const appBody = e.target as HTMLElement;
    const appHeader = refAppHeader.value?.refRoot as HTMLElement;
    const appHeading = refAppHeading.value;

    console.log(appBody.scrollTop);

    if (appBody.scrollTop > 40) {
        appHeader?.classList.add("shadow-[0_4px_30px_0_rgba(0,0,0,0.04)]", "pb-1.5", "pt-1.5", "border-b", "border-gray-200/[0.7]");
        appHeader?.classList.remove("pt-3");
        appHeading?.classList.remove("opacity-0", "translate-y-1");
    } else {
        appHeader?.classList.remove("shadow-[0_4px_30px_0_rgba(0,0,0,0.04)]", "pb-1.5", "pt-1.5", "border-b", "border-gray-200/[0.7]");
        appHeader?.classList.add("pt-3");
        appHeading?.classList.add("opacity-0", "translate-y-1");
    }
};

onMounted(() => {
    const appBody = refAppBody.value?.refRoot as HTMLElement;
    appBody.addEventListener("scroll", handleAppBodyOnScroll);
});
</script>

<style scoped>

</style>