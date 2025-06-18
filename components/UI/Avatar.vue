<script setup lang="ts">
import type { User } from "~/types/user";

defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
});
</script>

<template>
  <div
    class="w-8 h-8 bg-primary-900 border-2 border-primary-500 rounded-full flex items-center justify-center"
  >
    <span class="text-white font-bold text-xs">{{
      user.firstName[0] + user.lastName[0]
    }}</span>
  </div>
</template>
