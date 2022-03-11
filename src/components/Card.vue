<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    p: {
      type: String,
      default: "1rem",
    },
  },
};
</script>

<style scoped>
.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  padding: v-bind(p);
}
</style>
