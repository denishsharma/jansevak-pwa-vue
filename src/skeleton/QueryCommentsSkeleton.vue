<template>
    <div>
        <div class="select-none flex flex-col gap-1">
            <div class="animate-pulse bg-gray-100 h-5 rounded w-40"></div>
            <div class="animate-pulse bg-gray-100 h-3.5 w-4/5 rounded"></div>
        </div>

        <div class="flex flex-col gap-5 mt-4 animate-pulse __fade-to-transparent">
            <div class="grid grid-cols-1 gap-x-3">
                <div class="flex flex-col">
                    <div class="select-none flex items-center gap-2">
                        <div class="flex items-stretch grow gap-2 overflow-hidden">
                            <div class="relative flex justify-center shrink-0">
                                <div class="w-px h-full bg-gray-100 absolute top-2"></div>
                                <div class="shrink-0 h-9 w-9 border border-gray-100 rounded-full z-[1] flex items-center justify-center bg-white">
                                    <div class="h-5 w-5 bg-gray-100 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex flex-col grow gap-1 pb-4">
                                <div class="h-9 flex flex-col gap-[0.2rem] justify-center pr-10">
                                    <div class="w-2/4 bg-gray-100 h-3 rounded w-full"></div>
                                    <div class="w-1/5 bg-gray-100 h-2 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="select-none flex items-center gap-2">
                        <div class="flex items-stretch grow gap-2 overflow-hidden">
                            <div class="relative flex justify-center shrink-0">
                                <div class="w-px h-full bg-gray-100 absolute top-2"></div>
                                <div class="shrink-0 h-9 w-9 border border-gray-100 rounded-full z-[1] flex items-center justify-center bg-white">
                                    <div class="h-5 w-5 bg-gray-100 rounded-full"></div>
                                </div>
                            </div>
                            <div class="flex flex-col grow gap-1">
                                <div class="h-9 flex flex-col gap-[0.2rem] justify-center pr-10">
                                    <div class="w-2/4 bg-gray-100 h-3 rounded w-full"></div>
                                    <div class="w-1/5 bg-gray-100 h-2 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.__fade-to-transparent {
    -webkit-mask-image: -webkit-gradient(linear, left 70%, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.2)))
}
</style>