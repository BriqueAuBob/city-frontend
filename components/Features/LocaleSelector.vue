<script setup lang="ts">
type Language = "en" | "fr";

const { locale, locales, setLocale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const changeLocale = async (lang: Language) => {
  await navigateTo(switchLocalePath(lang));
  await setLocale(lang);
};
</script>

<template>
  <UISelect
    v-model="locale"
    :items="locales"
    :itemKey="(item) => item.code"
    :itemValue="(item) => item.code"
    :itemText="(item) => item.name"
    color="white"
    hide-label
    @update:model-value="(value?: string) => changeLocale(value as Language)"
  />
</template>
