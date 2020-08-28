<template>
<div>
  <div class="wrapper cartas px-5">
    <div v-for=" (signo,i) of horoscopos" :key="i">
      <b-card no-body style="max-width: 20rem;" img-src="https://placekitten.com/380/200" img-alt="Image" img-top>
        <template v-slot:header>
          <h4 class="mb-0">Hello World</h4>
        </template>

        <b-card-body>
          <b-card-title>Card Title</b-card-title>
          <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </b-card-text>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>

        <b-card-body>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </b-card-body>

        <b-card-footer>This is a footer</b-card-footer>

        <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
      </b-card>
    </div>
  </div>
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
