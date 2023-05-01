<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200"
  >
    <slot name="imageSet"></slot>
    <div class="px-6 py-4">
      <div class="font-sans font-light text-2xl mb-2">
        <slot name="cardIcon"></slot> {{ cardTitle }}
      </div>
      <p class="text-gray-700 text-base">
        {{ cardBrief }}
      </p>
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
  cardBrief: string;
}>();

const slots = useSlots();
</script>
