<template>
    <transition mode="out-in" name="fade-scale">
        <div v-if="slides.length > 0" class="mb-6">
            <Splide ref="refSplide" :has-track="false" :options="splideOptions">
                <div class="flex flex-col gap-2">
                    <SplideTrack>
                        <SplideSlide v-if="user['data'] && ['JANSEVAK', 'ADMIN'].includes(user['data'].user_type)">
                            <div class="bg-gray-100 grow aspect-video rounded-xl overflow-hidden">
                                wqewe
                            </div>
                        </SplideSlide>

                        <SplideSlide v-for="(slide, index) in slides" :key="index">
                            <div class="bg-gray-100 grow aspect-video rounded-xl overflow-hidden">
                                <img :src="resolveFileUrl(slide.image) || ''" alt="" class="h-full w-full object-cover object-center">
                            </div>
                        </SplideSlide>
                    </SplideTrack>

                    <div>
                        <ul class="splide__pagination"></ul>
                    </div>
                </div>
            </Splide>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import type { Options } from "@splidejs/splide";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/authStore";
import { onMounted, onUnmounted, ref } from "vue";
import { executeAfter, resolveFileUrl } from "@/helpers/general";

const slides = ref<{ image: string }[]>([]);

onMounted(() => {
    refSplide.value?.splide?.refresh();

    executeAfter(() => {
        slides.value = [
            { image: "https://picsum.photos/seed/picsum/200/300" },
            { image: "https://picsum.photos/seed/picsum1/200/300" },
            { image: "https://picsum.photos/seed/picsum2/200/300" },
            { image: "https://picsum.photos/seed/picsum3/200/300" },
            { image: "https://picsum.photos/seed/picsum5/200/300" },
            { image: "https://picsum.photos/seed/picsum6/200/300" },
        ];
    });
});

onUnmounted(() => {
    refSplide.value?.splide?.destroy(true);
    executeAfter(() => {
        slides.value = [];
    }, 100);
});

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const refSplide = ref<InstanceType<typeof Splide>>();

const splideOptions: Options = ref<Options>({
    gap: "1rem",
    arrows: false,
    pagination: true,
});
</script>

<style lang="scss" scoped>

</style>