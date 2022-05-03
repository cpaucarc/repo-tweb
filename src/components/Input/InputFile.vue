<template>
  <input
    :id="id"
    type="file"
    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, application/pdf"
    multiple
    @change="onChange"
    class="cursor-pointer focus:outline-none file:cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zinc-100 dark:file:bg-zinc-700 file:text-zinc-400 hover:file:text-sky-600 hover:file:bg-sky-100 dark:hover:file:text-sky-500 dark:hover:file:bg-sky-600/50 input-form"
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
      emit("getFiles", e.target.files);
    };

    return { onChange };
  },
};
</script>
