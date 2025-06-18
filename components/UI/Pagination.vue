<script setup lang="ts">
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const currentPage = defineModel({
  type: Number,
  default: 1,
});

const props = defineProps({
  count: Number,
  per_page: {
    type: Number,
    default: 30,
  },
});

const totalPages = computed(() =>
  Math.max(Math.ceil((props.count || 0) / props.per_page), 1)
);

const changePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
    router.push({
      query: {
        page: newPage,
      },
    });
  }
};
</script>

<template>
  <div class="flex items-center justify-center space-x-2 mt-4">
    <UIButton
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      id="pagination_previous"
    >
      <Icon name="lucide:chevron-left" />

      Précédent
    </UIButton>

    <span class="font-medium"
      >Page <span id="page_current"> {{ currentPage }}</span> sur
      <span id="page_count"> {{ totalPages }}</span></span
    >

    <UIButton
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      id="pagination_next"
    >
      Suivant
      <Icon name="lucide:chevron-right" />
    </UIButton>
  </div>
</template>
