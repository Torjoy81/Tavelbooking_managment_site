<template>
  <div class="flex flex-row justify-center gap-4">
    <SearchFilter />
    <div class="flex flex-col">
      <ImageGrid />
      <TabMenu :hotel="hotelData" />
    </div>
  </div>
</template>
<script setup lang="ts">
const hotelsData = useHotelStore();

const route = useRoute();

const hotelData = hotelsData.hotels.filter(
  (item) => item.id === route.params.id
)[0];
</script>
