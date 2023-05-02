<template>
  <nav
    class="flex flex-wrap justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24"
  >
    <a href="#" class="text-3xl md:text-4xl font-bold tracking-wide">
      <span class="text-orange-300">Easy</span
      ><span class="text-green-50" v-if="router.path === '/'">Booking</span
      ><span class="text-purple-600" v-else>Booking</span>
    </a>
    <div
      class="transition-all md:static md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
      :class="sidebarOpen ? 'fixed flex' : 'hidden'"
    >
      <ul
        class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8 text-green-50 bg-transparent"
        v-if="router.path === '/'"
      >
        <li
          v-for="menu in navMenus"
          class="text-lg md:text-base lg:text-lg font-medium group"
          :class="{ 'text-green-200': activeMenu === menu }"
        >
          <a href="#"> {{ menu }} </a>
          <div
            class="h-0.5 bg-green-200 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
          />
        </li>
      </ul>
      <ul
        class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8 text-green-50 bg-transparent"
        v-else
      >
        <li
          v-for="menu in navMenus"
          class="text-lg md:text-base lg:text-lg font-medium group text-slate-800"
          :class="{ 'text-green-200': activeMenu === menu }"
        >
          <a href="#"> {{ menu }} </a>
          <div
            class="h-0.5 bg-green-200 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
          />
        </li>
      </ul>
    </div>
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="block md:hidden relative z-30"
    >
      <Icon name="uim:bars" class="w-6 h-6 text-white" />
    </button>
  </nav>
</template>

<script setup lang="ts">
const navMenus = ref([
  "Home",
  "BookIng Destination",
  "Contact",
  "About",
  "FAQs",
]);
const activeMenu = ref("Home");
const sidebarOpen = ref(false);
const router = useRoute();
</script>
