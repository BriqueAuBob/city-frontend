<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const links: any[] = [];

const {
  public: { app_name },
} = useRuntimeConfig();
const auth = useAuthStore();
</script>

<template>
  <nav
    class="flex justify-between items-center container relative top-4 left-0 right-0 text-black font-medium mb-8"
  >
    <NuxtLinkLocale :to="{ name: 'home' }" class="font-semibold">
      {{ app_name }}
    </NuxtLinkLocale>
    <ul>
      <li v-for="link in links" :key="link.id">
        <NuxtLinkLocale :to="link.url">{{ link.text }}</NuxtLinkLocale>
      </li>
    </ul>
    <div class="flex gap-2">
      <FeaturesLocaleSelector />
      <template v-if="auth.isAuthenticated">
        <UIButton @click="auth.logout" color="red">{{
          $t("auth.logout")
        }}</UIButton>
      </template>
    </div>
  </nav>
</template>
