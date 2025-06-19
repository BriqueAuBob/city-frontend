<script setup lang="ts">
const {
  public: { app_name },
} = useRuntimeConfig();

useSeoMeta({
  title: "Landing Page",
  titleTemplate: "%s - MyApp",
});
</script>

<template>
  <div class="container">
    <div class="text-xl mb-2">Notre concept</div>
    <h1 class="font-bold text-5xl">{{ app_name }}</h1>
  </div>
</template>
