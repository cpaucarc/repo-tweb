<template>
  <input class="input-form" :type="type" :maxlength="max" />
</template>

<script>
export default {
  name: "InputBasic",
  props: {
    type: {
      type: String,
      default: "text",
    },
    max: {
      type: String,
      default: "250",
    },
  },
};
</script>
