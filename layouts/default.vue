<template>
  <TheBanner v-if="router.path === '/'">
    <template #addNav>
      <TheNav />
    </template>
  </TheBanner>
  <TheNav v-else />
  <slot></slot>
  <TheFooter footer-title="EsayBook" :footer-feature="footerFeature" />
</template>

<script setup lang="ts">
const footerFeature = ref<
  {
    title: string;
    attrs: string[];
  }[]
>([
  {
    title: "Resouces",
    attrs: ["Partners", "Themes", "Jobs", "Certification"],
  },
  {
    title: "About",
    attrs: ["FAQ", "Team", "Community Guide", "service Location"],
  },
  {
    title: "Help",
    attrs: ["Discord Chat", "GitHub Discussions", "DEV Community"],
  },
  {
    title: "News",
    attrs: ["Blog", "Instagram", "Twitter", "FaceBook"],
  },
]);
const router = useRoute();
</script>
