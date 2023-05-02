<template>
  <footer class="bg-green-300 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="#" class="flex items-center">
            <!-- <NuxtImg src="" /> -->
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >{{ footerTitle }}</span
            >
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 md:gap-6 md:grid-cols-3">
          <div v-for="footerItem in footerFeature">
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              {{ footerItem.title }}
            </h2>
            <ul
              class="text-gray-600 dark:text-gray-400 font-medium"
              v-for="(attrs, index) in footerItem.attrs"
              :key="index"
            >
              <li class="mb-4">
                <a href="#" class="hover:underline">{{ attrs }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
defineProps<{
  footerTitle: string;
  footerFeature: {
    title: string;
    attrs: string[];
  }[];
}>();
</script>
