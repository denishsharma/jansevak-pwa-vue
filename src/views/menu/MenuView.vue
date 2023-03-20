<template>
    <div class="grow -mb-8 pb-8">
        <AppComponentBase>
            <div class="flex flex-col gap-2">
                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-2 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="handleLogout">
                    <div class="grow flex items-center gap-2">
                        <svg class="w-5 h-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50012 15.5836V4.58342C5.50012 3.06448 6.73123 1.83337 8.25017 1.83337H15.5836C17.1026 1.83337 18.3337 3.06448 18.3337 4.58342V15.5836C18.3337 17.1026 17.1026 18.3337 15.5836 18.3337H8.25017C6.73123 18.3337 5.50012 17.1026 5.50012 15.5836Z" fill="currentColor" opacity="0.35" />
                            <path d="M8.25017 18.3336C6.73122 18.3336 5.50012 17.1025 5.50012 15.5836V4.58337C4.48718 4.58337 3.66675 5.40381 3.66675 6.41674V17.4169C3.66675 18.9359 4.89785 20.167 6.4168 20.167H13.7503C14.7632 20.167 15.5836 19.3466 15.5836 18.3336H8.25017Z" fill="currentColor" />
                            <path d="M11.8096 11.8921H11.8041C11.19 11.8921 10.716 11.3375 10.8215 10.7325C11.1423 8.8872 12.5787 8.82304 12.5787 7.67718C12.5787 7.35909 12.5237 6.64683 11.7574 6.64683C11.3431 6.64683 11.0992 6.91175 10.9571 7.19409C10.7655 7.57635 10.3237 7.76427 9.90294 7.69001C9.26493 7.57635 8.87351 6.8925 9.14393 6.30399C9.53077 5.46339 10.3228 4.58337 11.8912 4.58337C14.4359 4.58337 14.7769 6.57624 14.7769 7.51309C14.7769 9.7278 13.1278 9.8103 12.7859 11.0863C12.6622 11.5465 12.2863 11.8921 11.8096 11.8921ZM13.1315 14.2388C13.1315 14.6165 13.0151 14.9355 12.7813 15.1949C12.5467 15.4534 12.2396 15.5836 11.8619 15.5836C11.4824 15.5836 11.1762 15.4534 10.9425 15.1949C10.7087 14.9355 10.5905 14.6165 10.5905 14.2388C10.5905 13.8694 10.7087 13.5513 10.9425 13.2809C11.1762 13.0123 11.4824 12.8784 11.8619 12.8784C12.2396 12.8784 12.5467 13.0123 12.7813 13.2809C13.0151 13.5513 13.1315 13.8703 13.1315 14.2388Z" fill="currentColor" />
                        </svg>

                        {{ isLoggingOut ? "Logging out..." : "Logout" }}
                    </div>
                    <div class="shrink-0 flex items-center">
                        <div v-show="isLoggingOut" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-gray-300 rounded-full mr-1" role="status"></div>
                    </div>
                </button>
            </div>
        </AppComponentBase>
    </div>
</template>

<script lang="ts" setup>
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import { useAuthStore } from "@/stores/authStore";
import { ref } from "vue";
import { set } from "@vueuse/core";
import { executeAfter } from "@/helpers/general";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const { logout } = authStore;

const isLoggingOut = ref(false);

const handleLogout = () => {
    set(isLoggingOut, true);
    executeAfter(() => {
        logout();
        if (!isAuthenticated) {
            set(isLoggingOut, false);
        }
    }, 100);
};
</script>

<style scoped>

</style>