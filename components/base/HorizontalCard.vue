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
        <h3 class="text-base font-semibold font-banner-head">
          {{
            totalDayDiff !== 0
              ? `Price for ${totalDayDiff} days`
              : "Price for room"
          }}
        </h3>
        <div
          v-if="!totalDayDiff"
          v-for="room in rooms"
          class="text-xs font-semibold"
        >
          <p v-if="room.room_type === 'SINGLE_BED'">
            {{ "SINGLE BED: " + room.pricePerDay + "€" }}
          </p>
          <p v-else-if="room.room_type === 'DOUBLE_BED'">
            {{ "DOUBLE BED: " + room.pricePerDay + "€" }}
          </p>
          <p v-else>
            {{ "KINGSIZE BED: " + room.pricePerDay + "€" }}
          </p>
        </div>
        <div v-else class="text-xs font-semibold" v-for="room in rooms">
          <p v-if="room.room_type === 'SINGLE_BED'">
            {{ "SINGLE BED: " + room.pricePerDay * totalDayDiff + "€" }}
          </p>
          <p v-else-if="room.room_type === 'DOUBLE_BED'">
            {{ "DOUBLE BED: " + room.pricePerDay * totalDayDiff + "€" }}
          </p>
          <p v-else>
            {{ "KINGSIZE BED: " + room.pricePerDay * totalDayDiff + "€" }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  hotelData: any;
  totalDayDiff?: number;
  rooms: any;
}>();

const { address, hotel_name, description, hotel_facilities, id } =
  props.hotelData;

console.log(props.rooms);
</script>
