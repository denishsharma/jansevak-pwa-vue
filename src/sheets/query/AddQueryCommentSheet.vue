<template>
    <BottomSheet id="add-query-comment" ref="refBottomSheet" :do-on-close="doOnClose" :do-on-open="doOnOpen">
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

                <PageHeading class="mb-6" emphasis="Comment" title="Add">
                    <template #subtitle>
                        <div v-if="user.user_type === 'JANSEVAK'" class="inline">
                            You can add a comment to this query or update the status of this query with comment.
                        </div>
                        <div v-else>
                            You can add a comment to this query. It will be visible to users related to this query.
                        </div>
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col">
                            <label class="relative">
                                <textarea ref="refCommentTextarea" :disabled="isProcessing" :value="formData.comment" class="disabled:bg-gray-50 transition-all max-h-40 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="Write your comment here..." rows="3" @input="setComment" />
                            </label>
                            <div class="block text-right text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                <div :class="{ 'text-red-400': formData.comment.length > 255 }" class="inline" v-text="formData.comment.length"></div>
                                <div class="inline">/255</div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <button :disabled="isProcessing || !validationPass" class="disabled:bg-gray-100 disabled:text-gray-300 bg-orange-500 text-white active:bg-orange-600 focus:outline-none py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent transition-all" type="button" @click="addComment">
                                <div v-show="isProcessing" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                                {{ isProcessing ? "Adding Comment..." : "Comment" }}
                            </button>
                        </div>
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
import { nextTick, ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import autosize from "autosize";
import type { Rules } from "async-validator";
import { useAsyncValidator } from "@vueuse/integrations/useAsyncValidator";
import { set, syncRef } from "@vueuse/core";
import { executeAfter } from "@/helpers/general";
import QueryService from "@/services/query.service";
import router from "@/router";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const refBottomSheet = ref<InstanceType<typeof BottomSheet>>();
const refCommentTextarea = ref<HTMLTextAreaElement | null>(null);

const queryId = ref("");
const isProcessing = ref(false);

const _formDataInterface: {
    comment: string;
} = {
    comment: "",
};

const formData = ref(_formDataInterface);

const formValidationRules: Rules = {
    comment: {
        type: "string",
        required: true,
        max: 255,
    },
};

const { pass: validationPass } = useAsyncValidator(formData, formValidationRules);

const setComment = (event: Event) => {
    formData.value.comment = (event.target as HTMLInputElement).value.trim();
};

const handleAddCommentOnSuccess = (data: any) => {
    emit("on-comment-added", data);
    router.back();
};

const addComment = () => {
    executeAfter(() => {
        const { isLoading, execute } = QueryService.addRegularComment({
            id: queryId.value,
            comment: formData.value.comment,
        }, handleAddCommentOnSuccess);
        syncRef(isLoading, isProcessing);
        execute();
    });
};

const doOnOpen = () => {
    nextTick(() => {
        autosize(refCommentTextarea.value as HTMLTextAreaElement);
        (document.activeElement as HTMLElement).blur();
    });
};

const doOnClose = () => {
    executeAfter(() => {
        formData.value.comment = "";
        set(queryId, "");
    }, 100);
};

const openModal = (id: string) => {
    refBottomSheet.value?.openModal();
    console.log("openModal", id);
    nextTick(() => {
        set(queryId, id);
        console.log("openModal", queryId.value);
    });
};

const emit = defineEmits(["on-comment-added"]);

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