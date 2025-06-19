<script setup lang="ts">
const model = defineModel<string | string[]>();

const { t } = useI18n();
const props = defineProps({
  id: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  items: {
    type: Array as PropType<any[]>,
  },
  itemKey: {
    type: Function as PropType<(item: any) => any>,
    default: (item: any) => item,
  },
  itemValue: {
    type: Function as PropType<(item: any) => any>,
    default: (item: any) => item,
  },
  itemText: {
    type: Function as PropType<(item: any) => any>,
    default: (item: any) => item,
  },
  color: {
    type: String,
    required: false,
    default: "primary",
  },
  hideLabel: {
    type: Boolean,
    required: false,
    default: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const itemValueFromModel = computed(() => {
  return Array.isArray(model.value)
    ? model.value
        .map((v) =>
          props.itemText(
            props.items?.find?.((item: any) => props.itemKey(item) === v)
          )
        )
        .join(", ")
    : props.itemText(
        props.items?.find?.((item: any) => props.itemKey(item) === model.value)
      );
});

const classes = computed(() => {
  return {
    primary: "border-primary-200 bg-primary-100",
    white: "bg-white border-neutral-200 text-black",
  }[props.color];
});

const placeholder = computed(() => {
  return props.placeholder || t("app.form." + props.id + ".placeholder");
});

const label = computed(() => {
  return props.label || t("app.form." + props.id + ".label");
});
</script>

<template>
  <HeadlessListbox v-model="model">
    <div class="relative min-w-40">
      <label
        class="text-sm italic ml-4 font-medium text-neutral-600"
        v-if="label && !hideLabel"
      >
        {{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </label>
      <HeadlessListboxButton
        class="relative block border w-full items-center px-4 py-2 rounded-xl disabled:cursor-not-allowed disabled:opacity-50 text-left cursor-pointer"
        :class="classes"
      >
        <span class="block truncate">{{
          !itemValueFromModel || itemValueFromModel === ""
            ? placeholder
            : itemValueFromModel
        }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <Icon
            name="lucide:chevron-down"
            class="h-5 w-5 text-gray-700"
            aria-hidden="true"
          />
        </span>
      </HeadlessListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <HeadlessListboxOptions
          class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <HeadlessListboxOption
            v-slot="{ active, selected }"
            v-for="item in items"
            :key="itemKey(item)"
            :value="itemValue(item)"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-primary-100 text-primary-900' : 'text-gray-900',
                'relative cursor-pointer select-none py-2 pl-10 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
              >
                {{ itemText(item) }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600"
              >
                <Icon name="lucide:check" class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </transition>
    </div>
  </HeadlessListbox>
</template>
