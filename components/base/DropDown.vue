<template>
  <HeadlessMenu as="div" class="relative inline-block text-left z-30">
    <HeadlessMenuButton
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg inline-flex p-2.5 max-w-md text-center"
    >
      <Icon name="memory:account" class="w-6 h-6" /> {{ people.adult }} Adult .
      {{ people.children }} Children . {{ people.rooms }} Rooms
    </HeadlessMenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HeadlessMenuItems
        class="absolute inset-x-0 top-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div
          class="px-3 py-2"
          v-for="(folk, index) in Object.keys(people)"
          :key="index"
        >
          <HeadlessMenuItem :disabled="true" v-slot="{ active }">
            <div class="flex justify-between items-center">
              <label for="labelAdult">{{
                folk.charAt(0).toUpperCase() + folk.slice(1)
              }}</label>
              <div
                id="labelAdult"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-28 flex justify-between"
              >
                <button @click.prevent="addAdult(folk)">+</button
                ><span>{{ people[folk] }}</span
                ><button @click.prevent="subTrack(folk)">-</button>
              </div>
            </div>
          </HeadlessMenuItem>
        </div>
        <HeadlessMenuItem class="m-3 flex justify-center" as="div"
          ><BaseButton button-name="Done" variant="solid"
        /></HeadlessMenuItem>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
</template>
<script setup lang="ts">
const people = ref<{
  [key: string]: number;
}>({
  adult: 0,
  children: 0,
  rooms: 0,
});

function addAdult(categoryPeople: string) {
  return people.value[categoryPeople]++;
}
function subTrack(categoryPeople: string) {
  return people.value[categoryPeople]--;
}
</script>
