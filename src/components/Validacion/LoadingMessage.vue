<template>
  <div class="">
    <div class="w-full px-6 pt-8 pb-3 text-center">
      <h2 class="text-3xl animate-bounce">⌛</h2>
      <h3 class="text-lg text-zinc-900 dark:text-zinc-300 font-extrabold">
        {{ titulo }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: { titulo: { type: String, default: "Cargando..." } },
};
</script>
