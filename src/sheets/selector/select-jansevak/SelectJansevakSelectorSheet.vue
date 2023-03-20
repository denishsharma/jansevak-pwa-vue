<template>
    <BottomSheet id="select-jansevak" ref="refBottomSheet" :do-on-close="doOnClose" :do-on-open="doOnOpen">
        <div class="pb-4 pt-3 flex flex-col h-full overflow-y-auto">
            <AppComponentBase class="mb-2 shrink-0">
                <div class="w-full flex h-10 items-center justify-between gap-4">
                    <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all" type="button" @click="executeAfter(() => router.back())">
                        <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </AppComponentBase>

            <PageHeading class="mb-3 shrink-0" emphasis="Jansevak" title="Select">
                <template #subtitle>
                    Select a jansevak to help you with your query or issue. You can also search for a jansevak by name.
                </template>
            </PageHeading>

            <AppComponentBase class="overflow-y-auto">
                <transition mode="out-in" name="fade">
                    <SelectorItemsSkeleton v-if="isFetching" :full-width="true" />
                    <transition v-else mode="out-in" name="fade">
                        <div v-if="searchUserResults.length === 0" class="bg-white py-4 text-sm border border-transparent rounded-lg flex flex-col items-center justify-center">
                            <div class="mb-2 h-9 w-9 bg-gray-50 text-gray-300 rounded-xl flex">
                                <svg class="h-6 w-6 mx-auto my-auto" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                    <path d="M15.9027 13.4854C16.2822 12.7383 16.5004 11.8958 16.5004 11.0002C16.5004 7.96233 14.0382 5.50012 11.0003 5.50012C10.1047 5.50012 9.26223 5.71829 8.51514 6.0978L15.9027 13.4854Z" fill="currentColor" />
                                    <path d="M6.0978 8.51514C5.71829 9.26223 5.50012 10.1047 5.50012 11.0003C5.50012 14.0382 7.96233 16.5004 11.0002 16.5004C11.8958 16.5004 12.7383 16.2822 13.4854 15.9027L6.0978 8.51514Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div class="text-xs font-semibold text-gray-300">
                                No Jansevak found
                            </div>
                            <div v-if="isOnlyWardJansevak" class="text-xxs text-gray-300 text-center w-4/5 leading-tight mt-0.5">
                                Looks like there are no jansevak in your ward. Please contact your ward coordinator to
                                add jansevak to your ward.
                            </div>
                        </div>
                        <div v-else class="flex flex-wrap gap-1.5 py-2 overflow-y-auto" data-ref="parent">
                            <div v-for="(result, index) in searchUserResults" :key="result.item.id" ref="refUserItems" :class="selectedUser?.id === result.item.id ? 'border-orange-500 text-orange-500 bg-orange-100' : 'border-gray-200 hover:bg-gray-100 active:bg-gray-200'" :data-index="index" :data-selected="selectedUser?.id === result.item.id" class="py-2 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border focus:outline-none transition-all" data-visible="" @click="setSelectedUser(result.item.id)">
                                <div class="flex items-center gap-x-2 w-full">
                                    <img :src="result.item.avatar_url" alt="" class="w-[1.375rem] h-[1.375rem] shrink-0 shadow-[0_0_0_1px] shadow-gray-100 bg-white object-cover object-center rounded-full bg-gray-100">
                                    <div class="grow overflow-hidden pr-2text-ellipsis whitespace-nowrap">
                                        {{ result.item.full_name }}
                                    </div>
                                    <div class="flex gap-1 shrink-0">
                                        <div v-for="(val, index) in result.item.from.split(',')" :key="index" :class="selectedUser?.id === result.item.id ? 'bg-orange-200' : 'bg-gray-100 text-gray-500'" class="uppercase text-xxs font-semibold px-2 rounded py-0.5 overflow-hidden whitespace-nowrap text-ellipsis">
                                            {{ val }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </transition>
            </AppComponentBase>

            <AppComponentBase class="mt-4 shrink-0">
                <label class="relative grow">
                    <input :class="searchTerm.length > 0 && 'pr-10 border-orange-300'" :value="searchTerm" class="py-2.5 px-2 pl-10 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="search_query" placeholder="Search jansevak" type="text" @input="setSearchTerm">
                    <div :class="searchTerm.length > 0 ? 'text-orange-500' : 'text-gray-300'" class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1] pl-2.5 mb-px">
                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.39595 2.75C5.73635 2.75 2.75 5.73635 2.75 9.39595C2.75 13.0555 5.73635 16.0419 9.39595 16.0419C10.8962 16.0419 12.2784 15.5345 13.393 14.6901L17.6855 18.9817C17.9154 19.2212 18.2568 19.3177 18.5781 19.2339C18.8993 19.1502 19.1502 18.8993 19.2339 18.5781C19.3177 18.2568 19.2212 17.9154 18.9817 17.6855L14.6901 13.393C15.5345 12.2784 16.0419 10.8962 16.0419 9.39595C16.0419 5.73635 13.0555 2.75 9.39595 2.75ZM9.39595 4.58337C12.0647 4.58337 14.2085 6.72717 14.2085 9.39595C14.2085 10.6773 13.7108 11.8346 12.9015 12.6948C12.8228 12.7518 12.7536 12.821 12.6965 12.8998C11.8362 13.71 10.6783 14.2085 9.39595 14.2085C6.72717 14.2085 4.58337 12.0647 4.58337 9.39595C4.58337 6.72718 6.72717 4.58337 9.39595 4.58337Z" fill="currentColor" />
                        </svg>
                    </div>

                    <button v-if="searchTerm.length > 0" class="absolute inset-y-0 right-0 my-auto mr-1.5 h-fit flex items-center z-[1] p-1 px-1 w-fit text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button" @click="clearSearch">
                        <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                            <path d="M13.5669 14.8503L7.15013 8.43348C6.78345 8.06681 6.78345 7.5168 7.15013 7.15013C7.5168 6.78345 8.06681 6.78345 8.43348 7.15013L14.8503 13.5669C15.2169 13.9336 15.2169 14.4836 14.8503 14.8503C14.4836 15.2169 13.9336 15.2169 13.5669 14.8503Z" fill="currentColor" />
                            <path d="M7.15013 13.5669L13.5669 7.15013C13.9336 6.78345 14.4836 6.78345 14.8503 7.15013C15.2169 7.5168 15.2169 8.06681 14.8503 8.43348L8.43348 14.8503C8.06681 15.2169 7.5168 15.2169 7.15013 14.8503C6.78345 14.4836 6.78345 13.9336 7.15013 13.5669Z" fill="currentColor" />
                        </svg>
                    </button>
                </label>
            </AppComponentBase>
        </div>
    </BottomSheet>
