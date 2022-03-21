<template>
  <MenuItem v-slot="{ active }">
    <router-link
      :to="to"
      :class="[
        active ? 'bg-slate-100 text-slate-800' : 'bg-white text-slate-600',
        'group flex items-center gap-x-1 w-full px-3 py-2 text-sm transition-eio-300',
      ]"
    >
      <slot />
    </router-link>
  </MenuItem>
</template>
<script>
import { MenuItem } from "@headlessui/vue";

export default {
  components: {
    MenuItem,
  },
  props: {
    to: [String, Object],
  },
};
</script>
