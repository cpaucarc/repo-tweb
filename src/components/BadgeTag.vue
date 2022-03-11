<template>
  <p
    class="text-xs inline-flex bg-blue-100 text-blue-600 font-semibold px-2 py-1 rounded-full"
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
