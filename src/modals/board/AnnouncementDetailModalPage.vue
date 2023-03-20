<template>
    <ModalPage id="announcement-details" ref="refModalPage" :do-on-close="doOnClose">
        <AppContainerBase>
            <template #title>Announcement Detail</template>

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
                <AppComponentBase class="mb-4">
                    <transition mode="out-in" name="fade">
                        <AnnouncementDetailsSkeleton v-if="isFetching" />

                        <div v-else class="select-none flex flex-col gap-1">
                            <div v-if="announcementDetails.cover_url" class="aspect-video bg-gray-100 rounded-xl mb-3 overflow-hidden">
                                <img :src="announcementDetails.cover_url" alt="" class="object-cover object-center w-full h-full pointer-events-none" draggable="false" />
                            </div>
                            <div class="text-lg pr-8 leading-tight font-semibold">
                                {{ announcementDetails.subject }}
                            </div>
                            <div class="text-xs pr-3 text-gray-400 italic leading-tight line-clamp-3">
                                {{ announcementDetails.content }}
                            </div>

                            <div class="mt-5" v-html="announcementDetails.rendered_content"></div>
                        </div>
                    </transition>
                </AppComponentBase>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import ModalPage from "@/components/modal-page/ModalPage.vue";
import router from "@/router";
import { nextTick, ref } from "vue";
import { set, syncRef, useDateFormat, resolveUnref } from "@vueuse/core";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import { executeAfter, resolveFileUrl } from "@/helpers/general";
import AnnouncementService from "@/services/announcement.service";
import { TEMP_HOST } from "@/helpers/api";
import AnnouncementDetailsSkeleton from "@/skeleton/AnnouncementDetailsSkeleton.vue";
import MarkdownIt from "markdown-it";

interface AnnouncementDetails {
    slug: string;
    subject: string;
    content: string;
    published_at: string;
    published_at_formatted: string;
    cover_url: string;
    rendered_content: string;
}

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);

const announcementId = ref<string>("");
const announcementDetails = ref<AnnouncementDetails>({} as AnnouncementDetails);
const isFetching = ref(true);

const handleAnnouncementDetailsOnSuccess = (data: any) => {
    announcementDetails.value = {
        slug: data.slug,
        subject: data.subject,
        content: data.content,
        published_at: data.published_at,
        published_at_formatted: resolveUnref(useDateFormat(data.published_at, "DD MMM, YYYY - h:mm A")),
        cover_url: resolveFileUrl(data.cover_url) || "",
        rendered_content: new MarkdownIt({
            html: true,
            xhtmlOut: true,
        }).render(data.content),
    };
};

const fetchAnnouncementDetails = async () => {
    executeAfter(() => {
        const {
            isLoading,
            execute,
        } = AnnouncementService.show({ id: announcementId.value }, handleAnnouncementDetailsOnSuccess);
        syncRef(isLoading, isFetching);
        execute();
    }, 100);
};

const openModal = (id: string) => {
    refModalPage.value?.openModal();
    nextTick(() => {
        set(announcementId, id);
        fetchAnnouncementDetails();
    });
    (document.activeElement as HTMLElement)?.blur();
};

const doOnClose = () => {
    executeAfter(() => {
        set(isFetching, true);
        set(announcementId, "");
        set(announcementDetails, {} as AnnouncementDetails);
    }, 100);
};

defineExpose({
    openModal,
    closeModal: () => refModalPage.value?.closeModal(),
    goBack: () => refModalPage.value?.goBack(),
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style lang="scss" scoped>
</style>