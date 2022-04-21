<template>
  <div>
    <div
      v-if="reportado"
      title="Ya reportaste a este proyecto"
      class="text-xl cursor-help"
    >
      😈
    </div>
    <Dropdown v-else>
      <template #trigger>
        <SecondaryButton>
          <DotsVerticalIcon class="icon-5" />
        </SecondaryButton>
      </template>
      <template #items>
        <button
          @click="abrirReporte"
          class="flex items-center gap-x-2 px-3 py-2 text-sm transition-eio-300 text-slate-600 hover:text-slate-900"
        >
          <FlagIcon class="icon-5" /> Reportar proyecto
        </button>
      </template>
    </Dropdown>

    <Modal :isOpen="open">
      <div class="p-4 font-bold" v-if="reportado">
        <h4 class="text-center">
          {{ mensaje }}
        </h4>
        <button class="sr-only"></button>
      </div>

      <div class="p-4 space-y-6" v-else>
        <h3 class="font-bold leading-5 text-slate-800">
          ¿Cuales son los motivos por los que quiere reportar este proyecto?
        </h3>

        <div v-if="reportando" class="font-bold py-4">
          <h4 class="text-center">
            ⌛ Reportando proyecto, espere un momento.
          </h4>
          <button class="sr-only"></button>
        </div>
        <div v-else>
          <p v-if="isLoading">Cargando información</p>
          <div v-else class="text-sm">
            <ul class="space-y-1">
              <li v-for="(motivo, i) in motivos" :key="i">
                <InputCheckbox
                  @click="seleccionarMotivo(motivo.id)"
                  :active="motivosSeleccionados.includes(motivo.id)"
                  :label="motivo.nombre"
                />
              </li>
            </ul>
          </div>
        </div>

        <div v-if="!reportando" class="flex items-center justify-end gap-x-2">
          <button
            @click="open = !open"
            class="btn border border-slate-300 hover:bg-slate-50"
          >
            Cancelar
          </button>

          <button
            class="btn btn-rose text-white disabled:cursor-not-allowed disabled:bg-opacity-75"
            :disabled="habilitarBoton"
            @click="reportar"
          >
            Reportar
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import Dropdown from "../Util/Dropdown.vue";
import SecondaryButton from "../Button/SecondaryButton.vue";
import Modal from "../Util/Modal.vue";
import InputCheckbox from "../Input/InputCheckbox.vue";
import { FlagIcon, DotsVerticalIcon } from "@heroicons/vue/outline";
import { useUserStore } from "../../stores/useUser";
import useReporte from "../../composables/useReporte";
import { useRouter } from "vue-router";

export default {
  props: { id: Number, reportadores: Array },
  components: {
    Dropdown,
    SecondaryButton,
    Modal,
    InputCheckbox,
    FlagIcon,
    DotsVerticalIcon,
  },
  setup(props) {
    const router = useRouter();
    const { user } = useUserStore();
    const { getMotivos, reportarProyecto } = useReporte();
    const open = ref(false);
    const isLoading = ref(true);
    const reportando = ref(false);
    const reportado = ref(props.reportadores.includes(user.user_id));
    const motivos = ref([]);
    const motivosSeleccionados = ref([]);
    const mensaje = ref("Reportando a esa rata 🐀");

    const abrirReporte = () => {
      open.value = true;
      if (motivos.value.length === 0) {
        obtenerMotivos();
      }
    };

    const reportar = async () => {
      reportando.value = true;
      let response = await reportarProyecto(
        props.id,
        user.user_id,
        motivosSeleccionados.value
      );
      reportado.value = true;
      mensaje.value = response.mensaje;
      setTimeout(() => {
        if (response.respuesta) {
          router.push({ name: "Home" });
        } else {
          open.value = false;
        }
      }, 5000);
      reportando.value = false;
    };

    const obtenerMotivos = async () => {
      isLoading.value = true;
      let response = await getMotivos();
      motivos.value = response;
      isLoading.value = false;
    };

    const seleccionarMotivo = (id) => {
      motivosSeleccionados.value.includes(id)
        ? quitarMotivo(id)
        : agregarMotivo(id);
    };

    function agregarMotivo(elemento) {
      motivosSeleccionados.value.push(elemento);
    }

    function quitarMotivo(elemento) {
      motivosSeleccionados.value = motivosSeleccionados.value.filter(
        (value) => value !== elemento
      );
    }

    const habilitarBoton = computed(
      () => motivosSeleccionados.value.length < 1
    );

    return {
      abrirReporte,
      reportar,
      open,
      isLoading,
      reportando,
      motivos,
      motivosSeleccionados,
      seleccionarMotivo,
      habilitarBoton,
      reportado,
      mensaje,
    };
  },
};
</script>
