<template>
  <h3 class="text-muted">{{ msg }}</h3>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" class="btn btn-primary" @click="count++">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
  import { ref } from "vue";

  defineProps({
    msg: String,
  });

  const count = ref(0);
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
