<template>
  <div class="grid grid-cols-3">
    <div class="col-span-2">
      <h1>{{ hotel_name }}</h1>
    </div>
    <div class=""></div>
  </div>
</template>
<script setup lang="ts">
const hotelData = useHotelStore();

const route = useRoute();

const { hotel_name } = hotelData.hotels.filter(
  (item) => item.id === route.params.id
)[0];
</script>
