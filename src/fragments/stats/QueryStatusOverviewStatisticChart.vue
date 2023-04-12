<template>
    <transition mode="out-in" name="fade">
        <div v-if="isFetching">
            <div class="animate-pulse px-2 py-4 flex-col flex border border-gray-100 rounded-2xl divide-y divide-gray-200">
                <div class="flex justify-evenly items-center space-x-2">
                    <div class="w-1/3 grow overflow-hidden flex flex-col items-center justify-center">
                        <div class="grow flex overflow-hidden">
                            <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                                <div class="h-3.5 bg-gray-100 rounded w-7"></div>
                                <div class="bg-gray-100 h-2.5 w-12 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div class="h-4 bg-gray-100 w-px"></div>
                    <div class="grow flex overflow-hidden">
                        <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                            <div class="h-3.5 bg-gray-100 rounded w-7"></div>
                            <div class="bg-gray-100 h-2.5 w-12 rounded"></div>
                        </div>
                    </div>
                    <div class="h-4 bg-gray-100 w-px"></div>
                    <div class="grow flex overflow-hidden">
                        <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                            <div class="h-3.5 bg-gray-100 rounded w-7"></div>
                            <div class="bg-gray-100 h-2.5 w-12 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="rounded-xl border-gray-200/[0.7] border divide-y divide-gray-200/[0.7] flex flex-col">
            <div class="text-xxs font-semibold text-gray-500 uppercase leading-tight mt-1 px-2.5 py-1.5 pb-2">
                Query Status Overview
            </div>

            <div class="px-2.5 py-4">
                <div class="flex justify-evenly items-center space-x-2">
                    <div class="w-1/3 grow overflow-hidden flex flex-col items-center justify-center">
                        <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                            <div class="text-sm leading-none font-bold" v-text="summaryStatus.resolved"></div>
                            <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                Resolved
                            </div>
                        </div>
                    </div>
                    <div class="h-4 bg-gray-200 w-px"></div>
                    <div class="w-1/3 grow overflow-hidden flex flex-col items-center justify-center">
                        <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                            <div class="text-sm leading-none font-bold" v-text="summaryStatus.pending"></div>
                            <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                Pending
                            </div>
                        </div>
                    </div>
                    <div class="h-4 bg-gray-200 w-px"></div>
                    <div class="w-1/3 grow overflow-hidden flex flex-col items-center justify-center">
                        <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                            <div class="text-sm leading-none font-bold" v-text="summaryStatus.in_progress"></div>
                            <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                In Progress
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from "vue";
import { executeAfter } from "@/helpers/general";
import StatisticsService from "@/services/statistics.service";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import { set, syncRef, useTimeoutPoll } from "@vueuse/core";
import { call } from "@/helpers/api";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const summaryStatus = ref({
    total: 0,
    pending: 0,
    resolved: 0,
    rejected: 0,
    in_progress: 0,
    in_review: 0,
    created: 0,
});
const isFetching = ref(true);

const handleQueryStatusSummaryOnSuccess = (data: any) => {
    set(summaryStatus, data);
};

const pollQueryStatusSummary = async () => {
    await call(`stats/query-status/${user.value.id || ""}`, "get", {}, {}).then(d => d.data.data).then(handleQueryStatusSummaryOnSuccess);
};

const forceFetch = () => {
    pauseQueryStatusSummaryPoll();
    const {
        execute,
    } = StatisticsService.getQueryStatusSummary({ id: user.value.id || "" }, (d) => {
        handleQueryStatusSummaryOnSuccess(d);
        resumeQueryStatusSummaryPoll();
    });
    execute();
};

const {
    pause: pauseQueryStatusSummaryPoll,
    resume: resumeQueryStatusSummaryPoll,
} = useTimeoutPoll(pollQueryStatusSummary, 5000);

onMounted(() => {
    executeAfter(() => {
        const {
            isLoading,
            execute,
        } = StatisticsService.getQueryStatusSummary({ id: user.value.id || "" }, handleQueryStatusSummaryOnSuccess);
        syncRef(isLoading, isFetching);
        execute();

        resumeQueryStatusSummaryPoll();
    });
});

onActivated(() => {
    resumeQueryStatusSummaryPoll();
});

onDeactivated(() => {
    pauseQueryStatusSummaryPoll();
});

onUnmounted(() => {
    pauseQueryStatusSummaryPoll();
    set(summaryStatus, {
        total: 0,
        pending: 0,
        resolved: 0,
        rejected: 0,
        in_progress: 0,
        in_review: 0,
        created: 0,
    });
});

defineExpose({
    forceFetch,
});

</script>

<style scoped>

</style>