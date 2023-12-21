<template>
  <v-card class="pa-1 d-inline-block" :style="{ position: 'relative' }">
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
    <v-sheet>
      <v-img
        :src="movie.poster"
        lazy-src="https://placehold.co/300x500"
        height="394"
        width="265"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-sheet>
    <v-sheet
      height="100"
      class="pa-2 d-flex flex-column justify-center align-center"
    >
      <div class="text-body-1 text-uppercase font-weight-bold">
        {{ movie.title }}
      </div>
    </v-sheet>
  </v-card>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";
import { MovieType } from "@/types/movieType";
import FavoriteButton from "./FavoriteButton.vue";

export default Vue.extend({
  components: {
    FavoriteButton,
  },
  props: {
    movie: {
      type: Object as PropType<MovieType>,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite");
    },
  },
});
</script>
