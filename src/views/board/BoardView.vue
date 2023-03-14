<template>
    <div class="grow -mb-8 pb-8">
        <PageHeading class="mb-6" emphasis="Board" title="Announcement">
            <template #subtitle>
                Here you can find all the announcements. You will be notified about new announcements.
            </template>
        </PageHeading>

        <AppComponentBase>
            <div class="flex flex-col gap-4">
                <div v-for="i in '1'" class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg border border-gray-200 shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]">
                    <div class="px-3.5 py-2 flex flex-col gap-2">
                        <div class="flex items-center justify-between gap-4">
                            <div class="flex items-center">
                                <div class="text-gray-500 flex items-center gap-1 font-medium text-xxs">
                                    <svg class="h-3 w-3" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.7293 2.75C4.09213 2.75 2.75008 4.09205 2.75008 5.72922V11.0001H4.12511V7.79175H17.8753V16.2711C17.8753 17.1649 17.1649 17.8753 16.2712 17.8753H5.7293C4.83551 17.8753 4.12511 17.1649 4.12511 16.2711V14.2085H2.75008V16.2711C2.75008 17.9082 4.09213 19.2503 5.7293 19.2503H16.2712C17.9083 19.2503 19.2504 17.9082 19.2504 16.2711V5.72922C19.2504 4.09205 17.9083 2.75 16.2712 2.75H5.7293ZM5.7293 4.12502H16.2712C17.1649 4.12502 17.8753 4.83543 17.8753 5.72922V6.41673H4.12511V5.72922C4.12511 4.83543 4.83551 4.12502 5.7293 4.12502ZM8.47219 9.61796C8.1923 9.61803 7.94039 9.78774 7.8352 10.0471C7.73 10.3065 7.79251 10.6037 7.99326 10.7987L9.11136 11.9168H2.52091C2.27297 11.9133 2.04235 12.0436 1.91735 12.2577C1.79236 12.4719 1.79236 12.7368 1.91735 12.9509C2.04235 13.1651 2.27297 13.2954 2.52091 13.2918H9.11136L7.99326 14.4099C7.81366 14.5824 7.74131 14.8385 7.80412 15.0794C7.86694 15.3203 8.05509 15.5085 8.29601 15.5713C8.53694 15.6341 8.793 15.5617 8.96544 15.3821L11.2571 13.0904C11.5255 12.8219 11.5255 12.3867 11.2571 12.1182L8.96544 9.82654C8.83597 9.69321 8.65804 9.61797 8.47219 9.61796Z" fill="currentColor" />
                                    </svg>
                                    <div>12 Jan, 2023 - 1:23 PM</div>
                                </div>
                            </div>

                            <div class="text-gray-400 h-3 flex items-center gap-1 font-medium text-xxs">
                                <div>2mins ago</div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1.5 my-0.5">
                            <div class="aspect-video bg-gray-100 rounded-lg mb-1">

                            </div>
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
                    </div>
                    <button class="px-3.5 py-2 text-xs gap-2 inline-flex text-gray-500 items-center font-medium text-left hover:bg-gray-50 active:bg-gray-100 focus:outline-none transition" @click="openAnnouncementDetailModalPage">
                        <svg class="h-4 w-4 text-gray-400 shrink-0" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7502 2.75H8.25011C6.73116 2.75 5.50006 3.98111 5.50006 5.50005L4.58337 11.0002L5.50006 16.5003C5.50006 18.0192 6.73116 19.2503 8.25011 19.2503H13.7502C15.2692 19.2503 16.5003 18.0192 16.5003 16.5003L17.4169 11.0002L16.5003 5.50005C16.5003 3.98111 15.2692 2.75 13.7502 2.75Z" fill="currentColor" opacity="0.35" />
                            <path d="M3.66674 5.5H5.50011V16.5002H3.66674C2.65839 16.5002 1.83337 15.6752 1.83337 14.6668V7.33337C1.83337 6.32502 2.65839 5.5 3.66674 5.5Z" fill="currentColor" />
                            <path d="M20.1671 7.33337V14.6668C20.1671 15.6752 19.3421 16.5002 18.3337 16.5002H16.5004V5.5H18.3337C19.3421 5.5 20.1671 6.32502 20.1671 7.33337Z" fill="currentColor" />
                        </svg>

                        <div class="inline-flex grow">
                            <div>Open Announcement</div>
                        </div>
                    </button>
                </div>
            </div>
        </AppComponentBase>

        <AnnouncementDetailModalPage ref="refAnnouncementDetailModalPage" />
    </div>
</template>

<script lang="ts" setup>
import PageHeading from "@/components/headings/PageHeading.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import AnnouncementDetailModalPage from "@/modals/board/AnnouncementDetailModalPage.vue";
import { ref } from "vue";
import { executeAfter } from "@/helpers/general";

const refAnnouncementDetailModalPage = ref<InstanceType<typeof AnnouncementDetailModalPage> | null>(null);

const openAnnouncementDetailModalPage = () => {
    executeAfter(() => {
        refAnnouncementDetailModalPage.value?.openModal("123");
    });
};
</script>

<style scoped>

</style>