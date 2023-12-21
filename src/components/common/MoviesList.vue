<template>
  <v-sheet>
    <v-row>
      <v-col
        v-for="movie in moviesList"
        :key="movie.imdbID"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
        class="text-center"
      >
        <movie-card :movie="movie" />
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { MovieType } from "@/types/movieType";
import MovieCard from "../common/MovieCard.vue";

export default Vue.extend({
  components: {
    MovieCard,
  },
  props: {
    moviesList: {
      type: Array as PropType<Array<MovieType>>,
      default: () => [],
    },
  },
});
</script>
