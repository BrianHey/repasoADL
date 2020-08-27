<template>
<div>
  <h1>Soy un caramelito</h1>
  <h3>{{cambiarVariable1}}</h3>
  <button @click="cambioValor">Cambio de valor</button>

  <p v-for="(horoscopo, index) in horoscopos" :key="index">{{horoscopo.nombre}}</p>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from "vuex";

export default {
  computed: {
    ...mapState(["variable1", "horoscopos"]),
    cambiarVariable1() {
      return this.variable1 ? "1" : "2";
    },
  },
  methods: {
    ...mapActions(["cambioValor", "llamarApi", "llamarHoroscopos"]),
  },
  created() {
    this.llamarHoroscopos();
  },
};
</script>
