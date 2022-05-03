<template>
  <div class="flex flex-col items-center">
    <div
      class="w-24 h-24 p-4 bg-zinc-100 dark:bg-zinc-800/90 rounded-full grid place-items-center"
    >
      <img src="../../assets/repotweb-min.svg" alt="Logo" />
    </div>
    <h1 class="font-semibold text-lg text-zinc-900 dark:text-zinc-400">
      {{ titulo }}
    </h1>
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
