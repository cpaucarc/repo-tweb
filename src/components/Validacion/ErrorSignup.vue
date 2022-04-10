<template>
  <div class="">
    <div class="bg-rose-500 w-full p-2 text-center">
      <ExclamationCircleIcon class="h-10 w-10 mb-1 text-white mx-auto" />
      <h2 class="text-lg text-white font-extrabold">
        {{ titulo }}
      </h2>
    </div>

    <div class="px-6 my-6 text-slate-900">
      <ul class="list-disc list-inside marker:text-rose-500">
        <li class="" v-for="(error, i) in errores">{{ error[0] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
export default {
  components: { ExclamationCircleIcon },
  props: { titulo: String, errores: Object },
};
</script>
