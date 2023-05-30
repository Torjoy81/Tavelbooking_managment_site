<template>
  <Swiper
    :modules="[SwiperNavigation, SwiperPagination]"
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    navigation
    :pagination="{ clickable: true }"
  >
    <SwiperSlide v-for="imsrc in imagesrc" :key="imsrc">
      <NuxtImg
        :src="`/img/hotels/${imsrc}`"
        format="webp"
        width="500"
        height="500"
        class="m-auto mt-16"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { SwiperNavigation, SwiperPagination } from "~/.nuxt/imports";

const { imagesrc } = defineProps<{
  imagesrc: string[];
}>();

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
