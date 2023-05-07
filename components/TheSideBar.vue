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
                <FormCheckBox
                  :id="`filter-${section.id}-${optionIdx}`"
                  :label-name="option.label"
                  :Value="option.value"
                  v-model:city="category.city"
                  v-model:hotel_service="category.hotel_service"
                  v-model:room_service="category.room_service"
                  :filter-name="section.id"
                  @checked="callTheAlert()"
                />
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
const hotelStore = useHotelStore();

const category = ref<{
  [key in "city" | "hotel_service" | "room_service"]: string[];
}>({
  city: [],
  hotel_service: [],
  room_service: [],
});

function callTheAlert() {
  const url = new URL("http://localhost:3000/api/hotels/filter");
  url.searchParams.append("City", category.value.city.join(","));
  url.searchParams.append(
    "hotel_service",
    category.value.hotel_service.join(",")
  );
  console.log(category.value);

  hotelStore.fetchFilterHotelData(url.toString());
}
</script>
