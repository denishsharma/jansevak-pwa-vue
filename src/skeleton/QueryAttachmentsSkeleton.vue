<template>
    <div class="mt-8">
        <div class="select-none flex flex-col gap-1">
            <div class="animate-pulse bg-gray-100 h-5 rounded w-40"></div>
            <div class="animate-pulse bg-gray-100 h-3.5 w-4/5 rounded"></div>
        </div>

        <div class="flex flex-col gap-5 mt-3">
            <div class="flex flex-col rounded-2xl animate-pulse border border-gray-100 overflow-hidden">
                <div class="flex items-center gap-2 px-2.5 py-1.5">
                    <div class="flex items-center grow gap-2 overflow-hidden">
                        <div class="shrink-0 h-5 w-5 bg-gray-100 animate-pulse rounded-full"></div>
                        <div class="h-3 bg-gray-100 w-3/5 rounded animate-pulse"></div>
                    </div>
                </div>
                <div class="flex items-center gap-2 px-2.5 py-1.5">
                    <div class="flex items-center grow gap-2 overflow-hidden">
                        <div class="shrink-0 h-5 w-5 bg-gray-100 animate-pulse rounded-full"></div>
                        <div class="h-3 bg-gray-100 w-2/5 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
</style>