<template>
  <HeadlessTabGroup as="div" class="">
    <HeadlessTabList
      class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
      as="ul"
    >
      <HeadlessTab
        v-for="(tabName, index) in tabList"
        as="li"
        :key="index"
        v-slot="{ selected }"
        role="presentation"
        class="ring-transparent focus:outline-none"
      >
        <button
          :class="[
            'inline-block p-4 border-b-2 ',
            selected
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent  hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent',
            'rounded-t-lg hover:isolate',
          ]"
        >
          {{ tabName }}
        </button>
      </HeadlessTab>
    </HeadlessTabList>
    <HeadlessTabPanels>
      <HeadlessTabPanel> <HotelDetailOverView /> </HeadlessTabPanel>
      <HeadlessTabPanel> Content 2 </HeadlessTabPanel>
      <HeadlessTabPanel> Content 3 </HeadlessTabPanel>
    </HeadlessTabPanels>
  </HeadlessTabGroup>
</template>
<script setup lang="ts">
const tabList = ref<string[]>([
  "OverView",
  "Rooms",
  "Address",
  "Facilities",
  "Hotel Rule",
]);
</script>
