<template>
  <div
    class="group relative cursor-pointer justify-center items-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
  >
    <nuxt-img
      :src="`/img/popularDestination/${imagesrc}`"
      width="500"
      height="350"
      format="webp"
      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
    ></div>
    <div
      class="absolute inset-0 translate-y-[90%] flex-col justify-start items-center px-5 transition-all duration-500 group-hover:translate-y-[60%]"
    >
      <span class="text-xl block mb-5 capitalize text-white"
        ><Icon name="map:postal-code" class="text-white h-6 w-6" />{{
          city
        }}</span
      >
      <p
        class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  imagesrc: string;
  city: string;
  description: string;
}>();
</script>
