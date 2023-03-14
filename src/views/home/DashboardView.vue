<template>
    <div ref="refPageContent" class="grow -mb-8 pb-8">
        <AppComponentBase class="pb-6">
            <CarouselHomeFragment />
        </AppComponentBase>

        <AppComponentBase class="pb-6">
            <div class="grid grid-cols-2 gap-x-3 gap-y-3">
                <button class="text-left overflow-hidden relative rounded-xl border border-gray-200/[0.7] select-none px-2.5 py-2.5 flex items-center hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-all" @click="openCreateQueryModal">
                    <div class="bg-orange-50 text-orange-500 flex justify-center items-center h-9 w-9 rounded-lg">
                        <div class="h-5 w-5">
                            <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.50012 15.5836V4.58342C5.50012 3.06448 6.73123 1.83337 8.25017 1.83337H15.5836C17.1026 1.83337 18.3337 3.06448 18.3337 4.58342V15.5836C18.3337 17.1026 17.1026 18.3337 15.5836 18.3337H8.25017C6.73123 18.3337 5.50012 17.1026 5.50012 15.5836Z" fill="currentColor" opacity="0.35" />
                                <path d="M8.25017 18.3336C6.73122 18.3336 5.50012 17.1025 5.50012 15.5836V4.58337C4.48718 4.58337 3.66675 5.40381 3.66675 6.41674V17.4169C3.66675 18.9359 4.89785 20.167 6.4168 20.167H13.7503C14.7632 20.167 15.5836 19.3466 15.5836 18.3336H8.25017Z" fill="currentColor" />
                                <path d="M11.8096 11.8921H11.8041C11.19 11.8921 10.716 11.3375 10.8215 10.7325C11.1423 8.8872 12.5787 8.82304 12.5787 7.67718C12.5787 7.35909 12.5237 6.64683 11.7574 6.64683C11.3431 6.64683 11.0992 6.91175 10.9571 7.19409C10.7655 7.57635 10.3237 7.76427 9.90294 7.69001C9.26493 7.57635 8.87351 6.8925 9.14393 6.30399C9.53077 5.46339 10.3228 4.58337 11.8912 4.58337C14.4359 4.58337 14.7769 6.57624 14.7769 7.51309C14.7769 9.7278 13.1278 9.8103 12.7859 11.0863C12.6622 11.5465 12.2863 11.8921 11.8096 11.8921ZM13.1315 14.2388C13.1315 14.6165 13.0151 14.9355 12.7813 15.1949C12.5467 15.4534 12.2396 15.5836 11.8619 15.5836C11.4824 15.5836 11.1762 15.4534 10.9425 15.1949C10.7087 14.9355 10.5905 14.6165 10.5905 14.2388C10.5905 13.8694 10.7087 13.5513 10.9425 13.2809C11.1762 13.0123 11.4824 12.8784 11.8619 12.8784C12.2396 12.8784 12.5467 13.0123 12.7813 13.2809C13.0151 13.5513 13.1315 13.8703 13.1315 14.2388Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col gap-0.5 justify-center ml-2.5">
                        <div class="leading-none text-xs text-gray-500 font-medium">Create</div>
                        <div class="leading-none text-xs font-semibold text-orange-500">Query</div>
                    </div>
                </button>

                <button class="text-left overflow-hidden relative rounded-xl border border-gray-200/[0.7] select-none px-2.5 py-2.5 flex items-center hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-all">
                    <div class="bg-orange-50 text-orange-500 flex justify-center items-center h-9 w-9 rounded-lg">
                        <div class="h-5 w-5">
                            <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.12503 7.33337H5.95839C6.71741 7.33337 7.33342 7.94939 7.33342 8.7084V17.8752C7.33342 18.6342 6.71741 19.2503 5.95839 19.2503H4.12503C3.36601 19.2503 2.75 18.6342 2.75 17.8752V8.7084C2.75 7.94939 3.36601 7.33337 4.12503 7.33337Z" fill="currentColor" />
                                <path d="M14.9813 19.2503H9.16674C8.15381 19.2503 7.33337 18.4299 7.33337 17.4169V8.38943C7.33337 7.71016 7.58455 7.05474 8.03922 6.54964L10.2897 4.04985L10.6371 1.95798C10.7939 1.01563 11.9159 0.615035 12.6456 1.23196C13.2368 1.73156 13.7502 2.47315 13.7502 3.54201C13.7502 5.16087 12.8335 7.33341 12.8335 7.33341H17.4169C18.9358 7.33341 20.1669 8.56451 20.1669 10.0835V11.3045C20.1669 11.7078 20.078 12.1066 19.9066 12.4714L17.471 17.6672C17.0181 18.6334 16.0483 19.2503 14.9813 19.2503Z" fill="currentColor" opacity="0.35" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col gap-0.5 justify-center ml-2.5">
                        <div class="leading-none text-xs text-gray-500 font-medium">Submit</div>
                        <div class="leading-none text-xs font-semibold text-orange-500">Feedback</div>
                    </div>
                </button>

                <button class="text-left overflow-hidden relative rounded-xl border border-gray-200/[0.7] select-none px-2.5 py-2.5 flex items-center hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-all" @click="openFAQModal">
                    <div class="bg-orange-50 text-orange-500 flex justify-center items-center h-9 w-9 rounded-lg">
                        <div class="h-5 w-5">
                            <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9169 17.3528V20.167H10.0835V17.3528C10.6885 17.4261 11.3119 17.4261 11.9169 17.3528Z" fill="currentColor" />
                                <path d="M17.417 21.0836H4.58343C4.07651 21.0836 3.66675 20.6729 3.66675 20.1669C3.66675 19.6609 4.07651 19.2502 4.58343 19.2502H17.417C17.9239 19.2502 18.3337 19.6609 18.3337 20.1669C18.3337 20.6729 17.9239 21.0836 17.417 21.0836Z" fill="currentColor" />
                                <path d="M5.16639 15.0006C1.94975 11.7839 1.94975 6.54966 5.16639 3.33301C8.38303 0.116372 13.6173 0.116372 16.8339 3.33301C20.0506 6.54966 20.0506 11.7839 16.8339 15.0006C13.6173 18.2172 8.38303 18.2172 5.16639 15.0006ZM13.5925 6.57441C12.1625 5.14438 9.83689 5.14438 8.40686 6.57441C6.97684 8.00443 6.97684 10.3301 8.40686 11.7601C9.83689 13.1901 12.1625 13.1901 13.5925 11.7601C15.0226 10.3301 15.0226 8.00352 13.5925 6.57441Z" fill="currentColor" opacity="0.35" />
                                <path d="M6.22425 2.44751L9.57015 5.7934C8.69013 6.16008 7.99345 6.85676 7.62678 7.73677L4.28088 4.39088C4.81256 3.6392 5.47257 2.97919 6.22425 2.44751Z" fill="currentColor" />
                                <path d="M9.57015 12.5402L6.22425 15.8861C5.47257 15.3544 4.81256 14.6944 4.28088 13.9427L7.62678 10.5968C7.99345 11.4768 8.69013 12.1735 9.57015 12.5402Z" fill="currentColor" />
                                <path d="M14.3735 10.5968L17.7194 13.9427C17.1878 14.6944 16.5277 15.3544 15.7761 15.8861L12.4302 12.5402C13.3102 12.1735 14.0069 11.4768 14.3735 10.5968Z" fill="currentColor" />
                                <path d="M12.4302 5.7934L15.7761 2.44751C16.5277 2.97919 17.1878 3.6392 17.7194 4.39088L14.3735 7.73677C14.0069 6.85676 13.3102 6.16008 12.4302 5.7934Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col gap-0.5 justify-center ml-2.5">
                        <div class="leading-none text-xs text-gray-500 font-medium">Know</div>
                        <div class="leading-none text-xs font-semibold text-orange-500">Platform</div>
                    </div>
                </button>

                <button class="text-left overflow-hidden relative rounded-xl border border-gray-200/[0.7] select-none px-2.5 py-2.5 flex items-center hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition-all">
                    <div class="bg-orange-50 text-orange-500 flex justify-center items-center h-9 w-9 rounded-lg">
                        <div class="h-5 w-5">
                            <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.4019 4.58343C12.7602 4.02425 11.9169 3.66675 11.0002 3.66675C10.0835 3.66675 9.24018 4.02425 8.5985 4.58343H3.66674C2.65381 4.58343 1.83337 5.40386 1.83337 6.4168V7.79182C1.83337 10.0698 3.68049 11.9169 5.95845 11.9169C8.23641 11.9169 10.0835 10.0698 10.0835 7.79182V7.33348C10.0835 6.82931 10.496 6.4168 11.0002 6.4168C11.5044 6.4168 11.9169 6.82931 11.9169 7.33348V7.79182C11.9169 10.0698 13.764 11.9169 16.042 11.9169C18.3199 11.9169 20.167 10.0698 20.167 7.79182V6.4168C20.167 5.40386 19.3466 4.58343 18.3337 4.58343H13.4019Z" fill="currentColor" />
                                <path d="M18.3337 15.5837C18.3337 15.0777 17.923 14.667 17.417 14.667C16.3106 14.6844 15.2518 14.2801 14.3269 13.6926C13.4918 13.1609 12.3147 12.8336 11.0002 12.8336C9.68569 12.8336 8.50867 13.17 7.67265 13.7017C6.7413 14.2737 5.69079 14.6872 4.58343 14.667C4.07742 14.667 3.66675 15.0777 3.66675 15.5837C3.66675 15.7487 3.72175 15.8953 3.79875 16.0292L3.78225 16.0283C4.7246 17.4436 6.29946 18.3438 8.01183 18.3337C9.09993 18.3337 10.1404 17.9634 11.0002 17.318C11.861 17.9634 12.9014 18.3337 13.9886 18.3337C15.7001 18.3438 17.2749 17.4436 18.2173 16.0283L18.2008 16.0292C18.2787 15.8953 18.3337 15.7487 18.3337 15.5837Z" fill="currentColor" opacity="0.35" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col gap-0.5 justify-center ml-2.5">
                        <div class="leading-none text-xs text-gray-500 font-medium">Allotted</div>
                        <div class="leading-none text-xs font-semibold text-orange-500">Jansevak</div>
                    </div>
                </button>
            </div>
        </AppComponentBase>

        <AppComponentBase>
            <div class="flex flex-col gap-1">
                <div class="bg-amber-200 flex items-center h-6 text-sm">
                    <div class="bg-red-300 leading-tight font-semibold">
                        My Nagarik ID
                    </div>
                </div>
                <NagarikCard />
            </div>
        </AppComponentBase>

        <FAQModalPage ref="refFAQModal" />
        <CreateQueryModalPage ref="refCreateQueryModalPage" />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import PullToRefresh from "pulltorefreshjs";
