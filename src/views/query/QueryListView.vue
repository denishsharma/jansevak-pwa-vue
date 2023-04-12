<template>
    <div ref="refPageContent" class="grow -mb-8 pb-8">
        <PageHeading :title="isOnMyQueries ? 'My' : 'Assigned'" class="mb-6" emphasis="Queries">
            <template #subtitle>
                Here you can find all queries you have created for yourself and on behalf of your family members.
            </template>
        </PageHeading>

        <AppComponentBase class="-mt-1 mb-5">
            <div class="flex items-center gap-2">
                <label class="relative grow">
                    <input :class="queryStore.query.length > 0 && 'pr-10 border-orange-300'" :value="queryStore.query" class="py-2.5 px-2 pl-10 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="search_query" placeholder="Enter query id" type="text" @input="setQuerySearchTerm">
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

                <button class="py-2.5 px-2.5 w-fit shrink-0 font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all" type="button">
                    <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.792 2.75C18.4382 2.75 3.56224 2.75 3.2084 2.75C2.44939 2.75 1.83337 3.36601 1.83337 4.12503C1.83337 4.88404 2.44939 5.50005 3.2084 5.50005C3.56224 5.50005 18.4382 5.50005 18.792 5.50005C19.551 5.50005 20.167 4.88404 20.167 4.12503C20.167 3.36601 19.551 2.75 18.792 2.75Z" fill="currentColor" />
                        <path d="M3.66675 5.5L6.97506 9.47016C7.79916 10.4583 8.25017 11.705 8.25017 12.9911V17.9449C8.25017 18.8414 8.89826 19.6059 9.78194 19.7535L12.1488 20.1477C12.9876 20.2879 13.7503 19.6417 13.7503 18.7919V12.9921C13.7503 11.705 14.2013 10.4593 15.0254 9.47107L18.3337 5.5H3.66675Z" fill="currentColor" opacity="0.35" />
                    </svg>
                </button>
            </div>

            <div v-if="['JANSEVAK', 'ADMIN'].includes(user['data'].user_type)" class="mt-3">
                <div class="bg-gray-100 rounded-lg p-1 overflow-hidden grid grid-cols-2 gap-1">
                    <button :class="isOnMyQueries ? 'shadow-black/[0.05] bg-white font-medium' : 'shadow-transparent text-gray-400'" class="disabled:bg-gray-50 disabled:text-gray-300 shadow-[0_0_30px_0] py-2.5 shrink-0 flex items-center z-[1] p-1 px-1 w-full text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent transition-all" @click="isOnMyQueries = true">
                        My Queries
                    </button>
                    <button :class="!isOnMyQueries ? 'shadow-black/[0.05] bg-white font-medium' : 'shadow-transparent text-gray-400'" class="disabled:bg-gray-50 disabled:text-gray-300 shadow-[0_0_30px_0]  py-2.5 shrink-0 flex items-center z-[1] p-1 px-1 w-full text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent transition-all" @click="isOnMyQueries = false">
                        Assigned to Me
                    </button>
                </div>
            </div>
        </AppComponentBase>

        <AppComponentBase>
            <transition mode="out-in" name="fade">
                <QueryListSkeleton v-if="isFetching" />
                <transition v-else mode="out-in" name="fade">
                    <div v-if="myQueries.length === 0" class="bg-white py-4 text-sm border border-transparent rounded-lg flex flex-col items-center justify-center">
                        <div class="mb-2 h-9 w-9 bg-gray-50 text-gray-300 rounded-xl flex">
                            <svg class="h-6 w-6 mx-auto my-auto" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                <path d="M15.9027 13.4854C16.2822 12.7383 16.5004 11.8958 16.5004 11.0002C16.5004 7.96233 14.0382 5.50012 11.0003 5.50012C10.1047 5.50012 9.26223 5.71829 8.51514 6.0978L15.9027 13.4854Z" fill="currentColor" />
                                <path d="M6.0978 8.51514C5.71829 9.26223 5.50012 10.1047 5.50012 11.0003C5.50012 14.0382 7.96233 16.5004 11.0002 16.5004C11.8958 16.5004 12.7383 16.2822 13.4854 15.9027L6.0978 8.51514Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div class="text-xs font-semibold text-gray-300">
                            You have no Queries
                        </div>
                        <div class="text-xxs text-gray-300 text-center w-4/5 leading-tight mt-0.5">
                            Looks like you haven't created any Queries yet. Click on the create button in navigation bar
                            to create a new Query.
                        </div>
                    </div>
                    <div v-else class="flex flex-col gap-4">
                        <div v-for="query in myQueries" :key="query.uuid" class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg border border-gray-200 shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]">
                            <div class="px-3.5 py-2 flex flex-col gap-2">
                                <div class="flex items-center justify-between gap-4">
                                    <button class="text-gray-600 px-1 py-0.5 -my-0.5 -mx-1 transition hover:bg-gray-100 active:bg-gray-200 rounded-full flex items-center gap-1.5 font-medium text-xxs" @click="openProfileSummaryModal(query.jansevak.uuid)">
                                        <div class="h-3 w-3">
                                            <img :src="query.jansevak.avatar" alt="" class="w-full h-full shadow-[0_0_0_1px] shadow-blue-500 bg-white object-cover object-center rounded-full">
                                        </div>
                                        <div class="inline-flex items-center gap-1 pr-0.5">
                                            <div>{{ query.jansevak.fullName }}</div>
                                            <svg class="h-2 w-2" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.7741 2.28271C18.7403 2.28383 18.7065 2.28681 18.673 2.29166H12.8336C12.503 2.28699 12.1955 2.46068 12.0289 2.74622C11.8622 3.03177 11.8622 3.38493 12.0289 3.67047C12.1955 3.95602 12.503 4.12971 12.8336 4.12503H16.5791L10.3521 10.352C10.1126 10.5819 10.0162 10.9234 10.0999 11.2446C10.1837 11.5659 10.4345 11.8167 10.7558 11.9005C11.077 11.9842 11.4184 11.8877 11.6484 11.6483L17.8754 5.42128V9.16679C17.8707 9.49738 18.0444 9.80487 18.3299 9.97154C18.6155 10.1382 18.9686 10.1382 19.2542 9.97154C19.5397 9.80488 19.7134 9.49738 19.7087 9.16679V3.32114C19.7445 3.05458 19.6615 2.78575 19.4815 2.58583C19.3016 2.38592 19.043 2.27509 18.7741 2.28271ZM5.72931 3.66669C3.84217 3.66669 2.29175 5.21711 2.29175 7.10425V16.2711C2.29175 18.1582 3.84217 19.7086 5.72931 19.7086H14.8961C16.7833 19.7086 18.3337 18.1582 18.3337 16.2711V11.9168C18.3384 11.5862 18.1647 11.2787 17.8791 11.1121C17.5936 10.9454 17.2404 10.9454 16.9549 11.1121C16.6693 11.2787 16.4956 11.5862 16.5003 11.9168V16.2711C16.5003 17.1633 15.7884 17.8753 14.8961 17.8753H5.7293C4.83706 17.8753 4.12511 17.1633 4.12511 16.2711V7.10425C4.12511 6.212 4.83706 5.50005 5.7293 5.50005H10.0835C10.4141 5.50473 10.7216 5.33104 10.8883 5.04549C11.0549 4.75995 11.0549 4.40679 10.8883 4.12124C10.7216 3.8357 10.4141 3.66201 10.0835 3.66668L5.72931 3.66669Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </button>

                                    <div class="text-gray-400 flex items-center gap-1 font-medium text-xxs">
                                        <div v-text="user.id === query.onBehalfOf.uuid ? 'Myself' : query.onBehalfOf.fullName"></div>
                                        <svg class="h-3 w-3" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0002 11.0002C13.5315 11.0002 15.5836 8.94814 15.5836 6.41679C15.5836 3.88544 13.5315 1.83337 11.0002 1.83337C8.46881 1.83337 6.41675 3.88544 6.41675 6.41679C6.41675 8.94814 8.46881 11.0002 11.0002 11.0002Z" fill="currentColor" opacity="0.35" />
                                            <path d="M16.5003 13.7502H5.50005C3.98111 13.7502 2.75 14.9814 2.75 16.5003C2.75 18.0192 3.98111 19.2503 5.50005 19.2503H16.5003C18.0192 19.2503 19.2503 18.0192 19.2503 16.5003C19.2503 14.9814 18.0192 13.7502 16.5003 13.7502Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1.5 my-0.5">
                                    <div class="text-sm pr-8 leading-tight font-semibold">
                                        {{ query.subject }}
                                    </div>
                                    <div class="text-xs pr-3 text-gray-600 leading-tight line-clamp-3">
                                        {{ query.description }}
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-center gap-x-4 gap-y-1">
                                    <QueryStatusChip :status="query.status" class="flex items-center gap-1 font-medium text-xxs" icon-class="h-3 w-3" />

                                    <div class="text-gray-500 flex items-center gap-1 font-medium text-xxs">
                                        <svg class="h-3 w-3" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.7293 2.75C4.09213 2.75 2.75008 4.09205 2.75008 5.72922V11.0001H4.12511V7.79175H17.8753V16.2711C17.8753 17.1649 17.1649 17.8753 16.2712 17.8753H5.7293C4.83551 17.8753 4.12511 17.1649 4.12511 16.2711V14.2085H2.75008V16.2711C2.75008 17.9082 4.09213 19.2503 5.7293 19.2503H16.2712C17.9083 19.2503 19.2504 17.9082 19.2504 16.2711V5.72922C19.2504 4.09205 17.9083 2.75 16.2712 2.75H5.7293ZM5.7293 4.12502H16.2712C17.1649 4.12502 17.8753 4.83543 17.8753 5.72922V6.41673H4.12511V5.72922C4.12511 4.83543 4.83551 4.12502 5.7293 4.12502ZM8.47219 9.61796C8.1923 9.61803 7.94039 9.78774 7.8352 10.0471C7.73 10.3065 7.79251 10.6037 7.99326 10.7987L9.11136 11.9168H2.52091C2.27297 11.9133 2.04235 12.0436 1.91735 12.2577C1.79236 12.4719 1.79236 12.7368 1.91735 12.9509C2.04235 13.1651 2.27297 13.2954 2.52091 13.2918H9.11136L7.99326 14.4099C7.81366 14.5824 7.74131 14.8385 7.80412 15.0794C7.86694 15.3203 8.05509 15.5085 8.29601 15.5713C8.53694 15.6341 8.793 15.5617 8.96544 15.3821L11.2571 13.0904C11.5255 12.8219 11.5255 12.3867 11.2571 12.1182L8.96544 9.82654C8.83597 9.69321 8.65804 9.61797 8.47219 9.61796Z" fill="currentColor" />
                                        </svg>
                                        <div>{{ query.createdAtFormatted }}</div>
                                    </div>
                                </div>
                            </div>
                            <button class="px-3.5 py-2 text-xs gap-2 inline-flex text-gray-500 items-center font-medium text-left active:bg-gray-100 focus:outline-none transition" @click="openQueryDetailModal(query.uuid, query.status)">
                                <svg class="h-4 w-4 text-gray-400 shrink-0" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7502 2.75H8.25011C6.73116 2.75 5.50006 3.98111 5.50006 5.50005L4.58337 11.0002L5.50006 16.5003C5.50006 18.0192 6.73116 19.2503 8.25011 19.2503H13.7502C15.2692 19.2503 16.5003 18.0192 16.5003 16.5003L17.4169 11.0002L16.5003 5.50005C16.5003 3.98111 15.2692 2.75 13.7502 2.75Z" fill="currentColor" opacity="0.35" />
                                    <path d="M3.66674 5.5H5.50011V16.5002H3.66674C2.65839 16.5002 1.83337 15.6752 1.83337 14.6668V7.33337C1.83337 6.32502 2.65839 5.5 3.66674 5.5Z" fill="currentColor" />
                                    <path d="M20.1671 7.33337V14.6668C20.1671 15.6752 19.3421 16.5002 18.3337 16.5002H16.5004V5.5H18.3337C19.3421 5.5 20.1671 6.32502 20.1671 7.33337Z" fill="currentColor" />
                                </svg>

                                <div class="inline-flex grow">
                                    <div class="text-gray-600 font-semibold mr-1 uppercase">#{{ query.fid }}</div>
                                    <div>(Show Details)</div>
                                </div>

                                <div class="shrink-0 text-gray-300">
                                    <UseTimeAgo v-slot="{ timeAgo }" :time="query.createdAt.toJSDate()" :update-interval="1">
                                        {{ sentenceCase(timeAgo) }}
                                    </UseTimeAgo>
                                </div>
                            </button>
                        </div>
                    </div>
                </transition>

            </transition>
        </AppComponentBase>

        <QueryDetailModalPage ref="refQueryDetailModalPage" />
        <ProfileSummaryModalPage ref="refProfileSummaryModalPage" />
    </div>
