import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomeViewStore = defineStore("homeView", () => {
    const currentCarouselIndex = ref(0);
    const setCurrentCarouselIndex = (value: number) => {
        currentCarouselIndex.value = value;
    };

    return { currentCarouselIndex, setCurrentCarouselIndex };
});
