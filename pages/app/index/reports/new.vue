<script setup lang="ts">
import type { Category } from "~/types/report";

const { data: categories } = await useAsyncData<Category[]>("categories", () =>
  $fetchApi("/reports/categories")
);
const mappedCategories = computed(() => {
  return categories.value?.map((category) => ({
    label: category.name,
    value: category.id,
  }));
});

const form = reactive({
  category_id: null as unknown as string,
  description: "",
});

const createReport = async () => {
  try {
    await $fetchApi("/reports", {
      method: "POST",
      body: form,
    });
  } catch (error) {
    console.error("Failed to create report:", error);
    // Handle error appropriately, e.g., show a notification
  }
};
</script>

<template>
  <form class="container flex flex-col gap-2">
    <UISelect
      id="report_category_id"
      v-model="form.category_id"
      :items="mappedCategories"
      :itemKey="(i) => i?.value"
      :itemText="(i) => i?.label"
      :itemValue="(i) => i?.value"
      required
    />
    <UIInput id="report_description" v-model="form.description" type="text" />
    <UIButton color="primary" class="mt-4" @click="createReport">
      {{ $t("app.form.submit.label") }}
    </UIButton>
  </form>
</template>
