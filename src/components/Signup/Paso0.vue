<template>
  <div class="grid grid-cols-3 gap-6">
    <div class="">
      <img
        src="https://i.ytimg.com/vi/8QbvwwUJ2nI/maxresdefault.jpg"
        alt="Fachada de la Unasam"
        class="object-cover w-full aspect-square rounded-lg"
      />
    </div>
    <div class="space-y-4 col-span-2">
      <form @submit.prevent="obtenerDatos" class="flex flex-col gap-y-4">
        <div class="space-y-1">
          <InputLabel for="dni">Ingresa tu Código Universitario:</InputLabel>
          <input
            type="text"
            id="dni"
            class="input-form"
            autocomplete="off"
            maxlength="12"
            minlength="12"
            required
            v-model="codigo"
            @focus="error = false"
          />
        </div>

        <button
          class="flex justify-center whitespace-nowrap btn bg-sky-200/40 hover:bg-zinc-200/60 transition-eio-300"
          type="submit"
        >
          <SearchIcon class="icon-5" />
          Buscar mis datos
        </button>
      </form>
    </div>

    <div class="col-span-3">
      <Transition name="msg">
        <div
          v-if="error"
          class="py-4 rounded-lg text-center bg-rose-200 dark:bg-rose-500/30"
        >
          <p class="text-xl text-rose-700 dark:text-rose-500 mb-2">¡¡😓Ups!!</p>
          <p class="text-sm text-zinc-700 dark:text-zinc-300 w-8/12 mx-auto">
            {{ mensaje }}
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import InputLabel from "../Input/InputLabel.vue";
import { SearchIcon } from "@heroicons/vue/outline";
import useUsuario from "../../composables/useUsuario";

export default {
  components: { InputLabel, SearchIcon },
  setup() {
    const codigo = ref("");
    const error = ref(false);
    const mensaje = ref("");
    const paso = inject("paso");
    const datos = inject("datos");
    const { verificaCodigo, buscaDatosEnOge } = useUsuario();

    const obtenerDatos = async () => {
      if (codigo.value.length !== 12) {
        return;
      }

      let existe = await verificaCodigo(codigo.value);

      if (existe) {
        mensaje.value = `Ya existe un usuario registrado con el Código Universitario ${codigo.value}`;
        error.value = true;
      } else {
        let datosOge = await buscaDatosEnOge(codigo.value);
        if ("id" in datosOge) {
          error.value = true;
          mensaje.value = `Parece que no existe ninguna información sobre algún estudiante con Código Universitario ${codigo.value}`;
        } else {
          datos.codigo = codigo.value;
          datos.apellidos = `${datosOge.apellido_paterno} ${datosOge.apellido_materno}`;
          datos.nombres = datosOge.nombres;
          datos.username = datosOge.correo_institucional
            ? datosOge.correo_institucional.split("@")[0].substring(0, 25)
            : null;
          datos.password = datosOge.dni;
          datos.correo = datosOge.correo_institucional;
          datos.telefono = datosOge.celular;
          paso.value = 1;
        }
      }

      setTimeout(() => {
        error.value = false;
      }, 3500);
    };

    return { codigo, error, mensaje, obtenerDatos };
  },
};
</script>

<style scoped>
.msg-enter-active {
  transition: all 0.5s ease;
}
.msg-leave-active {
  transition: all 1.5s ease;
}

.msg-enter-from,
.msg-leave-to {
  opacity: 0;
  scale: 0;
}
</style>
