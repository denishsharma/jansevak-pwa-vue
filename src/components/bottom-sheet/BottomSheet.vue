<template>
    <TransitionRoot :show="isOpen" appear as="template">
        <Dialog as="div" class="relative z-40" @close="closeModalOnBackdropClick">
            <TransitionChild
                    as="template"
                    enter="duration-100 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-100 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-20" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="flex flex-col justify-end h-full">
                    <TransitionChild
                            as="template"
                            enter="duration-100 origin-bottom ease-out"
                            enter-from="opacity-0 translate-y-4"
                            enter-to="opacity-100 translate-y-0"
                            leave="duration-100 origin-bottom ease-in"
                            leave-from="opacity-100 translate-y-0"
                            leave-to="opacity-0 translate-y-4"
                    >
                        <DialogPanel :class="$attrs.class" class="w-full bg-white rounded-tl-2xl rounded-tr-2xl transform overflow-hidden transition-all border-t border-gray-200/[0.7] shadow-[0_-10px_40px_0_rgba(0,0,0,0.05)]">
                            <div class="flex flex-col h-full overflow-hidden">
                                <div v-if="false" ref="refHandle" class="py-2.5 gap-0.5 flex flex-col items-center">
                                    <div class="h-0.5 w-7 bg-gray-100 rounded-full"></div>
                                    <div class="h-0.5 w-7 bg-gray-100 rounded-full"></div>
                                </div>
                                <div ref="refContent" class="overflow-hidden">
                                    <slot />
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from "@headlessui/vue";
import { nextTick, ref } from "vue";
import router from "@/router";
import { useEventBus } from "@vueuse/core";
import { globalEventKey } from "@/helpers/globalEvent";

const props = defineProps({
    id: {
        type: String,
        required: true,
        default: Date.now().toString(),
    },
    closeOnBackdropClick: {
        type: Boolean,
        required: false,
        default: true,
    },
});

const globalEventBus = useEventBus(globalEventKey);

const isOpen = ref(false);
const refHandle = ref<HTMLElement | null>(null);
const refContent = ref<HTMLElement | null>(null);

const isSuspend = ref(false);

const suspend = () => {
    isSuspend.value = true;
};

const resume = () => {
    isSuspend.value = false;
};

const goBack = () => {
    if (isSuspend.value) {
        return;
    }

    console.log("close from sheet [replace]", router.currentRoute.value.fullPath.replace(`#sheet-${props.id}`, ""));
    router.replace(router.currentRoute.value.fullPath.replace(`#sheet-${props.id}`, ""));

    closeModal();

    router.back();
};

const closeModalOnBackdropClick = () => {
    if (props.closeOnBackdropClick) {
        router.back();
    }
};

const closeModal = () => {
    isOpen.value = false;
    window.removeEventListener("popstate", popstateHandler);
    console.log("remove event listeners", props.id);
    emit("on-close");
    emitSheetClose();
};

const openModal = () => {
    isOpen.value = true;
    console.log("open from sheet [push]", router.currentRoute.value.fullPath.replace(`#sheet-${props.id}`, "") + `#sheet-${props.id}`);
    router.push(router.currentRoute.value.fullPath.replace(`#sheet-${props.id}`, "") + `#sheet-${props.id}`);
    nextTick(() => {
        attachEventListeners();
    });
    emit("on-open");
};

const popstateHandler = (e: PopStateEvent) => {
    if (isSuspend.value) {
        return;
    }

    e.preventDefault();
    console.trace("popstate handler", props.id);
    console.log(e);
    closeModal();
};

const emitSheetClose = () => {
    globalEventBus.emit({
        type: "trigger:sheet",
        trigger: true,
        event: "onSheetClose",
        payload: {
            sheet: props.id,
        },
    });
};

const attachEventListeners = () => {
    window.addEventListener("popstate", popstateHandler);
    console.log("attach event listeners", props.id);
};

const emit = defineEmits(["on-close", "on-open"]);

defineExpose({
    isSuspend,
    openModal,
    goBack,
    closeModal,
    suspend,
    resume,
});

</script>

<style scoped>

</style>