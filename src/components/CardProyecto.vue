<template>
  <router-link
    :to="{
      name: 'Proyecto',
      params: {
        username: proyecto.estudiante.usuario
          ? proyecto.estudiante.usuario.usuario
          : 'usuario-sin-nombre',
        proy_id: proyecto.id,
      },
    }"
  >
    <div class="group">
      <img
        class="object-cover rounded-lg aspect-video"
        :class="large ? 'lg:aspect-[7/10]' : ''"
        loading="lazy"
        :src="
          'http://localhost:8000/storage/' +
          proyecto.proyecto_imagen[0].link_imagen
        "
        :alt="proyecto.titulo"
        :title="proyecto.titulo"
        onerror="this.onerror=null;this.src='https://pandagila.com/wp-content/uploads/2020/08/error-404-not-found.jpg';"
      />

      <div class="gap-x-4 py-1 flex items-center">
        <img
          :src="
            proyecto.estudiante.avatar ??
            'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=170667a&w=0&h=kEAA35Eaz8k8A3qAGkuY8OZxpfvn9653gDjQwDHZGPE='
          "
          loading="lazy"
          class="w-12 h-12 avatar"
        />

        <div class="space-y-0">
          <h2
            class="font-bold text-sm text-slate-900 group-hover:text-sky-600 leading-4 line-clamp-3 transition-eio-300"
          >
            {{ proyecto.titulo }}
          </h2>
          <p
            class="text-slate-400 group-hover:text-slate-600 text-sm mr-2 transition-eio-300"
          >
            {{ proyecto.estudiante.nombres }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import AutorImagen from "./AutorImagen.vue";
import BadgeTag from "./BadgeTag.vue";
import Card from "./Card.vue";
export default {
  name: "CardProyecto",
  components: { BadgeTag, AutorImagen, Card },
  props: { proyecto: Object, large: { type: Boolean, default: false } },
};
</script>
