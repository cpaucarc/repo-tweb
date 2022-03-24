<template>
  <div class="space-y-4 w-full">
    <div class="grid grid-cols-2 space-x-4">
      <InputBasic
        :value="datos_basicos.apellidos"
        @emitInput="(v) => (datos_basicos.apellidos = v)"
        label="Apellidos"
        id="apellidos"
      />
      <InputBasic
        :value="datos_basicos.nombres"
        @emitInput="(v) => (datos_basicos.nombres = v)"
        label="Nombres"
        id="nombres"
      />
    </div>

    <div class="my-1 space-y-1">
      <label class="text-slate-600 text-sm" for="escuela">Escuela</label>
      <select
        id="escuela"
        v-model="datos_basicos.escuela_id"
        class="cursor-pointer input-form"
      >
        <option value="0">Seleccione su escuela</option>
        <option
          v-for="escuela in escuelas"
          :value="escuela.id"
          :key="escuela.id"
        >
          {{ escuela.nombre }}
        </option>
      </select>
    </div>

    <InputBasic
      :value="datos_basicos.username"
      @emitInput="(v) => (datos_basicos.username = v)"
      limite="25"
      label="Nombre de usuario"
      id="username"
    />
    <InputBasic
      :value="datos_basicos.password"
      @emitInput="(v) => (datos_basicos.password = v)"
      label="Contraseña"
      tipo="password"
      id="password"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import escuelasData from "../../hooks/facultades.json";
import InputBasic from "../Input/InputBasic.vue";
export default {
  name: "Paso1",
  components: { InputBasic },
  setup() {
    const escuelas = escuelasData;
    const datos_basicos = inject("datos_basicos");
    return { datos_basicos, escuelas };
  },
};
</script>
