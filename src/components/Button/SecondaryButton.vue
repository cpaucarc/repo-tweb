<template>
  <button
    class="flex items-center gap-x-1 px-3 py-1 rounded-md text-sm bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition ease-in-out duration-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SecondaryButton",
};
</script>
