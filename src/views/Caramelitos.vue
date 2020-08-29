<template>
<<<<<<< HEAD
<div>
  <div class="pb-5">
    <input type="date" />
    <button class="btn btn-success">Mi signo</button>

    <h3>Respuesta</h3>
  </div>

  <div class="wrapper cursos px-5 pt-5">
    <h4>Cursos</h4>
    <div class="row">
      <div class="col-md-4" v-for="(curso, i) of cursos" :key="i">
        <b-card :title="curso.nombre" :img-src="curso.cover" img-alt="Image" img-top tag="article" style="max-width: 20rem" class="mb-2">
          <b-card-text> {{ curso.slug }} </b-card-text>
        </b-card>
      </div>
    </div>
  </div>

  <div class="wrapper cartas px-5 pt-5">
    <h4>Horoscopo Diario</h4>
    <div class="row">
      <div class="col-md-3" v-for="(signo, i) of horoscopos" :key="i">
        <b-card no-body style="max-width: 20rem" :img-src="imagenGenerica" img-alt="Image" img-top>
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
=======
  <div>
    <h1>holaaaa</h1>
    <div class="wrapper cartas px-5">
      <div class="row">
        <div class="col-md-3 " v-for="(curso, i) of cursos" :key="i">
          <b-card
            :title="curso.nombre"
            :img-src="curso.cover"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text> </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
>>>>>>> 6355648a8051826cee967502277dc83c6c46a6ad
      </div>
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
<<<<<<< HEAD
    ...mapState(["variable1", "user", "horoscopos", "cursos"]),
=======
    ...mapState(["variable1", "user", "cursos"]),
>>>>>>> 6355648a8051826cee967502277dc83c6c46a6ad
    cambiarVariable1() {
      return this.variable1 ? "1" : "2";
    },
  },
  data() {
    return {
      imagenGenerica:
        "https://estaticos.elperiodico.com/resources/jpg/8/2/signos-del-zodiaco-del-horoscopo-diario-1568735910628.jpg",
    };
  },
  methods: {
<<<<<<< HEAD
    ...mapActions(["cambioValor", "llamarApi", "llamarHoroscopos", "llamarCursos"]),
=======
    ...mapActions(["cambioValor", "llamarApi", "llamarCursos"]),
>>>>>>> 6355648a8051826cee967502277dc83c6c46a6ad
  },
  created() {
    this.llamarApi();
  },
  mounted() {
<<<<<<< HEAD
    this.llamarHoroscopos();
=======
>>>>>>> 6355648a8051826cee967502277dc83c6c46a6ad
    this.llamarCursos();
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 1rem;
}

.cursos .card {
  border: 1px solid red;
  height: 300px;
}
</style>