</template>

<script lang="ts" setup>
import BottomSheet from "@/components/bottom-sheet/BottomSheet.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import SelectorItemsSkeleton from "@/skeleton/SelectorItemsSkeleton.vue";
import { computed, ref } from "vue";
import { executeAfter, resolveFileUrl } from "@/helpers/general";
import { set, syncRef } from "@vueuse/core";
import UserService from "@/services/user.service";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import router from "@/router";
import type { UseFuseOptions } from "@vueuse/integrations/useFuse";
import { useFuse } from "@vueuse/integrations/useFuse";

interface UserItem {
    id: string;
    full_name: string;
    avatar_url: string;
    type: "my" | "ward";
    from: string;
}

const { user } = storeToRefs(useAuthStore());
const users = ref<UserItem[]>([]);

const refBottomSheet = ref<InstanceType<typeof BottomSheet>>();
const refUserItems = ref<HTMLDivElement[]>([]);

const isFetching = ref(true);
const givenWard = ref<string | undefined>(undefined);
const isOnlyWardJansevak = ref(false);
const userIdToFetch = ref("");

const selectedUser = ref<UserItem | null>(null);

const searchTerm = ref("");
const setSearchTerm = (e: Event) => {
    searchTerm.value = (e.target as HTMLInputElement).value;
};
const clearSearch = () => {
    searchTerm.value = "";
};

