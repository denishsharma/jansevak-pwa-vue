<template>
    <div ref="refPageContent" class="grow -mb-8 pb-8">
        <PageHeading class="mb-6" emphasis="Queries" title="My">
            <template #subtitle>
                Here you can find all queries you have created for yourself and on behalf of your family members.
            </template>
        </PageHeading>

        <AppComponentBase class="-mt-1 mb-5">
            <div class="flex items-center gap-2">
                <label class="relative grow">
                    <input :class="queryStore.query.length > 0 && 'pr-10 border-orange-300'" :value="queryStore.query" class="py-2.5 px-2 pl-10 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="search_query" placeholder="Enter query id" type="text" @input="e => queryStore.setQuery(e.target.value)">
                    <div :class="queryStore.query.length > 0 ? 'text-orange-500' : 'text-gray-300'" class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1] pl-2.5 mb-px">
                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.39595 2.75C5.73635 2.75 2.75 5.73635 2.75 9.39595C2.75 13.0555 5.73635 16.0419 9.39595 16.0419C10.8962 16.0419 12.2784 15.5345 13.393 14.6901L17.6855 18.9817C17.9154 19.2212 18.2568 19.3177 18.5781 19.2339C18.8993 19.1502 19.1502 18.8993 19.2339 18.5781C19.3177 18.2568 19.2212 17.9154 18.9817 17.6855L14.6901 13.393C15.5345 12.2784 16.0419 10.8962 16.0419 9.39595C16.0419 5.73635 13.0555 2.75 9.39595 2.75ZM9.39595 4.58337C12.0647 4.58337 14.2085 6.72717 14.2085 9.39595C14.2085 10.6773 13.7108 11.8346 12.9015 12.6948C12.8228 12.7518 12.7536 12.821 12.6965 12.8998C11.8362 13.71 10.6783 14.2085 9.39595 14.2085C6.72717 14.2085 4.58337 12.0647 4.58337 9.39595C4.58337 6.72718 6.72717 4.58337 9.39595 4.58337Z" fill="currentColor" />
                        </svg>
                    </div>

                    <button v-if="queryStore.query.length > 0" class="absolute inset-y-0 right-0 my-auto mr-1.5 h-fit flex items-center z-[1] p-1 px-1 w-fit text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button" @click="clearSearch">
                        <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                            <path d="M13.5669 14.8503L7.15013 8.43348C6.78345 8.06681 6.78345 7.5168 7.15013 7.15013C7.5168 6.78345 8.06681 6.78345 8.43348 7.15013L14.8503 13.5669C15.2169 13.9336 15.2169 14.4836 14.8503 14.8503C14.4836 15.2169 13.9336 15.2169 13.5669 14.8503Z" fill="currentColor" />
                            <path d="M7.15013 13.5669L13.5669 7.15013C13.9336 6.78345 14.4836 6.78345 14.8503 7.15013C15.2169 7.5168 15.2169 8.06681 14.8503 8.43348L8.43348 14.8503C8.06681 15.2169 7.5168 15.2169 7.15013 14.8503C6.78345 14.4836 6.78345 13.9336 7.15013 13.5669Z" fill="currentColor" />
                        </svg>
                    </button>
                </label>

                <button class="py-2.5 px-2.5 w-fit shrink-0 font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all" type="button" @click="openQueryCategorySheet">
                    <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.792 2.75C18.4382 2.75 3.56224 2.75 3.2084 2.75C2.44939 2.75 1.83337 3.36601 1.83337 4.12503C1.83337 4.88404 2.44939 5.50005 3.2084 5.50005C3.56224 5.50005 18.4382 5.50005 18.792 5.50005C19.551 5.50005 20.167 4.88404 20.167 4.12503C20.167 3.36601 19.551 2.75 18.792 2.75Z" fill="currentColor" />
                        <path d="M3.66675 5.5L6.97506 9.47016C7.79916 10.4583 8.25017 11.705 8.25017 12.9911V17.9449C8.25017 18.8414 8.89826 19.6059 9.78194 19.7535L12.1488 20.1477C12.9876 20.2879 13.7503 19.6417 13.7503 18.7919V12.9921C13.7503 11.705 14.2013 10.4593 15.0254 9.47107L18.3337 5.5H3.66675Z" fill="currentColor" opacity="0.35" />
                    </svg>
                </button>
            </div>
        </AppComponentBase>

        <AppComponentBase>
            <div class="flex flex-col gap-4">
                <div v-for="i in '1234'" class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg border border-gray-200 shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]">
                    <div class="px-3.5 py-2 flex flex-col gap-2">
                        <div class="flex items-center justify-between gap-4">
                            <div class="text-gray-600 px-1 py-0.5 -my-0.5 -mx-1 transition hover:bg-gray-100 active:bg-gray-200 rounded-full flex items-center gap-1.5 font-medium text-xxs">
                                <div class="h-3 w-3">
                                    <img alt="" class="w-full h-full shadow-[0_0_0_1px] shadow-blue-500 bg-white object-cover object-center rounded-full" src="https://api.dicebear.com/5.x/thumbs/svg?seed=NagendraM">
                                </div>
                                <div class="inline-flex items-center gap-1 pr-0.5">
                                    <div>Nagendra Mishra</div>
                                    <svg class="h-2 w-2" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.7741 2.28271C18.7403 2.28383 18.7065 2.28681 18.673 2.29166H12.8336C12.503 2.28699 12.1955 2.46068 12.0289 2.74622C11.8622 3.03177 11.8622 3.38493 12.0289 3.67047C12.1955 3.95602 12.503 4.12971 12.8336 4.12503H16.5791L10.3521 10.352C10.1126 10.5819 10.0162 10.9234 10.0999 11.2446C10.1837 11.5659 10.4345 11.8167 10.7558 11.9005C11.077 11.9842 11.4184 11.8877 11.6484 11.6483L17.8754 5.42128V9.16679C17.8707 9.49738 18.0444 9.80487 18.3299 9.97154C18.6155 10.1382 18.9686 10.1382 19.2542 9.97154C19.5397 9.80488 19.7134 9.49738 19.7087 9.16679V3.32114C19.7445 3.05458 19.6615 2.78575 19.4815 2.58583C19.3016 2.38592 19.043 2.27509 18.7741 2.28271ZM5.72931 3.66669C3.84217 3.66669 2.29175 5.21711 2.29175 7.10425V16.2711C2.29175 18.1582 3.84217 19.7086 5.72931 19.7086H14.8961C16.7833 19.7086 18.3337 18.1582 18.3337 16.2711V11.9168C18.3384 11.5862 18.1647 11.2787 17.8791 11.1121C17.5936 10.9454 17.2404 10.9454 16.9549 11.1121C16.6693 11.2787 16.4956 11.5862 16.5003 11.9168V16.2711C16.5003 17.1633 15.7884 17.8753 14.8961 17.8753H5.7293C4.83706 17.8753 4.12511 17.1633 4.12511 16.2711V7.10425C4.12511 6.212 4.83706 5.50005 5.7293 5.50005H10.0835C10.4141 5.50473 10.7216 5.33104 10.8883 5.04549C11.0549 4.75995 11.0549 4.40679 10.8883 4.12124C10.7216 3.8357 10.4141 3.66201 10.0835 3.66668L5.72931 3.66669Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>

                            <div class="text-gray-400 flex items-center gap-1 font-medium text-xxs">
                                <div>Myself</div>
                                <svg class="h-3 w-3" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0002 11.0002C13.5315 11.0002 15.5836 8.94814 15.5836 6.41679C15.5836 3.88544 13.5315 1.83337 11.0002 1.83337C8.46881 1.83337 6.41675 3.88544 6.41675 6.41679C6.41675 8.94814 8.46881 11.0002 11.0002 11.0002Z" fill="currentColor" opacity="0.35" />
                                    <path d="M16.5003 13.7502H5.50005C3.98111 13.7502 2.75 14.9814 2.75 16.5003C2.75 18.0192 3.98111 19.2503 5.50005 19.2503H16.5003C18.0192 19.2503 19.2503 18.0192 19.2503 16.5003C19.2503 14.9814 18.0192 13.7502 16.5003 13.7502Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1.5 my-0.5">
                            <div class="text-sm pr-8 leading-tight font-semibold">
                                Multi-line truncation with @tailwindcss line-clamp
                            </div>
                            <div class="text-xs pr-3 text-gray-600 leading-tight line-clamp-3">
                                Imagine you’re implementing a beautiful design you or someone on your team carefully
                                crafted
                                in Figma. You’ve nailed all the different layouts at each breakpoint, perfected the
                                whitespace and typography, and the photography you’re using is really bringing the
                                design to
                                life.
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-yellow-500 flex items-center gap-1 font-medium text-xxs">
                                <svg class="h-3 w-3" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0002 1.83336C10.6573 1.83336 10.3179 1.85251 9.98321 1.88976C9.65118 1.9179 9.36056 2.124 9.22419 2.42803C9.0878 2.73206 9.12713 3.08616 9.3269 3.35286C9.52666 3.61956 9.85541 3.75687 10.1855 3.71148C10.4522 3.68181 10.7243 3.66672 11.0002 3.66672C15.0611 3.66672 18.3336 6.93923 18.3336 11.0002C18.3336 15.0611 15.0611 18.3336 11.0002 18.3336C10.7243 18.3336 10.4522 18.3186 10.1855 18.2889C10.1552 18.285 10.1248 18.2826 10.0942 18.2817C9.60143 18.2704 9.18786 18.6507 9.158 19.1427C9.12814 19.6347 9.49266 20.0623 9.98321 20.1106C10.293 20.1451 10.6072 20.1626 10.9241 20.1652C10.9494 20.1669 10.9748 20.1675 11.0002 20.167C16.052 20.167 20.167 16.052 20.167 11.0002C20.167 5.97269 16.0911 1.87448 11.0727 1.83514C11.0485 1.83359 11.0243 1.833 11.0002 1.83336ZM7.02727 2.89864L6.51432 3.01144L6.26635 3.1493L6.20548 3.18689L5.67105 3.54139L5.61375 3.58257L5.10976 3.97646L5.05604 4.02211L4.81703 4.24144L4.51893 4.93879L4.84836 5.62273L5.58063 5.82325L6.05419 5.59408L6.26546 5.40072L6.72201 5.04443L7.18662 4.73649L7.40594 4.61295L7.85712 4.00243L7.6933 3.2621L7.02727 2.89864ZM3.7786 6.69518L3.02484 6.78559L2.67303 7.1759L2.58082 7.37194L2.55218 7.43819L2.32032 8.04603L2.29704 8.11585L2.11353 8.74518L2.09563 8.81679L2.02222 9.17487L2.18962 9.9152L2.85833 10.2751L3.56822 10.0083L3.81798 9.54548L3.88423 9.22142L4.04626 8.6664L4.25395 8.12212L4.33004 7.96188L4.34168 7.20275L3.7786 6.69518ZM14.2587 7.78284C13.9888 7.77097 13.7274 7.87873 13.5443 8.07736L9.80776 12.01L7.95023 10.3216C7.57547 9.98098 6.99552 10.0086 6.65488 10.3834C6.31423 10.7582 6.34189 11.3381 6.71665 11.6787L9.23752 13.9705C9.60646 14.3054 10.1754 14.2844 10.5186 13.923L14.8728 9.3396C15.1254 9.08118 15.2027 8.69845 15.0701 8.36226C14.9375 8.02608 14.6197 7.79917 14.2587 7.78284ZM2.63811 11.7692L2.07414 12.2767L2.01147 12.7986L2.01953 12.8452L2.03206 12.9061L2.16366 13.445L2.18067 13.504L2.34628 14.0286L2.36687 14.0859L2.5656 14.5944L2.58977 14.6508L2.67123 14.8236L3.24953 15.315L3.9997 15.2022L4.40792 14.5631L4.33004 14.043L4.2629 13.9006L4.08207 13.4387L3.93973 12.9875L3.82067 12.5023L3.81798 12.4862L3.81619 12.4835L3.8135 12.4728L3.80992 12.4737L3.39097 11.8596L2.63811 11.7692ZM5.33176 16.1735L4.68096 16.5638L4.54667 17.3104L4.81613 17.7616L5.01845 17.946L5.0641 17.9845L5.48305 18.3202L5.5305 18.356L5.97093 18.6649L6.02107 18.6971L6.48209 18.9773L7.23585 19.0677L7.79893 18.5592L7.7864 17.8001L7.43369 17.4107L7.0031 17.1493L6.61817 16.8807L6.23771 16.5764L6.0533 16.4081L5.33176 16.1735Z" fill="currentColor" />
                                </svg>
                                <div>In Progress</div>
                            </div>

                            <div class="text-gray-500 flex items-center gap-1 font-medium text-xxs">
                                <svg class="h-3 w-3" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.7293 2.75C4.09213 2.75 2.75008 4.09205 2.75008 5.72922V11.0001H4.12511V7.79175H17.8753V16.2711C17.8753 17.1649 17.1649 17.8753 16.2712 17.8753H5.7293C4.83551 17.8753 4.12511 17.1649 4.12511 16.2711V14.2085H2.75008V16.2711C2.75008 17.9082 4.09213 19.2503 5.7293 19.2503H16.2712C17.9083 19.2503 19.2504 17.9082 19.2504 16.2711V5.72922C19.2504 4.09205 17.9083 2.75 16.2712 2.75H5.7293ZM5.7293 4.12502H16.2712C17.1649 4.12502 17.8753 4.83543 17.8753 5.72922V6.41673H4.12511V5.72922C4.12511 4.83543 4.83551 4.12502 5.7293 4.12502ZM8.47219 9.61796C8.1923 9.61803 7.94039 9.78774 7.8352 10.0471C7.73 10.3065 7.79251 10.6037 7.99326 10.7987L9.11136 11.9168H2.52091C2.27297 11.9133 2.04235 12.0436 1.91735 12.2577C1.79236 12.4719 1.79236 12.7368 1.91735 12.9509C2.04235 13.1651 2.27297 13.2954 2.52091 13.2918H9.11136L7.99326 14.4099C7.81366 14.5824 7.74131 14.8385 7.80412 15.0794C7.86694 15.3203 8.05509 15.5085 8.29601 15.5713C8.53694 15.6341 8.793 15.5617 8.96544 15.3821L11.2571 13.0904C11.5255 12.8219 11.5255 12.3867 11.2571 12.1182L8.96544 9.82654C8.83597 9.69321 8.65804 9.61797 8.47219 9.61796Z" fill="currentColor" />
                                </svg>
                                <div>12 Jan, 2023</div>
                            </div>

                            <div class="text-gray-500 flex items-center gap-1 font-medium text-xxs">
                                <svg class="h-3 w-3" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4324 1.85401C13.0762 1.85401 11.72 2.36873 10.6905 3.39822L2.12256 11.9662C1.88309 12.1961 1.78662 12.5375 1.87037 12.8587C1.95412 13.18 2.20498 13.4308 2.52623 13.5146C2.84747 13.5983 3.18888 13.5019 3.41881 13.2624L11.9867 4.69447C13.3451 3.33607 15.5197 3.33607 16.8781 4.69447C18.2365 6.05288 18.2365 8.22743 16.8781 9.58583L8.62081 17.8431C7.95869 18.5053 6.91244 18.5053 6.25032 17.8431C5.58821 17.181 5.58821 16.1348 6.25032 15.4727L12.8247 8.89832C13.0641 8.6684 13.1606 8.32698 13.0768 8.00574C12.9931 7.6845 12.7422 7.43363 12.421 7.34988C12.0997 7.26614 11.7583 7.3626 11.5284 7.60207L4.95407 14.1764C3.59124 15.5392 3.59124 17.7765 4.95407 19.1394C6.31691 20.5022 8.55422 20.5022 9.91705 19.1394L18.1744 10.8821C20.2334 8.82309 20.2334 5.45721 18.1744 3.39822C17.1449 2.36873 15.7887 1.85401 14.4324 1.85401Z" fill="currentColor" />
                                </svg>
                                <div>3</div>
                            </div>
                        </div>
                    </div>
                    <button class="px-3.5 py-2 text-xs gap-2 inline-flex text-gray-500 items-center font-medium text-left hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition" @click="openFAQModal">
                        <svg class="h-4 w-4 text-gray-400 shrink-0" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7502 2.75H8.25011C6.73116 2.75 5.50006 3.98111 5.50006 5.50005L4.58337 11.0002L5.50006 16.5003C5.50006 18.0192 6.73116 19.2503 8.25011 19.2503H13.7502C15.2692 19.2503 16.5003 18.0192 16.5003 16.5003L17.4169 11.0002L16.5003 5.50005C16.5003 3.98111 15.2692 2.75 13.7502 2.75Z" fill="currentColor" opacity="0.35" />
                            <path d="M3.66674 5.5H5.50011V16.5002H3.66674C2.65839 16.5002 1.83337 15.6752 1.83337 14.6668V7.33337C1.83337 6.32502 2.65839 5.5 3.66674 5.5Z" fill="currentColor" />
                            <path d="M20.1671 7.33337V14.6668C20.1671 15.6752 19.3421 16.5002 18.3337 16.5002H16.5004V5.5H18.3337C19.3421 5.5 20.1671 6.32502 20.1671 7.33337Z" fill="currentColor" />
                        </svg>

                        <div class="inline-flex grow">
                            <div class="text-gray-600 font-semibold mr-1 uppercase">#an394oe0</div>
                            <div>(Show Details)</div>
                        </div>

                        <div class="shrink-0 text-gray-300">2 Jan, 2023</div>
                    </button>
                </div>
            </div>
        </AppComponentBase>

        <FAQModalPage ref="refFAQModal" />
        <QueryCategorySheet ref="refQueryCategorySheet" />
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PullToRefresh from "pulltorefreshjs";
import { htmlMarkup, cssMarkup, spinnerMarkup, arrowMarkup } from "@/config/pullToRefresh";
import QueryCategorySheet from "@/sheets/query-category/QueryCategorySheet.vue";
import { useQueryStore } from "@/stores/queryStore";

const queryStore = useQueryStore();

const FAQModalPage = defineAsyncComponent(() => import("@/modals/faq/FAQModalPage.vue"));

const refPageContent = ref<string | undefined>(undefined);
const refFAQModal = ref<InstanceType<typeof FAQModalPage>>(null);
const refQueryCategorySheet = ref<InstanceType<typeof QueryCategorySheet>>(null);

const clearSearch = () => {
    queryStore.clearQuery();
};

const openFAQModal = () => {
    refFAQModal.value?.openModal();
};

const openQueryCategorySheet = () => {
    console.log("openQueryCategorySheet");

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
        instructionsRefreshing: "Refreshing Queries...",
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