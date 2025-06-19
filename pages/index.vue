<script setup lang="ts">
import LogoNantes from "~/assets/images/cities/logo-nantes.png";
import LogoRennes from "~/assets/images/cities/logo-rennes.png";
import LogoParis from "~/assets/images/cities/logo-paris.png";
import LogoTroyes from "~/assets/images/cities/logo-troyes.png";

const {
  public: { app_name },
} = useRuntimeConfig();

useSeoMeta({
  title: "Landing Page",
  titleTemplate: "%s - MyApp",
});

const cities = [LogoNantes, LogoRennes, LogoParis, LogoTroyes];
</script>

<template>
  <header class="container pt-16">
    <div class="text-xl mb-2">{{ $t("our_concept") }}</div>
    <h1 class="font-bold text-5xl">{{ app_name }}</h1>
    <h2 class="text-xl font-medium mt-4">
      {{ $t("slogan") }}
    </h2>
    <p class="mt-4 max-w-3xl">
      {{ $t("description") }}
    </p>
  </header>
  <section class="py-24 relative">
    <img
      src="~/assets/images/circle_gradient.png"
      class="rounded-xl absolute left-0 top-1/2 -translate-y-1/2 -z-10 w-86"
    />
    <div class="container lg:grid grid-cols-5 gap-8 items-center">
      <img
        src="~/assets/images/city_picture.png"
        class="rounded-xl col-span-2 w-full mb-4 lg:mb-0"
      />
      <div class="col-span-3 flex flex-col">
        <h2 class="text-xl font-bold mb-4">
          {{ $t("eye_projects.title") }}
        </h2>
        <p class="mb-4 text-md">
          {{ $t("eye_projects.description") }}
        </p>
        <NuxtLinkLocale :to="{ name: 'app.index' }" class="ml-auto">
          <UIButton class="mt-4 min-w-xs" size="lg">
            {{ $t("go_to_app") }}
          </UIButton>
        </NuxtLinkLocale>
      </div>
    </div>
  </section>
  <section class="bg-gradient-image py-24 text-center text-white">
    <section class="container">
      <Icon name="lucide:merge" size="48" />
      <h3 class="text-xl font-semibold mt-3 mb-2">
        {{ $t("infos.title") }}
      </h3>
      <h4 class="max-w-lg mx-auto text-gray-200">
        {{ $t("infos.description") }}
      </h4>
      <div
        class="flex flex-wrap flex-col lg:flex-row gap-4 justify-between items-center mt-4"
      >
        <img
          v-for="(city, index) in cities"
          :key="index"
          :alt="`Logo de la ville ${index + 1}`"
          class="rounded-xl w-1/6 h-3/4 object-fit"
          :src="city"
        />
      </div>
    </section>
    <section class="py-12 container">
      <h3 class="text-lg font-medium mt-3 mb-2">{{ $t("how") }}</h3>
      <h4 class="max-w-lg mx-auto text-sm">{{ $t("explain") }}</h4>
      <div class="grid grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto items-end">
        <img src="~/assets/images/calendar.svg" class="mx-auto mt-4" />
        <div class="text-left">
          <div class="text-sm mb-2">
            {{ $t("image_online") }}
          </div>
          <img
            class="rounded-xl h-3/4 object-cover"
            src="~/assets/images/city.png"
          />
        </div>
      </div>
    </section>
  </section>
  <section class="container py-24 grid lg:grid-cols-3 gap-8 items-center">
    <div class="col-span-2">
      <h2 class="font-semibold text-xl">{{ $t("first-project.title") }}</h2>
      <h3 class="font-medium text-sm mb-4 mt-2">
        {{ $t("first-project.description") }}
      </h3>
      <p class="text-gray-500 text-sm">{{ $t("first-project.text") }}</p>
    </div>
    <img
      src="~/assets/images/city_3.png"
      class="rounded-xl lg:ml-auto object-cover w-full lg:w-auto"
    />
  </section>
  <section class="container py-16 grid grid-cols-3 gap-3">
    <UIFeature
      v-for="(feature, index) in [
        {
          icon: 'lucide:leaf',
          name: $t('features.ecology.name'),
          description: $t('features.ecology.description'),
        },
        {
          icon: 'lucide:handshake',
          name: $t('features.project.name'),
          description: $t('features.project.description'),
        },
        {
          icon: 'lucide:smartphone',
          name: $t('features.progress.name'),
          description: $t('features.progress.description'),
        },
      ]"
      :key="index"
      :icon="feature.icon"
      :name="feature.name"
      :description="feature.description"
    />
  </section>
  <section class="container py-16 grid grid-cols-3 gap-8">
    <img src="~/assets/images/mockup.png" class="w-full" />
    <div class="flex flex-col gap-4 col-span-2">
      <div class="flex gap-2">
        <UIBlurGradientIcon name="lucide:eye" />
        <p>
          {{ $t("report") }}
        </p>
      </div>
      <div class="flex gap-2">
        <UIBlurGradientIcon name="lucide:eye" />
        <p>
          {{ $t("reports_list") }}
        </p>
      </div>
    </div>
  </section>
</template>
