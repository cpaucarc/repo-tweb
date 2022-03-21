<template>
  <div class="flex items-center space-x-1 text-rose-500 text-sm">
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
