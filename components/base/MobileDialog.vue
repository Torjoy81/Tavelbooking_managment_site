<template>
  <div>
    <HeadlessTransitionRoot as="template" :show="mobileFiltersOpen">
      <HeadlessDialog
        as="div"
        class="relative z-40 lg:hidden"
        @close="$emit('mobileDialogBox', false)"
      >
        <HeadlessTransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25"></div>
        </HeadlessTransitionChild>
        <div class="fixed inset-0 z-40 flex">
          <HeadlessTransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <HeadlessDialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white/30 backdrop-blur-md py-4 pb-12 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  @click="$emit('mobileDialogBox', false)"
                >
                  <span class="sr-only">Close menu</span>
                  <Icon name="ic:baseline-close" class="w-6 h-6" />
                </button>
              </div>
              <slot></slot>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  mobileFiltersOpen: boolean;
}>();
defineEmits(["mobileDialogBox"]);
</script>
