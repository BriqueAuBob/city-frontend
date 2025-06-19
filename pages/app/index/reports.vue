<script setup lang="ts">
import type { Report } from "~/types/report";

definePageMeta({
  name: "app.reports",
});

useSeoMeta({
  title: "Reports",
});

const { data, refresh } = useAsyncData<Report[]>(() => $fetchApi("/reports"));
</script>

<template>
  <FeaturesNewReport class="mt-8" @create="refresh" />
  <div class="font-semibold text-lg container mt-8">Mes signalements</div>
  <div class="grid lg:grid-cols-2 gap-3 mt-2 container pb-8">
    <template v-for="report in data" :key="report.id">
      <FeaturesReport :report="report" />
    </template>
  </div>
</template>
