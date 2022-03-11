<template>
  <div class="space-y-8">
    <div class="space-y-2">
      <div class="snap-center" v-for="(portada, i) in portadas" :key="i">
        <img
          class="aspect-video border border-gray-300 rounded-md overflow-hidden object-cover"
          :src="portada"
          alt="Portada"
        />
      </div>

      <h3 class="font-bold text-xl text-gray-800">{{ titulo }}</h3>
      <div class="flex flex-wrap gap-2 mt-2">
        <BadgeTag v-for="(tag, i) in tags" :key="i" :tag="tag" />
      </div>
    </div>

    <div class="space-y-3">
      <div class="flex justify-between">
        <h2 class="text-gray-500 text-lg font-bold">Resumen</h2>
        <Dropdown>
          <template #trigger>
            <button
              class="bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded-md"
            >
              Ver documentos
            </button>
          </template>
          <template #opciones>
            <ul>
              <li
                class="flex items-center text-gray-600 hover:text-blue-600 py-2"
                v-for="(archivo, i) in archivos"
                :key="i"
              >
                <span class="material-icons">description</span>
                <a target="_blank" :href="archivo">Documento {{ i + 1 }}</a>
              </li>
            </ul>
          </template>
        </Dropdown>
      </div>
      <p class="leading-8">{{ resumen }}</p>
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
