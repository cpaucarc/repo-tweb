<template>
  <div class="space-y-2">
    <h2 class="font-semibold text-slate-600">Escuelas</h2>
    <p class="text-xs text-slate-400 ml-4">{{ cantidadSeleccionados }}</p>

    <ul class="space-y-1 ml-4">
      <li v-for="escuela in listaEscuelas" :key="escuela.id">
        <InputCheckbox
          @click="seleccionarEscuela(escuela.id)"
          :active="escuelas.includes(escuela.id)"
          :label="nombreEscuela(escuela.nombre, escuela.abrev)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, inject } from "vue";
import escuelasData from "../../hooks/facultades.json";
import InputCheckbox from "../Input/InputCheckbox.vue";

export default {
  name: "FiltrosFacultad",
  components: { InputCheckbox },
  setup() {
    const listaEscuelas = escuelasData;
    const escuelas = inject("escuelas");

    const seleccionarEscuela = (id) => {
      escuelas.value.includes(id) ? quitarEscuela(id) : agregarEscuela(id);
    };

    function agregarEscuela(elemento) {
      escuelas.value.push(elemento);
    }

    function quitarEscuela(elemento) {
      escuelas.value = escuelas.value.filter(function (value) {
        return value !== elemento;
      });
    }

    const cantidadSeleccionados = computed(() => {
      return escuelas.value.length + " escuelas seleccionados";
    });

    const nombreEscuela = (escuela, facultad) => {
      return (
        escuela.substring(0, 45) +
        (escuela.length > 44 ? "..." : "") +
        " (" +
        facultad +
        ")"
      );
    };

    return {
      listaEscuelas,
      escuelas,
      seleccionarEscuela,
      nombreEscuela,
      cantidadSeleccionados,
    };
  },
};
</script>
