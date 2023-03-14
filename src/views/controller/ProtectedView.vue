<template>
    <div class="h-full">
        <transition mode="out-in" name="fade">
            <template v-if="isAuthenticated && isProfileCompleted && canRedirect">
                <slot />
            </template>
            <div v-else class="h-full">
                <NotAuthenticatedAuthFragment v-if="!isAuthenticated" @on-login="openAuthLoginModal" />
                <IncompleteProfileAuthFragment v-if="isAuthenticated  && !isProfileCompleted" @on-logout="performLogout" @on-complete-profile="openEditProfileModal" />
                <AuthLoginModalPage ref="refAuthLoginModal" @on-close="onCloseAuthLoginModal" @on-login-success="handleLoginSuccess" />
                <EditProfileModalPage ref="refEditProfileModal" :is-edit-profile="false" heading-left="Complete your" heading-right="Profile" subtitle="Enter your basic information to get started and get the most out of the platform." title="Complete Profile" />
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref, watch } from "vue";
import { get, set } from "@vueuse/core";
import router from "@/router";
import NotAuthenticatedAuthFragment from "@/fragments/auth/NotAuthenticatedAuthFragment.vue";
import IncompleteProfileAuthFragment from "@/fragments/auth/IncompleteProfileAuthFragment.vue";

import AuthLoginModalPage from "@/modals/auth/AuthLoginModalPage.vue";
import EditProfileModalPage from "@/modals/edit-profile/EditProfileModalPage.vue";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import AuthService from "@/services/auth.service";

const refAuthLoginModal = ref<InstanceType<typeof AuthLoginModalPage>>();
const refEditProfileModal = ref<InstanceType<typeof EditProfileModalPage>>();

const authStore = useAuthStore();

const { isAuthenticated, isProfileCompleted, user } = storeToRefs(authStore);
const { setIsAuthenticated, logout, setIsProfileCompleted, setUserData } = authStore;

const isSuccessful = ref(false);
const canRedirect = ref(false);

const openAuthLoginModal = () => {
    refAuthLoginModal.value?.openModal();
};

const openEditProfileModal = () => {
    refEditProfileModal.value?.openModal();
};

const closeAuthLoginModal = () => {
    if (get(isSuccessful)) {
        router.back();
    }
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
        nextTick(() => {
            setIsAuthenticated(true);
            set(canRedirect, true);

            if (!get(isProfileCompleted)) {
                openEditProfileModal();
            }
        });
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
    setIsProfileCompleted(false);
    setIsAuthenticated(false);
    set(canRedirect, false);
};

const checkAuth = () => {
    if (!user.value || !user.value.token) {
        setIsProfileCompleted(false);
        setIsAuthenticated(false);
        set(canRedirect, false);
        openAuthLoginModal();
    } else {
        const { execute } = AuthService.me(handleGetUserSuccess, handleGetUserError);
        execute();
    }
};

// watch(user, checkAuth);

onMounted(() => {
    checkAuth();
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>