import { arrowMarkup, cssMarkup, htmlMarkup, spinnerMarkup } from "@/config/pullToRefresh";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import NagarikCard from "@/components/nagarik-card/NagarikCard.vue";
import CarouselHomeFragment from "@/fragments/home/CarouselHomeFragment.vue";
import FAQModalPage from "@/modals/faq/FAQModalPage.vue";
import CreateQueryModalPage from "@/modals/query/CreateQueryModalPage.vue";
import { executeAfter } from "@/helpers/general";

const refPageContent = ref<string | undefined>(undefined);
const refFAQModal = ref<InstanceType<typeof FAQModalPage> | null>(null);
const refCreateQueryModalPage = ref<InstanceType<typeof CreateQueryModalPage> | null>(null);

const openCreateQueryModal = () => {
    executeAfter(() => {
        refCreateQueryModalPage.value?.openModal();
    });
};

const openFAQModal = () => {
    executeAfter(() => {
        refFAQModal.value?.openModal();
    });
};

const initiatePullToRefresh = () => {
    PullToRefresh.init({
        mainElement: refPageContent.value,
        triggerElement: refPageContent.value,
        distIgnore: 30,
        getMarkup: () => htmlMarkup(),
        getStyles: () => cssMarkup(),
        iconArrow: arrowMarkup(),
        iconRefreshing: spinnerMarkup(),
        instructionsRefreshing: "Refreshing Dashboard...",
        onRefresh() {
            return new Promise<void>(function (resolve) {
                setTimeout(function () {
                    resolve();
                }, 3500);
            });
        },
        shouldPullToRefresh(): boolean {
            return !(this.mainElement as unknown as HTMLElement)?.scrollTop;
        },
    });
};

onMounted(() => {
    initiatePullToRefresh();
});

onUnmounted(() => {
    PullToRefresh.destroyAll();
});
</script>

<style scoped>

</style>