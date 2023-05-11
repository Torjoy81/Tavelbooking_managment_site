<template>
  <div
    class="border border-gray-400 rounded shadow-lg bg-purple-300 w-[280px] h-[450px] p-4"
  >
    <h2 class="font-bold text-2xl text-[#002D74]">Search</h2>

    <form action="">
      <FormTextInput type="text" label-name="Destination/City" v-model="city">
        <template #front_icon>
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <Icon name="ic:baseline-search" class="w-5 h-5" />
          </div>
        </template>
      </FormTextInput>
      <VDatePicker
        v-model.range="calenderData.range"
        :masks="calenderData.masks"
        :disabled-dates="calenderData.disabledDates"
      >
        <template #default="{ inputValue, inputEvents }">
          <FormIconInput
            type="text"
            placeholder="CheckOut Date"
            :value="inputValue.start"
            v-on="inputEvents.start"
          >
            <template #labelBase>
              <label
                for=""
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Check In</label
              >
            </template>
            <template #icon>
              <Icon name="uim:calender" class="h-5 w-5 text-green-300" />
            </template>
          </FormIconInput>
          <FormIconInput
            type="text"
            placeholder="CheckOut Date"
            :value="inputValue.end"
            v-on="inputEvents.end"
          >
            <template #labelBase>
              <label
                for=""
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Check out</label
              >
            </template>
            <template #icon>
              <Icon name="uim:calender" class="h-5 w-5 text-green-300" />
            </template>
          </FormIconInput>
        </template>
      </VDatePicker>
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
const city = ref<string>("");
const calenderData = useCalenderDate();
</script>
