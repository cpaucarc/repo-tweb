<template>
  <div class="space-y-2">
    <h3 class="font-semibold text-slate-400">Resumen</h3>
    <div class="space-y-2 font-serif text-slate-800">
      <p
        class="leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left"
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
