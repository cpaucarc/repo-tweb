<template>
  <div class="relative h-full min-h-full">
    <AdjustmentsIcon
      @click="verFiltros = !verFiltros"
      class="icon-5 cursor-pointer absolute -top-8 right-0 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-eio-300"
    />

    <Modal :isOpen="verFiltros" @closeModal="verFiltros = !verFiltros">
      <div class="relative py-4 px-6 flex flex-col items-start gap-y-4">
        <XIcon
          @click="verFiltros = !verFiltros"
          class="icon-6 absolute top-2 right-2 cursor-pointer text-zinc-300 dark:text-zinc-500 hover:text-rose-500 rounded-full transition-eio-300"
        />
        <FiltrosFechas />

        <FiltrosFacultad />

        <div class="ml-4">
          <button @click="verFiltros = !verFiltros" class="btn-outline mr-2">
            Cancelar
          </button>
          <PrimaryButton @click="aplicarFiltros">
            Filtrar proyectos
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import { AdjustmentsIcon, XIcon } from "@heroicons/vue/outline";
import FiltrosFacultad from "./FiltrosFacultad.vue";
import FiltrosFechas from "./FiltrosFechas.vue";
import Modal from "../Util/Modal.vue";
import PrimaryButton from "../Button/PrimaryButton.vue";
import { useBusquedaStore } from "../../stores/busqueda";

export default {
  name: "Filtros",
  components: {
    AdjustmentsIcon,
    FiltrosFacultad,
    FiltrosFechas,
    XIcon,
    Modal,
    PrimaryButton,
  },
  setup(props, { emit }) {
    const verFiltros = ref(false);
    const busqueda = useBusquedaStore();

    const escuelas = ref(busqueda.escuelas);
    const inicio = ref(busqueda.inicio);
    const fin = ref(busqueda.fin);

    provide("escuelas", escuelas);
    provide("inicio", inicio);
    provide("fin", fin);

    const aplicarFiltros = async () => {
      busqueda.setInicio(inicio.value);
      busqueda.setFin(fin.value);
      busqueda.setEscuelas(escuelas.value);
      emit("aplicarFiltros");
    };

    return { verFiltros, aplicarFiltros };
  },
};
</script>
