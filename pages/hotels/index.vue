<template>
  <div class="flex justify-center lg:gap-x-10 mt-5">
    <TheSideBar />
    <div class="flex flex-col">
      <BaseHorizontalCard
        :hotel-title="hotelInfo.hotel_name"
        :address="hotelInfo.address"
        :room="hotelInfo.rooms"
        :hotel-des="hotelInfo.description"
        v-for="hotelInfo in paginateStore.paginateData"
        price="150"
        :key="hotelInfo.id"
        class="mb-8"
      />
      <BasePagination />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCurrentPageStore } from "~/store/paginateStore";

const paginateStore = useCurrentPageStore();
</script>
