<template>
  <router-link
    class="text-slate-400 hover:text-slate-600 text-sm py-2 px-2 border-l-2 border-transparent transition ease-in-out duration-300"
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
  border-bottom: 2.5px solid #0284c7;
  color: #0284c7;
  font-weight: bold;
}
.router-link-exact-active:hover {
  color: #0284c7;
}
</style>
