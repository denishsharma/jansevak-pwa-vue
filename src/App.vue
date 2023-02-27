<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<template>
    <BaseLayout>
        <router-view v-slot="{ Component, route }">
            <transition name="page-scale-slide" mode="out-in">
                <component :is="Component" :key="route.fullPath" />
            </transition>
        </router-view>
    </BaseLayout>
</template>

<style scoped lang="scss">
.page-scale-slide-enter-active,
.page-scale-slide-leave-active {
    transition: all 0.2s ease;
}

.page-scale-slide-enter,
.page-scale-slide-leave-to {
    transform: scale(0.98);
    opacity: 0;
}

.page-scale-slide-leave,
.page-scale-slide-enter-to {
    transform: scale(1);
    opacity: 1;
}

.page-scale-slide-leave-active {
    position: absolute;
}

.page-scale-slide-enter-active {
    position: relative;
}

.page-scale-slide-leave-active {
    z-index: -1;
}

.page-scale-slide-enter-active {
    z-index: 1;
}

.page-scale-slide-leave-active {
    transition-delay: 0.2s;
}

.page-scale-slide-enter-active {
    transition-delay: 0s;
}

</style>
