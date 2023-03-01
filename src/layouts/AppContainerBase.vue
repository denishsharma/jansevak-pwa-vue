<template>
    <AppPageBaseLayout class="flex flex-col h-full overflow-hidden">
        <AppHeader ref="refAppHeader" class="shrink-0 bg-white fixed w-full z-20">
            <div class="relative h-10 flex items-center">
                <div class="z-10 w-full flex items-center justify-between gap-4">
                    <slot name="header" />
                </div>

                <div ref="refAppHeading" v-if="$slots.title" class="absolute h-full w-full flex items-center justify-center opacity-0 translate-y-1 pointer-events-none transition">
                    <div class="text-sm font-semibold">
                        <slot name="title" />
                    </div>
                </div>
            </div>
        </AppHeader>

        <AppBody ref="refAppBody" :class="clsx(bodyClass)" class="grow pt-12">
            <slot name="body" />
        </AppBody>

        <AppFooter v-if="$slots.footer" :custom-padding="footerPadding">
            <slot name="footer" />
        </AppFooter>
    </AppPageBaseLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AppPageBaseLayout from "@/layouts/AppPageBaseLayout.vue";
import AppHeader from "@/components/sections/AppHeader.vue";
import AppBody from "@/components/sections/AppBody.vue";
import AppFooter from "@/components/sections/AppFooter.vue";
import { clsx } from "clsx";

defineProps({
    bodyClass: {
        type: String,
        default: "",
    },
    footerPadding: {
        type: String,
        default: "py-4",
    },
});

const refAppBody = ref<InstanceType<typeof AppBody> | null>(null);
const refAppHeader = ref<InstanceType<typeof AppHeader> | null>(null);
const refAppHeading = ref<HTMLElement | null>(null);

const handleAppBodyOnScroll = (e: Event) => {
    const appBody = e.target as HTMLElement;
    const appHeader = refAppHeader.value?.refRoot as HTMLElement;
    const appHeading = refAppHeading.value;

    if (appBody.scrollTop > 40) {
        appHeader?.classList.add("shadow-[0_4px_30px_0_rgba(0,0,0,0.04)]", "pb-1.5", "pt-1.5", "border-b", "border-gray-200/[0.7]");
        appHeader?.classList.remove("pt-3");
        appHeading?.classList.remove("opacity-0", "translate-y-1");
    } else {
        appHeader?.classList.remove("shadow-[0_4px_30px_0_rgba(0,0,0,0.04)]", "pb-1.5", "pt-1.5", "border-b", "border-gray-200/[0.7]");
        appHeader?.classList.add("pt-3");
        appHeading?.classList.add("opacity-0", "translate-y-1");
    }
};

onMounted(() => {
    const appBody = refAppBody.value?.refRoot as HTMLElement;
    appBody.addEventListener("scroll", handleAppBodyOnScroll);
});
</script>

<style scoped>

</style>