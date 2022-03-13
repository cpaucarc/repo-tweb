<template>
  <div class="hover:cursor-pointer group">
    <div class="overflow-hidden rounded-md">
      <img
        class="aspect-video group-hover:scale-105 object-cover transition ease-in-out duration-300"
        :src="portada"
        alt="Portada"
        :title="id"
      />
    </div>
    <p
      class="text-sm font-medium leading-4 mt-1 text-slate-600 group-hover:text-sky-600 transition ease-in-out duration-300 line-clamp-3"
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
