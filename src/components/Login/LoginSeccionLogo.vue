<template>
  <div class="flex flex-col items-center">
    <div
      class="w-24 h-24 p-4 bg-slate-100 rounded-full grid place-items-center"
    >
      <img src="../../assets/repotweb-min.svg" alt="Logo" />
    </div>
    <h1 class="font-semibold text-lg text-slate-800">{{ titulo }}</h1>
  </div>
</template>

<script>
export default {
  name: "LoginSeccionLogo",
  props: {
    titulo: {
      type: String,
      default: "Bienvenido",
    },
  },
};
</script>
