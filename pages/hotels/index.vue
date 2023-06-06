<template>
  <div class="bg-gradient-to-b from-[#FEE6F7] to-orange-100">
    <BaseMobileDialog
      :mobile-filters-open="mobileFiltersOpen"
      @mobile-dialog-box="(itm) => (mobileFiltersOpen = itm)"
    >
      <template #default>
        <div class="flex flex-col">
          <FormMutipleRanger
            v-model:maxprice="filterQuery.maxPrice"
            v-model:minprice="filterQuery.minPrice"
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
      <div class="flex flex-col items-center displayLarge">
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
      <div class="flex flex-col items-center space-y-5 displaySmall">
        <BaseSpinner v-if="loading" />
        <BaseCard
          v-for="hotelInfo in paginateStore.paginateData"
          :card-title="hotelInfo.hotel_name"
          :key="hotelInfo.id"
        >
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
        <BasePagination />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const paginateStore = useCurrentPageStore();
const HotelData = useHotelStore();

const iconHotel = useHotelIcon();

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

const mobileFiltersOpen = ref(false);

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
