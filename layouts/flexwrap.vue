<template>
  <div class="bg-gray-50">
    <h1
      class="font-banner-head font-extrabold text-4xl leading-relaxed text-center p-4 my-5"
    >
      <slot name="headerTitle"></slot>
    </h1>
    <div class="py-12 px-6">
      <div class="flex gap-x-10 justify-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
