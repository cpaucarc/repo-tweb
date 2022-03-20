<template>
  <div class="my-1 space-y-1 relative">
    <label class="text-slate-600 text-sm" v-if="label.length" :for="id">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="tipo"
      v-model="entrada"
      @keyup.enter="agregarTags"
      class="input-form"
      :placeholder="placeholder"
    />
    <div class="flex items-center flex-wrap space-x-4 mt-2">
      <div v-if="elementos.length">
        <ListaTags :tags="elementos" @removeTag="quitarTag" />
      </div>
      <transition name="error">
        <ErrorMessage
          v-if="elementos.length < 2"
          message="Indique al menos 2 palabras claves"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { XIcon } from "@heroicons/vue/outline";
import useArray from "../../composables/useArray";
import ErrorMessage from "../Util/ErrorMessage.vue";
import ListaTags from "../Tag/ListaTags.vue";
export default {
  name: "InputTags",
  props: {
    tipo: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      default: Math.random().toString(36).slice(2),
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  components: { XIcon, ErrorMessage, ListaTags },
  setup(props, { emit }) {
    const entrada = ref("");
    const { elementos, agregarElemento, quitarElemento } = useArray();

    const agregarTags = () => {
      let tags = entrada.value.split(",");
      tags.forEach((tag) => {
        agregarElemento(tag);
      });
      entrada.value = "";
      //   emitir el array de tags
    };

    const quitarTag = (tag) => {
      quitarElemento(tag);
      //   emitir el array de tags
    };

    return {
      entrada,
      elementos,
      agregarElemento,
      quitarElemento,
      agregarTags,
      quitarTag,
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
