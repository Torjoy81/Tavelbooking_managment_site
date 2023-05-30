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
      <BaseHorizontalCard
        :hotel-data="hotelInfo"
        v-for="hotelInfo in paginateStore.paginateData"
        :key="hotelInfo.id"
        class="mb-8"
        :total-day-diff="filterQuery.totalDay"
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
  city: "",
  hotel_service: [],
  room_service: [],
});

const route = useRoute();

watch(
  () => [
    filterQuery.city,
    filterQuery.hotel_service,
    filterQuery.minPrice,
    filterQuery.maxPrice,
  ],
  () => {
    console.log(filterQuery.maxPrice);
    console.log(filterQuery.minPrice);
  }
);

// if (route.path === "/hotels" && route.query.city !== undefined) {
//   await apiCallForCity({ city: route.query.city?.toString() });
// }

// async function apiCallForCity(ValueOfCity: any) {
//   const { data, pending, error } = await useFetch("/api/hotels/filter", {
//     query: ValueOfCity,
//   });
//   if (!pending.value) {
//     HotelData.fetchFilterHotelData(data);
//   }
// }

// async function apiCallForService(item: { [key: string]: string[] }) {
//   const { data, pending } = await useFetch("/api/hotels/filter", {
//     query: item,
//   });

//   HotelData.fetchFilterHotelData(data);
// }
// async function apiCallForPrice(price: number[]) {
//   const { data, pending } = await useFetch("/api/hotels/filter", {
//     query: { minprice: price[1], maxprice: price[0] },
//   });

//   HotelData.fetchFilterHotelData(data);
// }
</script>
