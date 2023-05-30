<template>
  <div
    class="h-screen w-screen bg-gradient-to-tl from-purple-300 to-sky-300 flex relative items-center via-white"
  >
    <NuxtLink :to="`/hotels/${route.params.id}`">
      <Icon
        name="material-symbols:close"
        class="h-8 w-8 absolute inset-y-0 right-5 top-5"
      />
    </NuxtLink>
    <div
      class="container md:h-[40rem] md:w-[54rem] mx-auto bg-transparent relative z-10 rounded-2xl shadow-2xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm"
    >
      <BaseImageSlider :imagesrc="imageMapping" />
    </div>
  </div>
</template>
<script setup lang="ts">
const imageMapping = ref(["room-1.jpg"]);
const route = useRoute();

for (let index = 2; index < 14; index++) {
  imageMapping.value.push(`room-${index}.jpg`);
}

definePageMeta({
  layout: false,
});
</script>
<style scoped></style>
