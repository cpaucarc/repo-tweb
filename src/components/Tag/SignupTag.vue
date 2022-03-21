<template>
  <span
    class="px-2 py-1 rounded-md text-sm cursor-pointer select-none"
    :class="active ? 'bg-sky-400 text-slate-900' : 'bg-sky-100 text-sky-800'"
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
