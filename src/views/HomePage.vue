<template>
  <div>
    <h2>Movies list</h2>
    <MoviesList :movies-list="movies" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MoviesList from "@/components/page-components/MoviesList.vue";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  components: {
    MoviesList,
  },
  computed: {
    ...mapState("movies", ["movies"]),
  },
  mounted() {
    this.listMovies();
  },
  methods: {
    ...mapActions("movies", ["actionListMovies"]),
    async listMovies() {
      this.actionListMovies();
    },
  },
});
</script>
