<template>
  <div class="bg-gradient-to-b from-[#FEE6F7] to-orange-100">
    <BaseMobileDialog
      :mobile-filters-open="mobileFiltersOpen"
      @mobile-dialog-box="(itm) => (mobileFiltersOpen = itm)"
    >
      <template #default>
        <div class="flex flex-col items-center">
          <SearchFilter
            v-model:city-value="filterQuery.city"
            v-model:day-diff="totalDay"
          />
          <FormMutipleRanger
            v-model:maxprice="filterQuery.maxprice"
            v-model:minprice="filterQuery.minprice"
          />
          <TheSideBar
            v-model:hotel_service="filterQuery.hotel_service"
            v-model:room_service="filterQuery.room_service"
          />
        </div>
      </template> </BaseMobileDialog
    >/
    <div class="inline-flex justify-end w-full mt-14">
      <button
        type="button"
        class="p-2 text-gray-400 hover:text-gray-500 sm:mr-5 lg:hidden"
        @click="mobileFiltersOpen = true"
      >
        <Icon name="ph:funnel-fill" class="w-6 h-6" />
      </button>
    </div>

    <div class="flex justify-center lg:gap-x-10 md:mt-20">
      <div class="flex flex-col items-center sm:hidden">
        <SearchFilter
          v-model:city-value="filterQuery.city"
          v-model:day-diff="totalDay"
        />
        <FormMutipleRanger
          v-model:maxprice="filterQuery.maxprice"
          v-model:minprice="filterQuery.minprice"
        />
        <TheSideBar
          v-model:hotel_service="filterQuery.hotel_service"
          v-model:room_service="filterQuery.room_service"
        />
      </div>
      <div class="flex flex-col items-center displayLarge">
        <BaseSpinner v-if="loading" />
        <div
          class="text-4xl w-full mx-auto text-gray-300"
          v-else-if="paginateStore.paginateData === null"
        >
          There is no Hotel for your filter search
        </div>
        <div v-else v-for="hotelInfo in paginateStore.paginateData">
          <BaseHorizontalCard
            :key="hotelInfo.id"
            :hotel-data="hotelInfo"
            :rooms="hotelInfo.rooms"
            class="mb-8"
            :total-day-diff="totalDay"
          />
        </div>

        <BasePagination />
      </div>
      <div class="flex flex-col items-center space-y-5 displaySmall">
        <BaseSpinner v-if="loading" />
        <div v-for="hotelInfo in paginateStore.paginateData">
          <BaseCard :card-title="hotelInfo.hotel_name" :key="hotelInfo.id">
            <template #imageSet>
              <img
                class="rounded-t-lg md:rounded-none md:rounded-l-lg md:p-3"
                src="/img/rooms/hotel_sm.jpg"
                srcset=""
              />
            </template>
            <template #cardBrief>
              <p class="mb-3 text-xs text-neutral-600">
                <Icon name="map:postal-code" />{{ hotelInfo.address }}
              </p>
              <p class="text-gray-700 text-xs leading-relaxed line-clamp-3">
                {{ hotelInfo.description }}
              </p>
              <ul class="flex gap-x-2">
                <li
                  class="text-sm text-sky-300"
                  v-for="item in hotelInfo.hotel_facilities.slice(0, 2)"
                >
                  <Icon
                    :name="iconHotel[item]"
                    class="w-4 h-4 mr-1 text-slate-500"
                  />{{
                    item.split("_").join(" ").charAt(0) +
                    item.split("_").join(" ").slice(1).toLowerCase()
                  }}
                </li>
              </ul>
            </template>
          </BaseCard>
        </div>
        <BasePagination />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const paginateStore = useCurrentPageStore();
const HotelData = useHotelStore();
const route = useRoute();
const iconHotel = useHotelIcon();

const filterQuery = ref({
  city: "ALL",
  minprice: 0,
  maxprice: 0,
  hotel_service: [],
  room_service: [],
});

const totalDay = ref(0);

const loading = ref(false);

const mobileFiltersOpen = ref(false);

if (
  route.path === "/hotels" &&
  route.query.city !== undefined &&
  route.query.city !== "ALL"
) {
  const { data, pending, error } = await useFetch("/api/hotels/filterAcity", {
    query: { ...filterQuery.value, city: route.query.city },
  });
  loading.value = pending.value;
  filterQuery.value = { ...filterQuery.value, city: <string>route.query.city };
  HotelData.fetchFilterHotelData(data);
} else {
  const { data, pending, error } = await useFetch("/api/hotels/filterAll", {
    query: filterQuery.value,
  });
  loading.value = pending.value;

  HotelData.fetchFilterHotelData(data);
}

watch(filterQuery.value, async (newValue, oldValue) => {
  if (filterQuery.value.city === "ALL") {
    const { data, pending, error } = await useFetch("/api/hotels/filterAll", {
      query: filterQuery.value,
    });
    loading.value = pending.value;

    if (!pending.value) {
      HotelData.fetchFilterHotelData(data);
    }
  } else {
    const { data, pending, error } = await useFetch("/api/hotels/filterAcity", {
      query: filterQuery.value,
    });

    loading.value = pending.value;

    if (!pending.value) {
      HotelData.fetchFilterHotelData(data);
    }
  }
});

onUpdated(() => {
  console.log(paginateStore.paginateData);
});
</script>
<style scoped>
.displayLarge {
  display: none;
}
.displaySmall {
  display: none;
}
@media (max-width: 420px) {
  .displaySmall {
    display: inline;
  }
}

@media (min-width: 768px) {
  .displayLarge {
    display: inline;
  }
}
</style>
