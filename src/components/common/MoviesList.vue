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
        <movie-card
          :movie="movie"
          @toggle-favorite="toggleFavorites(movie)"
          :is-favorite="getFavoritesIds.includes(movie.imdbID)"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { MovieType } from "@/types/movieType";
import MovieCard from "../common/movie-card/MovieCard.vue";
import { mapGetters, mapMutations } from "vuex";

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
  computed: {
    ...mapGetters("favorites", ["getFavoritesIds"]),
  },
  methods: {
    toggleFavorites(movie: MovieType) {
      this.getFavoritesIds.includes(movie.imdbID)
        ? this.REMOVE_FROM_FAVORITES(movie)
        : this.ADD_TO_FAVORITES(movie);
    },
    ...mapMutations("favorites", ["ADD_TO_FAVORITES", "REMOVE_FROM_FAVORITES"]),
  },
});
</script>
