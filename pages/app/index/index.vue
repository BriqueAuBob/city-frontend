<script setup lang="ts">
import type { Report } from "~/types/report";

const {
  public: { app_name },
} = useRuntimeConfig();

definePageMeta({
  name: "app.index",
});

useSeoMeta({
  title: "Home",
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
  <section class="py-8 relative">
    <img
      src="~/assets/images/circle_gradient.png"
      class="rounded-xl absolute left-0 top-1/2 -translate-y-1/2 -z-10 w-56"
    />
    <div class="container lg:grid grid-cols-5 gap-8 items-center">
      <img
        src="~/assets/images/city_picture.png"
        class="rounded-xl col-span-2 w-full mb-4 lg:mb-0 shadow-xl shadow-pink-500/20 border border-white"
      />
      <div class="col-span-3 flex flex-col">
        <h2 class="text-xl font-bold mb-4">Projet en cours</h2>
        <p class="mb-4 text-md">Aménagement des sols</p>
        <!-- svg with 75% progress rounded -->
        <div class="w-full h-2 bg-gray-200 rounded-full mb-4">
          <div class="h-full bg-pink-500 rounded-full" style="width: 75%"></div>
        </div>
        75%
      </div>
    </div>
  </section>
  <section class="bg-gradient-image py-12">
    <div class="container text-center">
      <div class="text-white text-xl font-semibold">Suivi des projets</div>
      <div class="text-white text-lg">Désimperméabilisation des sols</div>
      <div
        class="grid lg:grid-cols-2 gap-2 text-left text-white mt-8 items-center"
      >
        <img src="~/assets/images/folder.svg" class="mx-auto" />
        <div>
          <div>Début: 10/06/2025</div>
          <div>Fin prévisionnelle : 21/12/2025</div>
          <div>Durée estimé : 6 mois</div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-8 bg-white text-black">
    <div class="container">
      <h2 class="text-xl font-bold mb-4 text-center">
        S’inscrire au prochain atelier de co-décision citoyenne
      </h2>
      <p class="text-lg mb-4 text-center">Prochain atelier : 25 juin 2025</p>

      <div class="flex flex-col gap-2">
        <UIInput id="first_name" />
        <UIInput id="last_name" />
        <UIInput id="email" />
      </div>
      <NuxtLinkLocale :to="{ name: 'app.index' }">
        <UIButton class="mt-4" size="lg">
          {{ $t("auth.register") }}
        </UIButton>
      </NuxtLinkLocale>
    </div>
  </section>
</template>
