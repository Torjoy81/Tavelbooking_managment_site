<template>
  <div class="flex justify-center lg:gap-x-10 mt-5">
    <div class="flex flex-col items-center">
      <SearchFilter @pass-to-parent="makeUrl" />

      <TheSideBar @send-url-data="makeUrl" />
    </div>
    <div class="flex flex-col items-center">
      <BaseHorizontalCard
        :hotel-data="hotelInfo"
        v-for="hotelInfo in paginateStore.paginateData"
        :key="hotelInfo.id"
        class="mb-8"
      />
      <BasePagination />
    </div>
  </div>
</template>
<script setup lang="ts">
const paginateStore = useCurrentPageStore();
const HotelData = useHotelStore();
async function makeUrl(item: any) {
  let cityName = "";
  if (Object.keys(item)[0] === "city") {
    cityName = item.city;
    const { data, pending } = await useFetch("/api/hotels/filter", {
      query: item,
    });
    HotelData.fetchFilterHotelData(data);
  } else {
    let service_query: { [key: string]: string[] }[] = [];
    item.forEach((value: any, index: number) => {
      if (index === 0) {
        service_query.push({ hotel_service: [...value] });
      } else {
        service_query.push({ room_service: [...value] });
      }
    });

    const { data, pending } = await useFetch("/api/hotels/filter", {
      query: { city: cityName, ...service_query[0], ...service_query[1] },
    });

    HotelData.fetchFilterHotelData(data);
  }
}
</script>
