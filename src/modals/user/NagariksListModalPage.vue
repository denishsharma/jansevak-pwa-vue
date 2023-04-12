<template>
    <ModalPage id="nagarik-list" ref="refModalPage" :do-on-close="doOnClose" :do-on-open="doOnOpen">
        <AppContainerBase>
            <template #title>View Nagariks</template>

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
                <PageHeading :title="onVerifiedSection ? 'Verified' : 'Pending'" class="mb-6" emphasis="Nagariks">
                    <template #subtitle>
                        View list of verified and pending nagariks allocated to you.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="bg-gray-100 rounded-lg p-1 overflow-hidden grid grid-cols-2 gap-1">
                        <button :class="onVerifiedSection ? 'shadow-black/[0.05] bg-white font-medium' : 'shadow-transparent text-gray-400'" class="disabled:bg-gray-50 disabled:text-gray-300 shadow-[0_0_30px_0] py-2.5 shrink-0 flex items-center z-[1] p-1 px-1 w-full text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent transition-all" @click="onVerifiedSection = true">
                            Verified
                        </button>
                        <button :class="!onVerifiedSection ? 'shadow-black/[0.05] bg-white font-medium' : 'shadow-transparent text-gray-400'" class="disabled:bg-gray-50 disabled:text-gray-300 shadow-[0_0_30px_0]  py-2.5 shrink-0 flex items-center z-[1] p-1 px-1 w-full text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent transition-all" @click="onVerifiedSection = false">
                            Pending
                        </button>
                    </div>

                    <transition mode="out-in" name="fade">
                        <div v-if="isFetching" class="flex flex-col mt-5 gap-3">
                            <div v-for="i in 3" :key="i" class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg">
                                <div class="flex items-center gap-3 animate-pulse">
                                    <div class="w-12 h-12 shrink-0 bg-gray-100 rounded-full"></div>
                                    <div class="grow flex flex-col gap-1">
                                        <div class="bg-gray-100 h-3 w-2/5 rounded"></div>
                                        <div class="h-2.5 bg-gray-100 rounded w-3/5"></div>
                                    </div>
                                    <div class="shrink-0">
                                        <button class="w-14 py-1.5 text-xs gap-2 inline-flex rounded-md text-white bg-gray-100">
                                            <div class="inline-flex grow">
                                                <div>&nbsp;</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <transition v-else mode="out-in" name="fade">
                            <div v-if="userItems.length === 0" class="bg-white py-5 text-sm border border-transparent rounded-lg flex flex-col items-center justify-center">
                                <div class="mb-2 h-9 w-9 bg-gray-50 text-gray-300 rounded-xl flex">
                                    <svg class="h-6 w-6 mx-auto my-auto" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                        <path d="M15.9027 13.4854C16.2822 12.7383 16.5004 11.8958 16.5004 11.0002C16.5004 7.96233 14.0382 5.50012 11.0003 5.50012C10.1047 5.50012 9.26223 5.71829 8.51514 6.0978L15.9027 13.4854Z" fill="currentColor" />
                                        <path d="M6.0978 8.51514C5.71829 9.26223 5.50012 10.1047 5.50012 11.0003C5.50012 14.0382 7.96233 16.5004 11.0002 16.5004C11.8958 16.5004 12.7383 16.2822 13.4854 15.9027L6.0978 8.51514Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div class="text-xs font-semibold text-gray-300">
                                    No Nagariks Found
                                </div>
                                <div class="text-xxs text-gray-300 text-center w-4/5 leading-tight mt-0.5">
                                    Looks like you don't have any nagariks in this section. Try switching to other
                                    sections.
                                </div>
                            </div>
                            <div v-else class="flex flex-col mt-5 gap-3">
                                <div v-for="(item, index) in userItems" :key="index" class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg">
                                    <div class="flex items-center gap-3">
                                        <img :src="resolveFileUrl(item.avatar_url)" alt="" class="w-12 h-12 shrink-0 shadow-[0_0_0_1px] shadow-gray-100 bg-white object-cover object-center rounded-full">
                                        <div class="grow flex flex-col">
                                            <div class="text-xs font-semibold">
                                                {{ item.full_name }}
                                            </div>
                                            <div class="text-xxs leading-tight font-medium text-gray-500 flex items-center gap-1.5">
                                                <div># {{ item.fid }}</div>
                                                <div class="h-1 w-1 rounded-full bg-gray-300"></div>
                                                <div>+91 {{ item.phone_number }}</div>
                                            </div>
                                        </div>
                                        <div class="shrink-0">
                                            <button v-if="onVerifiedSection" class="px-3.5 py-1.5 text-xs gap-2 inline-flex rounded-md text-white bg-orange-500 items-center font-medium text-center active:bg-orange-600 focus:outline-none transition" @click="openProfileSummaryModalPage(item.uuid, false)">
                                                <div class="inline-flex grow">
                                                    <div>View</div>
                                                </div>
                                            </button>
                                            <button v-else class="px-3.5 py-1.5 text-xs gap-2 inline-flex rounded-md text-white bg-orange-500 items-center font-medium text-center active:bg-orange-600 focus:outline-none transition" @click="openProfileSummaryModalPage(item.uuid, true)">
                                                <div class="inline-flex grow">
                                                    <div>Verify</div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </transition>
                </AppComponentBase>

                <ProfileSummaryModalPage ref="refProfileSummaryModalPage" @on-close="onProfileSummaryModalPageClose" />
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import PageHeading from "@/components/headings/PageHeading.vue";
import ModalPage from "@/components/modal-page/ModalPage.vue";
import { executeAfter, resolveFileUrl } from "@/helpers/general";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import ProfileSummaryModalPage from "@/modals/profile/ProfileSummaryModalPage.vue";
import router from "@/router";
import UserService from "@/services/user.service";
import { useAuthStore } from "@/stores/authStore";
import { set, syncRef } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { nextTick, ref, watch } from "vue";

