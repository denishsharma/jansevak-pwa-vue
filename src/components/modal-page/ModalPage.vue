<template>
    <TransitionRoot :show="isOpen" appear as="template">
        <Dialog :initial-focus="initialFocus" as="div" class="relative z-40">
            <TransitionChild
                    as="template"
                    enter="duration-100 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-100 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black bg-opacity-5" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="flex h-full">
                    <TransitionChild
                            as="template"
                            enter="duration-100 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel :class="$attrs.class" class="w-full h-full bg-white transform overflow-hidden transition-all">
                            <slot />
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

const props = defineProps({
    id: {
        type: String,
        required: true,
        default: Date.now().toString(),
    },
    initialFocus: {
        type: HTMLElement,
        required: false,
        default: null,
    },
});

const isOpen = ref(false);
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

    console.log("close from modal [replace]", router.currentRoute.value.fullPath.replace(`#modal-page-${props.id}`, ""));
    router.replace(router.currentRoute.value.fullPath.replace(`#modal-page-${props.id}`, ""));

    closeModal();

    router.back();
};

const closeModal = () => {
    isOpen.value = false;
    window.removeEventListener("popstate", popstateHandler);
    console.log("remove event listeners", props.id);
    emit("on-close");
};

const openModal = () => {
    isOpen.value = true;
    console.log("open from modal [push]", router.currentRoute.value.fullPath.replace(`#modal-page-${props.id}`, "") + `#modal-page-${props.id}`);
    router.push(router.currentRoute.value.fullPath.replace(`#modal-page-${props.id}`, "") + `#modal-page-${props.id}`);
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

const attachEventListeners = () => {
    window.addEventListener("popstate", popstateHandler);
    console.log("attach event listeners", props.id);
};

const emit = defineEmits(["on-close", "on-open"]);

defineExpose({
    openModal,
    goBack,
    closeModal,
    suspend,
    resume,
});
</script>

<style scoped>

</style>