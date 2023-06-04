<template>
  <HeadlessCombobox v-model="selectedCity" default-value="ALL">
    <div class="relative mt-1">
      <div
        class="relative w-full cursor-default rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
      >
        <HeadlessComboboxInput
          class="w-full border-none text-center rounded-xl py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          :displayValue="(item:any)=> item.value"
          @change="query = $event.target.value"
        />

        <HeadlessComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <Icon
            name="ic:baseline-keyboard-arrow-down"
            class="h-5 w-5 text-gray-400"
          />
        </HeadlessComboboxButton>
      </div>
      <HeadlessTransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <HeadlessComboboxOptions
          class="absolute z-40 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <div
            class="relative cursor-default select-none py-2 px-4 text-gray-700"
            v-if="filterValue.length === 0 && query !== ''"
          >
            Nothing found.
          </div>
          <HeadlessComboboxOption
            v-for="propItem in filterValue"
            as="ul"
            :key="propItem.id"
            :value="propItem"
            v-slot="{ selected, active }"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4"
              :class="{
                'bg-teal-600 text-white': active,
                'text-gray-900': !active,
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                {{ propItem.value }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3"
                :class="{ 'text-white': active, 'text-teal-600': !active }"
              >
                <Icon
                  name="ic:baseline-check"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </li>
          </HeadlessComboboxOption>
        </HeadlessComboboxOptions>
      </HeadlessTransitionRoot>
    </div>
  </HeadlessCombobox>
</template>
<script setup lang="ts">
type AutoCompleteType = {
  id: string | number;
  value: string;
};
const route = useRoute();

const { propValue } = defineProps<{
  propValue: AutoCompleteType[];
}>();

let selectedCity = route.query.city
  ? ref(
      propValue[
        useIndexOfObject_Array(propValue, route.query.city.toString(), "value")
      ]
    )
  : ref(propValue[0]);
let query = ref("");

let filterValue = computed(() =>
  query.value === ""
    ? propValue
    : propValue.filter((item) =>
        item.value
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.value.toLowerCase().replace(/\s+/g, ""))
      )
);

const emit = defineEmits(["passcity"]);

watch(selectedCity, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    emit("passcity", newValue.value);
  }
});
</script>
