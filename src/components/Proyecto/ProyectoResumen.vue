<template>
  <div class="space-y-2">
    <h3 class="font-semibold text-zinc-400 dark:text-zinc-500">Resumen</h3>
    <div class="space-y-2 font-serif text-zinc-800 dark:text-zinc-400/90">
      <p
        class="leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-zinc-900 dark:first-letter:text-zinc-400 text-justify first-letter:mr-3 first-letter:float-left"
        v-html="resumen"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  props: { resumen: String },
};
</script>
