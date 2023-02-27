<template>
    <div ref="refRoot" class="mt-4 pb-4 min-h-0 overflow-y-auto">
        <div class="flex flex-col min-h-full">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

/** @type {import("vue").Ref<HTMLElement | null>} */
const refRoot = ref<HTMLElement | null>(null);

defineExpose({
    refRoot,
});
</script>

<style scoped>

</style>