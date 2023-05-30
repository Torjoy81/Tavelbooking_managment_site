<template>
  <div class="w-[45rem]">
    <NuxtLink :to="`/photo/${id}`">
      <ul
        class="w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 md:grid-flow-dense gap-3"
      >
        <li class="">
          <NuxtImg :src="`/img/hotels/room-1.jpg`" format="webp" />
        </li>

        <li class="col-start-1">
          <NuxtImg :src="`/img/hotels/room-2.jpg`" format="webp" />
        </li>
        <li class="col-start-2 row-span-2 col-span-2">
          <NuxtImg :src="`/img/hotels/room-3.jpg`" format="webp" />
        </li>
        <li class="">
          <NuxtImg :src="`/img/hotels/room-4.jpg`" format="webp" />
        </li>
        <li class="">
          <NuxtImg :src="`/img/hotels/room-5.jpg`" format="webp" />
        </li>
        <li class="relative overflow-hidden block">
          <NuxtImg :src="`/img/hotels/room-6.jpg`" format="webp" />
          <div
            class="absolute flex justify-center items-center inset-0 bg-slate-500 opacity-75"
          >
            <span class="text-3xl text-white">+7</span>
          </div>
        </li>
      </ul>
    </NuxtLink>
  </div>
</template>

<!-- <li>
      <NuxtImg :src="`/img/hotels/rooms-1.jpg`" format="webp" />
    </li>
    <li class="row-span-2">
      <NuxtImg
        :src="`/img/hotels/room-2.jpg`"
        format="webp"
        height="550"
        width="400"
      />
    </li>
    <li class="">
      <NuxtImg :src="`/img/hotels/room-3.jpg`" format="webp" />
    </li> -->
<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>
