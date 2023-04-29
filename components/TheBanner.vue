<template>
  <div class="flex flex-col">
    <div
      class="text-yellow-50 font-banner-head font-semibold text-4xl text-center"
    >
      <div>Make easy</div>
      <div>Your travel experience</div>
    </div>
    <div class="mt-5 p-4">
      <form class="flex flex-col md:flex-row gap-2 justify-center">
        <InputForm type="text" placeholder="City" />
        <VDatePicker
          v-model.range="range"
          :masks="masks"
          :disabled-dates="disabledDates"
        >
          <template #default="{ inputValue, inputEvents }">
            <SvgForm
              type="text"
              placeholder="CheckIn Date"
              :value="inputValue.start"
              v-on="inputEvents.start"
            >
              <template #icon>
                <Icon name="uim:calender" class="h-5 w-5 text-green-300" />
              </template>
            </SvgForm>
            <IconArrow class="text-white w-8 h-8 items-center" />
            <SvgForm
              type="text"
              placeholder="CheckOut Date"
              :value="inputValue.end"
              v-on="inputEvents.end"
            >
              <template #icon>
                <IconDate />
              </template>
            </SvgForm>
          </template>
        </VDatePicker>
        <DropDown />
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DatePicker as VDatePicker } from "v-calendar";
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
</script>
