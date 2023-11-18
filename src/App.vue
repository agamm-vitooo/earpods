<template>
  <div id="app" class="bg-white">
    <HeaderPage />
    <HeroPage />
    <CardPage></CardPage>
    <StatsPages></StatsPages>
    <TestimonialsPage />
    <BlogPage></BlogPage>
    <FooterPage />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import HeaderPage from "./components/HeaderPage.vue";
import HeroPage from "./components/HeroPage.vue";
import CardPage from "./components/CardPage.vue";
import TestimonialsPage from "./components/TestimonialsPage.vue";
import FooterPage from "./components/FooterPage.vue";
import StatsPages from "./components/StatsPages.vue";
import BlogPage from "./components/BlogPage.vue"
const isLoad = ref(true);
onMounted(async () => {
  await simulateAsyncTask();

  isLoad.value = false;
});

async function simulateAsyncTask() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
}
</script>

<style>
html {
  scroll-behavior: smooth;
  background-color: white;
}
</style>
