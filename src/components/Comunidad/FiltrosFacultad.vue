<template>
  <div class="space-y-2">
    <h2 class="font-semibold text-slate-600">Facultades</h2>
    <p class="text-xs text-slate-400">{{ cantidadSeleccionados }}</p>
    <ul class="space-y-1">
      <li v-for="facultad in facultades" :key="facultad.id">
        <InputCheckbox
          @click="seleccionarFacultad(facultad.id)"
          :active="elementos.includes(facultad.id)"
          :label="
            facultad.nombre.substring(0, 36) + ' (' + facultad.abrev + ')'
          "
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import facultadesData from "../../hooks/facultades.json";
import InputCheckbox from "../Input/InputCheckbox.vue";
import useArray from "../../composables/useArray";

export default {
  name: "FiltrosFacultad",
  components: { InputCheckbox },
  setup() {
    const facultades = facultadesData;
    const { elementos, agregarElemento, quitarElemento } = useArray();

    const seleccionarFacultad = (id) => {
      elementos.value.includes(id) ? quitarElemento(id) : agregarElemento(id);
    };

    const cantidadSeleccionados = computed(() => {
      return elementos.value.length + " facultades seleccionados";
    });

    return {
      facultades,
      elementos,
      seleccionarFacultad,
      cantidadSeleccionados,
    };
  },
};
</script>
