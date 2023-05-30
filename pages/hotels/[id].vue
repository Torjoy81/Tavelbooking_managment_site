<template>
  <div class="flex flex-row justify-center gap-4">
    <SearchFilter v-model:day-diff="totalDay" />
    <div class="flex flex-col">
      <ImageGrid :id="<string>route.params.id" />
      <TabMenu :hotel="hotelData" />
    </div>
  </div>
</template>
<script setup lang="ts">
const hotelsData = useHotelStore();
const totalDay = ref(0);

const route = useRoute();

const hotelData = hotelsData.hotels.filter(
  (item) => item.id === route.params.id
)[0];
</script>
