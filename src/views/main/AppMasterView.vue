<template>
    <ProtectedView>
        <AppContainerBase body-class="pb-8" footer-padding="py-1 -mx-3">
            <template #header>
                <div v-if="!isOnMenu">
                    <div class="border border-gray-200 flex h-10 w-10 rounded-xl bg-white">
                        <img :src="platformLogo" alt="" class="h-6 w-6 mx-auto my-auto object-contain object-center">
                    </div>
                </div>

                <div v-if="isOnMenu" class="flex items-center">
                    <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all" type="button" @click="goBack">
                        <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </template>

            <template #body>
                <router-view v-slot="{ Component, route }">
                    <transition appear mode="out-in" name="page-slide">
                        <keep-alive :exclude="['FAQModalPage']">
                            <suspense>
                                <template #default>
                                    <component :is="Component" :key="route.path" />
                                </template>

                                <template #fallback>
                                    Loading...
                                </template>
                            </suspense>
                        </keep-alive>
                    </transition>
                </router-view>
            </template>

            <template #footer>
                <div class="flex items-stretch justify-center gap-0.5">
                    <router-link v-slot="{ navigate, isActive }" custom to="/home">
                        <button :class="isActive && 'text-orange-500 pointer-events-none'" class="rounded-lg active:bg-gray-200 select-none py-2 px-1.5 grow basis-full focus:outline-none transition-all overflow-hidden" role="link" @click="navigateTo(navigate)">
                            <div class="gap-0.5 flex flex-col items-center">
                                <div class="h-6">
                                    <svg class="w-full h-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5003 19.2504H5.50005C3.98111 19.2504 2.75 18.0193 2.75 16.5003V8.03477C2.75 7.03559 3.29176 6.11615 4.16444 5.63123L9.66454 2.57592C10.4951 2.11483 11.5052 2.11483 12.3358 2.57592L17.8359 5.63123C18.7085 6.11615 19.2503 7.0365 19.2503 8.03477V16.5003C19.2503 18.0193 18.0192 19.2504 16.5003 19.2504Z" fill="currentColor" opacity="0.35" />
                                        <path d="M13.7502 19.2503H8.25012V13.7502C8.25012 12.7373 9.07055 11.9169 10.0835 11.9169H11.9169C12.9298 11.9169 13.7502 12.7373 13.7502 13.7502V19.2503Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div class="text-xxs font-semibold uppercase">Home</div>
                            </div>
                        </button>
                    </router-link>

                    <router-link v-slot="{ navigate, isActive }" custom to="/queries">
                        <button :class="isActive && 'text-orange-500 pointer-events-none'" class="rounded-lg active:bg-gray-200 select-none py-2 px-1.5 grow basis-full focus:outline-none transition-all overflow-hidden" role="link" @click="navigateTo(navigate)">
                            <div class="gap-0.5 flex flex-col items-center">
                                <div class="h-6">
                                    <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.50012 15.5836V4.58342C5.50012 3.06448 6.73123 1.83337 8.25017 1.83337H15.5836C17.1026 1.83337 18.3337 3.06448 18.3337 4.58342V15.5836C18.3337 17.1026 17.1026 18.3337 15.5836 18.3337H8.25017C6.73123 18.3337 5.50012 17.1026 5.50012 15.5836Z" fill="currentColor" opacity="0.35" />
                                        <path d="M8.25017 18.3336C6.73122 18.3336 5.50012 17.1025 5.50012 15.5836V4.58337C4.48718 4.58337 3.66675 5.40381 3.66675 6.41674V17.4169C3.66675 18.9359 4.89785 20.167 6.4168 20.167H13.7503C14.7632 20.167 15.5836 19.3466 15.5836 18.3336H8.25017Z" fill="currentColor" />
                                        <path d="M11.8096 11.8921H11.8041C11.19 11.8921 10.716 11.3375 10.8215 10.7325C11.1423 8.8872 12.5787 8.82304 12.5787 7.67718C12.5787 7.35909 12.5237 6.64683 11.7574 6.64683C11.3431 6.64683 11.0992 6.91175 10.9571 7.19409C10.7655 7.57635 10.3237 7.76427 9.90294 7.69001C9.26493 7.57635 8.87351 6.8925 9.14393 6.30399C9.53077 5.46339 10.3228 4.58337 11.8912 4.58337C14.4359 4.58337 14.777 6.57624 14.777 7.51309C14.777 9.7278 13.1278 9.8103 12.7859 11.0863C12.6622 11.5465 12.2863 11.8921 11.8096 11.8921ZM13.1315 14.2388C13.1315 14.6165 13.0151 14.9355 12.7813 15.1949C12.5467 15.4534 12.2396 15.5836 11.8619 15.5836C11.4824 15.5836 11.1762 15.4534 10.9425 15.1949C10.7087 14.9355 10.5905 14.6165 10.5905 14.2388C10.5905 13.8694 10.7087 13.5513 10.9425 13.2809C11.1762 13.0123 11.4824 12.8784 11.8619 12.8784C12.2396 12.8784 12.5467 13.0123 12.7813 13.2809C13.0151 13.5513 13.1315 13.8703 13.1315 14.2388Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <div class="text-xxs font-semibold uppercase">Queries</div>
                            </div>
                        </button>
                    </router-link>

                    <button class="rounded-lg text-gray-500 select-none py-2 px-1.5 grow basis-full active:bg-gray-200 focus:outline-none transition-all overflow-hidden" @click="openCreateNewSheet">
                        <div class="gap-0.5 flex flex-col items-center">
                            <div class="h-6">
                                <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5003 19.2503H5.50005C3.98111 19.2503 2.75 18.0192 2.75 16.5003V5.50005C2.75 3.98111 3.98111 2.75 5.50005 2.75H16.5003C18.0192 2.75 19.2503 3.98111 19.2503 5.50005V16.5003C19.2503 18.0192 18.0192 19.2503 16.5003 19.2503Z" fill="currentColor" opacity="0.35" />
                                    <path d="M15.5835 10.0834H11.9168V6.41668C11.9168 5.91067 11.5061 5.5 11.0001 5.5C10.4941 5.5 10.0834 5.91067 10.0834 6.41668V10.0834H6.41668C5.91067 10.0834 5.5 10.4941 5.5 11.0001C5.5 11.5061 5.91067 11.9168 6.41668 11.9168H10.0834V15.5835C10.0834 16.0895 10.4941 16.5002 11.0001 16.5002C11.5061 16.5002 11.9168 16.0895 11.9168 15.5835V11.9168H15.5835C16.0895 11.9168 16.5002 11.5061 16.5002 11.0001C16.5002 10.4941 16.0895 10.0834 15.5835 10.0834Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div class="text-xxs font-semibold uppercase">Create</div>
                        </div>
                    </button>

                    <router-link v-slot="{ navigate, isActive }" custom to="/board">
                        <button :class="isActive && 'text-orange-500 pointer-events-none'" class="rounded-lg active:bg-gray-200 group select-none py-2 px-1.5 grow basis-full focus:outline-none transition-all overflow-hidden" role="link" @click="navigateTo(navigate)">
                            <div class="gap-0.5 flex flex-col items-center">
                                <div class="h-6 relative">
                                    <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.58342 6.41675C3.06448 6.41675 1.83337 7.64785 1.83337 9.1668V12.8335C1.83337 14.3525 3.06448 15.5836 4.58342 15.5836H8.25016V6.41675H4.58342Z" fill="currentColor" />
                                        <path d="M18.1191 1.97269C17.4316 1.6876 16.646 1.84527 16.1208 2.37053C14.9951 3.4953 11.387 6.41677 8.25012 6.41677C7.2381 6.41677 6.41675 7.23812 6.41675 8.25014V13.7502C6.41675 14.7623 7.2381 15.5836 8.25012 15.5836C11.3668 15.5836 14.9896 18.506 16.1208 19.6298C16.4718 19.9809 16.9394 20.167 17.4169 20.167C17.6535 20.167 17.8918 20.1212 18.1191 20.0277C18.8039 19.7435 19.2503 19.0753 19.2503 18.3337V3.66672C19.2503 2.92512 18.8039 2.25686 18.1191 1.97269Z" fill="currentColor" opacity="0.35" />
                                        <path d="M8.25011 11.9169H4.58337C4.58337 11.9169 5.50006 18.6307 5.50006 18.792C5.50006 19.551 6.11607 20.167 6.87508 20.167C7.6341 20.167 8.25011 19.551 8.25011 18.792C8.25011 18.6307 8.25011 11.9169 8.25011 11.9169Z" fill="currentColor" />
                                        <path d="M19.2504 8.41882V13.5825C20.3165 13.2039 21.0837 12.1965 21.0837 11.0011C21.0837 9.80577 20.3165 8.79741 19.2504 8.41882Z" fill="currentColor" />
                                    </svg>

                                    <div :class="!isActive && 'group-hover:bg-gray-100 group-active:bg-gray-200'" class="absolute flex items-center overflow-hidden justify-center h-3.5 w-3.5 -mt-0.5 -mr-0.5 bg-white top-0 right-0 rounded-full">
                                        <div class="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                                    </div>
                                </div>
                                <div class="text-xxs font-semibold uppercase">Board</div>
                            </div>
                        </button>
                    </router-link>

                    <router-link v-slot="{ navigate, isActive }" custom to="/menu">
                        <button :class="isActive && 'text-orange-500 pointer-events-none'" class="rounded-lg active:bg-gray-200 select-none py-2 px-1.5 grow basis-full focus:outline-none transition-all overflow-hidden" role="link" @click="navigateTo(navigate)">
                            <div class="gap-0.5 flex flex-col items-center">
                                <div class="h-6">
                                    <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.41673 10.0835C8.44182 10.0835 10.0835 8.44182 10.0835 6.41673C10.0835 4.39165 8.44182 2.75 6.41673 2.75C4.39165 2.75 2.75 4.39165 2.75 6.41673C2.75 8.44182 4.39165 10.0835 6.41673 10.0835Z" fill="currentColor" />
                                        <path d="M15.5836 10.0835C17.6087 10.0835 19.2503 8.44182 19.2503 6.41673C19.2503 4.39165 17.6087 2.75 15.5836 2.75C13.5585 2.75 11.9169 4.39165 11.9169 6.41673C11.9169 8.44182 13.5585 10.0835 15.5836 10.0835Z" fill="currentColor" opacity="0.35" />
                                        <path d="M15.5836 19.2503C17.6087 19.2503 19.2503 17.6087 19.2503 15.5836C19.2503 13.5585 17.6087 11.9169 15.5836 11.9169C13.5585 11.9169 11.9169 13.5585 11.9169 15.5836C11.9169 17.6087 13.5585 19.2503 15.5836 19.2503Z" fill="currentColor" />
                                        <path d="M6.41673 19.2503C8.44182 19.2503 10.0835 17.6087 10.0835 15.5836C10.0835 13.5585 8.44182 11.9169 6.41673 11.9169C4.39165 11.9169 2.75 13.5585 2.75 15.5836C2.75 17.6087 4.39165 19.2503 6.41673 19.2503Z" fill="currentColor" opacity="0.35" />
                                    </svg>
                                </div>
                                <div class="text-xxs font-semibold uppercase">Menu</div>
                            </div>
                        </button>
                    </router-link>

                    <CreateNewSheet ref="refCreateNewSheet" @on-create-query="openCreateQueryModalPage" />
                    <CreateQueryModalPage ref="refCreateQueryModalPage" @on-close="onCloseCreateQueryModalPage" />
                </div>
            </template>
        </AppContainerBase>
    </ProtectedView>
