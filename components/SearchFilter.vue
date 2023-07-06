<template>
  <div
    class="border border-gray-400 rounded shadow-lg bg-purple-300 w-[280px] h-[450px] p-4"
  >
    <h2 class="font-bold text-2xl text-[#002D74]">Search</h2>

    <form action="">
      <AutoCompleteBox
        v-if="route.path !== `/hotels/${route.params.id}`"
        :prop-value="autoCompleteProps"
        @passcity="sendCity"
      />
      <div class="relative">
        <VDatePicker
          v-model.range="range"
          :disabled-dates="disabledDates"
          :masks="masks"
        >
          <template #default="{ inputValue, inputEvents }">
            <div class="relative">
              <label for="" class="block mb-2 text-sm font-medium text-gray-900"
                >CheckIn</label
              >
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 pl-8 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                :value="inputValue.start"
                v-on="inputEvents.start"
              />
              <Icon
                name="uim:calender"
                class="absolute inset-y-9 left-1 h-5 w-5 text-green-300"
              />
            </div>
            <div class="relative">
              <label for="" class="block mb-2 text-sm font-medium text-gray-900"
                >CheckOut</label
              >
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2 pl-8 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                :value="inputValue.end"
                v-on="inputEvents.end"
              />
              <Icon
                name="uim:calender"
                class="absolute inset-y-9 left-1 h-5 w-5 text-green-300"
              />
            </div>
          </template>
        </VDatePicker>
      </div>
    </form>

    <div class="">
      <label
        for=""
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >people</label
      >
      <BaseDropDown />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DatePicker as VDatePicker } from "v-calendar";
import "v-calendar/style.css";

const hotelsData = useHotelStore();
const route = useRoute();
const autoCompleteProps = hotelsData.getCity;

const emit = defineEmits(["update:cityValue", "update:dayDiff"]);

function sendCity(city: string) {
  emit("update:cityValue", city);
}

const todayDate = new Date();

const range = ref({
  start: new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate()
  ),
  end: new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate() + 1
  ),
});

const masks = ref({
  input: "YYYY-MM-DD",
});

const disabledDates = ref([
  {
    start: null,
    end: new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate() - 1
    ),
  },
]);

const diffDays = ref(0);

watch(range, (newRange, oldRange) => {
  if (newRange.end !== oldRange.end) {
    const diffTime = Math.abs(
      newRange.end.getTime() - newRange.start.getTime()
    );
    diffDays.value = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    emit("update:dayDiff", diffDays.value);
  }
});

defineProps<{
  dayDiff: number;
  cityValue?: string;
}>();
</script>
