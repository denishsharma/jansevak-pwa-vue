<template>
    <ModalPage id="give-feedback" ref="refModalPage" :do-on-close="doOnClose" :do-on-open="doOnOpen">
        <AppContainerBase>
            <template #title>Feedback</template>

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
                <PageHeading class="mb-6" emphasis="Feedback" title="Give">
                    <template #subtitle>
                        {{ subtitle }}
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <transition mode="out-in" name="fade-scale">
                        <div v-if="(feedbackFor !== 'general' || feedbackType && !['other', 'suggestion'].includes(feedbackType['id'])) && rating === 0" class="bg-red-100 text-xxs p-1 w-fit mb-3 flex items-center gap-1.5 pr-2.5 uppercase leading-none rounded-full">
                            <div class="bg-red-500 p-1 rounded-full text-white">
                                <svg class="h-2 w-2" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" d="M9.81031 2.5493C10.0441 2.1093 10.5015 1.83337 11.0002 1.83337C11.4988 1.83337 11.9563 2.1093 12.19 2.5493L14.4478 6.8073C14.4735 6.8568 14.5111 6.89897 14.556 6.93197C14.6009 6.96497 14.6531 6.98697 14.7081 6.99614L19.4547 7.82757C19.9461 7.91373 20.3485 8.26391 20.5034 8.73783C20.6574 9.21176 20.5373 9.73244 20.1899 10.0909L16.8385 13.5541C16.8 13.5944 16.7707 13.643 16.7533 13.6953C16.7358 13.7484 16.7313 13.8043 16.7386 13.8603L17.4142 18.6316C17.4839 19.1248 17.2758 19.617 16.8724 19.9104C16.4691 20.2037 15.9374 20.2495 15.4892 20.0305L11.1606 17.9129C11.1111 17.8882 11.0561 17.8753 11.0002 17.8753C10.9442 17.8753 10.8892 17.8882 10.8388 17.912L6.51025 20.0295C6.06199 20.2486 5.53031 20.2019 5.12697 19.9095C4.72363 19.6161 4.51554 19.1248 4.58521 18.6307L5.26081 13.8593C5.26906 13.8043 5.26356 13.7475 5.24614 13.6943C5.22872 13.6412 5.2003 13.5926 5.16089 13.5532L1.80949 10.0899C1.46299 9.73152 1.34198 9.21084 1.49599 8.73692C1.64999 8.26299 2.05333 7.91282 2.54467 7.82665L7.29126 6.99522C7.34626 6.98514 7.39851 6.96313 7.44343 6.93105C7.48835 6.89805 7.52593 6.85588 7.5516 6.80638L9.81031 2.5493Z" fill="currentColor" fill-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="leading-tight text-red-500 font-medium">
                                You must select a rating
                            </div>
                        </div>
                    </transition>

                    <div v-if="feedbackFor === 'general'" class="h-[150px] w-full mb-3 border py-5 border-gray-200 border-dashed rounded-lg">
                        <img :src="feedbackImage" alt="" class="h-full w-full object-center object-contain">
                    </div>

                    <slot v-if="feedbackFor !== 'general' && $slots.feedback" name="feedback"></slot>

                    <transition mode="out-in" name="fade-scale">
                        <div v-if="feedbackFor !== 'general' || feedbackType && !['other', 'suggestion'].includes(feedbackType['id'])" class="grid grid-cols-5 gap-3 mb-3">
                            <button v-for="i in 5" :key="i" :class="rating >= i ? 'text-orange-500 disabled:text-gray-400' : 'text-gray-300 disabled:text-gray-300'" :disabled="isProcessing" class="group disabled:bg-gray-100 transition-all active:bg-gray-100 rounded-full flex aspect-square" @click="setRating(i)">
                                <div class="h-6 w-6 mx-auto my-auto flex items-center justify-center relative transition-all">
                                    <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd" d="M9.81031 2.5493C10.0441 2.1093 10.5015 1.83337 11.0002 1.83337C11.4988 1.83337 11.9563 2.1093 12.19 2.5493L14.4478 6.8073C14.4735 6.8568 14.5111 6.89897 14.556 6.93197C14.6009 6.96497 14.6531 6.98697 14.7081 6.99614L19.4547 7.82757C19.9461 7.91373 20.3485 8.26391 20.5034 8.73783C20.6574 9.21176 20.5373 9.73244 20.1899 10.0909L16.8385 13.5541C16.8 13.5944 16.7707 13.643 16.7533 13.6953C16.7358 13.7484 16.7313 13.8043 16.7386 13.8603L17.4142 18.6316C17.4839 19.1248 17.2758 19.617 16.8724 19.9104C16.4691 20.2037 15.9374 20.2495 15.4892 20.0305L11.1606 17.9129C11.1111 17.8882 11.0561 17.8753 11.0002 17.8753C10.9442 17.8753 10.8892 17.8882 10.8388 17.912L6.51025 20.0295C6.06199 20.2486 5.53031 20.2019 5.12697 19.9095C4.72363 19.6161 4.51554 19.1248 4.58521 18.6307L5.26081 13.8593C5.26906 13.8043 5.26356 13.7475 5.24614 13.6943C5.22872 13.6412 5.2003 13.5926 5.16089 13.5532L1.80949 10.0899C1.46299 9.73152 1.34198 9.21084 1.49599 8.73692C1.64999 8.26299 2.05333 7.91282 2.54467 7.82665L7.29126 6.99522C7.34626 6.98514 7.39851 6.96313 7.44343 6.93105C7.48835 6.89805 7.52593 6.85588 7.5516 6.80638L9.81031 2.5493Z" fill="currentColor" fill-rule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </transition>

                    <div class="flex flex-col gap-3">
                        <div v-if="feedbackFor === 'general'" class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Feedback Type
                                </div>
                                <label class="relative">
                                    <button :disabled="isProcessing" class="group disabled:bg-gray-50 transition-all select-none text-left flex justify-between items-center py-3 px-4 block w-full border border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" @click="openSelectFeedbackTypeSelectorSheet">
                                        <div class="grow overflow-hidden">
                                            <div v-if="feedbackType === null" class="font-normal text-gray-300">
                                                Select feedback type
                                            </div>
                                            <div v-else class="font-medium overflow-hidden whitespace-nowrap text-ellipsis pr-3">
                                                {{ feedbackType.name }}
                                            </div>
                                        </div>
                                        <div class="group-disabled:bg-gray-200 group-disabled:text-gray-400 transition-all shrink-0 text-xxs font-medium bg-orange-100 text-orange-500 px-2 rounded-md -mr-1.5 uppercase">
                                            Select
                                        </div>
                                    </button>
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <label class="relative">
                                    <input :disabled="isProcessing" :value="formData.subject" class="disabled:bg-gray-50 transition-all py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="Feedback subject" type="text" @input="setFeedbackSubject">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <label class="relative">
                                    <textarea ref="refDescriptionTextarea" :disabled="isProcessing" :value="formData.message" class="disabled:bg-gray-50 transition-all py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="Describe your feedback" rows="4" @input="setFeedbackMessage" />
                                </label>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <SelectFeedbackTypeSelectorSheet ref="refSelectFeedbackTypeSelectorSheet" @on-close="onSelectFeedbackTypeSelectorSheetClose" @on-type-selected="onSelectedTypeSelected" />
            </template>

            <template #footer>
                <div class="flex">
                    <button :disabled="isProcessing || !validationPass ||  (!(feedbackFor === 'general' && feedbackType && ['other', 'suggestion'].includes(feedbackType.id)) && rating === 0)" class="disabled:bg-gray-100 disabled:text-gray-300 bg-orange-500 text-white active:bg-orange-600 focus:outline-none py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent transition-all" type="button" @click="handleFeedback">
                        <div v-show="isProcessing" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                        {{ isProcessing ? "Submitting..." : "Give Feedback" }}
                    </button>
                </div>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import ModalPage from "@/components/modal-page/ModalPage.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import { nextTick, reactive, ref } from "vue";
