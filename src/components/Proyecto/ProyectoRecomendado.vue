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
        class="text-sm font-medium leading-4 mt-1 text-slate-600 group-hover:text-sky-600 transition ease-in-out duration-300 line-clamp-3"
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
