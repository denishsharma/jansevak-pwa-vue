<template>
    <component :is="is" :class="clsx(getButtonClass(type, customPadding, color))" @click="$emit('click')">
        <slot>Button</slot>
    </component>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import { useAttrs } from "vue";
import { clsx } from "clsx";

type ButtonAs = "button" | "a" | "router-link";
type ButtonTypes = "solid" | "outline" | "ghost" | "soft" | "white";
type ButtonColors = "";

const attrs = useAttrs();

defineProps({
    is: {
        type: String as PropType<ButtonAs>,
        default: "button",
    },
    type: {
        type: String as PropType<ButtonTypes>,
        default: "solid",
    },
    color: {
        type: String as PropType<ButtonColors>,
        default: "",
    },
    customPadding: {
        type: String,
        default: "px-4 py-3.5",
    },
});

const getButtonClass = (type: ButtonTypes, customPadding: string, color: ButtonColors) => {
    const baseClass = clsx("",
        [attrs.class],
        ["text-xs", "font-medium", "transition-all"],
        ["inline-flex", "select-none", "w-full"],
        ["justify-center items-center"],
        ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2"],
    );

    const paddingClass = clsx("",
        [customPadding],
    );

    const borderClass = clsx("",
        ["border", "rounded-lg"],
        [!["outline"].includes(type) && "border-transparent"],
    );

    return clsx(
        baseClass,
        paddingClass,
        borderClass,
    );
};

</script>

<style lang="scss" scoped>

</style>