<template>
  <section class="container mx-auto">
    <HighlightLoacation />
  </section>
  <Service />
</template>
<script setup lang="ts">
const hotelstore = useHotelStore();

console.log(hotelstore.hotels);
</script>
