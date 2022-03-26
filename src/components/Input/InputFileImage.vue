<template>
  <input
    :id="id"
    type="file"
    accept="image/png, image/gif, image/jpeg"
    multiple
    @change="onChange"
    class="cursor-pointer focus:outline-none file:cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-400 hover:file:text-sky-600 hover:file:bg-sky-100 input-form"
  />
</template>

<script>
export default {
  name: "InputFile",
  props: {
    id: {
      type: String,
      default: Math.random().toString(36).slice(2),
    },
  },
  setup(props, { emit }) {
    const onChange = (e) => {
      emit("getImages", e.target.files);
    };

    return { onChange };
  },
};
</script>
