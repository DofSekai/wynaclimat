<template>
    <Accueil />
</template>

<script>
import { onMounted } from "vue";
import Accueil from "./components/Accueil.vue";

onMounted(() => {
    console.log("Running App");
});

</script>

<style>
</style>
