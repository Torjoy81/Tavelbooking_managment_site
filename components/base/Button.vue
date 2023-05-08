<template>
  <button :class="selectVariant" data-ripple-light="true" type="submit">
    {{ buttonName }}
  </button>
</template>
<script setup lang="ts">
interface ButtonProps {
  variant: string;
  buttonName: string;
  type?: string;
}

const props = defineProps<ButtonProps>();
const selectVariant = computed(() =>
  props.variant === "outline"
    ? "middle none center mr-3 rounded-lg border border-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-blue-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    : "middle none center mr-3 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
);
</script>
