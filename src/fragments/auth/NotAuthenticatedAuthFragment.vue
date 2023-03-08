<template>
    <div class="overflow-y-auto py-10 h-full flex flex-col">
        <AppComponentBase class="flex flex-col gap-4 items-center my-auto">
            <div class="h-[120px] w-full mb-3">
                <img :src="loginImage" alt="" class="h-full w-full object-center object-contain">
            </div>
            <div class="select-none text-center flex flex-col gap-1">
                <div class="leading-tight font-semibold text-xl">
                    <span class="inline-flex">Not Authenticated</span>
                </div>
                <div class="text-gray-500 leading-tight text-xs px-5">
                    You are not authenticated. Please login to continue using this application.
                </div>
            </div>

            <button class="py-3.5 mt-3 px-6 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all" type="button" @click="$emit('on-login')">
                Login to Continue
            </button>
        </AppComponentBase>
    </div>
</template>

<script lang="ts" setup>
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import loginImage from "@/assets/svg/undraw_login_re_4vu2.svg";
</script>

<style scoped>

</style>