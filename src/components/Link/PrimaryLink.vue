<template>
  <a :href="href" class="primary-link">
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
