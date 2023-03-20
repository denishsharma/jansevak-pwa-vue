<template>
    <div class="flex flex-col gap-4 __fade-to-transparent">
        <div class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg border border-gray-100 ">
            <div class="px-3.5 py-2 flex flex-col gap-2">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center h-2.5 animate-pulse bg-gray-100 w-20 rounded"></div>
                    <div class="flex items-center h-2.5 animate-pulse bg-gray-100 w-10 rounded"></div>
                </div>
                <div class="flex flex-col gap-1.5 my-0.5">
                    <div class="text-sm pr-8 leading-tight font-semibold h-5 rounded-md bg-gray-100 animate-pulse w-3/4"></div>
                    <div class="flex flex-wrap gap-y-1 gap-x-2 mt-0.5">
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
                    </div>
                </div>
                <div class="flex flex-col gap-1.5 my-0.5 mt-1">
                    <div class="flex flex-wrap gap-y-1 gap-x-2 mt-0.5">
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg border border-gray-100 ">
            <div class="px-3.5 py-2 flex flex-col gap-2">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center h-2.5 animate-pulse bg-gray-100 w-20 rounded"></div>
                    <div class="flex items-center h-2.5 animate-pulse bg-gray-100 w-10 rounded"></div>
                </div>
                <div class="flex flex-col gap-1.5 my-0.5">
                    <div class="text-sm pr-8 leading-tight font-semibold h-5 rounded-md bg-gray-100 animate-pulse w-3/4"></div>
                    <div class="flex flex-wrap gap-y-1 gap-x-2 mt-0.5">
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-4 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-10 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
                        <div class="h-3 bg-gray-100 transition-all animate-pulse w-20 rounded"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white select-none flex flex-col divide-y divide-gray-200 overflow-y-hidden rounded-lg border border-gray-100 ">
            <div class="px-3.5 py-2 flex flex-col gap-2">
                <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center h-2.5 animate-pulse bg-gray-100 w-20 rounded"></div>
                    <div class="flex items-center h-2.5 animate-pulse bg-gray-100 w-10 rounded"></div>

                </div>
                <div class="flex flex-col gap-1.5 my-0.5">
                    <div class="text-sm pr-8 leading-tight font-semibold h-5 rounded-md bg-gray-100 animate-pulse w-3/4"></div>
                    <div class="text-xs pr-3 text-gray-600 leading-tight line-clamp-3"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.__fade-to-transparent {
    -webkit-mask-image: -webkit-gradient(linear, left 10%, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.2)))
}
</style>