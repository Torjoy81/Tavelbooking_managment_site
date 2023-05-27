<template>
  <KeepAlive>
    <div class="flex items-center mb-4">
      <input
        :id="id"
        type="checkbox"
        :value="Value"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        :checked="checked"
        @change="
          $emit('updateCheckbox', {
            id: nameOfsection,
            value: removeDuplicate(
              modalValue,
              ($event.target as HTMLInputElement).value
            ),
          })
        "
      />
      <label :for="id" class="ml-2 text-sm font-medium text-gray-900">{{
        labelName
      }}</label>
    </div>
  </KeepAlive>
</template>

<script setup lang="ts">
defineProps<{
  labelName: string;
  modalValue: string[];
  id: string;
  checked: boolean;
  Value: string;
  nameOfsection: string;
}>();

function removeDuplicate(item: string[], value: string) {
  if (item.includes(value)) {
    const index = item.indexOf(value);
    if (index > -1) item.splice(index, 1);
    return item;
  } else {
    item.push(value);
    return item;
  }
}

defineEmits<{
  (e: "updateCheckbox", value: string[]): void;
}>();
</script>

<!-- @change="$emit(
              'update:hotel_service',
              removeDuplicate(
                modalValue,
                ($event.target as HTMLInputElement).value
              )
            )" -->

<!-- 

defineEmits<{
  (e: "update:modalValue", value: string[]): void;

  (e: "checked"): void;
}>(); -->
