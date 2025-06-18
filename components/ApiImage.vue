<script setup lang="ts">
const config = useRuntimeConfig();

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const computedSrc = computed(() => {
  const baseUrl = config.public.base_url;
  if (props.src.startsWith("http")) {
    return props.src;
  }
  if (props.src.startsWith("/")) {
    return `${baseUrl}${props.src}`;
  }
  return `${baseUrl}/${props.src}`;
});

const emit = defineEmits(["load"]);

const onImageLoaded = () => {
  console.log("ok");
  emit("load", computedSrc.value);
};
</script>

<template>
  <img :src="computedSrc" @load="onImageLoaded" />
</template>
