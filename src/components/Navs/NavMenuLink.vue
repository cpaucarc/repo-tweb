<template>
  <router-link
    class="text-slate-400 hover:text-slate-600 text-sm py-2 px-3 transition-eio-300"
    :to="href"
  >
    <div class="flex items-center gap-x-1">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NavMenuLink",
  props: {
    href: {
      type: Object,
      default: "#",
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 3px solid #0284c7;
  color: #0284c7;
  font-weight: 800;
  /* letter-spacing: 0.5px; */
}
.router-link-exact-active:hover {
  color: #0284c7;
}
</style>
