<template>
  <div class="my-1 space-y-1 relative">
    <input
      :id="id"
      type="text"
      v-model="entrada"
      @keyup="filtrarTags"
      @keyup.enter="agregarTags"
      class="input-form"
      :placeholder="placeholder"
    />
    <div class="flex items-center flex-wrap space-x-4 mt-2">
      <ListaTags
        v-if="elementos.length"
        :tags="elementos"
        @removeTag="quitarTag"
      />
      <Transition name="error">
        <ErrorMessage
          v-if="elementos.length < 2"
          message="Indique al menos 2 palabras claves"
        />
      </Transition>
    </div>
    <ul
      v-if="tagsFiltrados.length"
      class="absolute top-9 rounded-lg shadow-lg bg-sky-900/30 px-3 py-2 backdrop-blur-md border border-sky-900 inline-flex flex-col"
    >
      <li v-for="(tag, i) in tagsFiltrados" :key="i">
        <button
          class="text-zinc-400 hover:text-zinc-300 transition-eio-300"
          @click="elegirTag(tag.nombre)"
        >
          {{ tag.nombre }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { XIcon } from "@heroicons/vue/outline";
import useArray from "../../composables/useArray";
import ErrorMessage from "../Util/ErrorMessage.vue";
import ListaTags from "../Tag/ListaTags.vue";
import Dropdown from "../Util/Dropdown.vue";
export default {
  name: "InputTags",
  props: {
    tipo: {
      type: String,
      default: "text",
    },
    id: String,
    placeholder: {
      type: String,
      default: "",
    },
    defaultTags: {
      type: Array,
      default: [],
    },
  },
  components: { XIcon, ErrorMessage, ListaTags, Dropdown },
  setup(props, { emit }) {
    const entrada = ref("");
    const tagsFiltrados = ref([]);
    const { elementos, agregarElemento, quitarElemento } = useArray();

    const agregarTags = () => {
      if (entrada.value.trim().length) {
        let tags = entrada.value.split(",");
        tags.forEach((tag) => {
          agregarElemento(tag);
        });
        emit("tags", elementos.value);
      }
      entrada.value = "";
      tagsFiltrados.value = [];
    };

    const filtrarTags = () => {
      if (entrada.value.trim().length > 2) {
        tagsFiltrados.value = props.defaultTags.filter((tag) =>
          tag.nombre.toLowerCase().includes(entrada.value.toLowerCase())
        );
      } else {
        tagsFiltrados.value = [];
      }
    };

    const elegirTag = (tag) => {
      entrada.value = tag;
      agregarTags();
      tagsFiltrados.value = [];
    };

    const quitarTag = (tag) => {
      quitarElemento(tag);
      emit("tags", elementos.value);
    };

    return {
      entrada,
      elementos,
      agregarElemento,
      quitarElemento,
      agregarTags,
      quitarTag,
      filtrarTags,
      tagsFiltrados,
      elegirTag,
    };
  },
};
</script>

<style scoped>
/* switch transitions */
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.switch-enter-active {
  transition: all 0.3s ease;
}
.switch-leave-active {
  transition: all 0.3s ease;
  position: absolute;
}

/* transition for error message */
.error-enter-active {
  transition: all 0.5s ease;
}
.error-leave-active {
  transition: all 0.3s ease;
}
.error-enter-from {
  transform: translateX(10px);
  opacity: 0;
}
.error-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
