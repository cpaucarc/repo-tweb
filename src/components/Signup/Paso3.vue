<template>
  <div>
    <div class="space-y-4">
      <div v-for="(topico, i) in topicos" :key="i">
        <details :open="i < 2" class="appearance-none">
          <summary class="cursor-pointer font-bold text-slate-900 mb-2">
            {{ topico.area }}
          </summary>
          <div class="flex flex-wrap gap-3">
            <SignupTag
              @click="toggleTag(tag.id)"
              :active="temas_interes.includes(tag.id)"
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
    const temas_interes = inject("temas_interes");

    const toggleTag = (id) => {
      if (!temas_interes.value.includes(id)) {
        temas_interes.value.push(id);
      } else {
        temas_interes.value = temas_interes.value.filter(function (value) {
          return value !== id;
        });
      }
    };

    return { topicos, temas_interes, toggleTag };
  },
};
</script>
