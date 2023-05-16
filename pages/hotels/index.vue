<template>
  <div class="flex justify-center lg:gap-x-10 mt-5">
    <div class="flex flex-col items-center">
      <SearchFilter />
      <TheSideBar />
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
</script>
