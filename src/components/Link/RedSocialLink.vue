<template>
  <a
    target="_blank"
    :href="href"
    rel="noopener noreferrer"
    class="h-10 w-10 cursor-pointer transition ease-in-out duration-300 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full grid place-items-center"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "RedSocialLink",
  props: {
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>
