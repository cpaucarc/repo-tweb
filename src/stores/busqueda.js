import { defineStore } from "pinia";
import moment from "moment";

export const useBusquedaStore = defineStore({
  id: "busqueda",
  state: () => {
    return {
      search: "",
      inicio: moment().startOf("year").format("YYYY-MM-DD"),
      fin: moment().format("YYYY-MM-DD"),
      escuelas: [],
    };
  },
  actions: {
    setSearch(value) {
      this.search = value;
    },
    setInicio(value) {
      this.inicio = value;
    },
    setFin(value) {
      this.fin = value;
    },
    setEscuelas(value) {
      this.escuelas = value;
    },
  },
});
