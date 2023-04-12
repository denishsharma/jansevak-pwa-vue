<template>
    <AppComponentBase>
        <div class="select-none flex flex-col gap-1">
            <div class="leading-tight font-semibold text-xl mr-10">
                <span class="inline-flex">{{ title }}&nbsp;</span>
                <span v-if="emphasis" class="inline-flex text-orange-500 font-extrabold">{{ emphasis }}</span>
            </div>
            <div class="text-gray-500 leading-tight text-xs mr-10">
                <slot name="subtitle"/>
            </div>
        </div>
    </AppComponentBase>
</template>

<script lang="ts" setup>
import AppComponentBase from "@/layouts/AppComponentBase.vue";

defineProps<{
    title: string;
    emphasis?: string;
}>();

</script>

<style scoped>

</style>