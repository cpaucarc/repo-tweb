<template>
  <p class="tag">{{ tag }}</p>
</template>

<script>
  export default {
    name: "BadgeTag",
    props: { tag: String },
  };
</script>

<style scoped>
  .tag {
    display: inline-flex;
    background: #e0f2fe;
    border-radius: 9999px;
    color: #075985;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.5rem;
  }
</style>