<template>
  <p
    class="text-xs select-none whitespace-nowrap inline-flex font-semibold bg-sky-100 text-sky-900 px-3 py-1 rounded-lg"
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
