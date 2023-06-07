<template>
  <div class="p-2 my-5">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Room type</th>
          <th scope="col" class="px-6 py-3">Room Description</th>
          <th scope="col" class="px-6 py-3">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="roomAttrs in rooms" class="bg-white border-b">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
          >
            {{ roomAttrs.room_type }}
          </th>
          <td class="w-72 line-clamp-6 text-xs">
            {{ roomAttrs.description }}
          </td>
          <td class="text-center text-xl font-bold">
            {{ roomAttrs.pricePerDay }}€
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
const { rooms } = defineProps<{
  rooms: any;
}>();
</script>
