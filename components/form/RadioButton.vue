<template>
  <div class="flex items-center mb-4">
    <input
      id="default-radio-1"
      type="radio"
      :value="value"
      name="default-radio"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <label
      for="default-radio-1"
      class="ml-2 text-sm font-medium text-gray-900"
      >{{ labelName }}</label
    >
  </div>
</template>

<script setup lang="ts">
const { labelName, value } = defineProps<{
  labelName: string;
  value: string | number;
  modelValue: number | string;
}>();

defineEmits<{
  (e: "update:modelValue"): void;
}>();
</script>
