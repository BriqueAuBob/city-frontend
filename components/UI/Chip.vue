<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "default",
  },
});

const colors = computed<Record<string, string>>(() => ({
  default: "bg-gray-200 text-gray-800",
  orange: "bg-orange-100 text-orange-800",
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
}));
</script>

<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
    :class="colors[color]"
  >
    <slot></slot>
  </span>
</template>
