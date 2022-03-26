<template>
  <span
    class="px-2 py-1 rounded-lg text-sm cursor-pointer select-none text-slate-900 transition-eio-300"
    :class="
      active ? 'bg-sky-200 font-medium' : 'bg-slate-100 hover:bg-slate-200'
    "
  >
    {{ tag }}
  </span>
</template>
<script>
export default {
  name: "SignupTag",
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
    },
  },
};
</script>
