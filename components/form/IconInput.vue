<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <slot name="icon"></slot>
    </div>
    <input
      :name="name"
      :type="type"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-sm pl-10 p-2.5"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name?: string;
  type: string;
  placeholder: string;
  value?: string;
}>();
</script>
