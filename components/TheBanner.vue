<template>
  <div
    class="w-full min-h-[50vh] font-sans text-gray-900 bg-banner bg-no-repeat bg-cover"
  >
    <slot name="addNav"></slot>
    <div class="flex flex-col">
      <div
        class="text-yellow-50 font-banner-head font-semibold text-4xl text-center"
      >
        <div>Make easy</div>
        <div>Your travel experience</div>
      </div>
      <div class="mt-5 p-4">
        <form
          class="flex flex-col md:flex-row gap-2 justify-center items-center"
        >
          <AutoCompleteBox :prop-value="autoCompleteProps" />
          <VDatePicker
            v-model.range="calenderData.range"
            :masks="calenderData.masks"
            :disabled-dates="calenderData.disabledDates"
          >
            <template #default="{ inputValue, inputEvents }">
              <FormIconInput
                type="text"
                placeholder="CheckIn Date"
                :value="inputValue.start"
                v-on="inputEvents.start"
              >
                <template #icon>
                  <Icon name="uim:calender" class="h-5 w-5 text-green-300" />
                </template>
              </FormIconInput>
              <Icon
                name="uim:arrow-circle-right"
                class="h-8 w-8 text-white"
                v-if="windowSc.width > 810"
              />
              <FormIconInput
                type="text"
                placeholder="CheckOut Date"
                :value="inputValue.end"
                v-on="inputEvents.end"
              >
                <template #icon>
                  <Icon name="uim:calender" class="h-5 w-5 text-green-300" />
                </template>
              </FormIconInput>
            </template>
          </VDatePicker>
          <BaseDropDown />
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DatePicker as VDatePicker } from "v-calendar";

const calenderData = useCalenderDate();

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
