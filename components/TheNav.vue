<template>
  <nav
    class="w-full flex flex-wrap justify-between items-center py-8 px-6 mx-auto md:px-12 lg:px-16 xl:px-24 absolute"
  >
    <a href="#" class="text-3xl md:text-4xl font-bold tracking-wide">
      <span class="text-orange-300">Easy</span
      ><span class="text-green-50" v-if="router.path === '/'">Booking</span
      ><span class="text-purple-600" v-else>Booking</span>
    </a>
    <div
      class="inset-0 transition-all xsm:bg-white/70 xsm:backdrop-blur-xl z-20 md:static md:flex md:bg-none items-center justify-center lg:justify-end space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
      :class="sidebarOpen ? 'fixed flex' : 'hidden'"
    >
      <ul
        class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8 text-gray-900 md:text-green-50"
        v-if="router.path === '/'"
      >
        <li
          v-for="menu in navMenus"
          class="text-lg md:text-base lg:text-lg font-medium group"
          :class="{ 'text-green-200': activeMenu === menu.name }"
        >
          <NuxtLink :to="menu.path"> {{ menu.name }} </NuxtLink>
          <div
            class="h-0.5 bg-green-200 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
          />
        </li>
        <li v-if="!user">
          <NuxtLink
            to="/register"
            class="font-semibold text-white py-2 px-4 border border-blue rounded"
          >
            SING UP
          </NuxtLink>
        </li>
        <li v-if="!user">
          <NuxtLink to="/login" class="font-semibold text-white py-2 px-4">
            LOGIN
          </NuxtLink>
        </li>
        <li v-if="user">
          <button
            class="font-semibold text-white py-2 px-4 border border-blue rounded"
            @click="client.auth.signOut"
          >
            LOGOUT
          </button>
        </li>
      </ul>
      <ul
        class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8 text-green-50 bg-transparent"
        v-else
      >
        <li
          v-for="menu in navMenus"
          class="text-lg md:text-base lg:text-lg font-medium group text-slate-800"
          :class="{ 'text-green-200': activeMenu === menu.name }"
        >
          <NuxtLink :to="menu.path"> {{ menu.name }} </NuxtLink>
          <div
            class="h-0.5 bg-green-200 scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
          />
        </li>
        <li v-if="!user">
          <NuxtLink
            to="/register"
            class="font-semibold text-black py-2 px-4 border border-black rounded"
          >
            SING UP
          </NuxtLink>
        </li>
        <li v-if="!user">
          <NuxtLink
            to="/login"
            class="bg-transparent font-semibold text-black py-2 px-4"
          >
            LOGIN
          </NuxtLink>
        </li>
        <li v-if="user">
          <button
            class="bg-transparent font-semibold text-black py-2 px-4 border border-black rounded"
            @click="client.auth.signOut"
          >
            LOGOUT
          </button>
        </li>
      </ul>
    </div>
    <button @click="sidebarOpen = !sidebarOpen" class="block md:hidden z-30">
      <Icon
        name="uim:bars"
        class="w-6 h-6"
        :class="{ 'text-white': router.path === '/' }"
      />
    </button>
  </nav>
</template>

<script setup lang="ts">
const navMenus = ref([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Destination",
    path: "/hotels",
  },
  {
    name: "Service",
    path: "#",
  },
  {
    name: "About",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
]);
const activeMenu = ref("Home");
const sidebarOpen = ref(false);
const router = useRoute();

const user = useSupabaseUser();
const client = useSupabaseClient();
</script>
