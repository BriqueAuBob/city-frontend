<script setup lang="ts">
import { useAuthStore } from "~/stores/auth";

const route = useRoute();
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
    <NuxtLinkLocale
      :to="{ name: 'app.index' }"
      class="flex items-center gap-3 relative"
    >
      <div
        class="w-full h-full absolute top-0 left-0 right-0 z-[-1] bg-gradient-to-b from-secondary-500 via-pink-500 to-beige-500 rounded-full scale-125 scale-y-150 blur-md"
      />
      <img src="~/assets/images/logo_tri.svg" class="w-10" />
      <h1 class="font-semibold text-white">
        {{ app_name }}
      </h1>
    </NuxtLinkLocale>
    <ul>
      <li v-for="link in links" :key="link.id">
        <NuxtLinkLocale :to="link.url">{{ link.text }}</NuxtLinkLocale>
      </li>
    </ul>
    <div class="flex gap-2">
      <FeaturesLocaleSelector />
      <template v-if="auth.isAuthenticated && !route.name.startsWith('index')">
        <UIButton @click="auth.logout" color="red">{{
          $t("auth.logout")
        }}</UIButton>
      </template>
      <NuxtLinkLocale
        v-else-if="route.name.startsWith('index')"
        :to="{ name: 'app.index' }"
      >
        <UIButton color="primary">
          {{ $t("go_to_app") }}
        </UIButton>
      </NuxtLinkLocale>
    </div>
  </nav>
</template>
