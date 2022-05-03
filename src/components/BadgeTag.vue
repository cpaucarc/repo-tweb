<template>
  <p
    class="text-sm select-none whitespace-nowrap inline-flex font-semibold bg-sky-100 text-sky-900 dark:bg-sky-500/10 dark:text-sky-600 px-4 py-1 rounded-md"
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
