<template>
  <div class="transparent autor-info">
    <img :src="autor.foto" class="autor-imagen" :alt="autor.nombre" />
    <p class="transparent autor-nombre">
      {{ autor.nombre }}
    </p>
  </div>
</template>

<script>
  export default {
    props: { autor: Object },
  };
</script>

<style scoped>
  .autor-imagen {
    border-radius: 999px;
    height: 2rem;
    object-fit: cover;
    width: 2rem;
  }
  .autor-info {
    display: inline-flex;
    column-gap: 0.5rem;
    align-items: center;
  }
  .autor-nombre {
    color: #4b5563;
    font-size: 0.85rem;
    font-weight: 600;
  }
</style>