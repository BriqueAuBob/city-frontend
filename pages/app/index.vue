<script setup lang="ts">
definePageMeta({
  layout: "app",
  middleware: ["auth"],
});

useSeoMeta({
  titleTemplate: "%s - CityApp",
});
</script>

<template>
  <NuxtPage />
</template>
