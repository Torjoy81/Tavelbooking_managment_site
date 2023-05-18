<template>
  <div
    class="my-5 md:w-[720px] w-full grid grid-cols-3 items-center border border-gray-400 shadow-lg rounded-lg"
  >
    <h1 class="col-span-1 text-center">Ask & Common Question</h1>
    <div class="col-span-2">
      <HeadlessDisclosure v-slot="{ open }" v-for="QnA in askQuestions">
        <HeadlessDisclosureButton
          class="flex w-full my-2 justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>{{ QnA.question }}</span>
          <Icon
            :class="open ? 'rotate-180 transform' : ''"
            name="uim:angle-down"
            class="h-5 w-5 text-gray-500"
          />
        </HeadlessDisclosureButton>
        <HeadlessDisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          {{ QnA.answer }}
        </HeadlessDisclosurePanel>
      </HeadlessDisclosure>
    </div>
  </div>
</template>
<script setup lang="ts">
const askQuestions = ref<
  {
    question: string;
    answer: string;
  }[]
>([
  {
    question: "Can i park?",
    answer: "Unfortunately, there is no parking at Hôtel Madeleine Haussmann.",
  },
  {
    question: "Do they serve BreakFast?",
    answer: "They will serve  BreakFast and Dinner",
  },
  {
    question: "Can I bring my pet?",
    answer: "Pets are not allowed at Hôtel Madeleine Haussmann.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "If you'd like to request an early or late check-in or check-out, you can make a special request when you book.Please note that special requests cannot be guaranteed. If early or late check-in or check-out is essential to your travel plans, we recommend checking the cancellation options before you book.",
  },
]);
</script>
