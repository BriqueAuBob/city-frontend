<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"info" | "warning" | "error" | "success">,
    default: "info",
  },
});

const color = computed(() => {
  switch (props.type) {
    case "info":
      return "bg-blue-500";
    case "warning":
      return "bg-yellow-500";
    case "error":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
  }
});

const icon = computed(() => {
  switch (props.type) {
    case "info":
      return "lucide:info";
    case "warning":
      return "lucide:alert-circle";
    case "error":
      return "lucide:alert-triangle";
    case "success":
      return "lucide:check";
  }
});
</script>

<template>
  <div
    :class="`p-3 text-white ${color} mb-1 rounded-xl text-sm border-2 border-white/25 flex flex-wrap items-center gap-1`"
  >
    <Icon :name="icon" size="20" />
    <p class="font-medium">
      {{ message }}
    </p>
  </div>
</template>
