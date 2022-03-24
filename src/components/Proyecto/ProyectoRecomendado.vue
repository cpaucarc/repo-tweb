<template>
  <div>
    <router-link
      :to="{
        name: 'Proyecto',
        params: { username: proyecto.username },
      }"
      class="hover:cursor-pointer group"
    >
      <img
        class="aspect-video rounded-md"
        :src="proyecto.portada"
        alt="Portada"
        :title="proyecto.titulo"
      />
      <p
        class="text-sm font-bold leading-4 mt-1 text-slate-400 group-hover:text-sky-600 transition-eio-300 line-clamp-3"
      >
        {{ proyecto.titulo }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: { proyecto: Object },
};
</script>
