<template>
  <div class="flex justify-center lg:gap-x-10 mt-5">
    <TheSideBar />
    <div class="flex flex-col">
      <BaseHorizontalCard
        :hotel-title="hotelInfo.hotel_name"
        :hotel-description="hotelInfo.description"
        v-for="hotelInfo in paginateStore.paginateData"
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
