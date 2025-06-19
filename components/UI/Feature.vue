<script setup lang="ts">
defineProps({
  icon: String,
  name: String,
  description: String,
});
</script>

<template>
  <div>
    <UIBlurGradientIcon :icon="icon" />
    <div class="text-center mt-6">
      <h3 class="text-md font-bold">{{ name }}</h3>
      <p class="mt-1 text-sm text-gray-500">{{ description }}</p>
    </div>
  </div>
</template>
