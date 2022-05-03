<template>
  <div class="py-3">
    <div
      class="bg-amber-100 dark:bg-amber-600/10 space-y-1 border-l-4 border-amber-500 dark:border-amber-600/80 text-amber-800 dark:text-amber-500 p-4 rounded-r-md"
      role="alert"
    >
      <div class="flex items-center gap-x-4">
        <ExclamationIcon class="icon-6" />
        <div>
          <p class="font-extrabold">¡¡Ten cuidado con este proyecto!!</p>
          <p class="text-sm">
            Hemos recibido reportes de que este proyecto puede estar
            infringiendo las normas de la comunidad.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ExclamationIcon } from "@heroicons/vue/outline";

export default {
  components: { ExclamationIcon },
};
</script>
