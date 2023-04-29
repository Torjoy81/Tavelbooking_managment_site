<template>
  <input
    :name="name"
    :type="type"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-sm pl-10 p-2.5"
    :placeholder="placeholder"
  />
</template>
<script setup lang="ts">
const props = defineProps<{
  name?: string;
  type: string;
  placeholder: string;
}>();
</script>
