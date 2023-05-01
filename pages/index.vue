<template>
  <div
    class="w-full min-h-[50vh] font-sans text-gray-900 bg-banner bg-no-repeat bg-cover"
  >
    <TheNav />
    <TheBanner />
  </div>
  <section class="container mx-auto">
    <HighlightLoacation />
  </section>
  <Service />
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
