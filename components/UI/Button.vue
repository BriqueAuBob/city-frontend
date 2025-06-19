<script setup lang="ts">
import type { PropType } from "vue";

type Color = "primary" | "secondary" | "red" | "white";
type Size = "sm" | "md" | "lg";

const props = defineProps({
  color: {
    type: String as PropType<Color>,
    default: "primary",
  },
  size: {
    type: String as PropType<Size>,
    default: "md",
  },
  type: {
    type: String as PropType<"primary" | "text">,
    default: "primary",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const colorClasses = computed(() => {
  const colors = {
    primary: {
      primary:
        "bg-gradient-to-r from-purple-500 via-pink-500 to-beige-500 text-white",
      text: "bg-transparent text-primary-600 hover:text-primary-800",
    },
    secondary: {
      primary:
        "bg-gradient-to-b from-secondary-500 to-secondary-700 text-white",
      text: "bg-transparent text-secondary-600 hover:text-secondary-800",
    },
    red: {
      primary: "bg-gradient-to-b from-red-600 to-red-900 text-white",
      text: "bg-transparent text-red-600 hover:text-red-800",
    },
    white: {
      primary: "bg-neutral-100 text-black",
      text: "bg-transparent text-neutral-800 hover:text-neutral-900",
    },
  };

  return colors[props.color][props.type];
});

const sizeClasses = computed(() => {
  return {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }[props.size];
});
</script>

<template>
  <div class="relative">
    <div
      class="absolute left-0 top-0 bottom-0 right-0 rounded-full blur-lg -z-1"
      :class="colorClasses"
    ></div>
    <button
      class="shadow-sm hover:-translate-y-1 items-center gap-1 cursor-pointer rounded-full flex hover:brightness-110 ease-out duration-200 font-semibold justify-center shadow-button disabled:opacity-25 disabled:cursor-not-allowed border border-white w-full"
      :class="[colorClasses, sizeClasses]"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </div>
</template>
