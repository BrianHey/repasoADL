<template>
  <div>
    <div class="wrapper cartas px-5">
      <div class="row">
        <div class="col-md-3 " v-for="(signo, i) of horoscopos" :key="i">
          <b-card no-body style="max-width: 20rem;" :img-src="imagenGenerica" img-alt="Image" img-top>
            <template v-slot:header>
              <h4 class="mb-0">{{ signo.nombre }}</h4>
            </template>

            <b-card-body>
              <b-card-title>Amor</b-card-title>
              <b-card-text>{{ signo.amor }}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Dinero</b-card-title>
              <b-card-text>{{ signo.dinero }}</b-card-text>
            </b-card-body>

            <b-list-group flush>
              <b-list-group-item>{{ signo.fechaSigno }}</b-list-group-item>
              <b-list-group-item>{{ signo.color }}</b-list-group-item>
              <b-list-group-item>Numero: {{ signo.numero }}</b-list-group-item>
            </b-list-group>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["variable1", "user", "horoscopos"]),
    cambiarVariable1() {
      return this.variable1 ? "1" : "2";
    },
  },
  data() {
    return {
      imagenGenerica: "https://estaticos.elperiodico.com/resources/jpg/8/2/signos-del-zodiaco-del-horoscopo-diario-1568735910628.jpg",
    };
  },
  methods: {
    ...mapActions(["cambioValor", "llamarApi", "llamarHoroscopos"]),
  },
  created() {
    this.llamarApi();
  },
  mounted() {
    this.llamarHoroscopos();
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 1rem;
}
</style>
