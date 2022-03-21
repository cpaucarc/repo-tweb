<template>
  <div>
    <div class="space-y-4">
      <div v-for="(topico, i) in topicos" :key="i">
        <h1 class="font-bold text-slate-900 mb-1">{{ topico.area }}</h1>
        <div class="flex flex-wrap gap-2">
          <SignupTag
            @click="toggleTag(tag.id)"
            :active="temas_interes.includes(tag.id)"
            v-for="(tag, index) in topico.temas"
            :key="index"
            :tag="tag.tema"
          />
        </div>
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

    console.log(`Temas Default: ${temas_interes.value}`);

    const toggleTag = (id) => {
      console.log(`Id: ${id}`);
      console.log(`Temas: ${temas_interes.value}`);
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
