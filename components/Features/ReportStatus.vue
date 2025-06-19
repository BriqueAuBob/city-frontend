<script setup lang="ts">
import type { Report, Status } from "~/types/report";

const colors = {
  PENDING: "orange",
  IN_PROGRESS: "blue",
  RESOLVED: "green",
  REJECTED: "red",
};

const text = {
  PENDING: "En attente",
  IN_PROGRESS: "En cours de traitement",
  RESOLVED: "Résolu",
  REJECTED: "Rejeté",
};

const icon = {
  PENDING: "lucide:clock",
  IN_PROGRESS: "lucide:loader-circle",
  RESOLVED: "lucide:check",
  REJECTED: "lucide:x",
};

defineProps({
  report: {
    type: Object as PropType<Report>,
    required: true,
  },
});
</script>

<template>
  <UIChip :color="colors[report.status]">
    <Icon
      :name="icon[report.status]"
      class="mr-1"
      :class="report.status === 'IN_PROGRESS' && 'animate-spin'"
    />
    {{ text[report.status] }}
  </UIChip>
</template>
