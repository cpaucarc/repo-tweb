<template>
  <div class="w-full -mt-12 space-y-10">
    <LoginSeccionLogo />
    <LoginFormulario />
    <LoginSeccionSinCuenta />
  </div>
</template>

<script>
import LoginFormulario from "./LoginFormulario.vue";
import LoginSeccionSinCuenta from "./LoginSeccionSinCuenta.vue";
import LoginSeccionLogo from "./LoginSeccionLogo.vue";
export default {
  components: { LoginFormulario, LoginSeccionSinCuenta, LoginSeccionLogo },
};
</script>
