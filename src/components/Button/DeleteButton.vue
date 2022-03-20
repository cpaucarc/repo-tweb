<template>
  <button
    class="cursor-pointer h-8 w-8 rounded-lg flex-shrink-0 bg-white hover:bg-rose-500 text-slate-900 active:bg-opacity-80 shadow-lg transition-eio-300 grid place-items-center"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "DeleteButton",
};
</script>