import router from "@/router";
import autosize from "autosize";
import feedbackImage from "@/assets/svg/undraw_reviews_lp8w.svg";
import { set, syncRef } from "@vueuse/core";
import Button from "@/components/button/Button.vue";
import { executeAfter } from "@/helpers/general";
import SelectFeedbackTypeSelectorSheet from "@/sheets/selector/select-feedback-type/SelectFeedbackTypeSelectorSheet.vue";
import { useAsyncValidator } from "@vueuse/integrations/useAsyncValidator";
import type { Rules } from "async-validator";
import FeedbackService from "@/services/feedback.service";

const props = defineProps({
    subtitle: {
        type: String,
        default: "We are always looking to improve our platform. If you have any suggestions or feedback, please let us know.",
    },
    feedbackFor: {
        type: String,
        default: "general",
    },
});

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);
const refSelectFeedbackTypeSelectorSheet = ref<InstanceType<typeof SelectFeedbackTypeSelectorSheet> | null>(null);
const refDescriptionTextarea = ref<HTMLTextAreaElement | null>(null);

const userId = ref("");
const queryId = ref("");
const feedbackType = ref<{ id: string, name: string } | null>(null);
const isProcessing = ref(false);
const rating = ref(0);

const formValidationRules: Rules = {
    subject: {
        type: "string",
        required: true,
    },
    message: {
        type: "string",
        required: true,
    },
};

