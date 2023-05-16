<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { Room } from "@prisma/client";
const { rooms } = defineProps<{
  rooms: Room[] | undefined;
}>();
</script>
