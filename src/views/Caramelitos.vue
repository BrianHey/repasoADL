<template>
<div>
  <div class="wrapper cartas px-5">
    <div class="row">
      <div class="col-md-3 " v-for="(curso, i) of cursos" :key="i">
        <b-card :title="curso.nombre" :img-src="curso.cover" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>

            <ul>

              <li v-for="(unidad, index) in curso.unidades" :key="index"> {{unidad.name}}</li>
            </ul>
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </div>
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
    ...mapState(["variable1", "user", "cursos"]),
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
    ...mapActions(["cambioValor", "llamarApi", "llamarCursos"]),
  },
  created() {
    this.llamarApi();
  },
  mounted() {
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
