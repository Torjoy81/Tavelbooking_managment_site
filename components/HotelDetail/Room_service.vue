<template>
  <div>
    <div
      class="flex flex-col md:flex-row gap-x-5 items-center justify-items-center"
    >
      <BaseCard
        :card-title="`Classic-${roomData.room_type}`"
        v-for="roomData in rooms"
      >
        <template #imageSet>
          <NuxtImg
            :src="`/img/rooms/${roomData.room_type}.webp`"
            width="385"
            height="250"
            class="rounded-lg"
          />
        </template>
        <template #cardBrief>
          <div class="flex flex-col justify-center divide-y">
            <ul class="grid grid-cols-2 justify-items-start my-2">
              <li class="p-1" v-for="nameOfService in roomData.room_service">
                <Icon :name="iconValue[nameOfService]" class="w-5 h-5" /><span
                  class="p-1 text-xs"
                  >{{ nameOfService }}</span
                >
              </li>
            </ul>
            <div>
              <h1 class="text-xl font-sans font-semibold my-3">Options</h1>
              <div
                class="flex justify-between"
                v-for="item in roomIncludeCharge"
              >
                <FormRadioButton
                  :label-name="`Add for ${item.nameOfCharge}`"
                  :value="item.chargeFee"
                  v-model="inclued_Price.single_bed"
                  v-if="roomData.room_type === 'SINGLE_BED'"
                />
                <FormRadioButton
                  :label-name="`Add for ${item.nameOfCharge}`"
                  :value="item.chargeFee"
                  v-model="inclued_Price.double_bed"
                  v-if="roomData.room_type === 'DOUBLE_BED'"
                />
                <FormRadioButton
                  :label-name="`Add for ${item.nameOfCharge}`"
                  :value="item.chargeFee"
                  v-model="inclued_Price.king_bed"
                  v-if="roomData.room_type === 'KING_SIZE_BED'"
                />
                <p class="text-right text-xl font-bold">
                  {{ item.chargeFee }}€
                </p>
              </div>
              <p
                class="font-sans font-semibold font-xl"
                v-if="roomData.room_type === 'SINGLE_BED'"
              >
                Total Included price
                {{
                  parseInt(roomData.pricePerDay.toString()) +
                  parseInt(inclued_Price.single_bed.toString())
                }}€
              </p>
              <p
                class="font-sans font-semibold font-xl"
                v-if="roomData.room_type === 'DOUBLE_BED'"
              >
                Total Included price
                {{
                  parseInt(roomData.pricePerDay.toString()) +
                  parseInt(inclued_Price.double_bed.toString())
                }}€
              </p>
              <p
                class="font-sans font-semibold font-xl"
                v-if="roomData.room_type === 'KING_SIZE_BED'"
              >
                Total Included price
                {{
                  parseInt(roomData.pricePerDay.toString()) +
                  parseInt(inclued_Price.king_bed.toString())
                }}€
              </p>
              <BaseButton variant="solid" button-name="Reserve" />
            </div>
          </div>
        </template>
      </BaseCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Room } from "@prisma/client";
const { rooms } = defineProps<{
  rooms: Room[] | undefined;
}>();

const iconValue = useRoomServiceIcon();
const roomIncludeCharge = useRoonInclueCharge();
const inclued_Price = ref<{
  single_bed: number | string;
  double_bed: number | string;
  king_bed: number | string;
}>({
  single_bed: 0,
  double_bed: 0,
  king_bed: 0,
});
</script>
