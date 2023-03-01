<template>
    <ModalPage id="faq" ref="refModalPage">
        <AppContainerBase>
            <template #title>
                Frequently Asked Questions
            </template>

            <template #header>
                <div class="flex items-center">
                    <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all" type="button" @click="goBack">
                        <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </template>

            <template #body>
                <PageHeading class="mb-6" emphasis="Questions" title="Frequently Asked">
                    <template #subtitle>
                        You will find answers to the most common questions here. If you can't find
                        what you're looking for, please contact us.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="flex flex-col gap-3 transition">
                        <template v-for="(faq, index) in faqs">
                            <Disclosure v-slot="{ open }" :default-open="index === 0" as="div">
                                <DisclosureButton :class="open ? 'rounded-tl-lg rounded-tr-lg bg-gray-100 border-gray-100' : 'bg-white rounded-lg border-gray-200 text-gray-600'" class="flex w-full justify-between px-4 py-2.5 border text-left text-sm font-medium hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition">
                                    <div>{{ faq.question }}</div>
                                    <svg :class="open ? 'rotate-180' : 'rotate-0'" class="transition w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                                    </svg>
                                </DisclosureButton>
                                <transition
                                        enter-active-class="transition origin-top duration-100 ease-out"
                                        enter-from-class="transform scale-y-0 opacity-0"
                                        enter-to-class="transform scale-y-100 opacity-100"
                                        leave-active-class="transition origin-top duration-75 ease-out"
                                        leave-from-class="transform scale-y-100 opacity-100"
                                        leave-to-class="transform scale-y-0 opacity-0"
                                >
                                    <DisclosurePanel class="bg-gray-100 rounded-bl-lg rounded-br-lg px-4 pb-4 text-xs leading-tight text-gray-500">
                                        {{ faq.answer }}
                                    </DisclosurePanel>
                                </transition>
                            </Disclosure>
                        </template>
                    </div>
                </AppComponentBase>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import { nextTick, ref } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from "@headlessui/vue";
import router from "@/router";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import ModalPage from "@/components/modal-page/ModalPage.vue";

const refModalPage = ref<InstanceType<typeof ModalPage>>(null);

const faqs: Array<{ question: string, answer: string }> = [
    {
        question: "What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "1 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "2 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "3 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "4 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "5 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "6 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "7 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "8 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "9 What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    },
    {
        question: "What is your refund policy?",
        answer: "If you're unhappy with your purchase for any reason, email us within",
    },
];

const openModal = () => {
    refModalPage.value?.openModal();
};

const closeModal = () => {
    refModalPage.value?.closeModal();
};

const goBack = () => {
    refModalPage.value?.goBack();
};

defineExpose({
    openModal,
    closeModal,
    goBack,
});
</script>

<style scoped>

</style>