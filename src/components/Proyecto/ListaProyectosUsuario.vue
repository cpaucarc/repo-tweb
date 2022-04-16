<template>
  <div>
    <SkeletonMisProyectos v-if="isLoading" />
    <div v-else>
      <div
        v-if="respuesta"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
      >
        <CardProyectoUsuario
          v-for="proyecto in proyectos"
          :key="proyecto.id"
          :proyecto="proyecto"
          :logeado="user.user_id"
        />
      </div>
      <div
        v-else
        class="rounded-lg w-full aspect-[16/4] grid place-items-center"
      >
        <div class="flex flex-col gap-1 items-center">
          <p class="text-4xl">😢</p>
          <p class="bg-rose-600 text-white px-3 py-1">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, ref, watch } from "vue";
import useProyecto from "../../composables/useProyecto";
import proyectosUsuario from "../../hooks/proyectos-usuario.json";
import { useUserStore } from "../../stores/useUser";
import CardProyectoUsuario from "../Card/CardProyectoUsuario.vue";
import SkeletonMisProyectos from "../Skeleton/SkeletonMisProyectos.vue";
export default {
  name: "ListaProyectosUsuario",
  props: { usuario: { type: String, required: true } },
  components: { CardProyectoUsuario, SkeletonMisProyectos },
  setup(props) {
    // const proyectos = proyectosUsuario;
    const { getUserProjects } = useProyecto();
    const isLoading = ref(true);
    const error = ref("");
    const respuesta = ref(false);
    const proyectos = ref([]);
    const search = inject("search");
    const { user } = useUserStore();

    onMounted(() => {
      getProjects();
    });

    watch(search, (value) => {
      getProjects();
    });

    const getProjects = async () => {
      isLoading.value = true;
      let response = await getUserProjects(props.usuario, search.value);
      if (response.respuesta) {
        proyectos.value = response.mensaje;
      } else {
        error.value = response.mensaje;
      }
      respuesta.value = response.respuesta;
      isLoading.value = false;
    };

    return { proyectos, error, respuesta, isLoading, search, user };
  },
};
</script>
