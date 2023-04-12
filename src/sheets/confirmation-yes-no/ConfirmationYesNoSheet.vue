<template>
    <BottomSheet :id="`confirm-${sheetId}`" ref="refBottomSheet" :close-on-backdrop-click="false">
        <div class="pb-4 pt-3 flex flex-col h-full overflow-y-auto">
            <AppComponentBase class="overflow-y-auto mt-1">
                <slot v-if="$slots.body" name="body" />

                <div class="grid grid-cols-2 gap-3">
                    <button :class="!focusYes ? ' bg-orange-500 text-white active:bg-orange-600' : 'bg-gray-100 active:bg-gray-200'" :disabled="isProcessing" class="disabled:bg-gray-100 disabled:text-gray-300 focus:outline-none py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent transition-all" type="button" @click="handleNo">
                        <div v-show="isProcessingNo" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                        {{ isProcessingNo ? "Processing..." : noText }}
                    </button>

                    <button :class="focusYes ? ' bg-orange-500 text-white active:bg-orange-600' : 'bg-gray-100 active:bg-gray-200'" :disabled="isProcessing" class="disabled:bg-gray-100 disabled:text-gray-300 focus:outline-none py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent transition-all" type="button" @click="handleYes">
                        <div v-show="isProcessingYes" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                        {{ isProcessingYes ? "Processing..." : yesText }}
                    </button>
                </div>
            </AppComponentBase>
        </div>
    </BottomSheet>
</template>

<script lang="ts" setup>
import BottomSheet from "@/components/bottom-sheet/BottomSheet.vue";
import { ref } from "vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import router from "@/router";
import { executeAfter } from "@/helpers/general";

defineProps({
    sheetId: {
        type: String,
        required: true,
        default: "yes-no",
    },
    yesText: {
        type: String,
        default: "Yes",
    },
    noText: {
        type: String,
        default: "No",
    },
    focusYes: {
        type: Boolean,
        default: true,
    },
});

const refBottomSheet = ref<InstanceType<typeof BottomSheet> | null>(null);

const isProcessing = ref(false);
const isProcessingYes = ref(false);
const isProcessingNo = ref(false);

const handleYes = () => {
    executeAfter(() => {
        emit("on-yes");
        router.back();
    });
};

const handleNo = () => {
    executeAfter(() => {
        emit("on-no");
        router.back();
    });
};

const emit = defineEmits(["on-yes", "on-no"]);

defineExpose({
    openModal: () => refBottomSheet.value?.openModal(),
    closeModal: () => refBottomSheet.value?.closeModal(),
    goBack: () => refBottomSheet.value?.goBack(),
    suspend: () => refBottomSheet.value?.suspend(),
    resume: () => refBottomSheet.value?.resume(),
});
</script>

<style scoped>

</style>