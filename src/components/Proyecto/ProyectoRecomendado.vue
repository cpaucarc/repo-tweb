<template>
  <div class="hover:cursor-pointer group">
    <img
      class="aspect-video rounded-md object-cover"
      :src="portada"
      alt="Portada"
      :title="id"
    />
    <p
      class="text-sm font-medium leading-4 mt-1 text-gray-600 group-hover:text-blue-600"
    >
      {{ titulo }}
    </p>
  </div>
</template>

<script>
export default {
  props: { id: Number, portada: String, titulo: String },
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
