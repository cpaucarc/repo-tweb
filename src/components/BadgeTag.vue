<template>
  <p
    class="text-xs inline-flex font-medium bg-sky-100 text-sky-800 px-2 py-1 rounded-full"
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
