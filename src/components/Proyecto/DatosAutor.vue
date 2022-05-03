<template>
  <div class="flex flex-col space-y-4 w-4/5 mx-auto items-center">
    <div class="flex flex-col items-center mt-1">
      <router-link
        :to="{
          name: 'UsuarioProyecto',
          params: {
            username: autor.usuario,
          },
        }"
        class="text-center leading-4 text-zinc-600 dark:text-zinc-400"
      >
        <div class="flex flex-col items-center">
          <img
            class="w-24 h-24 avatar"
            :src="avatar"
            :alt="'Avatar de ' + autor.estudiante.nombres"
          />
          <h3 class="font-bold mt-2">{{ autor.estudiante.apellidos }}</h3>
          <h4 class="font-light mt-1 text-sm">
            {{ autor.estudiante.nombres }}
          </h4>
        </div>
      </router-link>
    </div>

    <div class="w-full text-center text-sm space-y-2">
      <p class="text-zinc-800 dark:text-zinc-400 leading-4">
        {{ autor.estudiante.escuela.nombre }}
      </p>
      <p class="text-zinc-600 dark:text-zinc-500">
        ( {{ autor.estudiante.escuela.facultad_abrev }} )
      </p>
    </div>

    <div class="flex items-center justify-center gap-x-3">
      <RedSocialLink
        v-if="autor.estudiante.telefono"
        :href="'tel:' + autor.estudiante.telefono"
      >
        <PhoneIcon class="icon-5" />
      </RedSocialLink>
      <RedSocialLink
        v-if="autor.estudiante.correo"
        :href="'mailto:' + autor.estudiante.correo"
      >
        <MailIcon class="icon-5" />
      </RedSocialLink>
      <RedSocialLink
        v-if="autor.estudiante.linkedin"
        :href="autor.estudiante.linkedin"
      >
        <svg class="h-5 w-5" role="img" viewBox="0 0 24 24" fill="currentColor">
          <title>LinkedIn</title>
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </svg>
      </RedSocialLink>
    </div>
  </div>
</template>

<script>
import { PhoneIcon, MailIcon } from "@heroicons/vue/solid";
import RedSocialLink from "../Link/RedSocialLink.vue";
import { computed } from "@vue/reactivity";

export default {
  name: "DatosAutor",
  props: {
    autor: Object,
  },
  setup(props) {
    const avatar = computed(() => {
      return (
        props.autor.avatar ??
        "https://buster-darragh-major.github.io/res/Simpsons-Faces/1.png"
      );
    });
    return { avatar };
  },
  components: { PhoneIcon, MailIcon, RedSocialLink },
};
</script>
