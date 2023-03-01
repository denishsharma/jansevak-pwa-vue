<template>
    <div class="bg-amber-100">
        dashboard

        <button @click="router.push({ name: 'auth.login' })">login</button>
    </div>
</template>

<script lang="ts" setup>
import router from "@/router";
</script>

<style scoped>

</style>