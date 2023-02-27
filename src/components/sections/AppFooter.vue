<template>
    <div class="py-3 z-10 bg-white border-t border-gray-200/[0.7] shadow-[0_-4px_30px_0_rgba(0,0,0,0.03)]">
        <AppComponentBase>
            <slot />
        </AppComponentBase>
    </div>
</template>

<script setup lang="ts">
import AppComponentBase from "@/layouts/AppComponentBase.vue";
</script>

<style scoped>

</style>