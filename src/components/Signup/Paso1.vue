<template>
  <div class="space-y-4 w-full">
    <div class="grid grid-cols-2 space-x-4">
      <InputForm>
        <InputLabel for="apellidos">Apellidos</InputLabel>
        <input
          type="text"
          id="apellidos"
          class="input-form"
          required
          v-model="datos.apellidos"
        />
      </InputForm>

      <InputForm>
        <InputLabel for="nombres">Nombres</InputLabel>
        <input
          type="text"
          id="nombres"
          class="input-form"
          required
          v-model="datos.nombres"
        />
      </InputForm>
    </div>

    <InputForm>
      <InputLabel for="escuela">Escuela</InputLabel>
      <select
        id="escuela"
        v-model="datos.escuela_id"
        class="cursor-pointer input-form"
      >
        <option value="0" class="dark:text-zinc-400 dark:bg-zinc-800">
          Seleccione su escuela
        </option>
        <option
          v-for="escuela in escuelas"
          class="dark:text-zinc-400 dark:bg-zinc-800"
          :value="escuela.id"
          :key="escuela.id"
        >
          {{ escuela.nombre }} ({{ escuela.abrev }})
        </option>
      </select>
    </InputForm>

    <InputForm>
      <div class="flex items-center justify-between">
        <InputLabel for="username">Nombre de usuario</InputLabel>
        <InputLabelSize limite="20" :texto="datos.username" />
      </div>
      <input
        type="text"
        id="username"
        maxlength="20"
        required
        class="input-form"
        v-model="datos.username"
      />
    </InputForm>

    <InputForm>
      <InputLabel for="password">Contraseña</InputLabel>
      <input
        type="password"
        id="password"
        required
        class="input-form"
        v-model="datos.password"
      />
    </InputForm>
  </div>
</template>

<script>
import { inject, watch } from "vue";
import escuelasData from "../../hooks/facultades.json";
import InputForm from "../Input/InputForm.vue";
import InputLabel from "../Input/InputLabel.vue";
import InputLabelSize from "../Input/InputLabelSize.vue";
export default {
  name: "Paso1",
  components: {
    InputForm,
    InputLabel,
    InputLabelSize,
  },
  setup() {
    const escuelas = escuelasData;
    const datos = inject("datos");

    watch(
      datos,
      (input) => {
        datos.username = input.username.replace(" ", "_");
        datos.correo = input.correo
          ? input.correo.length > 0
            ? input.correo
            : null
          : null;
        datos.telefono = input.telefono
          ? input.telefono.length > 0
            ? input.telefono
            : null
          : null;
        datos.linkedin = input.linkedin
          ? input.linkedin.length > 0
            ? input.linkedin
            : null
          : null;
      },
      { deep: true }
    );

    return { datos, escuelas };
  },
};
</script>
