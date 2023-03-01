<template>
    <BottomSheet id="query-category" ref="refBottomSheet" :close-on-backdrop-click="false" class="max-h-[66%]">
        <div class="overflow-y-auto h-full">
            <div class="bg-gray-100 h-[100px] mb-4">
                query category
            </div>
        </div>
    </BottomSheet>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import BottomSheet from "@/components/bottom-sheet/BottomSheet.vue";
import { useEventBus } from "@vueuse/core";

const eventBus = useEventBus<string>("event-bus");
const refBottomSheet = ref<InstanceType<typeof BottomSheet>>();

const listenToEvents = (event: string) => {
    if (event === "open:query-category-sheet") {
        openModal();
    }
    console.log("listenToEvents", event);
};

onUnmounted(() => {
    console.log("onUnmounted: QueryCategorySheet");
    eventBus.off(listenToEvents);
});

onMounted(() => {
    console.log("onMounted: QueryCategorySheet");
    eventBus.on(listenToEvents);
});

const openModal = () => {
    refBottomSheet.value?.openModal();
};

const closeModal = () => {
    refBottomSheet.value?.closeModal();
};

const goBack = () => {
    refBottomSheet.value?.goBack();
};

defineExpose({
    openModal,
    closeModal,
    goBack,
});
</script>

<style scoped>

</style>