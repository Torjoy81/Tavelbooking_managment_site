<template>
  <div class="relative my-6 mx-auto">
    <div
      class="h-1.5 w-[280px] overflow-hidden rounded-sm bg-gray-300 font-sans text-xs font-medium"
    >
      <div
        :class="['absolute', 'h-full  overflow-hidden  bg-pink-500 ']"
        :style="{
          left: rangeStyle.minPercentage + '%',
          right: rangeStyle.maxPercentage + '%',
        }"
      ></div>
    </div>
    <div class="range-input">
      <input
        type="range"
        :max="inputRange.maxValue"
        :min="inputRange.minValue"
        v-model="inputRange.currentMinValue"
        step="1"
        id="rangeMin"
        @input="(e) => leftInput(e)"
        @change="handleChange"
      />
      <input
        type="range"
        :max="inputRange.maxValue"
        :min="inputRange.minValue"
        v-model="inputRange.currentMaxValue"
        id="rangeMax"
        step="1"
        @input="(e) => rightInput(e)"
        @change="handleChange"
      />
    </div>
    <span class="absolute left-[25%]">{{ inputRange.currentMinValue }}</span>
    <span class="absolute right-0">{{ inputRange.currentMaxValue }}</span>
  </div>
</template>

<script setup lang="ts">
const inputRange = reactive({
  minValue: 0,
  maxValue: 400,
  currentMinValue: 130,
  currentMaxValue: 260,
});

const rangeStyle = reactive({
  minPercentage: (inputRange.currentMinValue / inputRange.maxValue) * 100,
  maxPercentage: 100 - (inputRange.currentMaxValue / inputRange.maxValue) * 100,
});

function leftInput(e: Event) {
  if (inputRange.currentMaxValue - inputRange.currentMinValue <= 100) {
    inputRange.currentMinValue = inputRange.currentMaxValue - 100;
  } else {
    rangeStyle.minPercentage =
      (inputRange.currentMinValue / inputRange.maxValue) * 100;
  }
}

function rightInput(e: Event) {
  if (inputRange.currentMaxValue - inputRange.currentMinValue <= 100) {
    inputRange.currentMaxValue = inputRange.currentMinValue + 100;
  } else {
    rangeStyle.maxPercentage =
      100 - (inputRange.currentMaxValue / inputRange.maxValue) * 100;
  }
}

const emit = defineEmits(["update:minprice", "update:maxprice"]);

const handleChange = () => {
  emit("update:maxprice", inputRange.currentMaxValue);
  emit("update:minprice", inputRange.currentMinValue);
};

defineProps<{
  minprice: number;
  maxprice: number;
}>();
</script>
<style scoped>
input {
  position: absolute;
  top: -1px;
  height: 5px;
  width: 100%;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: violet;
  -webkit-appearance: none;
}
</style>
