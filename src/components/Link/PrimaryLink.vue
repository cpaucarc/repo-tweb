<template>
  <router-link
    :to="href"
    class="bg-amber-400 hover:bg-amber-500 text-zinc-900 btn"
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