const formData = reactive({
    subject: "",
    message: "",
});

const { pass: validationPass } = useAsyncValidator(formData, formValidationRules);
const otherValidationPass = ref({
    feedbackType: props.feedbackFor !== "general",
    rating: false,
});

const setFeedbackSubject = (e: Event) => {
    formData.subject = (e.target as HTMLInputElement).value.trim();
};

const setFeedbackMessage = (e: Event) => {
    formData.message = (e.target as HTMLInputElement).value.trim();
};

const setRating = (_rating: number) => {
    if (props.feedbackFor !== "general" || !["other", "suggestion"].includes(feedbackType.value?.id || "")) {
        set(rating, _rating);
        otherValidationPass.value.rating = rating.value > 0;
    }
};

const openSelectFeedbackTypeSelectorSheet = () => {
    executeAfter(() => {
        refSelectFeedbackTypeSelectorSheet.value?.openModal();
        refModalPage.value?.suspend();
    });
};

const onSelectFeedbackTypeSelectorSheetClose = () => {
    refModalPage.value?.resume();
};

const onSelectedTypeSelected = (type: { id: string, name: string }) => {
    set(feedbackType, type);
    otherValidationPass.value.feedbackType = true;

    if (["other", "suggestion"].includes(type.id)) {
        set(rating, 0);
        otherValidationPass.value.rating = true;
    }
};

const handleFeedbackOnSuccess = () => {
    router.back();
};

const handleFeedback = () => {
    executeAfter(() => {
        const _data = {
            for_query: props.feedbackFor === "query" ? queryId.value : undefined,
            for_user: props.feedbackFor === "user" ? userId.value : undefined,
            subject: formData.subject,
            text: formData.message,
            rating: rating.value || undefined,
            type: props.feedbackFor === "general" ? feedbackType.value?.id || "other" : props.feedbackFor,
        };
        const { isLoading, execute } = FeedbackService.giveFeedback(_data, handleFeedbackOnSuccess);
        syncRef(isLoading, isProcessing);
        execute();
    });
};

const resetForm = () => {
    formData.subject = "";
    formData.message = "";
    set(rating, 0);
    set(userId, "");
    set(feedbackType, null);
};

const openModal = (id?: string) => {
    refModalPage.value?.openModal();
    nextTick(() => {
        if (id) {
            userId.value = id;
        }
    });
};

const doOnOpen = () => {
    nextTick(() => {
        autosize(refDescriptionTextarea.value as HTMLTextAreaElement);
    });
    (document.activeElement as HTMLElement).blur();
};

const doOnClose = () => {
    executeAfter(() => {
        resetForm();
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

<style scoped>

</style>