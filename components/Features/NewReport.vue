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
  latitude: null as number | null,
  longitude: null as number | null,
});

const getLocation = async () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        form.latitude = position.coords.latitude;
        form.longitude = position.coords.longitude;
      },
      (error) => {
        console.error("Geolocation error:", error);
        // Handle error appropriately, e.g., show a notification
      }
    );
  }
};

const emits = defineEmits(["create"]);
const createReport = async (e) => {
  e.preventDefault();
  try {
    await getLocation();
    await $fetchApi("/reports", {
      method: "POST",
      body: form,
    });
    emits("create");
  } catch (error) {
    console.error("Failed to create report:", error);
  }
};
</script>

<template>
  <div class="bg-gradient-image container text-black p-12 rounded-xl">
    <div class="text-xl font-semibold text-white">
      Signalement des incivilités
    </div>
    <div class="text-white mb-4">
      Signaler un problème ou une incivilité présente dans votre ville
    </div>
    <form class="flex flex-col gap-2">
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
  </div>
</template>
