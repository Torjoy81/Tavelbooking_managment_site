<template>
  <section class="container mx-auto">
    <HighlightLoacation />
  </section>
  <Service />
</template>
<script setup lang="ts">
const { data } = await useFetch("/hotels");

const hotels = ref(data);

console.log(hotels);
</script>
