<template>
  <a
    target="_blank"
    :href="href"
    rel="noopener noreferrer"
    class="h-10 w-10 cursor-pointer transition-eio-300 text-zinc-400 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full grid place-items-center"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "RedSocialLink",
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>
