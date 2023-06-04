<template>
  <div>
    <ul class="my-3" v-for="(section, index) in filters">
      <li class="border p-4 shadow-lg bg-gray-200 rounded w-[280px]">
        <button
          type="button"
          class="py-2 px-6 mb-2 flex bg-white rounded-lg items-center w-full text-left font-bold"
          @click.prevent="OnClick(section.name)"
        >
          <div class="flex w-full justify-between items-center">
            <span>{{ section.name }}</span>
            <span>+</span>
          </div>
        </button>

        <TransitionGroup name="service" tag="div">
          <FormCheckBox
            v-for="option in section.options"
            v-if="showBody.hotel_service && section.name === 'Hotel Service'"
            :key="`${section.id}-${option.label}`"
            :label-name="option.label"
            :Value="option.value"
            :id="`${section.id}-${option.label}`"
            :name-ofsection="section.id"
            :checked="option.checked"
            @update-checkbox="update_CheckValue"
            :modal-value="category.hotel_service"
          />
        </TransitionGroup>
        <TransitionGroup name="service" tag="div">
          <FormCheckBox
            v-if="showBody.room_service && section.name === 'Room Service'"
            v-for="option in section.options"
            :key="`${section.id}-${option.label}`"
            :label-name="option.label"
            :Value="option.value"
            :id="`${section.id}-${option.label}`"
            :name-ofsection="section.id"
            :checked="option.checked"
            @update-checkbox="update_CheckValue"
            :modal-value="category.room_service"
          />
        </TransitionGroup>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useFilterOption } from "./../composables/filterState";

let filters = useFilterOption;

const category = ref<{
  [key in "hotel_service" | "room_service"]: string[];
}>({
  hotel_service: [],
  room_service: [],
});

function update_CheckValue(item: any) {
  if (item.id === "hotel_service") {
    category.value.hotel_service = item.value;
    item.value.forEach((checkService: any) => {
      for (const i in filters[0].options) {
        if (filters[0].options[i].value === checkService) {
          filters[0].options[i].checked = true;
        } else {
          filters[0].options[i].checked = false;
        }
      }
    });
    emit("update:hotel_service", category.value.hotel_service);
  } else {
    category.value.room_service = item.value;
    item.value.forEach((checkService: any) => {
      for (const i in filters[0].options) {
        if (filters[1].options[i].value === checkService) {
          filters[1].options[i].checked = true;
        } else {
          filters[1].options[i].checked = false;
        }
      }
    });

    emit("update:room_service", category.value.room_service);
  }
}

const emit = defineEmits(["update:hotel_service", "update:room_service"]);

defineProps<{
  hotel_service: string[];
  room_service: string[];
}>();

const showBody = ref({
  hotel_service: false,
  room_service: false,
});

function OnClick(selectedName: string) {
  if (selectedName === "Hotel Service") {
    showBody.value.hotel_service = !showBody.value.hotel_service;
  } else {
    showBody.value.room_service = !showBody.value.room_service;
  }
}
</script>

<style scoped>
.service-enter-active,
.service-leave-active {
  transition: all ease-out 1s;
}
.service-enter-from {
  transform: translateY(100px);
  opacity: 0;
}
.service-leave-to {
  transform: scale3d(1.5);
  opacity: 0;
}
</style>
