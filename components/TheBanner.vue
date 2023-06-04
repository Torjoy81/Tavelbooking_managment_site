<template>
  <div class="">
    <NuxtImg
      class="w-full md:h-[650px] h-[700px]"
      src="/img/Banner1.jpeg"
      alt=""
    />
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <h1
        class="md:text-6xl text-3xl font-banner-head font-extrabold text-center mb-8"
      >
        <span class="text-orange-200 leading-relaxed p-1.5"
          >Get Ready to Explore
        </span>
        <br />
        <span class="text-purple-200"> with EasyBooking</span>
      </h1>
      <div class="w-full inline-flex justify-center items-center gap-3">
        <AutoCompleteBox
          :prop-value="autoCompleteProps"
          class="md:w-1/6 w-1/3"
        />
        <button
          class="flex items-center bg-green-300 text-white font-bold p-2 rounded-xl hover:shadow-2xl hover:bg-green-400"
        >
          <Icon name="material-symbols:search" class="w-6 h-6 ml-2" />
          <span>Search</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DatePicker as VDatePicker } from "v-calendar";
import "v-calendar/style.css";

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

const windowSc = shallowReactive({
  width: 0,
});

onBeforeMount(() => {
  window.addEventListener("resize", () => {
    windowSc.width = window.innerWidth;
  });
});

onMounted(() => {
  windowSc.width = window.innerWidth;
});

const hotelsData = useHotelStore();

const autoCompleteProps = hotelsData.getCity;
</script>
