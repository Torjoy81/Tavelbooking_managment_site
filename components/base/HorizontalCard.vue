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

    <div class="grid grid-cols-3 justify-items-stretch p-3 max-w-screen-md">
      <div class="col-span-2">
        <NuxtLink :to="`hotels/${id}`">
          <h5
            class="mb-2 text-xl font-medium text-neutral-800 hover:text-blue-600"
          >
            {{ hotel_name }}
          </h5>
        </NuxtLink>

        <p class="mb-3 text-xs text-neutral-600">
          <Icon name="map:postal-code" />{{ address }}
        </p>
        <div class="text-xs font-light font-proza line-clamp-3">
          {{ description }}
        </div>
        <ul class="flex gap-x-2">
          <li
            class="text-sm text-sky-300"
            v-for="item in hotel_facilities.slice(0, 2)"
          >
            <Icon
              name="fluent:vehicle-car-parking-16-regular"
              class="w-4 h-4 mr-1 text-slate-500"
            />{{
              item.split("_").join(" ").charAt(0) +
              item.split("_").join(" ").slice(1).toLowerCase()
            }}
          </li>
        </ul>
      </div>

      <div class="col-span-1 justify-self-center text-center mt-4">
        <div class="mb-4">
          <span class="w-10 h-10 rounded bg-blue-800 text-white p-1.5 mr-2"
            >8.1</span
          >good
        </div>
        <h3 class="text-base font-semibold font-banner-head">price</h3>
        <p>
          {{
            rooms[0].room_type === "SINGLE_BED"
              ? rooms[0].pricePerDay +
                " - " +
                rooms[rooms.length - 1].pricePerDay
              : rooms[rooms.length - 1].pricePerDay +
                " - " +
                rooms[0].pricePerDay
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Prisma } from "@prisma/client";
type HotelData = Prisma.HotelGetPayload<{
  include: {
    rooms: true;
  };
}>;

const props = defineProps<{
  hotelData: HotelData;
}>();

const { address, hotel_name, description, hotel_facilities, rooms, id } =
  props.hotelData;
</script>
<!-- <div class="flex flex-col justify-start">
          <div>
            <h5 class="mb-2 text-xl font-medium text-neutral-800">
              {{ hotel_name }}
            </h5>
            <p class="mb-3 text-xs text-neutral-600">
              {{ address }}
            </p>
          </div>
          <div class="text-xs font-light font-proza line-clamp-3">
            {{ description }}
          </div>
        </div> -->

<!-- <div class="flex">
      <ul class="inline">
        <li
          class="text-sm text-sky-300"
          v-for="item in hotel_facilities.slice(0, 2)"
        >
          {{
            item.split("_").join(" ").charAt(0) +
            item.split("_").join(" ").slice(1).toLowerCase()
          }}
        </li>
      </ul>
    </div> -->
