<template>
    <div class="overflow-y-auto py-10 h-full flex flex-col">
        <AppComponentBase class="flex flex-col gap-4 items-center my-auto">
            <div class="h-[120px] w-full mb-3">
                <img :src="profileIllustration" alt="" class="h-full w-full object-center object-contain">
            </div>
            <div class="select-none text-center flex flex-col gap-1">
                <div class="leading-tight font-semibold text-xl">
                    <span class="inline-flex">Incomplete Profile</span>
                </div>
                <div class="text-gray-500 leading-tight text-xs px-5">
                    Your profile is incomplete. Please complete your profile to continue using this application.
                </div>
            </div>

            <div class="flex flex-col gap-2 w-full">
                <button :disabled="isCheckingProfile" class="disabled:bg-gray-100 disabled:text-gray-300 py-3.5 mt-3 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-orange-500 text-white active:bg-orange-600 focus:outline-none transition-all" type="button" @click="$emit('on-complete-profile')">
                    Complete Profile
                </button>

                <button :disabled="isCheckingProfile" class="disabled:bg-gray-100 disabled:text-gray-300 py-3 px-4 w-full text-xs select-none inline-flex justify-center items-center rounded-lg border border-transparent text-red-500 active:bg-gray-100 focus:outline-none transition-all" type="button" @click="$emit('on-logout')">
                    Logout
                </button>
            </div>
        </AppComponentBase>
    </div>
</template>

<script lang="ts" setup>
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import profileIllustration from "@/assets/svg/undraw_account_re_o7id.svg";

const props = defineProps({
    isCheckingProfile: {
        type: Boolean,
        required: true,
    },
});
</script>

<style scoped>

</style>