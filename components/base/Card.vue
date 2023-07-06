<template>
  <div
    class="max-w-[300px] rounded-xl overflow-hidden shadow-xl border border-gray-200"
  >
    <slot name="imageSet"></slot>
    <div class="px-6 py-4 bg-white/30 backdrop-blur-md">
      <div class="w-full flex font-sans font-light text-2xl mb-2">
        <slot name="cardIcon"></slot>
        <span>{{ cardTitle.replace("_", " ") }}</span>
      </div>
      <slot name="cardBrief"></slot>
    </div>
    <div class="px-6 pt-4 pb-2">
      <!-- <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#photography</span
      > -->
      <slot name="hashFeature" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  cardTitle: string;
}>();

const slots = useSlots();
</script>
