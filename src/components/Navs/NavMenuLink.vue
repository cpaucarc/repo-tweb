<template>
  <router-link
    class="text-gray-400 py-3 px-3 border-l-2 border-transparent"
    :to="href"
  >
    <div class="flex items-center gap-x-2">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NavMenuLink",
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 3px solid #0284c7;
  color: #0284c7;
  font-weight: bold;
}
</style>
