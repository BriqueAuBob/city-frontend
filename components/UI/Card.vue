<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: "div",
  },
  hover: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <component
    :is="as"
    class="bg-white rounded-xl shadow-sm overflow-hidden shadow-primary-100 p-4"
    :class="{
      'hover:-translate-y-1 ease-in duration-200 cursor-pointer hover:shadow-lg':
        hover,
    }"
  >
    <slot></slot>
  </component>
</template>
