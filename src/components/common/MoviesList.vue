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
          :is-favorite="getFavoritesIds.includes(movie.imdbID)"
          :rating="ratings[movie.imdbID] || 5"
          @toggle-favorite="toggleFavorites(movie)"
          @set-rating="setRating({ ...$event, imdbID: movie.imdbID })"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { MovieType } from "@/types/movieType";
import MovieCard from "../common/movie-card/MovieCard.vue";
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

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
    ...mapState("favorites", ["ratings"]),
    ...mapGetters("favorites", ["getFavoritesIds"]),
  },
  methods: {
    toggleFavorites(movie: MovieType) {
      this.getFavoritesIds.includes(movie.imdbID)
        ? this.actionRemoveFromFavorites({ movie })
        : this.actionAddToFavorites({ movie });
    },
    setRating({ imdbID, rating }: { imdbID: string; rating: number }) {
      this.SET_RATE({ imdbID, rating });
    },
    ...mapMutations("favorites", ["REMOVE_FROM_FAVORITES", "SET_RATE"]),
    ...mapActions("favorites", [
      "actionAddToFavorites",
      "actionRemoveFromFavorites",
    ]),
  },
});
</script>
