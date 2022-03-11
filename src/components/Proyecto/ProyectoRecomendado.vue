<template>
  <div>
    <img class="portada" :src="portada" alt="Portada" :title="id" />
    <p>{{ titulo }}</p>
  </div>
</template>

<script>
export default {
  props: { id: String, portada: String, titulo: String },
};
</script>

<style scoped>
.portada {
  aspect-ratio: 3/2;
  border-radius: 10px;
  height: auto;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
}
</style>
