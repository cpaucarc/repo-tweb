<template>
  <div
    class="flex items-center space-x-1 font-medium selection:bg-rose-500 selection:text-slate-900 px-3 py-0.5 rounded-md bg-rose-500/10 text-rose-600 text-xs"
  >
    <ExclamationIcon class="icon-5" />
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
