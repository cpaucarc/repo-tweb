<template>
  <div
    class="flex items-center space-x-1 font-medium selection:bg-rose-500 selection:text-zinc-900 px-3 py-0.5 rounded-md bg-rose-500/10 text-rose-600 text-sm"
  >
    <ExclamationIcon class="icon-6" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ExclamationIcon } from "@heroicons/vue/outline";
export default {
  name: "ErrorMessage",
  components: { ExclamationIcon },
  props: { message: String },
};
</script>
