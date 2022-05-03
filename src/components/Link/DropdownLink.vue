<template>
  <MenuItem v-slot="{ active }">
    <router-link
      :to="to"
      :class="[
        active
          ? 'bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300'
          : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400',
        'group flex items-center gap-x-1 w-full px-2 py-2 text-sm transition-eio-300',
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
