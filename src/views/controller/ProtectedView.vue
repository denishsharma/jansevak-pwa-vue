<template>
    <div class="h-full">
        <transition mode="out-in" name="fade">
            <template v-if="isAuthenticated && isProfileCompleted">
                <slot />
            </template>
            <div v-else class="h-full">
                <NotAuthenticatedAuthFragment v-if="!isAuthenticated" @on-login="openAuthLoginModal" />
                <IncompleteProfileAuthFragment v-if="isAuthenticated && !isProfileCompleted" @on-logout="performLogout" @on-complete-profile="openEditProfileModal" />
                <AuthLoginModalPage ref="refAuthLoginModal" @on-close="onCloseAuthLoginModal" @on-login-success="handleLoginSuccess" />
                <EditProfileModalPage ref="refEditProfileModal" :is-edit-profile="false" heading-left="Complete your" heading-right="Profile" subtitle="Enter your basic information to get started and get the most out of the platform." title="Complete Profile" />
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
import { get, set } from "@vueuse/core";
import router from "@/router";
import NotAuthenticatedAuthFragment from "@/fragments/auth/NotAuthenticatedAuthFragment.vue";
import IncompleteProfileAuthFragment from "@/fragments/auth/IncompleteProfileAuthFragment.vue";

import AuthLoginModalPage from "@/modals/auth/AuthLoginModalPage.vue";
import EditProfileModalPage from "@/modals/edit-profile/EditProfileModalPage.vue";

const refAuthLoginModal = ref<InstanceType<typeof AuthLoginModalPage>>();
const refEditProfileModal = ref<InstanceType<typeof EditProfileModalPage>>();


const isAuthenticated = ref(true);
const isProfileCompleted = ref(true);
const isSuccessful = ref(false);

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
    closeAuthLoginModal();
};

const performLogout = () => {
    set(isAuthenticated, false);
    set(isProfileCompleted, false);
    set(isSuccessful, false);
    openAuthLoginModal();
};

const onCloseAuthLoginModal = () => {
    if (get(isSuccessful)) {
        nextTick(() => {
            set(isAuthenticated, true);

            if (!get(isProfileCompleted)) {
                openEditProfileModal();
            }
        });
    }
};

onMounted(() => {
    if (!get(isAuthenticated)) {
        // redirect to login page
        openAuthLoginModal();
    }
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