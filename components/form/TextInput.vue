<template>
  <div class="mb-3">
    <label
      :for="name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ labelName }}</label
    >
    <input
      :type="type"
      :id="name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      :value="modelValue"
    />
  </div>
</template>
<script setup lang="ts">
defineProps<{
  name?: string;
  type: string;
  labelName: string;
  modelValue: String;
}>();
defineEmits<{
  (e: "update:modelValue"): void;
}>();
</script>
