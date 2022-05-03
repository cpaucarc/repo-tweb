<template>
  <div class="">
    <div class="w-full px-6 pt-6 text-center">
      <h2 class="text-4xl">😀</h2>
      <h3 class="text-lg text-zinc-900 font-extrabold">
        {{ titulo }}
      </h3>
    </div>

    <div
      class="px-8 mb-3 flex flex-col items-center text-center mt-1 text-zinc-600"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: { titulo: String },
};
</script>
