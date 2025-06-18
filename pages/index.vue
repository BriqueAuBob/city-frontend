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
    <h1 class="font-bold text-5xl">{{ app_name }}</h1>
    <NuxtLink to="/app">Go to App</NuxtLink>
  </div>
</template>
