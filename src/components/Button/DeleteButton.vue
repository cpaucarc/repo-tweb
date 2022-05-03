<template>
  <button
    class="cursor-pointer h-8 w-8 rounded-lg flex-shrink-0 bg-white dark:bg-zinc-800 hover:bg-rose-500 text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-900 active:bg-opacity-80 shadow-lg transition-eio-300 backdrop-blur-sm grid place-items-center"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "DeleteButton",
};
</script>
