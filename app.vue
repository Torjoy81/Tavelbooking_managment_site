<template>
  <NuxtLayout>
    <NuxtPage v-if="!pending" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const hotelStore = useHotelStore();

const { data, pending } = await useAsyncData("hotelSt", () =>
  hotelStore.fetchHotelData()
);
</script>
