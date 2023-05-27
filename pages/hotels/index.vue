<template>
  <div class="flex justify-center lg:gap-x-10 mt-5">
    <div class="flex flex-col items-center">
      <SearchFilter @pass-to-parent="apiCallForCity" />

      <TheSideBar @send-url-data="apiCallForService" />
    </div>
    <div class="flex flex-col items-center">
      <BaseHorizontalCard
        :hotel-data="hotelInfo"
        v-for="hotelInfo in paginateStore.paginateData"
        :key="hotelInfo.id"
        class="mb-8"
      />
      <BasePagination />
      <h1 v-if="cityPending">Tarek</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
const paginateStore = useCurrentPageStore();
const HotelData = useHotelStore();

const cityPending = ref(true);

const route = useRoute();

if (route.path === "/hotels" && route.query.city !== null) {
  await apiCallForCity({ city: route.query.city?.toString() });
}

async function apiCallForCity(ValueOfCity: any) {
  const { data, pending, error } = await useFetch("/api/hotels/filter", {
    query: ValueOfCity,
  });
  if (!pending.value) {
    HotelData.fetchFilterHotelData(data);
    cityPending.value = pending.value;
  }
}

async function apiCallForService(item: { [key: string]: string[] }) {
  console.log("ApiforService");

  const { data, pending } = await useFetch("/api/hotels/filter", {
    query: item,
  });

  HotelData.fetchFilterHotelData(data);
}
</script>
