<template>
  <div class="">
    <div class="w-full px-6 pt-4 text-center">
      <h2 class="text-4xl">😥</h2>
      <h3 class="text-lg text-zinc-900 dark:text-zinc-400 font-extrabold">
        {{ titulo }}
      </h3>
    </div>

    <div
      class="px-8 my-3 flex flex-col items-center text-zinc-600 dark:text-zinc-300"
    >
      <ul class="list-disc list-inside marker:text-rose-500">
        <li class="" v-for="(error, i) in errores">{{ error[0] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: { titulo: String, errores: Object },
};
</script>
