import { ref } from "vue";

export default function useArray() {
  const elementos = ref([]);

  // agregar un elemento al array
  function agregarElemento(elemento) {
    if (!elementos.value.includes(elemento)) {
      elementos.value.push(elemento);
    }
  }

  // quitar 1 elemento de una posicion arbitraria
  function quitarElemento(elemento) {
    elementos.value = elementos.value.filter(function (value, index, arr) {
      return value !== elemento;
    });
  }

  return { elementos, agregarElemento, quitarElemento };
}
