<template>
  <div
    class="pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
  >
    <div class="space-y-2" v-for="i in [100, 75, 50]" :key="i">
      <div
        class="skeleton w-full aspect-video rounded-lg"
        :class="'bg-opacity-' + i"
      ></div>
      <div class="flex gap-x-2">
        <div
          class="skeleton w-14 h-14 rounded-full flex-shrink-0"
          :class="'bg-opacity-' + i"
        ></div>
        <div
          class="skeleton flex-1 rounded-lg"
          :class="'bg-opacity-' + i"
        ></div>
      </div>
    </div>
  </div>
</template>
