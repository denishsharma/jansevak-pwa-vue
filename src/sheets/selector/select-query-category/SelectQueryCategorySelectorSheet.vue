<template>
    <BottomSheet id="select-query-category" ref="refBottomSheet">
        <div class="pb-4 pt-3 flex flex-col h-full overflow-y-auto">
            <AppComponentBase class="mb-2 shrink-0">
                <div class="w-full flex h-10 items-center justify-between gap-4">
                    <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all" type="button" @click="router.back()">
                        <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </AppComponentBase>

            <PageHeading class="mb-3 shrink-0" emphasis="Select" title="Category">
                <template #subtitle>
                    Select query category for your query. You can also search for a specific category.
                </template>
            </PageHeading>

            <AppComponentBase class="overflow-y-auto">
                <div class="flex flex-wrap gap-1.5 py-2 overflow-y-auto" data-ref="parent">
                    <div v-for="(result, index) in searchCategoryResults" :key="result.item.id" ref="refCategoryItems" :class="selectedCategory?.id === result.item.id ? 'border-orange-500 text-orange-500 bg-orange-100' : 'border-gray-200 hover:bg-gray-100 active:bg-gray-200'" :data-index="index" :data-selected="selectedCategory?.id === result.item.id" class="py-2.5 px-3 w-fit font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border focus:outline-none transition-all" data-visible="" @click="setSelectedCategory(result.item.id)">
                        {{ result.item.name }}
                    </div>
                </div>
            </AppComponentBase>

            <AppComponentBase class="mt-4 shrink-0">
                <label class="relative grow">
                    <input :class="searchCategoryTerm.length > 0 && 'pr-10 border-orange-300'" :value="searchCategoryTerm" class="py-2.5 px-2 pl-10 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="search_query" placeholder="Search query category" type="text" @input="setSearchCategoryTerm">
                    <div :class="searchCategoryTerm.length > 0 ? 'text-orange-500' : 'text-gray-300'" class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1] pl-2.5 mb-px">
                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.39595 2.75C5.73635 2.75 2.75 5.73635 2.75 9.39595C2.75 13.0555 5.73635 16.0419 9.39595 16.0419C10.8962 16.0419 12.2784 15.5345 13.393 14.6901L17.6855 18.9817C17.9154 19.2212 18.2568 19.3177 18.5781 19.2339C18.8993 19.1502 19.1502 18.8993 19.2339 18.5781C19.3177 18.2568 19.2212 17.9154 18.9817 17.6855L14.6901 13.393C15.5345 12.2784 16.0419 10.8962 16.0419 9.39595C16.0419 5.73635 13.0555 2.75 9.39595 2.75ZM9.39595 4.58337C12.0647 4.58337 14.2085 6.72717 14.2085 9.39595C14.2085 10.6773 13.7108 11.8346 12.9015 12.6948C12.8228 12.7518 12.7536 12.821 12.6965 12.8998C11.8362 13.71 10.6783 14.2085 9.39595 14.2085C6.72717 14.2085 4.58337 12.0647 4.58337 9.39595C4.58337 6.72718 6.72717 4.58337 9.39595 4.58337Z" fill="currentColor" />
                        </svg>
                    </div>

                    <button v-if="searchCategoryTerm.length > 0" class="absolute inset-y-0 right-0 my-auto mr-1.5 h-fit flex items-center z-[1] p-1 px-1 w-fit text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button" @click="clearSearch">
                        <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                            <path d="M13.5669 14.8503L7.15013 8.43348C6.78345 8.06681 6.78345 7.5168 7.15013 7.15013C7.5168 6.78345 8.06681 6.78345 8.43348 7.15013L14.8503 13.5669C15.2169 13.9336 15.2169 14.4836 14.8503 14.8503C14.4836 15.2169 13.9336 15.2169 13.5669 14.8503Z" fill="currentColor" />
                            <path d="M7.15013 13.5669L13.5669 7.15013C13.9336 6.78345 14.4836 6.78345 14.8503 7.15013C15.2169 7.5168 15.2169 8.06681 14.8503 8.43348L8.43348 14.8503C8.06681 15.2169 7.5168 15.2169 7.15013 14.8503C6.78345 14.4836 6.78345 13.9336 7.15013 13.5669Z" fill="currentColor" />
                        </svg>
                    </button>
                </label>
            </AppComponentBase>
        </div>
    </BottomSheet>
</template>

<script lang="ts" setup>
import BottomSheet from "@/components/bottom-sheet/BottomSheet.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import { computed, nextTick, onUnmounted, onUpdated, ref, watch } from "vue";
import router from "@/router";
import type { UseFuseOptions } from "@vueuse/integrations/useFuse";
import { useFuse } from "@vueuse/integrations/useFuse";
import { get, set } from "@vueuse/core";
import { useElementVisibility } from "@vueuse/core";

interface QueryCategoryItem {
    name: string;
    id: string;
}

const queryCategories = ref<QueryCategoryItem[]>([
    { name: "Environmental Concerns", id: "1" },
    { name: "Community Facilities", id: "2" },
    { name: "Public Services", id: "3" },
    { name: "Civil Rights", id: "4" },
    { name: "Government Services", id: "5" },
    { name: "Transportation", id: "6" },
    { name: "Education", id: "7" },
    { name: "Housing", id: "8" },
    { name: "Cultural", id: "9" },
    { name: "Other", id: "10" },
]);

const refBottomSheet = ref<InstanceType<typeof BottomSheet>>();
const refCategoryItems = ref<HTMLDivElement[]>([]);

const selectedCategory = ref<QueryCategoryItem | null>(null);

const searchCategoryTerm = ref("");

function setSearchCategoryTerm(e: Event) {
    set(searchCategoryTerm, (e.target as HTMLInputElement).value);
}

function setSelectedCategory(id: string) {
    if (id === selectedCategory.value?.id) {
        return;
    }

    const category = queryCategories.value.find((c) => c.id === id);
    if (category) {
        selectedCategory.value = category;
        emit("on-category-selected", category);
        router.back();
    }
}

const fuseOptions = computed<UseFuseOptions<QueryCategoryItem>>(() => ({
    fuseOptions: {
        keys: ["name"],
        isCaseSensitive: false,
        shouldSort: true,
        threshold: 0.5,
    },
    matchAllWhenSearchEmpty: true,
}));

const { results: searchCategoryResults } = useFuse(searchCategoryTerm, queryCategories, fuseOptions);

const clearSearch = () => {
    set(searchCategoryTerm, "");
};

const onOpenSelf = () => {
    refBottomSheet.value?.openModal();
    nextTick(() => {
        clearSearch();

        const _selectedCategoryElement = refCategoryItems.value.find((el) => el.dataset.selected === "true");
        if (_selectedCategoryElement) {
            _selectedCategoryElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
    (document.activeElement as HTMLElement)?.blur();
};

const emit = defineEmits(["on-category-selected"]);

defineExpose({
    openModal: onOpenSelf,
    closeModal: () => refBottomSheet.value?.closeModal(),
    goBack: () => refBottomSheet.value?.goBack(),
    suspend: () => refBottomSheet.value?.suspend(),
    resume: () => refBottomSheet.value?.resume(),
});
</script>

<style scoped>

</style>