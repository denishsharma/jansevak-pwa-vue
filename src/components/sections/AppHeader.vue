<template>
    <div ref="refRoot" class="pt-3 transition-[padding]">
        <AppComponentBase>
            <slot />
        </AppComponentBase>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";

const refRoot = ref<HTMLElement | null>(null);

defineExpose({
    refRoot,
});
</script>

<style scoped>

</style>