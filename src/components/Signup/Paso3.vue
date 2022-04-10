<template>
  <div>
    <div class="space-y-4">
      <p class="text-slate-600 text-sm">
        Seleccione al menos 3 temas de su interes
      </p>

      <div v-for="(topico, i) in topicos" :key="i">
        <details :open="i < 2" class="appearance-none">
          <summary class="cursor-pointer font-bold text-slate-600 mb-2">
            {{ topico.area }}
          </summary>
          <div class="flex flex-wrap gap-3">
            <SignupTag
              @click="toggleTag(tag.id)"
              :active="datos.tags.includes(tag.id)"
              v-for="(tag, index) in topico.temas"
              :key="index"
              :tag="tag.tema"
            />
          </div>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import temasRecomendados from "../../hooks/temas-recomendados.json";
import SignupTag from "../Tag/SignupTag.vue";

export default {
  name: "Paso3",
  components: { SignupTag },
  setup() {
    const topicos = temasRecomendados;
    const datos = inject("datos");

    const toggleTag = (id) => {
      if (!datos.tags.includes(id)) {
        datos.tags.push(id);
      } else {
        datos.tags = datos.tags.filter(function (value) {
          return value !== id;
        });
      }
    };

    return { topicos, datos, toggleTag };
  },
};
</script>
