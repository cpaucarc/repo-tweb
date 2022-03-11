<template>
  <div class="card">
    <img class="card-image" :src="proyecto.imagen" :alt="proyecto.titulo" />

    <div class="card-body">
      <h2 class="titulo transparent">{{ proyecto.titulo }}</h2>
      <div class="transparent">
        <template v-for="(tag, i) in proyecto.tags" :key="i">
          <BadgeTag :tag="tag" />
        </template>
      </div>
    </div>

    <div class="card-footer transparent">
      <AutorImagen :autor="proyecto.usuario" />
      <router-link class="nav-menu-link" to="/proyecto"> Revisar </router-link>
    </div>
  </div>
</template>

<script>
import BadgeTag from "./BadgeTag.vue";
import AutorImagen from "./AutorImagen.vue";
export default {
  name: "CardProyecto",
  components: { BadgeTag, AutorImagen },
  props: { proyecto: Object },
};
</script>

<style scoped>
.card {
  border: 1px solid #d0d7de;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
}
.card-image {
  aspect-ratio: 3/2;
  object-fit: cover;
  width: 100%;
}
.card-body {
  background-color: white;
  color: #111827;
  padding: 0.5rem 1rem;
}
.titulo {
  font-size: 1.1rem;
  line-height: 1.25rem;
}
.card-footer {
  align-items: center;
  border-top-width: 1px solid #d0d7de;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}
</style>
