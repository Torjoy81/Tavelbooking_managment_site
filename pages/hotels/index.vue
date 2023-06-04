<template>
  <div class="flex justify-center lg:gap-x-10 mt-5">
    <div class="flex flex-col items-center">
      <SearchFilter
        v-model:city-value="filterQuery.city"
        v-model:day-diff="filterQuery.totalDay"
      />
      <FormMutipleRanger
        v-model:maxprice="filterQuery.maxPrice"
        v-model:minprice="filterQuery.minPrice"
      />
      <TheSideBar
        v-model:hotel_service="filterQuery.hotel_service"
        v-model:room_service="filterQuery.room_service"
      />
    </div>
    <div class="flex flex-col items-center">
      <BaseSpinner v-if="loading" />
      <BaseHorizontalCard
        :hotel-data="hotelInfo"
        v-for="hotelInfo in paginateStore.paginateData"
        :key="hotelInfo.id"
        class="mb-8"
        :total-day-diff="filterQuery.totalDay"
        v-else
      />
      <BasePagination />
    </div>
  </div>
</template>
<script setup lang="ts">
const paginateStore = useCurrentPageStore();
const HotelData = useHotelStore();

const filterQuery = reactive({
  minPrice: 0,
  maxPrice: 0,
  totalDay: 0,
  city: "ALL",
  hotel_service: [],
  room_service: [],
});

const route = useRoute();

const loading = ref(false);

watch(filterQuery, async () => {
  const queryValue = {
    city: filterQuery.city,
    hotel_service: filterQuery.hotel_service,
    room_service: filterQuery.room_service,
    minprice: filterQuery.minPrice,
    maxprice: filterQuery.maxPrice,
  };

  if (filterQuery.city === "ALL") {
    const { data, pending, error } = await useFetch("/api/hotels/filterAll", {
      query: queryValue,
    });
    loading.value = pending.value;
    console.log(data.value);

    HotelData.fetchFilterHotelData(data);
  } else {
    const { data, pending, error } = await useFetch("/api/hotels/filterAcity", {
      query: queryValue,
    });
    console.log(data.value);
    loading.value = pending.value;

    if (!pending.value) {
      HotelData.fetchFilterHotelData(data);
    }
  }
});
</script>
