<template>
  <div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200"
  >
    <HeadlessTabGroup>
      <HeadlessTabList class="flex flex-wrap -mb-px">
        <HeadlessTab
          v-for="(tabName, index) in tabList"
          as="template"
          :key="index"
          v-slot="{ selected }"
        >
          <a
            :class="[
              'inline-block p-4',
              selected
                ? 'text-blue-600 border-b-2 border-blue-600 '
                : 'border-b-2 border-transparent',
              'rounded-t-lg',
              !selected ? 'hover:text-gray-600 hover:border-gray-300' : '',
            ]"
          >
            {{ tabName }}
          </a>
        </HeadlessTab>
      </HeadlessTabList>
      <HeadlessTabPanels>
        <HeadlessTabPanel> Content 1 </HeadlessTabPanel>
        <HeadlessTabPanel> Content 2 </HeadlessTabPanel>
        <HeadlessTabPanel> Content 3 </HeadlessTabPanel>
      </HeadlessTabPanels>
    </HeadlessTabGroup>
  </div>
</template>
<script setup lang="ts">
const tabList = ref<string[]>(["Tab1", "Tab2", "Tab3", "Tab4", "Tab5"]);
</script>
