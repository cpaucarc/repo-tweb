<template>
  <router-link
    :to="href"
    class="bg-amber-400 hover:bg-amber-500 text-slate-800 btn"
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
