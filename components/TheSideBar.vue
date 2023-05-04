<template>
  <section aria-labelledby="products-heading" class="pb-24 pt-6">
    <h2 id="products-heading" class="sr-only">Products</h2>

    <div class="">
      <!-- Filters -->
      <form class="hidden lg:block">
        <h3 class="sr-only">Categories</h3>

        <HeadlessDisclosure
          as="div"
          v-for="section in filters"
          :key="section.id"
          class="border-b border-gray-200 py-6"
          v-slot="{ open }"
        >
          <h3 class="-my-3 flow-root">
            <HeadlessDisclosureButton
              class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
            >
              <span class="font-medium text-gray-900">{{ section.name }}</span>
              <span class="ml-6 flex items-center">
                <Icon
                  name="material-symbols:add"
                  v-if="!open"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
                <Icon
                  name="ri:subtract-fill"
                  v-else
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </HeadlessDisclosureButton>
          </h3>
          <HeadlessDisclosurePanel class="pt-6">
            <div class="space-y-4">
              <div
                v-for="(option, optionIdx) in section.options"
                :key="option.value"
                class="flex items-center"
              >
                <input
                  :id="`filter-${section.id}-${optionIdx}`"
                  :value="option.value"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  v-if="section.id === 'city'"
                  v-model="categoryCity"
                />
                <input
                  :id="`filter-${section.id}-${optionIdx}`"
                  :value="option.value"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  v-else-if="section.id === 'hotel_sevice'"
                  v-model="categoryHotelService"
                />
                <input
                  :id="`filter-${section.id}-${optionIdx}`"
                  :value="option.value"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  v-else
                  v-model="categoryRoomService"
                />
                <label
                  :for="`filter-${section.id}-${optionIdx}`"
                  class="ml-3 text-sm text-gray-600"
                  >{{ option.label }}</label
                >
              </div>
            </div>
          </HeadlessDisclosurePanel>
        </HeadlessDisclosure>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
const filters = useFilterOption();

const categoryCity = ref<string[]>([]);
const categoryHotelService = ref<string[]>([]);
const categoryRoomService = ref<string[]>([]);
</script>
