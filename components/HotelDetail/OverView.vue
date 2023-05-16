<template>
  <div class="p-4 my-4 shadow-lg border border-gray-400 rounded md:w-[735px]">
    <div class="grid grid-cols-1 md:grid-cols-3 items-center">
      <div class="col-span-2 ml-4">
        <h1 class="text-2xl font-banner-head font-extrabold">
          {{ hotel.hotel_name }}
        </h1>
        <p class="text-xs">
          <Icon name="map:postal-code" /> {{ hotel.address }}
        </p>
        <p class="text-base/loose font-proza">{{ hotel.description }}</p>
        <div>
          <h1 class="text-xl font-sans mb-3">Hotel Service</h1>
          <ul class="grid grid-cols-2">
            <li
              class="p-1.5"
              v-for="nameHotelService in hotel.hotel_facilities"
            >
              <Icon :name="iconValue[nameHotelService]" class="w-5 h-5" /><span
                class="p-1"
                >{{ nameHotelService }}</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.627316786321!2d13.349300676164372!3d52.503985472056975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8504d623363e3%3A0x8fb496ffaff45586!2sHotel%20Berlin%2C%20Berlin%2C%20a%20member%20of%20Radisson%20Individuals!5e0!3m2!1sen!2sde!4v1684240251490!5m2!1sen!2sde"
          width="250"
          height="250"
          class="mb-2 p-2"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <h1 class="text-xl font-light font-sans text-center">
          Places near by {{ hotel.city }}
        </h1>
        <ul>
          <li class="mb-1">
            <Icon name="map:postal-code" /><span class="text-base p-1"
              >Zoo {{ hotel.city }}</span
            >
          </li>
          <li class="mb-1">
            <Icon name="map:postal-code" />
            <span class="text-base p-1">Airport {{ hotel.city }}</span>
          </li>
          <li class="mb-1">
            <Icon name="map:postal-code" /><span class="text-base p-1">
              Musem {{ hotel.city }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Hotel } from "@prisma/client";

const { hotel } = defineProps<{
  hotel: Hotel;
}>();

const iconValue = useHotelIcon();
</script>
