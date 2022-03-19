<template>
  <router-link
    :to="href"
    class="text-sm bg-amber-400 hover:bg-amber-500 inline-flex items-center gap-x-2 text-slate-800 font-semibold px-3 py-1 rounded-md transition ease-in-out duration-300"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "PrimaryLink",
  props: {
    href: {
      type: Object,
    },
  },
};
</script>
