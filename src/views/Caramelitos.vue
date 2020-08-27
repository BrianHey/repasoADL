<template>
<div>
  <h1>Soy un caramelito</h1>
  <h3>{{cambiarVariable1}}</h3>
  <button @click="cambioValor">Cambio de valor</button>

  <p v-for="(horoscopo, index) in horoscopos" :key="index">{{horoscopo.nombre}}</p>
  <div>
    <img :src="user.foto_url" alt="image">
</div>
<h4>Nombre: {{user.fullName}}</h4>
</div>
</template>

<script>
import {
  mapState,
  mapActions
} from "vuex";

export default {
  computed: {
    ...mapState(["variable1", "user", "horoscopos"]),
    cambiarVariable1() {
      return this.variable1 ? "1" : "2";
    },
  },
  methods: {
    ...mapActions(["cambioValor", "llamarApi", "llamarHoroscopos"]),
  },
  created() {
  this.llamarApi();
  },
  mounted(){
    this.llamarHoroscopos();
  },
};
</script>

<style lang="scss" scoped>
  img{
    border-radius: 1rem;
  }
</style>
