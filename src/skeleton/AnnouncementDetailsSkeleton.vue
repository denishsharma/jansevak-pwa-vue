<template>
    <div class="select-none flex flex-col gap-1 __fade-to-transparent">
        <div class="aspect-video bg-gray-100 rounded-xl mb-3 transition-all animate-pulse"></div>
        <div class="h-5 mr-20 rounded-md bg-gray-100 transition-all animate-pulse"></div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 mt-0.5">
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
        </div>
        <div class="flex flex-wrap gap-y-1 gap-x-2 mt-5">
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-40 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-8 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
            <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.__fade-to-transparent {
    -webkit-mask-image: -webkit-gradient(linear, left 80%, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.2)))
}
</style>