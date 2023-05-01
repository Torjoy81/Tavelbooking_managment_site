<template>
  <div class="mt-10">
    <h1
      class="mb-4 text-4xl tracking-tight font-proza font-extrabold leading-none dark:text-white"
    >
      <slot name="title"></slot>
      >
    </h1>
    <div class="grid grid-cols-2 lg:grid-cols-3 xsm:grid-cols-1 gap-5">
      <slot name="card"></slot>
    </div>
  </div>
</template>
