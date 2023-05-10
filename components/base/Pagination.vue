<template>
  <nav v-if="paginateStore.countPage > 1" class="p-2.5">
    <ul class="flex">
      <li>
        <a
          class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          href="#"
          aria-label="Previous"
        >
          <Icon name="ic:sharp-keyboard-arrow-left" class="text-sm" />
        </a>
      </li>
      <li v-for="n in paginateStore.countPage" :key="n">
        <a
          :class="
            paginateStore.currentPageNumber === n
              ? 'mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out'
              : 'mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'
          "
          href="#"
          @click.stop="paginateStore.handlePageNumber(n)"
        >
          {{ n }}
        </a>
      </li>
      <li>
        <a
          class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          href="#"
          aria-label="Next"
        >
          <Icon name="ic:sharp-keyboard-arrow-right" class="text-sm" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const paginateStore = useCurrentPageStore();
</script>

<!-- :class="paginateStore.activeClass(n)" -->
