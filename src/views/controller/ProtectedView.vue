<template>
    <div class="h-full">
        <transition mode="out-in" name="fade">
            <div v-if="isProcessing">
                <div class="absolute h-full w-full z-[1000] flex px-4 flex-col items-center bg-white" data-splash-screen>
                    <div class="h-[50%] flex flex-col items-center justify-between w-full my-auto">
                        <div class="h-40 w-40 rounded-[3rem] flex bg-white border border-gray-100 shadow-[0_10px_60px_0] shadow-black/[0.03]">
                            <img :src="platformLogo" alt="" class="h-20 w-20 mx-auto my-auto object-center object-contain">
                        </div>

                        <div aria-label="loading" class="animate-spin inline-block w-6 h-6 border-[2px] border-current border-t-transparent text-orange-600 rounded-full" role="status"></div>
                    </div>
                </div>
            </div>
            <transition v-else mode="out-in" name="fade">
                <template v-if="isAuthenticated && isProfileCompleted && canRedirect">
                    <slot />
                </template>
                <div v-else class="h-full">
                    <NotAuthenticatedAuthFragment v-if="!isAuthenticated" @on-login="openAuthLoginModal" />
                    <IncompleteProfileAuthFragment v-if="isAuthenticated  && !isProfileCompleted" :is-checking-profile="isCheckingProfile" @on-logout="performLogout" @on-complete-profile="openEditProfileModal" />
                </div>
            </transition>
        </transition>

        <AuthLoginModalPage ref="refAuthLoginModal" @on-close="onCloseAuthLoginModal" @on-login-success="handleLoginSuccess" />
        <EditProfileModalPage ref="refEditProfileModal" :is-edit-profile="false" heading-left="Complete your" heading-right="Profile" subtitle="Enter your basic information to get started and get the most out of the platform." title="Complete Profile" />
    </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import { get, set, syncRef } from "@vueuse/core";
import NotAuthenticatedAuthFragment from "@/fragments/auth/NotAuthenticatedAuthFragment.vue";
import IncompleteProfileAuthFragment from "@/fragments/auth/IncompleteProfileAuthFragment.vue";
import AuthLoginModalPage from "@/modals/auth/AuthLoginModalPage.vue";
import EditProfileModalPage from "@/modals/edit-profile/EditProfileModalPage.vue";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import AuthService from "@/services/auth.service";
import { executeAfter } from "@/helpers/general";
import platformLogo from "@/assets/images/logo.svg";

const refAuthLoginModal = ref<InstanceType<typeof AuthLoginModalPage>>();
const refEditProfileModal = ref<InstanceType<typeof EditProfileModalPage>>();

const authStore = useAuthStore();

const { isAuthenticated, isProfileCompleted, user } = storeToRefs(authStore);
const { setIsAuthenticated, logout, setIsProfileCompleted, setUserData } = authStore;

const isProcessing = ref(true);
const isCheckingProfile = ref(true);
const isSuccessful = ref(false);
const canRedirect = ref(false);

const openAuthLoginModal = () => {
    refAuthLoginModal.value?.openModal();
};

const openEditProfileModal = (userData: any) => {
    refEditProfileModal.value?.openModal(userData);
};

const handleLoginSuccess = () => {
    set(isSuccessful, true);
};

const performLogout = () => {
    logout();
    set(isSuccessful, false);
    set(canRedirect, false);
    openAuthLoginModal();
};

const onCloseAuthLoginModal = () => {
    if (get(isSuccessful)) {
        const { execute, isLoading } = AuthService.me((data) => {
            handleGetUserSuccess(data);

            if (!get(isProfileCompleted)) {
                openEditProfileModal(data);
            }
        }, (data) => {
            console.log("error after auth success");
            handleGetUserError(data);
        });
        syncRef(isLoading, isCheckingProfile);
        execute();
    }
};

const handleGetUserSuccess = (data) => {
    setUserData(data);
    setIsProfileCompleted(data.is_setup_completed);
    setIsAuthenticated(true);
    set(canRedirect, true);
};

const handleGetUserError = (data) => {
    console.log("error", data);
    set(isProcessing, false);
    setIsProfileCompleted(false);
    setIsAuthenticated(false);
    set(canRedirect, false);
    openAuthLoginModal();
};

const checkAuth = () => {
    if (!user.value || !user.value.token) {
        setIsProfileCompleted(false);
        setIsAuthenticated(false);
        set(canRedirect, false);
        set(isProcessing, false);
        openAuthLoginModal();
    } else {
        const { execute, isLoading } = AuthService.me(handleGetUserSuccess, handleGetUserError);
        syncRef(isLoading, isProcessing);
        syncRef(isLoading, isCheckingProfile, { direction: "ltr" });
        execute();
        console.log("check auth");
    }
};

onMounted(() => {

    executeAfter(() => {
        checkAuth();
    }, 100);
});
</script>

<style lang="scss" scoped>
</style>