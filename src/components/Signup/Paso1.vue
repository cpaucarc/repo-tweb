<template>
  <div class="space-y-4 w-full">
    <div class="grid grid-cols-2 space-x-4">
      <InputBasic
        @emitInput="(v) => (datos_basicos.apellidos = v)"
        label="Apellidos"
        id="apellidos"
      />
      <InputBasic
        @emitInput="(v) => (datos_basicos.nombres = v)"
        label="Nombres"
        id="nombres"
      />
    </div>
    <SelectBasic
      label="Escuela"
      id="escuela"
      @emitInput="(v) => (datos_basicos.escuela_id = v)"
    >
      <option value="0">Selecciona</option>
      <option value="2">ABC</option>
      <option value="1">fvbf</option>
    </SelectBasic>
    <InputBasic
      @emitInput="(v) => (datos_basicos.username = v)"
      limite="25"
      label="Nombre de usuario"
      id="username"
    />
    <InputBasic
      @emitInput="(v) => (datos_basicos.password = v)"
      label="Contraseña"
      tipo="password"
      id="password"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import InputBasic from "../Input/InputBasic.vue";
import SelectBasic from "../Input/SelectBasic.vue";
export default {
  name: "Paso1",
  components: { InputBasic, SelectBasic },
  setup() {
    const datos_basicos = inject("datos_basicos");
    return { datos_basicos };
  },
};
</script>
