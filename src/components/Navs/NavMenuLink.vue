<template>
  <router-link
    class="text-gray-400 py-4 px-4 border-l-2 border-transparent"
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
  background-color: #fbfbfc;
  border-left: 5px solid #1877f2;
  color: #1877f2;
  font-weight: bold;
}
</style>
