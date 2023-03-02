<template>
    <BottomSheet :id="sheetId" ref="refBottomSheet" :close-on-backdrop-click="false" class="max-h-[66%]">
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
import { type GlobalEvent, globalEventKey } from "@/helpers/globalEvent";

const globalEventBus = useEventBus(globalEventKey);
const refBottomSheet = ref<InstanceType<typeof BottomSheet>>();

const sheetId = "query-category";

const listenToEvents = (e: GlobalEvent) => {
    if (e.payload.sheet !== sheetId) return;

};

onUnmounted(() => {
    console.log("onUnmounted: QueryCategorySheet");
    globalEventBus.off(listenToEvents);
});

onMounted(() => {
    console.log("onMounted: QueryCategorySheet");
    globalEventBus.on(listenToEvents);
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