<template>
  <div class="space-y-4 w-full">
    <InputBasic
      :value="datos_contacto.correo"
      @emitInput="(v) => (datos_contacto.correo = v)"
      label="Correo Electrónico (*Opcional)"
      tipo="email"
      id="email"
    />
    <InputBasic
      :value="datos_contacto.telefono"
      @emitInput="(v) => (datos_contacto.telefono = v)"
      label="Teléfono (*Opcional)"
      tipo="text"
      limite="9"
      id="telefono"
    />
    <InputBasic
      :value="datos_contacto.linkedin"
      @emitInput="(v) => (datos_contacto.linkedin = v)"
      label="Linkedin (*Opcional)"
      tipo="text"
      id="linkedin"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import InputBasic from "../Input/InputBasic.vue";
export default {
  name: "Paso2",
  components: { InputBasic },
  setup() {
    const datos_contacto = inject("datos_contacto");

    return { datos_contacto };
  },
};
</script>
