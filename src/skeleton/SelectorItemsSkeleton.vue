<template>
    <div class="__fade-to-transparent flex flex-wrap gap-1.5 py-2 overflow-y-auto" data-ref="parent">
        <div v-for="(_, index) in '1234'" v-if="fullWidth" :key="index" ref="refCategoryItems" class="w-full h-9 rounded-lg bg-gray-100 animate-pulse transition-all"></div>
        <div v-else class="flex flex-wrap gap-1.5">
            <div class="w-40 h-9 rounded-lg bg-gray-100 animate-pulse transition-all"></div>
            <div class="w-28 h-9 rounded-lg bg-gray-100 animate-pulse transition-all"></div>
            <div class="w-20 h-9 rounded-lg bg-gray-100 animate-pulse transition-all"></div>
            <div class="w-40 h-9 rounded-lg bg-gray-100 animate-pulse transition-all"></div>
            <div class="w-40 h-9 rounded-lg bg-gray-100 animate-pulse transition-all"></div>
            <div class="w-[9rem] h-9 rounded-lg bg-gray-100 animate-pulse transition-all"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    fullWidth: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.__fade-to-transparent {
    -webkit-mask-image: -webkit-gradient(linear, left 50%, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)))
}
</style>