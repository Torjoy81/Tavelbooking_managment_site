<template>
  <div class="flex justify-center">
    <div class="flex justify-center gap-4 mt-20">
      <SearchFilter v-model:day-diff="totalDay" />
      <div class="flex flex-col mt">
        <ImageGrid :id="<string>route.params.id" />
        <TabMenu :hotel="hotelData" />
      </div>
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
