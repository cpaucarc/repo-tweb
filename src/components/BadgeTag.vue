<template>
  <p
    class="text-xs select-none inline-flex font-semibold bg-sky-100 text-sky-800 px-2.5 py-1 rounded-md"
  >
    {{ tag }}
  </p>
</template>

<script>
export default {
  name: "BadgeTag",
  props: { tag: String },
};
</script>
