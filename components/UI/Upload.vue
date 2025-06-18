<script setup lang="ts">
import { UIButton } from "#components";

enum Emit {
  Upload = "upload",
}

const emits = defineEmits([Emit.Upload]);

const file = ref<File | null>(null);

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: false,
  },
});

const onFileChange = (e: Event) => {
  file.value = (e.target as HTMLInputElement)?.files?.[0] ?? null;
  uploadFile();
};

const uploadFile = async () => {
  if (!file.value) return;
  const formData = new FormData();
  formData.append("file", file.value);

  try {
    const res = await $fetchApi("/uploads", {
      method: "POST",
      body: formData,
    });
    emits(Emit.Upload, res);
  } catch (err) {
    console.log(err);
  }
};

const fileExtension = computed(() => {
  return file.value?.name.split(".").pop() ?? "";
});

const imageUrl = computed(() => {
  if (!file.value) return props.preview;
  return URL.createObjectURL(file.value);
});
</script>

<template>
  <div>
    <div class="group relative">
      <label
        :for="id"
        v-if="label"
        class="text-sm italic ml-4 font-medium text-neutral-600"
      >
        {{ label }}
      </label>
      <input
        :id="id"
        type="file"
        @change="onFileChange"
        class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        multiple
      />
      <div
        class="items-center flex border w-full p-4 rounded-xl border-primary-200 bg-primary-100 disabled:cursor-not-allowed disabled:opacity-50 justify-between border-dashed duration-300 ease-out"
      >
        <div class="flex items-center gap-3">
          <div class="rounded-lg bg-primary-500 p-2 text-white text-3xl">
            <Icon name="lucide:image" class="block!" v-if="!imageUrl" />
            <img
              v-if="
                ['png', 'jpeg', 'jpg'].includes(fileExtension) &&
                preview !== imageUrl
              "
              :src="imageUrl"
              class="aspect-square h-16 w-16 rounded-lg object-contain"
            />
            <ApiImage
              class="aspect-square h-16 w-16 rounded-lg object-contain"
              v-else-if="preview"
              :src="preview"
            />
          </div>
          <div>
            <div class="text-md font-semibold text-zinc-600">
              Upload un fichier
            </div>
            <div class="mt-1 text-xs text-zinc-400">
              SVG, JPG, PNG or GIF...
            </div>
          </div>
        </div>
        <UIButton type="text">Upload</UIButton>
      </div>
    </div>
  </div>
</template>
