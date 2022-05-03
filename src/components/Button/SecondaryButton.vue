<template>
  <button
    class="flex items-center px-2.5 py-1 rounded-md text-sm font-semibold bg-zinc-100 dark:bg-zinc-600/20 hover:bg-zinc-200 dark:hover:bg-zinc-600/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-300 transition-eio-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SecondaryButton",
};
</script>
