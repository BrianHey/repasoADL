<template>
  <div>
    <h1>Soy un caramelito</h1>
    <h3>{{variable1}}</h3>
    <button @click="cambioValor">Cambio de valor</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["variable1"]),
  },
  methods: {
    ...mapActions(["cambioValor"]),
  },
};
</script>
