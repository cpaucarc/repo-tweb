<template>
  <button
    class="flex items-center gap-x-1 px-2 py-1 rounded-md text-sm text-slate-600 hover:text-slate-900 transition ease-in-out duration-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TertiaryButton",
};
</script>
