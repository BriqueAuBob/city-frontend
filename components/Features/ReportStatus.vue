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

defineProps({
  report: {
    type: Object as PropType<Report>,
    required: true,
  },
});
</script>

<template>
  <UIChip :color="colors[report.status]">
    {{ text[report.status] }}
  </UIChip>
</template>
