<template>
  <div class="space-y">
    <div>
      <template v-for="(portada, i) in portadas" :key="i">
        <img class="portada" :src="portada" alt="Portada" />
      </template>
      <h3>{{ titulo }}</h3>
      <div>
        <BadgeTag v-for="(tag, i) in tags" :key="i" :tag="tag" />
      </div>
    </div>

    <div>
      <div class="flex">
        <h2>Resumen</h2>
        <Dropdown>
          <template #trigger>
            <button>Ver documentos</button>
          </template>
          <template #opciones>
            <ul>
              <li class="flex" v-for="(archivo, i) in archivos" :key="i">
                <span class="material-icons">description</span>
                <a target="_blank" :href="archivo">Documento {{ i + 1 }}</a>
              </li>
            </ul>
          </template>
        </Dropdown>
      </div>
      <p>{{ resumen }}</p>
    </div>
  </div>
</template>

<script>
import BadgeTag from "../BadgeTag.vue";
import Dropdown from "../Dropdown.vue";
export default {
  name: "DatosProyecto",
  props: {
    titulo: String,
    resumen: String,
    archivos: Array,
    portadas: Array,
    tags: Array,
  },
  components: { BadgeTag, Dropdown },
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
