<template>
  <div>
    <SkeletonMisProyectosAutor v-if="isLoading" />
    <div v-else>
      <div v-if="respuesta" class="inline-flex items-center gap-x-3">
        <img
          class="w-16 h-16 avatar"
          :src="userinfo.estudiante.avatar"
          alt="Avatar del autor"
        />
        <div class="text-sm text-slate-600">
          <h3 class="font-bold text-slate-900">
            {{ userinfo.estudiante.apellidos }},
            {{ userinfo.estudiante.nombres }}
          </h3>
          <h4 class="font-medium">
            {{ userinfo.estudiante.escuela.nombre }}
            <strong>({{ userinfo.estudiante.escuela.facultad_abrev }})</strong>
          </h4>
          <p>{{ userinfo.estudiante.proyecto_count }} proyectos publicados</p>
        </div>
        <div class="flex items-center space-x-1 text-slate-400">
          <RedSocialLink
            v-if="userinfo.estudiante.telefono"
            :href="'tel:' + userinfo.estudiante.telefono"
          >
            <PhoneIcon class="icon-5" />
          </RedSocialLink>
          <RedSocialLink
            v-if="userinfo.estudiante.correo"
            :href="'mailto:' + userinfo.estudiante.correo"
          >
            <MailIcon class="icon-5" />
          </RedSocialLink>
          <RedSocialLink
            v-if="userinfo.estudiante.linkedin"
            :href="userinfo.estudiante.linkedin"
          >
            <svg
              class="h-5 w-5"
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <title>LinkedIn</title>
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </RedSocialLink>
        </div>
      </div>
      <div v-else>{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import RedSocialLink from "../Link/RedSocialLink.vue";
import { PhoneIcon, MailIcon } from "@heroicons/vue/solid";
import useProyecto from "../../composables/useProyecto";
import SkeletonMisProyectosAutor from "../Skeleton/SkeletonMisProyectosAutor.vue";
export default {
  components: { RedSocialLink, PhoneIcon, MailIcon, SkeletonMisProyectosAutor },
  props: { usuario: { type: String, required: true } },
  setup(props) {
    const isLoading = ref(true);
    const respuesta = ref(false);
    const error = ref("");
    const userinfo = ref([]);
    const { getUserInfo } = useProyecto();

    onMounted(async () => {
      isLoading.value = true;
      let response = await getUserInfo(props.usuario);
      if (response.respuesta) {
        userinfo.value = response.mensaje;
      } else {
        error.value = response.mensaje;
      }
      respuesta.value = response.respuesta;
      isLoading.value = false;
    });

    return { isLoading, respuesta, error, userinfo };
  },
};
</script>
