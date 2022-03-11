<template>
  <router-link class="nav-menu-link" :to="href">
    <div class="link-slot">
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
.nav-menu-link {
  border: 2px solid transparent;
  color: #768596;
  text-decoration: none;
  padding: 1rem 0.75rem;
}
.router-link-exact-active {
  background-color: #fbfbfc;
  border-left: 5px solid var(--color-primary);
  color: var(--color-primary);
  font-weight: bold;
}

.link-slot {
  align-items: center;
  column-gap: 0.25rem;
  display: flex;
}
</style>