const setSelectedUser = (id: string) => {
    if (id === selectedUser.value?.id) return;

    const user = users.value.find((user) => user.id === id);
    if (user) {
        selectedUser.value = user;
        emit("on-jansevak-selected", user);
        router.back();
    }
};

const fuseOptions = computed<UseFuseOptions<UserItem>>(() => ({
    fuseOptions: {
        keys: ["full_name"],
        isCaseSensitive: false,
        threshold: 0.5,
    },
    matchAllWhenSearchEmpty: true,
}));

const { results: searchUserResults } = useFuse(searchTerm, users, fuseOptions);

const handleJansevakListOnSuccess = (data: any) => {
    const _users: UserItem[] = [];

    // push my jansevak if exists
    if (!isOnlyWardJansevak.value && data.my_jansevak) {
        _users.push({
            id: data.my_jansevak.uuid,
            full_name: data.my_jansevak.profile.full_name,
            avatar_url: resolveFileUrl(data.my_jansevak.profile.avatar_url) || "",
            type: "my",
            from: user.value.id === userIdToFetch.value ? "My Jansevak" : "Their Jansevak",
        });
    }

    // push ward jansevaks if any
    if (!isOnlyWardJansevak.value && data.ward_jansevaks && data.ward_jansevaks.length > 0) {
        data.ward_jansevaks.forEach((wardJansevak: any) => {
            _users.push({
                id: wardJansevak.uuid,
                full_name: wardJansevak.profile.full_name,
                avatar_url: resolveFileUrl(wardJansevak.profile.avatar_url) || "",
                type: "ward",
                from: "Ward",
            });
        });
    }

    // push given wards jansevaks if any
    if (givenWard.value && data.given_ward_jansevaks && data.given_ward_jansevaks.length > 0) {
        data.given_ward_jansevaks.forEach((wardJansevak: any) => {
            _users.push({
                id: wardJansevak.uuid,
                full_name: wardJansevak.profile.full_name,
                avatar_url: resolveFileUrl(wardJansevak.profile.avatar_url) || "",
                type: "ward",
                from: "Given Ward",
            });
        });
    }

    console.log(_users);
    set(users, _users);
};

const fetchJansevaks = () => {
    executeAfter(() => {
        const {
            isLoading,
            execute,
        } = UserService.listJansevaks({ id: userIdToFetch.value, ward: givenWard.value }, handleJansevakListOnSuccess);
        syncRef(isLoading, isFetching);
        execute();
    }, 100);
};

const doOnOpen = () => {
    clearSearch();
    fetchJansevaks();

    const _selectedUserElement = refUserItems.value.find((el) => el.dataset.selected === "true");
    if (_selectedUserElement) {
        _selectedUserElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
};

const doOnClose = () => {
    executeAfter(() => {
        clearSearch();
        set(isFetching, true);
    }, 100);
};

const openModal = (userId: string, selectedJansevakId?: string, ward?: string, onlyWard?: boolean) => {
    refBottomSheet.value?.openModal();
    set(userIdToFetch, userId);
    if (ward) set(givenWard, ward);
    else set(givenWard, null);

    if (onlyWard) set(isOnlyWardJansevak, true);
    else set(isOnlyWardJansevak, false);

    if (selectedJansevakId) setSelectedUser(selectedJansevakId);
    else selectedUser.value = null;

    console.log(userIdToFetch.value, givenWard.value, isOnlyWardJansevak.value);
};

const emit = defineEmits(["on-jansevak-selected"]);

defineExpose({
    openModal: openModal,
    closeModal: () => refBottomSheet.value?.closeModal(),
    goBack: () => refBottomSheet.value?.goBack(),
    suspend: () => refBottomSheet.value?.suspend(),
    resume: () => refBottomSheet.value?.resume(),
});
</script>

<style scoped>

</style>