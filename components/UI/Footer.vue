<script setup lang="ts">
const {
  public: { app_name },
} = useRuntimeConfig();
</script>

<template>
  <footer class="bg-white text-black py-8">
    <div class="container mx-auto text-center">
      <p class="text-sm mb-2">
        &copy; {{ new Date().getFullYear() }} {{ app_name }}
      </p>
      <p class="text-sm">{{ $t("follow_us") }}</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a
          href="#"
          class="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="lucide:facebook" class="w-6 h-6" />
        </a>
        <a
          href="#"
          class="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="lucide:twitter" class="w-6 h-6" />
        </a>
        <a
          href="#"
          class="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="lucide:instagram" class="w-6 h-6" />
        </a>
        <a
          href="#"
          class="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="lucide:linkedin" class="w-6 h-6" />
        </a>
      </div>
      <div class="mt-4">
        <div class="text-sm text-gray-400 hover:text-white mr-4">
           9 Rue Quebec, 10430 Rosières-près-Troyes
        </div>
      </div>
    </div>
  </footer>
</template>
