<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="relative">
    <img
      src="~/assets/images/circle_gradient_small.png"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
    />
    <div
      class="backdrop-blur-sm border-white/30 bg-white/25 border aspect-square rounded-full w-16 h-16 flex items-center justify-center mx-auto"
    >
      <Icon :name="icon" size="32" class="mx-auto text-white" />
    </div>
  </div>
</template>
