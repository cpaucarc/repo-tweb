<template>
  <span
    class="px-3 py-1.5 rounded-lg text-sm cursor-pointer select-none transition-eio-300"
    :class="
      active
        ? 'bg-sky-300 dark:bg-sky-600/20 dark:text-sky-600 font-bold'
        : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-400 '
    "
  >
    {{ tag }}
  </span>
</template>
<script>
export default {
  name: "SignupTag",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
    },
  },
};
</script>
