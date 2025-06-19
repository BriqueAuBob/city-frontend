<script setup lang="ts">
import type { Report } from "~/types/report";

defineProps({
  report: {
    type: Object as PropType<Report>,
    required: true,
  },
});
</script>

<template>
  <UICard
    class="bg-white rounded shadow flex flex-col justify-between relative"
  >
    <h2 class="text-lg font-semibold">{{ report.category.name }}</h2>
    <p class="text-gray-600">{{ report.description }}</p>
    <p class="text-sm text-gray-500">
      Signalé le {{ new Date(report.createdAt).toLocaleDateString() }} à
      {{ new Date(report.createdAt).toLocaleTimeString() }}
    </p>
    <FeaturesReportStatus :report="report" class="absolute top-4 right-4" />
  </UICard>
</template>
