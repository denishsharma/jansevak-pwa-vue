import { ref } from "vue";
import { defineStore } from "pinia";

export const useQueryStore = defineStore("query", () => {
    const query = ref("");
    const setQuery = (value: string) => {
        query.value = value;
    };
    const clearQuery = () => {
        query.value = "";
    };

    return { query, setQuery, clearQuery };
});