interface UserItem {
    uuid: string;
    fid: string;
    phone_number: string;
    is_setup_completed: boolean;
    is_verified: boolean;
    user_type: string;
    full_name: string;
    avatar_url: string;
}

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);
const refProfileSummaryModalPage = ref<InstanceType<typeof ProfileSummaryModalPage> | null>(null);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const userItems = ref<UserItem[]>([]);

const isFetching = ref(true);
const onVerifiedSection = ref(true);

const handleOnNagariksSuccess = (data) => {
    userItems.value = data.map((item) => ({
        uuid: item.uuid,
        fid: item.fid,
        phone_number: item.phone_number,
        is_setup_completed: item.is_setup_completed,
        is_verified: item.is_verified,
        user_type: item.user_type,
        full_name: item.profile.full_name,
        avatar_url: item.profile.avatar_url,
    }));
};

watch(onVerifiedSection, () => {
    userItems.value = [];
    set(isFetching, true);
    fetchNagariks();
});

const fetchNagariks = () => {
    executeAfter(() => {
        const { isLoading, execute } = UserService.getAssignedNagariks({
            id: user.value?.id as string,
            only: onVerifiedSection.value ? "verified" : "notVerified",
        }, handleOnNagariksSuccess);
        syncRef(isLoading, isFetching);
        execute();
    });
};

const openProfileSummaryModalPage = (uuid: string, showVerify: boolean) => {
    executeAfter(() => {
        refModalPage.value?.suspend();
        refProfileSummaryModalPage.value?.openModal(uuid, showVerify);
    });
};

const onProfileSummaryModalPageClose = () => {
    refModalPage.value?.resume();
};

const doOnOpen = () => {
    fetchNagariks();
};

const doOnClose = () => {
    executeAfter(() => {
        userItems.value = [];
        set(isFetching, true);
    });
};

const openModal = (openVerified: boolean = true) => {
    refModalPage.value?.openModal();
    nextTick(() => {
        onVerifiedSection.value = openVerified;
    });
};

defineExpose({
    openModal,
    closeModal: () => refModalPage.value?.closeModal(),
    goBack: () => refModalPage.value?.goBack(),
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style scoped>

</style>