</template>

<script lang="ts" setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref, watch } from "vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PullToRefresh from "pulltorefreshjs";
import { arrowMarkup, cssMarkup, htmlMarkup, spinnerMarkup } from "@/config/pullToRefresh";
import { useQueryStore } from "@/stores/queryStore";
import QueryDetailModalPage from "@/modals/query/QueryDetailModalPage.vue";
import { executeAfter, resolveFileUrl } from "@/helpers/general";
import QueryService from "@/services/query.service";
import { set, syncRef } from "@vueuse/core";
import { DateTime } from "luxon";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import QueryListSkeleton from "@/skeleton/QueryListSkeleton.vue";
import { UseTimeAgo } from "@vueuse/components";
import { sentenceCase } from "change-case";
import QueryStatusChip from "@/components/query/QueryStatusChip.vue";
import ProfileSummaryModalPage from "@/modals/profile/ProfileSummaryModalPage.vue";

interface QueryItem {
    uuid: string;
    fid: string;
    subject: string;
    description: string;
    status: string;
    createdAt: DateTime;
    createdAtFormatted: string;
    category: {
        uuid: string;
        name: string;
    },
    onBehalfOf: {
        uuid: string;
        fullName: string;
        avatar: string;
    },
    jansevak: {
        uuid: string;
        fullName: string;
        avatar: string;
    }
}

