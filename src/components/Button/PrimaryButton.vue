<template>
  <button
    class="text-sm bg-amber-400 hover:bg-amber-500 inline-flex items-center gap-x-1 text-slate-800 font-semibold px-3 py-1 rounded-md transition ease-in-out duration-300"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
};
</script>
