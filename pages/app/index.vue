<script setup lang="ts">
definePageMeta({
  layout: "app",
  middleware: ["auth"],
});

const {
  public: { app_name },
} = useRuntimeConfig();

useSeoMeta({
  titleTemplate: "%s - " + app_name,
});
</script>

<template>
  <NuxtPage />
</template>
