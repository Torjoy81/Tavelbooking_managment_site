<template>
  <div class="my-4">
    <ul
      class="flex flex-col border border-gray-400 divide-y-2 shadow-lg md:w-[750px] rounded-lg"
    >
      <li class="grid grid-cols-3 p-4" v-for="rule in rules">
        <div class="col-span-1">
          <Icon :name="rule.icon" class="w-5 h-5 pr-1" /><span
            class="text-base font-bold"
            >{{ rule.ruleName }}</span
          >
        </div>
        <div class="col-span-2">
          <Icon
            :name="icoName"
            v-if="rule.ruleName === 'Cards accepted at this hotel'"
            v-for="icoName in rule.description"
            class="w-10 h-6 px-2"
          />
          <p v-else class="font-sans font-extralight text-sm">
            {{ rule.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const rules = ref<
  {
    ruleName: string;
    icon: string;
    description: string | string[];
  }[]
>([
  {
    ruleName: "check-In",
    icon: "fa6-solid:arrow-right-to-bracket",
    description: "from 14:00 to 23:30",
  },
  {
    ruleName: "check-Out",
    icon: "fa6-solid:arrow-right-from-bracket",
    description: "Until 12:00",
  },
  {
    ruleName: `Cancellation/
    prepayment`,
    icon: "bi:info-circle-fill",
    description:
      "prepayment Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
  },
  {
    ruleName: "Children and beds",
    icon: "material-symbols:family-restroom-sharp",
    description: `
        Children of any age are welcome.

Children aged 3 years and above are considered adults at this property.

To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.
The number of cots allowed is dependent on the option you choose. Please check your selected option for more information.

There are no extra beds available at this property.

All cots are subject to availability.`,
  },
  {
    ruleName: "Age restriction",
    icon: "ph:person-arms-spread-fill",
    description: "The minimum age for check-in is 18",
  },
  {
    ruleName: "Cards accepted at this hotel",
    icon: "material-symbols:credit-card-outline",
    description: ["logos:mastercard", "logos:visa", "logos:jcb"],
  },
]);
</script>
