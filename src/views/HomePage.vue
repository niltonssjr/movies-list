<template>
  <v-sheet>
    <v-sheet class="my-10 d-flex flex-column justify-start align-center">
      <div class="text-h3">Search for movies!</div>
    </v-sheet>
    <search-movies class="mb-10" />
    <MoviesList :movies-list="movies" />
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import MoviesList from "@/components/common/MoviesList.vue";
import SearchMovies from "@/components/page-components/home-page/SearchMovies.vue";

import { mapState, mapActions } from "vuex";

export default Vue.extend({
  components: {
    MoviesList,
    SearchMovies,
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
