<template>
    <Accueil />
</template>

<script setup>
import { onMounted } from "vue";
import Accueil from "./components/Accueil.vue";

onMounted(() => {
    console.log("Running App");
});

</script>

<style>
</style>
