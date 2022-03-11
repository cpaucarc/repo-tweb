<template>
  <a
    :href="href"
    class="text-sm bg-blue-500 hover:bg-blue-600 inline-flex items-center gap-x-2 text-white px-3 py-1 rounded-md"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "PrimaryLink",
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
.primary-link {
  align-items: center;
  background-color: var(--color-primary);
  border-radius: 10px;
  color: white;
  display: inline-flex;
  column-gap: 0.5rem;
  font-size: 0.875rem;
  padding: 0.45rem 1rem;
  text-decoration: none;
}
.primary-link:hover {
  background-color: var(--color-primary-hover);
}
</style>