</template>

<script lang="ts" setup>
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import router from "@/router";
import { nextTick, onMounted, onUpdated, ref } from "vue";
import ProtectedView from "@/views/controller/ProtectedView.vue";
import CreateNewSheet from "@/sheets/create-new/CreateNewSheet.vue";
import CreateQueryModalPage from "@/modals/query/CreateQueryModalPage.vue";
import { executeAfter } from "@/helpers/general";
import platformLogo from "@/assets/images/logo.svg";

const refCreateNewSheet = ref<InstanceType<typeof CreateNewSheet> | null>(null);
const refCreateQueryModalPage = ref<InstanceType<typeof CreateQueryModalPage> | null>(null);
const isOnMenu = ref(false);

const navigateTo = (navigate: () => void) => {
    executeAfter(() => {
        nextTick(() => {
            navigate();
        });
    });
};

const checkOnMenu = () => {
    isOnMenu.value = router.currentRoute.value.path.split("/")[1] === "menu";
};

const goBack = () => {
    router.back();
};

const openCreateNewSheet = () => {
    executeAfter(() => {
        refCreateNewSheet.value?.openModal();
    });
};

const onCloseCreateQueryModalPage = () => {
    console.log("onCloseCreateQueryModalPage");
};

const openCreateQueryModalPage = () => {
    executeAfter(() => {
        console.log("openCreateQueryModalPage");
        refCreateQueryModalPage.value?.openModal();
    });
};

onMounted(() => {
    checkOnMenu();
});

onUpdated(() => {
    checkOnMenu();
});
</script>

<style lang="scss" scoped>
.pade-slide-enter-active,
.pade-slide-leave-active {
    transition: all 0.3s ease;
}

.pade-slide-enter,
.pade-slide-leave-to {
    transform: translateX(100%);
}

.pade-slide-leave-active {
    transform: translateX(-100%);
}

.pade-slide-enter-active {
    transform: translateX(0%);
}

.pade-slide-enter-to {
    transform: translateX(0%);
}

.pade-slide-leave {
    transform: translateX(-100%);
}

.pade-slide-enter {
    transform: translateX(100%);
}

.pade-slide-leave-to {
    transform: translateX(0%);
}
</style>