const queryStore = useQueryStore();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const myQueries = ref<QueryItem[]>([]);

const isFetching = ref(true);
const isOnMyQueries = ref(true);

const refPageContent = ref<string | undefined>(undefined);
const refQueryDetailModalPage = ref<InstanceType<typeof QueryDetailModalPage> | null>(null);
const refProfileSummaryModalPage = ref<InstanceType<typeof ProfileSummaryModalPage> | null>(null);

function openQueryDetailModal(uuid: string, status: string) {
    executeAfter(() => {
        refQueryDetailModalPage.value?.openModal(uuid, status);
    });
}

function openProfileSummaryModal(uuid: string) {
    executeAfter(() => {
        refProfileSummaryModalPage.value?.openModal(uuid);
    });
}

function setQuerySearchTerm(event: Event) {
    const target = event.target as HTMLInputElement;
    queryStore.setQuery(target.value);
}

const clearSearch = () => {
    queryStore.clearQuery();
};

watch(isOnMyQueries, (newValue) => {
    if (newValue) {
        fetchMyQueries();
    } else {
        fetchQueriesAssignedToMe();
    }
});

const handleMyQueriesOnSuccess = (data: any) => {
    myQueries.value = [];

    if (data.length > 0) {
        data.forEach((query: any) => {
            myQueries.value.push({
                uuid: query.uuid,
                fid: query.fid,
                subject: query.subject,
                description: query.description,
                status: query.status,
                createdAt: DateTime.fromISO(query.created_at),
                createdAtFormatted: DateTime.fromISO(query.created_at).toFormat("dd LLL, yyyy"),
                category: {
                    uuid: query.queryCategory.uuid,
                    name: query.queryCategory.name,
                },
                jansevak: {
                    uuid: query.userRelation.forJansevakUser.uuid,
                    fullName: query.userRelation.forJansevakUser.profile.full_name,
                    avatar: resolveFileUrl(query.userRelation.forJansevakUser.profile.avatar_url) || "",
                },
                onBehalfOf: {
                    uuid: query.userRelation.onBehalfOfUser.uuid,
                    fullName: query.userRelation.onBehalfOfUser.profile.full_name,
                    avatar: resolveFileUrl(query.userRelation.onBehalfOfUser.profile.avatar_url) || "",
                },
            });
        });
    }
};

