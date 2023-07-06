<template>
  <div>
    <label :for="name" class="block mb-2 text-sm font-medium text-gray-900">{{
      labelName
    }}</label>
    <div class="relative">
      <slot name="front_icon"></slot>
      <input
        :type="type"
        :id="name"
        :class="erorrActive"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :value="modelValue"
      />
      <p class="mt-2 text-sm text-red-600 dark:text-red-500" v-if="erorrMsg">
        <span class="font-medium">Oops!</span> {{ erorrMsg }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  name?: string;
  type: string;
  labelName: string;
  modelValue?: string;
  erorrMsg?: string | Ref<string>;
}>();
defineEmits<{
  (e: "update:modelValue"): void;
}>();

const erorrActive = computed(() =>
  props.erorrMsg
    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 "
    : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
);
</script>
