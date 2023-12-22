<template>
  <v-card
    class="pa-0 d-inline-block rounded-b-xxl black pb-3 mb-2"
    height="540"
    :style="{ position: 'relative' }"
  >
    <favorite-button
      :style="{
        position: 'absolute',
        right: '-10px',
        top: '-10px',
        zIndex: '2',
      }"
      :checked="isFavorite"
      @toggle-check="toggleFavorite"
    />
    <div>
      <v-img :src="movie.poster" height="394" width="265">
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0 lighter-grey"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </div>
    <v-sheet
      height="100"
      width="265"
      class="py-2 px-0 d-flex flex-column justify-center align-center black"
    >
      <div
        class="text-body-1 text-uppercase font-weight-bold py-1 px-3 white--text rounded-md black"
        :title="movie.title"
      >
        {{ movie.title }}
      </div>
    </v-sheet>
    <movie-rating :value="rating" v-if="isFavorite" @input="emitRating" />
  </v-card>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { MovieType } from "@/types/movieType";
import FavoriteButton from "./FavoriteButton.vue";
import MovieRating from "./MovieRating.vue";

export default Vue.extend({
  components: {
    FavoriteButton,
    MovieRating,
  },
  props: {
    movie: {
      type: Object as PropType<MovieType>,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 5,
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite");
    },
    emitRating(rating: number) {
      this.$emit("set-rating", { rating });
    },
  },
});
</script>
