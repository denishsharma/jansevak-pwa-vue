<template>
    <Carousel :model-value="currentCarouselIndex" :transition="500" :wrapAround="true" @slide-end="onSlideEnd">
        <Slide v-for="slide in 10" :key="slide" class="w-full">
            <div class="carousel__item bg-gray-100 grow aspect-video rounded-xl">
            </div>
        </Slide>

        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { useHomeViewStore } from "@/stores/homeViewStore";
import { storeToRefs } from "pinia";

const homeViewStore = useHomeViewStore();

const { currentCarouselIndex } = storeToRefs(homeViewStore);
const { setCurrentCarouselIndex } = homeViewStore;

const onSlideEnd = (e: { currentSlideIndex: number, prevSlideIndex: number, slidesCount: number }) => {
    setCurrentCarouselIndex(e.currentSlideIndex);
};

</script>

<style lang="scss" scoped>

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    transform: rotateY(-10deg) scale(0.95);
    opacity: 1;
}

.carousel__slide--next {
    transform: rotateY(10deg) scale(0.95);
    opacity: 1;
}

.carousel__slide--active {
    transform: rotateY(0) scale(1);
    opacity: 1;
}
</style>