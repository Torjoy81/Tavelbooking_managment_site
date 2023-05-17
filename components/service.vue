<template>
  <NuxtLayout name="flexwrap">
    <template #headerTitle>Our Service</template>
    <template #default>
      <BaseCard
        :card-title="item.Sname"
        v-for="(item, index) in sevice"
        :key="index"
      >
        <template #cardIcon>
          <Icon :name="item.icon.name" :class="`text-${item.icon.color}-200`" />
        </template>
        <template #cardBrief>
          <p class="text-gray-700 text-base">
            {{ item.description }}
          </p>
        </template>
      </BaseCard>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const sevice = ref<
  {
    Sname: string;
    description: string;
    icon: {
      name: string;
      color: string;
    };
  }[]
>([
  {
    Sname: "Luxurious Hotel & Resort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a sint non accusamus, magni libero corporis vel sequi deleniti perferendis?",
    icon: { name: "fa6-solid:hotel", color: "ground" },
  },
  {
    Sname: "Tour Guide",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a sint non accusamus, magni libero corporis vel sequi deleniti perferendis?",
    icon: { name: "map:compass", color: "sky" },
  },
  {
    Sname: "Rent Car",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a sint non accusamus, magni libero corporis vel sequi deleniti perferendis?",
    icon: { name: "map:car-rental", color: "red" },
  },
]);
</script>
