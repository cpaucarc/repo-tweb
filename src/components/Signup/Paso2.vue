<template>
  <div class="space-y-4 w-full">
    <InputForm>
      <InputLabel for="email">
        Correo Electrónico
        <OptionalAlert />
      </InputLabel>
      <input
        type="email"
        id="email"
        class="input-form"
        v-model="datos.correo"
      />
    </InputForm>

    <InputForm>
      <div class="flex items-center justify-between">
        <InputLabel for="telefono">
          N° de Telefono
          <OptionalAlert />
        </InputLabel>
        <InputLabelSize limite="9" :texto="datos.telefono" />
      </div>
      <input
        type="text"
        id="telefono"
        maxlength="9"
        class="input-form"
        v-model="datos.telefono"
      />
    </InputForm>

    <InputForm>
      <InputLabel for="linkedin">
        Linkedin
        <OptionalAlert />
      </InputLabel>
      <input
        type="url"
        id="linkedin"
        class="input-form"
        v-model="datos.linkedin"
      />
    </InputForm>
  </div>
</template>

<script>
import { inject } from "vue";
import InputBasic from "../Input/InputBasic.vue";
import InputForm from "../Input/InputForm.vue";
import InputLabel from "../Input/InputLabel.vue";
import InputLabelSize from "../Input/InputLabelSize.vue";
import OptionalAlert from "../Input/OptionalAlert.vue";
export default {
  name: "Paso2",
  components: {
    InputBasic,
    InputForm,
    InputLabel,
    InputLabelSize,
    OptionalAlert,
  },
  setup() {
    const datos = inject("datos");

    return { datos };
  },
};
</script>
