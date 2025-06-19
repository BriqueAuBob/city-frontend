<script setup lang="ts">
import type { PropType } from "vue";

const model = defineModel<string>();
const { t } = useI18n();

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<"text" | "password">,
    default: "text",
  },
  errors: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hiddenLabel: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const typeComputed = computed(() => {
  return displayPassword.value ? "text" : props.type;
});

const displayPassword = ref(false);

const placeholder = computed(() => {
  return props.placeholder || t("app.form." + props.id + ".placeholder");
});

const label = computed(() => {
  return props.label || t("app.form." + props.id + ".label");
});
</script>

<template>
  <div>
    <label
      :for="id"
      class="text-sm italic ml-4 font-medium text-neutral-600"
      :class="{ 'sr-only': hiddenLabel }"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="typeComputed"
        :placeholder="placeholder"
        class="block border w-full px-4 py-2 rounded-xl border-primary-200 bg-primary-100 disabled:cursor-not-allowed disabled:opacity-50"
        v-model="model"
        :disabled="disabled"
        aria-describedby="passwordHelpBlock"
      />
      <Icon
        size="24"
        :name="displayPassword ? 'lucide:eye-off' : 'lucide:eye'"
        v-if="type === 'password'"
        class="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-800"
        @click="displayPassword = !displayPassword"
      />
    </div>

    <div v-if="errors.length > 0" class="text-red-500 text-sm italic ml-4">
      <p v-for="error in errors" :key="error">{{ error }}</p>
    </div>
  </div>
</template>