const fetchQueries = () => {
    if (isOnMyQueries.value) {
        fetchMyQueries();
    } else {
        fetchQueriesAssignedToMe();
    }
};

const fetchMyQueries = () => {
    executeAfter(() => {
        const { isLoading, execute } = QueryService.listMyQueries(handleMyQueriesOnSuccess);
        syncRef(isLoading, isFetching);
        execute();
    }, 100);
};

const fetchQueriesAssignedToMe = () => {
    executeAfter(() => {
        const { isLoading, execute } = QueryService.listAssignedToMeQueries(handleMyQueriesOnSuccess);
        syncRef(isLoading, isFetching);
        execute();
    }, 100);
};

const initiatePullToRefresh = () => {
    PullToRefresh.init({
        mainElement: refPageContent.value,
        triggerElement: refPageContent.value,
        distIgnore: 50,
        getMarkup: () => htmlMarkup(),
        getStyles: () => cssMarkup(),
        iconArrow: arrowMarkup(),
        iconRefreshing: spinnerMarkup(),
        instructionsRefreshing: "Refreshing Queries...",
        onRefresh() {
            return new Promise<void>(function (resolve) {
                const e = (data: any) => {
                    handleMyQueriesOnSuccess(data);
                    resolve();
                };
                if (isOnMyQueries.value) {
                    const { execute } = QueryService.listMyQueries(e);
                    execute();
                } else {
                    const { execute } = QueryService.listAssignedToMeQueries(e);
                    execute();
                }
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

onActivated(() => {
    fetchQueries();
});

onDeactivated(() => {
    executeAfter(() => {
        set(isFetching, true);
    }, 100);
});

onUnmounted(() => {
    PullToRefresh.destroyAll();
});
</script>

<style scoped>

</style>