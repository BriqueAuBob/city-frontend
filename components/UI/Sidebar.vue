<script setup lang="ts">
import { FeaturesLocaleSelector } from "#components";
import useAuthStore from "~/stores/auth";

const auth = useAuthStore();
const {
  public: { app_name },
} = useRuntimeConfig();
const { t } = useI18n();

const links = [
  {
    name: "admin_home",
    label: t("admin.dashboard"),
    icon: "lucide:home",
  },
  {
    name: "admin_crud_index",
    label: t("admin.crud.entities.users", { count: 2 }),
    icon: "lucide:user",
    params: { entity: "users" },
  },
  {
    name: "admin_crud_index",
    label: t("admin.crud.entities.contents", { count: 2 }),
    icon: "lucide:file-text",
    params: { entity: "contents" },
  },
  {
    name: "admin_crud_index",
    label: t("admin.crud.entities.tags", { count: 2 }),
    icon: "lucide:tag",
    params: { entity: "tags" },
  },
  {
    name: "admin_crud_index",
    label: t("admin.crud.entities.comments", { count: 2 }),
    icon: "lucide:message-square-text",
    params: { entity: "comments" },
  },
];
</script>

<template>
  <div
    class="lg:w-1/4 bg-neutral-900 p-4 lg:fixed lg:left-0 lg:top-0 lg:bottom-0"
  >
    <div class="lg:flex flex-col lg:justify-between h-full">
      <div>
        <NuxtLinkLocale
          :to="{ name: 'admin_home' }"
          class="font-semibold text-lg"
        >
          {{ app_name }}
        </NuxtLinkLocale>
        <ul
          class="mt-4 flex items-center gap-2 flex-wrap lg:block lg:space-y-2 mb-4"
        >
          <li
            v-for="link in links"
            :key="link.name"
            class="rounded-xl bg-neutral-800 border-2 border-neutral-700/25 hover:bg-neutral-500 ease-in duration-300 cursor-pointer"
          >
            <NuxtLinkLocale
              :to="{ name: link.name, params: link.params }"
              class="flex items-center gap-2 text-white ease-in duration-300 px-3 py-2"
            >
              <Icon :name="link.icon" />
              <span>{{ link.label }}</span>
            </NuxtLinkLocale>
          </li>
        </ul>
      </div>
      <div>
        <FeaturesLocaleSelector class="lg:mt-8" />
        <div class="flex items-center gap-2 mb-4 mt-4">
          <UIAvatar :user="auth.user!" />
          <p class="text-white font-semibold">
            {{ auth.user!.firstName }} {{ auth.user!.lastName }}
          </p>
        </div>
        <NuxtLinkLocale
          :to="{ name: 'home' }"
          class="text-sm text-red-200 hover:text-red-400 ease-in duration-300"
        >
          Retour au site
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<style scoped>
li:has(.router-link-active) {
  background: #696969;
}
</style>
