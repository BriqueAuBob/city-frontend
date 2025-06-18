<script setup lang="ts">
import type { Report } from "~/types/report";

const {
  public: { app_name },
} = useRuntimeConfig();

definePageMeta({
  name: "app.index",
});

useSeoMeta({
  title: "City",
});

const { data } = useAsyncData<Report[]>(() => $fetchApi("/reports"));
</script>

<template>
  <header class="container py-8">
    <h1 class="text-3xl font-bold">
      {{
        $t("app.welcome", {
          appName: app_name,
        })
      }}
    </h1>
    <p class="text-gray-600 mt-2">
      {{ $t("app.description") }}
    </p>
  </header>
  <div class="container py-8">
    <div class="md:flex justify-between items-center">
      <h1 class="font-semibold text-2xl">Mes signalements</h1>

      <UIButton
        class="mt-4 w-full md:w-auto"
        variant="primary"
        @click="$router.push('/app/reports/new')"
      >
        Créer un nouveau signalement
      </UIButton>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-4">
      <template v-for="report in data" :key="report.id">
        <UICard class="bg-white p-4 rounded shadow">
          <h2 class="text-lg font-semibold">{{ report.category.name }}</h2>
          <p class="text-gray-600">{{ report.description }}</p>
          <p class="text-sm text-gray-500">
            Signalé le {{ new Date(report.createdAt).toLocaleDateString() }}
          </p>
          <FeaturesReportStatus class="mt-2" :report="report" />
        </UICard>
      </template>
    </div>
  </div>
</template>
