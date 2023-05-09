<template>
  <div
    class="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row"
  >
    <NuxtImg
      class="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg md:p-3"
      src="https://flowbite.com/docs/images/blog/image-4.jpg"
      width="150"
      height="100"
    />

    <div class="flex flex-col md:flex-row p-6">
      <div class="flex-1 w-64">
        <div class="flex flex-col justify-start">
          <div>
            <h5 class="mb-2 text-xl font-medium text-neutral-800">
              {{ hotelTitle }}
            </h5>
            <p class="mb-3 text-xs text-neutral-600">
              {{ address }}
            </p>
          </div>
          <div class="text-xs leading-tight font-light font-mono line-clamp-3">
            {{ hotelDes }}
          </div>
        </div>
      </div>

      <div class="flex-1 w-32 text-center">
        <h3 class="text-base font-semibold font-banner-head">price</h3>
        <p class="text-sm">{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Room } from "@prisma/client";

defineProps<{
  hotelTitle: string;
  address: string;
  price: string;
  room: Room[];
  hotelDes: string;
}>();
</script>
