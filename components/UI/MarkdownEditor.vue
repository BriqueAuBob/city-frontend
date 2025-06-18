<script setup lang="ts">
import "md-editor-v3/lib/style.css";
import { MdEditor, config } from "md-editor-v3";
import fr_FR from "@vavt/cm-extension/dist/locale/fr-FR";

const model = defineModel<string>();

defineProps({
  label: String,
  id: String,
});

config({
  editorConfig: {
    languageUserDefined: { "fr-FR": fr_FR },
  },
});

const { locale } = useI18n();
const language = computed(() => {
  return locale.value === "fr" ? "fr-FR" : "en-US";
});
</script>

<template>
  <label
    :for="id"
    class="text-sm italic ml-4 font-medium text-neutral-600"
    v-if="label"
    >{{ label }}</label
  >
  <MdEditor v-model="model" :language="language" />
</template>

<style scoped>
.md-editor {
  border-radius: 12px;
}
</style>
