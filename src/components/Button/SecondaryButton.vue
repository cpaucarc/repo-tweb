<template>
  <button
    class="flex items-center px-2.5 py-1 rounded-md text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-eio-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SecondaryButton",
};
</script>
